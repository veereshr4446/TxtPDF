# Architecture

TxtPDF is a static page with no build step.

| File | Purpose |
| --- | --- |
| `index.html` | Page structure: form, question list, live preview |
| `style.css` | Screen styles and the `@media print` rules that produce the PDF |
| `script.js` | Core logic: add / delete questions, update the preview, print |
| `js/*.js` | Small optional features, each in its own file |

## How the PDF is made

1. The editor (form + questions) and the preview live in the same page.
2. `updatePreview()` rebuilds the preview from the form values.
3. When the user clicks **Generate PDF**, `window.print()` runs.
4. The `@media print` rules hide the editor and leave only the preview, so "Save as PDF" captures just the paper.

## Safety

Question text is escaped with `escapeHTML()` before it is placed into the preview, which prevents HTML injection.
