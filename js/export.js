"use strict";

// Downloads the current test as a .json file.
(function () {
    const btn = document.getElementById("exportBtn");

    if (!btn) return;

    btn.addEventListener("click", function () {
        const data = JSON.stringify(collectState(), null, 2);
        const blob = new Blob([data], { type: "application/json" });
        const url = URL.createObjectURL(blob);

        const title = document.getElementById("testTitle").value || "test";
        const slug =
            title
                .trim()
                .replace(/[^a-z0-9]+/gi, "-")
                .replace(/^-+|-+$/g, "")
                .toLowerCase() || "test";

        const link = document.createElement("a");
        link.href = url;
        link.download = slug + ".json";

        document.body.appendChild(link);
        link.click();
        link.remove();

        URL.revokeObjectURL(url);
    });
})();
