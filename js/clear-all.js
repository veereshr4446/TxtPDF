"use strict";

// Removes every question and starts again with one empty question.
(function () {
    const btn = document.getElementById("clearAllBtn");

    if (!btn) return;

    btn.addEventListener("click", function () {
        const questions = document.querySelectorAll(".question");

        const hasText = Array.from(questions).some(function (q) {
            return q.querySelector(".question-text").value.trim() !== "";
        });

        if (hasText && !confirm("Remove all questions?")) return;

        document.getElementById("questions").innerHTML = "";
        questionCount = 0;
        addQuestion();
    });
})();
