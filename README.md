# BailBridge Document Engine

The standalone PDF drafting core extracted from the BailBridge / Namma Nyaya Agent platform. No React, no UI — pure document generation logic that runs in Node.js.

Generates court-ready legal document drafts for the sample case **State of Karnataka vs. Ramesh Kumar Sharma (FIR No. 0442/2026)**.

---

## Documents Generated

| ID | Document | Legal Basis |
|---|---|---|
| `bail-application` | Regular Bail Application | BNSS Sec. 480 |
| `fir-request` | FIR Certified Copy Request | BNSS Sec. 173(2) + Police Act Sec. 50A |
| `dlsa-application` | DLSA Free Legal Aid Application | Legal Services Authorities Act, Sec. 12 |
| `memo-of-protest` | Memorandum of Protest | BNSS Sec. 175 + D.K. Basu (1997) 1 SCC 416 |

---

## Setup

```bash
npm install
```

## Usage

```bash
# Generate all 4 documents
node index.js

# Generate a specific document
node index.js bail-application
node index.js fir-request
node index.js dlsa-application
node index.js memo-of-protest
```

PDFs are saved to `./output/`.

---

## Project Structure

```
BailBridge_DocEngine/
├── index.js                      # Entry point — runs generators, writes PDFs
├── case-profile.js               # Case data (swap these fields for a new case)
├── pdf-builder.js                # jsPDF wrapper with layout helpers
├── generators/
│   ├── bail-application.js       # Template 1
│   ├── fir-request.js            # Template 2
│   ├── dlsa-application.js       # Template 3
│   └── memo-of-protest.js        # Template 4
└── package.json
```

---

## Adapting for a New Case

Edit **`case-profile.js`** only. All 4 generators read from the `C` object — change the values once and every document updates automatically.

```js
export const C = {
  accusedName:   'Your Client Name',
  firNo:         '0123/2026',
  policeStation: 'Your Police Station',
  sections:      'Sections X and Y of BNS, 2023',
  // ... etc
};
```

---

## Adding a New Document Template

1. Create `generators/your-template.js`
2. Import `makePDF` and `C`
3. Use the builder helpers: `b.center()`, `b.left()`, `b.right()`, `b.hr()`, `b.sp()`, `b.check()`
4. Return `{ bytes: b.build(), filename: 'YourDoc.pdf' }`
5. Register it in `index.js`

---

**Disclaimer:** All generated documents are drafts for advocate review. Not for submission to court without verification by a qualified legal professional.
