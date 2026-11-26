# TEXT TO PDF

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
![Dependencies: none](https://img.shields.io/badge/dependencies-none-brightgreen)

A small, dependency-free web app that turns a list of questions into a printable test paper (PDF).

## Features

- Add and delete questions with marks
- Live preview of the test paper
- Answer lines under every question
- One-click PDF via the browser's print dialog
- Works offline, no build step

## Usage

1. Open `index.html` in any modern browser.
2. Fill in the test title, student name and subject.
3. Add your questions and set the marks for each.
4. Click **Generate PDF** and choose *Save as PDF* in the print dialog.

## Project structure

```
TxtPDF/
├── index.html      page structure
├── style.css       screen + print styles
├── script.js       core logic
├── js/             optional feature scripts
├── docs/           usage guide, FAQ, architecture
└── examples/       sample questions and a sample test
```

## Roadmap

- [ ] Multiple-choice question type
- [ ] Save and load tests as JSON
- [ ] Optional answer key page
- [x] Dark mode for the editor

## Troubleshooting

- **The PDF is empty:** add at least one question before clicking *Generate PDF*.
- **Wrong paper size:** pick *A4* (or your size) in the print dialog and keep margins on *Default*.
- **Colours missing:** enable *Background graphics* in the print dialog.

More answers are in [docs/FAQ.md](docs/FAQ.md).

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) first.

## License

Released under the [MIT License](LICENSE).
