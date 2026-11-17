"use strict";

let questionCount = 0;

// Add a new question
function addQuestion() {

    questionCount++;

    const questionsDiv = document.getElementById("questions");

    const question = document.createElement("div");

    question.className = "question";

    question.innerHTML = `
        <div class="question-header">
            <strong>Question ${questionCount}</strong>

            <button class="delete-btn" onclick="deleteQuestion(this)">
                Delete
            </button>
        </div>

        <textarea
            class="question-text"
            placeholder="Enter your question..."
            oninput="updatePreview()"
        ></textarea>

        <input
            type="number"
            class="marks"
            min="1"
            value="1"
            placeholder="Marks"
            oninput="updatePreview()"
        />
    `;

    questionsDiv.appendChild(question);

    updatePreview();
}


// Delete question
function deleteQuestion(button) {

    const question = button.closest(".question");

    const text = question.querySelector(".question-text").value.trim();

    if (text && !confirm("Delete this question?")) {
        return;
    }

    question.remove();

    renumberQuestions();

    updatePreview();
}


// Renumber questions after deletion
function renumberQuestions() {

    const questions = document.querySelectorAll(".question");

    questions.forEach((question, index) => {

        question.querySelector("strong").textContent =
            `Question ${index + 1}`;

    });

    questionCount = questions.length;
}


// Update PDF preview
function updatePreview() {

    const title =
        document.getElementById("testTitle").value ||
        "Test Title";

    const name =
        document.getElementById("studentName").value ||
        "________________";

    const subject =
        document.getElementById("subject").value ||
        "________________";

    document.getElementById("previewTitle").textContent = title;

    // The browser uses the page title as the default PDF file name
    document.title =
        title === "Test Title" ? "Test PDF Creator" : title;

    document.getElementById("previewName").textContent = name;

    document.getElementById("previewSubject").textContent = subject;


    const questions =
        document.querySelectorAll(".question");

    const preview =
        document.getElementById("previewQuestions");

    preview.innerHTML = "";

    let totalMarks = 0;

    questions.forEach((question, index) => {

        const text =
            question.querySelector(".question-text").value ||
            "Question text";

        const marks = Math.max(
            1,
            parseInt(question.querySelector(".marks").value, 10) || 1
        );

        totalMarks += Number(marks) || 0;

        const questionElement =
            document.createElement("div");

        questionElement.className =
            "preview-question";

        questionElement.innerHTML = `
            <div class="preview-question-number">
                ${index + 1}. ${escapeHTML(text)}
                <span style="float:right;">
                    [${marks} marks]
                </span>
            </div>

            <div class="answer-line"></div>
            <div class="answer-line"></div>
            <div class="answer-line"></div>
        `;

        preview.appendChild(questionElement);
    });

    document.getElementById("previewTotal").textContent = totalMarks;
}


// Prevent HTML injection in preview
function escapeHTML(text) {

    const div = document.createElement("div");

    div.textContent = text;

    return div.innerHTML;
}


// Generate PDF
function generatePDF() {

    if (!document.querySelector(".question")) {
        alert("Add at least one question first.");
        return;
    }

    updatePreview();

    window.print();
}


// Update preview whenever basic information changes
document
    .getElementById("testTitle")
    .addEventListener("input", updatePreview);

document
    .getElementById("studentName")
    .addEventListener("input", updatePreview);

document
    .getElementById("subject")
    .addEventListener("input", updatePreview);


// Add first question automatically
addQuestion();

