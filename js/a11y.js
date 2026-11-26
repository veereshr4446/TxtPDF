"use strict";

// Gives every question's controls an accessible name for screen readers.
(function () {
    const list = document.getElementById("questions");

    if (!list) return;

    function label() {
        list.querySelectorAll(".question").forEach(function (q, i) {
            const n = i + 1;
            const text = q.querySelector(".question-text");
            const marks = q.querySelector(".marks");
            const del = q.querySelector(".delete-btn");

            if (text) text.setAttribute("aria-label", "Text for question " + n);
            if (marks) marks.setAttribute("aria-label", "Marks for question " + n);
            if (del) del.setAttribute("aria-label", "Delete question " + n);
        });
    }

    new MutationObserver(label).observe(list, { childList: true });
    label();
})();
