"use strict";

// Autosaves the current test in this browser (localStorage).
const DRAFT_KEY = "txtpdf-draft";

// Reads the whole form into a plain object.
function collectState() {
    return {
        title: document.getElementById("testTitle").value,
        student: document.getElementById("studentName").value,
        subject: document.getElementById("subject").value,
        questions: Array.from(document.querySelectorAll(".question")).map(function (q) {
            return {
                text: q.querySelector(".question-text").value,
                marks: parseInt(q.querySelector(".marks").value, 10) || 1
            };
        })
    };
}

function saveDraft() {
    try {
        localStorage.setItem(DRAFT_KEY, JSON.stringify(collectState()));
    } catch (e) {
        // Storage can be blocked (private mode); the app still works without it.
    }
}

document.addEventListener("input", saveDraft);

new MutationObserver(saveDraft).observe(document.getElementById("questions"), {
    childList: true
});

// Fills the form from a state object (used for restoring and importing).
function applyState(state) {
    document.getElementById("testTitle").value = state.title || "";
    document.getElementById("studentName").value = state.student || "";
    document.getElementById("subject").value = state.subject || "";

    const list = document.getElementById("questions");
    list.innerHTML = "";
    questionCount = 0;

    const items =
        Array.isArray(state.questions) && state.questions.length
            ? state.questions
            : [{ text: "", marks: 1 }];

    items.forEach(function (item) {
        addQuestion();

        const q = list.lastElementChild;
        q.querySelector(".question-text").value = item.text || "";
        q.querySelector(".marks").value = item.marks || 1;
    });

    updatePreview();
}

function restoreDraft() {
    try {
        const raw = localStorage.getItem(DRAFT_KEY);

        if (raw) applyState(JSON.parse(raw));
    } catch (e) {
        // Ignore a corrupted draft and start fresh.
    }
}

restoreDraft();
