"use strict";

// Shows how many questions are in the list.
(function () {
    const counter = document.getElementById("questionCounter");
    const list = document.getElementById("questions");

    if (!counter || !list) return;

    function render() {
        const n = list.querySelectorAll(".question").length;
        counter.textContent = n === 1 ? "1 question" : n + " questions";
    }

    new MutationObserver(render).observe(list, { childList: true });
    render();
})();
