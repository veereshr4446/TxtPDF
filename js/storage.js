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
