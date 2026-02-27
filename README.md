<!-- @format -->

# rizkaluthfiani.com

Personal portfolio website for **Rizka Luthfiani Fakhriah** — Project Manager, Product Owner, and aspiring Data Engineer.

🌐 **Live:** [rizkaluthfiani.com](https://rizkaluthfiani.com)

---

## Stack

- **Framework** — [Next.js 14](https://nextjs.org) (App Router)
- **Styling** — Vanilla CSS with CSS Modules
- **Icons** — [Lucide React](https://lucide.dev)
- **Fonts** — [DM Serif Display](https://fonts.google.com/specimen/DM+Serif+Display) + [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts)

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Resume

The downloadable resume PDF lives at [`public/Rizka-Luthfiani-Resume.pdf`](./public/Rizka-Luthfiani-Resume.pdf).  
To update it, replace the file at that path and rebuild.

---

## Project Structure

```
app/
  globals.css       # Design system tokens & animations
  layout.tsx        # Root layout + SEO metadata
  page.tsx          # Page assembly

components/
  Navbar            # Sticky nav with mobile menu
  Hero              # Typewriter hero + CTAs
  About             # Bio + stat cards
  Experience        # Vertical role timeline
  Skills            # Progress bars for PM & Data skills
  Projects          # Portfolio card grid (7 projects)
  Education         # Degree + certifications
  Contact           # Contact links

public/
  Rizka-Luthfiani-Resume.pdf
```

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
