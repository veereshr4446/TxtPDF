"use strict";

// Adds a Duplicate button to every question.
(function () {
    const list = document.getElementById("questions");

    if (!list) return;

    function addButtons() {
        list.querySelectorAll(".question-header").forEach(function (header) {
            if (header.querySelector(".dup-btn")) return;

            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "dup-btn";
            btn.textContent = "Duplicate";

            header.insertBefore(btn, header.querySelector(".delete-btn"));
        });
    }

    list.addEventListener("click", function (e) {
        const btn = e.target.closest(".dup-btn");

        if (!btn) return;

        const source = btn.closest(".question");
        const text = source.querySelector(".question-text").value;
        const marks = source.querySelector(".marks").value;

        addQuestion();

        const copy = list.lastElementChild;
        copy.querySelector(".question-text").value = text;
        copy.querySelector(".marks").value = marks;

        updatePreview();
    });

    new MutationObserver(addButtons).observe(list, { childList: true });
    addButtons();
})();
