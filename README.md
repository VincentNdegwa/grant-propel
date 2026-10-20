# Grant Propel

Landing page for Grant Propel. React + Vite.

## Requirements

- Node.js 20.19+ or 22.12+

## Run

```bash
npm install
npm run dev
```

Opens at http://localhost:5173.

## Build

```bash
npm run build     # outputs to dist/
npm run preview   # serve the production build locally
```

## Configuration

Create a `.env` file in the project root to point the signup form at a backend:

```
VITE_SIGNUP_ENDPOINT=https://example.com/api/signup
```

The form POSTs JSON: `{ email, orgType, state, source, createdAt }`.

If `VITE_SIGNUP_ENDPOINT` is not set, signups are written to `localStorage` under the `grant-propel:signups` key, so the flow works end to end locally.

Restart `npm run dev` after changing `.env`.
