"use strict";

// Keeps the marks for each question between 1 and 100.
(function () {
    const MIN = 1;
    const MAX = 100;
    const list = document.getElementById("questions");

    if (!list) return;

    function clamp(input) {
        const value = parseInt(input.value, 10);

        if (value > MAX) {
            input.value = MAX;
            updatePreview();
        }
    }

    list.addEventListener("input", function (e) {
        if (e.target.classList.contains("marks")) clamp(e.target);
    });

    list.addEventListener("change", function (e) {
        if (!e.target.classList.contains("marks")) return;

        const value = parseInt(e.target.value, 10);

        if (!(value >= MIN)) {
            e.target.value = MIN;
            updatePreview();
        }
    });
})();
