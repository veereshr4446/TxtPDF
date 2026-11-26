"use strict";

// Ctrl/Cmd + Enter adds a new question and focuses its text box.
document.addEventListener("keydown", function (e) {
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        e.preventDefault();

        addQuestion();

        const boxes = document.querySelectorAll(".question-text");

        if (boxes.length) {
            boxes[boxes.length - 1].focus();
        }
    }
});
