"use strict";

// Loads a test from a .json file created by "Export JSON".
(function () {
    const btn = document.getElementById("importBtn");
    const input = document.getElementById("importFile");

    if (!btn || !input) return;

    btn.addEventListener("click", function () {
        input.click();
    });

    input.addEventListener("change", function () {
        const file = input.files && input.files[0];

        if (!file) return;

        const reader = new FileReader();

        reader.onload = function () {
            try {
                const state = sanitizeState(JSON.parse(reader.result));

                if (!state) {
                    alert("That file is not a valid TxtPDF test.");
                    return;
                }

                applyState(state);
            } catch (e) {
                alert("Could not read that file. Is it valid JSON?");
            }
        };

        reader.readAsText(file);
        input.value = "";
    });
})();
