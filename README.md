<!-- @format -->

# rizkaluthfiani.com

Personal site for **Rizka Luthfiani Fakhriah** — Product Owner / Project Manager.

🌐 **Live:** [rizkaluthfiani.com](https://rizkaluthfiani.com)

---

## Stack

- Next.js 16 (App Router), static pages, no client JS on the homepage
- Plain CSS (`app/globals.css`) + one CSS module for `/resume`
- Fonts via `next/font`: Bricolage Grotesque, Geist, Geist Mono

---

## Editing content

All copy lives in [`lib/content.ts`](./lib/content.ts) — roles, case studies,
toolkit, education, certifications. The homepage and `/resume` both read from it.

## Resume PDF

`/resume` is a print-ready A4 page. To regenerate the PDF after editing content:

```bash
npm run dev -- -p 3017
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new \
  --no-pdf-header-footer --print-to-pdf=public/Rizka-Luthfiani-Resume.pdf \
  http://localhost:3017/resume
```

Keep it to one page (check with any PDF viewer).

---

## Deployment

Push to GitHub and connect to [Vercel](https://vercel.com) — Next.js is detected automatically.

```bash
npm run build   # Verify build before deploying
```

---

## Contact

📧 hi.rizkaluthfiani@gmail.com  
🔗 [linkedin.com/in/rizka-luthfiani](https://www.linkedin.com/in/rizka-luthfiani/)  
🐙 [github.com/rizkaluthfiani](https://github.com/rizkaluthfiani)
