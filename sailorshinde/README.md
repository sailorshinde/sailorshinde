# Sailor Shinde — sailorshinde.com

Next.js website for Gaurav Shinde's sailing journey.
Racing Lake Ontario 2026 → Sailing solo Toronto to Mumbai 2027.

---

## 🚀 Deploying to GitHub + Vercel (step by step)

### Step 1 — Install Node.js
Download from https://nodejs.org (LTS version). Install it.

### Step 2 — Create a GitHub account
Go to https://github.com and sign up if you haven't already.

### Step 3 — Create a new GitHub repository
1. Click the **+** button → **New repository**
2. Name it: `sailorshinde`
3. Set to **Public**
4. Do NOT add README or .gitignore (we have them)
5. Click **Create repository**

### Step 4 — Push this project to GitHub
Open Terminal (Mac) or Command Prompt (Windows) in this folder:

```bash
git init
git add .
git commit -m "Initial commit — Sailor Shinde website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/sailorshinde.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

### Step 5 — Deploy on Vercel
1. Go to https://vercel.com and sign up with your GitHub account
2. Click **Add New Project**
3. Import the `sailorshinde` repository
4. Leave all settings as default
5. Click **Deploy**

✅ Your site is now live at `sailorshinde.vercel.app`

---

## 🌐 Connecting your domain (sailorshinde.com)

Once you've purchased sailorshinde.com:

1. In Vercel → your project → **Settings** → **Domains**
2. Add `sailorshinde.com`
3. Vercel will show you DNS records to add
4. Go to your domain registrar (GoDaddy / Namecheap / Google Domains)
5. Add the DNS records Vercel shows you
6. Wait 10–60 minutes for DNS to propagate

Done — your site is live at sailorshinde.com ✅

---

## 📸 Adding your photos

Drop your photos into the `/public/images/` folder:

| File | Used in |
|------|---------|
| `Gaurav_S-9.jpg` | Hero background + photo strip |
| `DSC07663_DxO.jpeg` | About section portrait |
| `DSC07451_DxO.jpeg` | Photo strip slot 3 |
| `Gaurav_S-6.jpg` | Photo strip slot 4 |
| `Gaurav_S-11.jpg` | Boat section (optional) |
| `remove_orange_rope_DxO.jpeg` | Additional strip photo |
| `DSC07364_DxO.jpeg` | Credentials section (optional) |
| `Gaurav_S-10.jpg` | Additional use |

Then push to GitHub — Vercel auto-deploys in ~30 seconds.

```bash
git add .
git commit -m "Add photos"
git push
```

---

## ✏️ Editing content

### Change any text
Open the relevant file and edit directly:

- **Homepage** → `app/page.jsx`
- **The Voyage** → `app/the-voyage/page.jsx`
- **Speaking** → `app/speaking/page.jsx`
- **Blog** → `app/blog/page.jsx`

Save → push to GitHub → live in 30 seconds.

### Add a blog post
1. Create a new file: `app/blog/your-post-title/page.jsx`
2. Copy the structure from an existing post page
3. Write your content
4. Add it to the `POSTS` array in `app/blog/page.jsx`
5. Push to GitHub

### Update the race/cruise calendar
Open `app/page.jsx` and find the arrays near the top of the Season section.
Each entry is just an object with `date`, `event`, `route`, and `type`.

### Update social links / Patreon / Amazon links
Search for `href="#"` in `app/page.jsx` — those are all the placeholders.
Replace `#` with your real URLs.

---

## 🛠 Running locally (to preview before pushing)

```bash
npm install
npm run dev
```

Open http://localhost:3000

---

## 📁 Project structure

```
sailorshinde/
├── app/
│   ├── layout.jsx          ← Nav + Footer wrapper (shared)
│   ├── page.jsx            ← Homepage
│   ├── page.module.css     ← Homepage styles
│   ├── the-voyage/         ← The Voyage page
│   ├── speaking/           ← Speaking page
│   └── blog/               ← Blog index + posts
├── components/
│   ├── Nav.jsx             ← Navigation
│   ├── Nav.module.css
│   ├── Footer.jsx          ← Footer
│   ├── Footer.module.css
│   ├── Countdown.jsx       ← Live departure countdown
│   └── Countdown.module.css
├── public/
│   └── images/             ← DROP YOUR PHOTOS HERE
├── styles/
│   └── globals.css         ← Design tokens + shared styles
├── package.json
└── next.config.js
```

---

## 🔗 Important links (update when ready)

| Platform | URL | Status |
|----------|-----|--------|
| YouTube | https://youtube.com/@sailorshinde | ✅ Live |
| Instagram EN | https://instagram.com/sailorshinde_ | ✅ Live |
| Instagram Marathi | https://instagram.com/sailorshindemarathi | ✅ Live |
| Patreon | — | 🔜 To create |
| Amazon CA affiliate | — | 🔜 To create |
| Amazon US affiliate | — | 🔜 To create |
| Amazon India affiliate | — | 🔜 To create |
| Buy Me a Coffee | — | 🔜 To create |

---

Built with Next.js 14 · Deployed on Vercel · © 2026 Sailor Shinde
