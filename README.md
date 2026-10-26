# Tervolio Technologies Website

A responsive marketing website built with **React** and **Vite**. It needs no paid services to run or deploy.

## 1. What you need (one time)

Install **Node.js LTS** from https://nodejs.org (accept the defaults). Then open **PowerShell** and check:

```powershell
node -v
npm -v
```

Both should print version numbers. Node 18 or newer is required.

## 2. Run it on your Windows laptop

1. Unzip the project and open the folder in PowerShell. Example:
   ```powershell
   cd $HOME\Downloads\tervolio
   ```
2. Install dependencies (first time only, takes a minute):
   ```powershell
   npm install
   ```
3. Start the development server:
   ```powershell
   npm run dev
   ```
4. Open the address it prints (usually http://localhost:5173). Press `Ctrl + C` in PowerShell to stop.

If PowerShell blocks `npm` with a script-policy error, run `npm.cmd install` and `npm.cmd run dev` instead.

## 3. Build for production

```powershell
npm run build
```

This creates a `dist` folder containing the finished website. To preview it locally:

```powershell
npm run preview
```

## 4. Deploy (free options)

**Netlify (easiest, no account setup tools needed)**
1. Run `npm run build`.
2. Go to https://app.netlify.com/drop and drag the `dist` folder onto the page.

**Vercel or Netlify from GitHub**
1. Put the project in a GitHub repository (the `.gitignore` already skips `node_modules` and `.env`).
2. Import the repository on Vercel or Netlify.
3. Build command: `npm run build`. Output folder: `dist`.
4. Add your `VITE_...` variables in the host's "Environment variables" settings.

**GitHub Pages**: build, then publish the contents of `dist`. The project already uses relative paths, so it works in a sub-folder.

## 5. Make the contact form really send messages

The form validates input, but the site has no backend. Until you connect a service, it says clearly that nothing was sent.

1. Create a free form at https://formspree.io (or any service that accepts a JSON POST).
2. Copy `.env.example` to `.env`:
   ```powershell
   Copy-Item .env.example .env
   ```
3. Put your form URL in `VITE_FORM_ENDPOINT=`.
4. Restart `npm run dev`, and set the same variable on your hosting provider.

Optional: `VITE_CONTACT_EMAIL` adds a "write to us" email link. `VITE_LINKEDIN_URL`, `VITE_GITHUB_URL`, `VITE_X_URL` and `VITE_INSTAGRAM_URL` show footer social links; a link only appears when its URL is set.

**Security:** variables starting with `VITE_` are public in the browser. Never put passwords or secret API keys in them. Secrets need a server.

## 6. Where to edit things

| What | File |
| --- | --- |
| Text, services, projects, process steps | `src/data/content.js` |
| Colours and fonts | top of `src/styles/global.css` (`:root`) |
| A section's layout | `src/components/<Section>.jsx` |
| Page title and SEO tags | `index.html` |
| Favicon | `public/favicon.svg` |

## Project structure

```
index.html
src/
  main.jsx            starts React
  App.jsx             puts the sections together
  components/         Navbar, Hero, Services, Projects, About, Process, Contact, Footer, Logo
  data/content.js     all website text
  styles/global.css   all styling
public/favicon.svg
```

Fonts (Bricolage Grotesque, Figtree) load from Google Fonts; if offline, the site falls back to system fonts.
