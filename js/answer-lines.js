"use strict";

// Lets the teacher choose how many answer lines appear under each question.
(function () {
    const select = document.getElementById("answerLines");
    const preview = document.getElementById("previewQuestions");

    if (!select || !preview) return;

    function apply() {
        const wanted = parseInt(select.value, 10) || 3;

        preview.querySelectorAll(".preview-question").forEach(function (q) {
            const lines = q.querySelectorAll(".answer-line");

            for (let i = lines.length; i < wanted; i++) {
                const line = document.createElement("div");
                line.className = "answer-line";
                q.appendChild(line);
            }

            for (let i = lines.length; i > wanted; i--) {
                q.removeChild(lines[i - 1]);
            }
        });
    }

    // The preview is rebuilt on every change, so re-apply after each rebuild.
    new MutationObserver(apply).observe(preview, { childList: true });

    select.addEventListener("change", function () {
        updatePreview();
        apply();
    });

    apply();
})();
