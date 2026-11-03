# Study Network

**Tagline:** Redefining Student Needs, Piece by Piece.

A responsive, static student utility homepage designed for Panjab University students.

## Included
- Responsive homepage with premium navy / blue visual identity
- Searchable student tool cards
- Live links to the existing Semester 1 and Semester 3 DateSheet generators
- Clearly labelled upcoming utilities
- About Us page
- Feedback page that prepares an email for the student to review and send
- No framework, build process, database, or server required

## Existing DateSheet integrations
- Semester 1: https://akwebdev2025.github.io/Datesheet.v2/
- Semester 3: https://akwebdev2025.github.io/Datesheet.v3/

## Deploy with GitHub Pages
1. Upload the contents of this folder to the root of the `Study-Network` repository.
2. Open **Settings → Pages** in GitHub.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Select branch `main` and folder `/ (root)`, then save.
5. Wait for GitHub Pages to publish the site.

## Important notes
- The feedback page uses a `mailto:` link. It does not store or transmit submissions to a database.
- Cards labelled **Coming soon** are placeholders, not working tools yet.
- The email address used by the feedback page is `studynetwork.anetwork4u@gmail.com`. Change it in `pages/feedback.html` if needed.
- Google Fonts are optional enhancements; the site falls back to system sans-serif fonts if they are unavailable.

## Project structure
```text
Study-Network/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
│   └── logo/
│       └── study-network-mark.svg
├── pages/
│   ├── about.html
│   └── feedback.html
└── README.md
```
