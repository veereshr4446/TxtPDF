"use strict";

// Cleans up data loaded from a JSON file so bad input cannot break the app.
function sanitizeState(raw) {
    if (!raw || typeof raw !== "object" || !Array.isArray(raw.questions)) {
        return null;
    }

    const clean = {
        title: String(raw.title || "").slice(0, 200),
        student: String(raw.student || "").slice(0, 200),
        subject: String(raw.subject || "").slice(0, 200),
        questions: []
    };

    raw.questions.slice(0, 200).forEach(function (item) {
        if (!item || typeof item !== "object") return;

        const marks = Math.min(100, Math.max(1, parseInt(item.marks, 10) || 1));

        clean.questions.push({
            text: String(item.text || "").slice(0, 2000),
            marks: marks
        });
    });

    return clean;
}
