# 3DMAS Website — Complete Dev Guide

**Stack:** React + Vite (client) · Express + MongoDB (server) · Tailwind CSS v4 · Barlow font

---

## Project Structure

```
mern-website/
├── client/                       ← Frontend (React + Vite)
│   ├── index.html                ← Entry HTML (fonts loaded here)
│   ├── vite.config.js            ← Vite + Tailwind plugin + API proxy
│   ├── package.json
│   └── src/
│       ├── main.jsx              ← React root, BrowserRouter wraps App
│       ├── App.jsx               ← Route definitions
│       ├── index.css             ← Tailwind import + CSS variables (--primary, --dark, etc.)
│       ├── components/
│       │   ├── Navigation.jsx    ← Fixed top navbar, dropdown menus, mobile toggle
│       │   ├── Hero.jsx          ← Standalone hero component (reference)
│       │   └── Footer.jsx        ← Footer with links
│       └── pages/
│           ├── HomePage.jsx      ← / route — all homepage sections
│           └── ContactPage.jsx   ← /contact route — form → API → MongoDB
│
└── server/                       ← Backend (Express + MongoDB)
    ├── server.js                 ← Entry point, middleware, routes
    ├── package.json
    ├── .env                      ← Your local env (not committed)
    ├── .env.example              ← Template for .env
    ├── config/
    │   └── db.js                 ← Mongoose connect
    ├── models/
    │   └── Contact.js            ← Contact schema
    ├── controllers/
    │   └── contactController.js
    └── routes/
        └── contactRoutes.js
```

---

## Prerequisites

Install these before starting:

| Tool       | Min Version | Download |
|------------|-------------|----------|
| Node.js    | 18+         | https://nodejs.org |
| npm        | 9+          | comes with Node |
| MongoDB    | 6+          | https://www.mongodb.com/try/download/community |

Check your versions:
```bash
node -v
npm -v
mongod --version
```

---

## First-Time Setup

### 1. Install dependencies

Open **two terminals** — one for client, one for server.

**Terminal 1 — Server:**
```bash
cd mern-website/server
npm install
```

**Terminal 2 — Client:**
```bash
cd mern-website/client
npm install
```

### 2. Configure environment variables

```bash
cd mern-website/server
cp .env.example .env
```

Open `.env` and set your values:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/3dmas
CLIENT_URL=http://localhost:5173
```

> **MongoDB Atlas (cloud):** Replace `MONGO_URI` with your Atlas connection string.
> Example: `mongodb+srv://username:password@cluster.mongodb.net/3dmas`

### 3. Start MongoDB (local only)

```bash
# macOS / Linux
mongod

# Windows (run as Administrator)
"C:\Program Files\MongoDB\Server\7.0\bin\mongod.exe"

# macOS with Homebrew
brew services start mongodb-community
```

---

## Running the Project

### Option A — Two terminals (standard)

**Terminal 1 — Start the server:**
```bash
cd mern-website/server
npm run dev
```
Server starts at: `http://localhost:5000`

**Terminal 2 — Start the client:**
```bash
cd mern-website/client
npm run dev
```
Client starts at: `http://localhost:5173`

Open your browser at **http://localhost:5173** ✅

---

### Option B — Single command (recommended)

Install `concurrently` at the project root level:

```bash
cd mern-website
npm init -y
npm install concurrently
```

Add this to the **root** `package.json` scripts:
```json
{
  "scripts": {
    "dev": "concurrently \"cd server && npm run dev\" \"cd client && npm run dev\"",
    "start": "concurrently \"cd server && npm start\" \"cd client && npm run dev\""
  }
}
```

Then run everything with one command:
```bash
cd mern-website
npm run dev
```

---

## Verify Everything Works

1. **Client loads:** Open http://localhost:5173 → dark homepage appears
2. **Server health:** Open http://localhost:5000/api/health → returns `{"status":"OK"}`
3. **Contact form:** Go to http://localhost:5173/contact → fill the form → submit → check MongoDB

Check saved contacts in MongoDB:
```bash
mongosh
use 3dmas
db.contacts.find().pretty()
```

---

## Common Errors & Fixes

| Error | Cause | Fix |
|-------|-------|-----|
| `ECONNREFUSED 5000` | Server not running | Start server first: `cd server && npm run dev` |
| `MongoServerError` | MongoDB not running | Start `mongod` in a terminal |
| White background on site | Tailwind preflight overriding CSS vars | Check `App.jsx` has `style={{ background: 'var(--dark)' }}` not `className="bg-white"` |
| Fonts not loading | Wrong font in `index.html` | `index.html` must load Barlow, not Inter |
| `Module not found` | Missing install | Run `npm install` in both `client/` and `server/` |
| Port 5173 in use | Another Vite app running | Kill it: `lsof -ti:5173 \| xargs kill` |
| Port 5000 in use | Another server running | Kill it: `lsof -ti:5000 \| xargs kill` |

---

## Adding New Pages

### 1. Create the page file
```jsx
// client/src/pages/AboutPage.jsx
export default function AboutPage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', paddingTop: '120px' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
        <h1 style={{ color: 'white' }}>About 3DMAS</h1>
      </div>
    </div>
  );
}
```

### 2. Register the route in App.jsx
```jsx
import AboutPage from './pages/AboutPage.jsx';

// Inside <Routes>:
<Route path="/about" element={<AboutPage />} />
```

### 3. Link to it in Navigation.jsx
In the `navItems` array, add:
```js
{ label: 'About Us', href: '/about' },
```

---

## CSS Variable Reference

All colors are defined in `src/index.css`. Use them everywhere — inline styles and CSS.

```css
var(--primary)      /* Orange-red: #e8410a — CTA buttons, highlights */
var(--primary-dark) /* Darker orange: #c43308 — button hover */
var(--accent)       /* Teal: #00c2cb — secondary accent */
var(--dark)         /* Deepest bg: #0a0a0f */
var(--dark-2)       /* Cards/sections: #111118 */
var(--dark-3)       /* Elevated cards: #1a1a24 */
var(--dark-4)       /* Active states: #222230 */
var(--gray-mid)     /* Muted text: #6b6b80 */
var(--gray-light)   /* Secondary text: #a0a0b0 */
var(--white)        /* Pure white: #ffffff */
```

---

## Adding a New API Endpoint

Example: Newsletter signup

**1. Model** — `server/models/Newsletter.js`
```js
import mongoose from 'mongoose';
const schema = new mongoose.Schema({ email: String }, { timestamps: true });
export default mongoose.model('Newsletter', schema);
```

**2. Controller** — `server/controllers/newsletterController.js`
```js
import Newsletter from '../models/Newsletter.js';
export const subscribe = async (req, res) => {
  try {
    const sub = await Newsletter.create({ email: req.body.email });
    res.json({ success: true, data: sub });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
```

**3. Route** — `server/routes/newsletterRoutes.js`
```js
import express from 'express';
import { subscribe } from '../controllers/newsletterController.js';
const router = express.Router();
router.post('/', subscribe);
export default router;
```

**4. Mount in server.js**
```js
import newsletterRoutes from './routes/newsletterRoutes.js';
app.use('/api/newsletter', newsletterRoutes);
```

**5. Call from React**
```js
await fetch('/api/newsletter', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email }),
});
```

---

## Production Build

```bash
# 1. Build the frontend
cd client
npm run build
# Output goes to client/dist/

# 2. Serve dist/ via Express (add to server.js):
# import { fileURLToPath } from 'url';
# import path from 'path';
# const __dirname = path.dirname(fileURLToPath(import.meta.url));
# app.use(express.static(path.join(__dirname, '../client/dist')));
# app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../client/dist/index.html')));

# 3. Set production env vars
NODE_ENV=production
MONGO_URI=mongodb+srv://...  ← MongoDB Atlas URI
PORT=5000
```

---

## What Was Fixed in This Version

| Problem | Fix applied |
|---------|-------------|
| `bg-white` in `App.jsx` overriding dark theme | Replaced with `style={{ background: 'var(--dark)' }}` |
| `index.html` loading Inter font, but Barlow used in CSS | Fixed `index.html` to load Barlow |
| `ContactPage.jsx` had white bg + gray Tailwind classes | Rewritten to use CSS variables and dark styling |
| `Hero.jsx` had white background | Rewritten to match dark theme |
| Meta title was "My Website" | Updated to "3DMAS — Precision 3D Modeling & Visualization" |
| `#root` not inheriting dark bg | Added `#root { background: var(--dark) }` in `index.css` |
