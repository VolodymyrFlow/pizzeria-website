# Sapore Italiano

A full-stack portfolio website for a fictional Italian pizzeria in Prague. A React frontend loads the menu from a Node.js API, submits demo orders to SQLite, and provides an admin interface for viewing and deleting orders.

[Live website](https://pizzeria-website-delta.vercel.app/) · [API health check](https://pizzeria-website.onrender.com/api/health)

## Tech Stack

- **Frontend:** React 19, JavaScript, Vite 8, CSS, localStorage.
- **Backend:** Node.js built-in HTTP server and SQLite through `node:sqlite`.
- **Deployment:** Vercel for the frontend and Render for the API.
- **Checks:** ESLint and the Node.js test runner for utility functions.

## Features

- API-backed pizza menu with text search and category filters.
- Shopping cart with quantities, totals, and browser persistence.
- Checkout that submits pickup or delivery orders to the API.
- Demo admin login, token-checked order listing, and per-order deletion.
- Light/dark theme and restaurant opening status based on Prague time.
- Table-booking form with client-side validation only.

## Run Locally

Use Node.js 24 LTS and npm. Run commands from the repository root.

```bash
npm install
```

Start the API in one terminal:

```bash
node server/index.js
```

Start the frontend in a second terminal:

```bash
npm run dev
```

Open the address printed by Vite. The API defaults to port 3001 and creates `orders.db` in the working directory. `PORT` overrides the API port.

To use a different API, set the following in `.env.local` before starting Vite or building:

```dotenv
VITE_API_URL=https://pizzeria-website.onrender.com
```

Without this variable, the frontend uses `http://127.0.0.1:3001`. `VITE_*` variables are public build-time configuration, not secret storage.

## Checks

```bash
npm test
npm run lint
npm run build
```

## API

| Method | Route | Access |
| --- | --- | --- |
| GET | `/api/health` | Public |
| GET | `/api/pizzas` | Public |
| POST | `/api/orders` | Public |
| POST | `/api/login` | Public |
| GET | `/api/orders` | Token required |
| PUT | `/api/orders/:id` | Public in this demo |
| DELETE | `/api/orders/:id` | Token required |

Protected requests send the login token directly in the `Authorization` header.

## Demo Limitations

Use fictional data only. This is not a production ordering or authentication system.

- Credentials are hardcoded, tokens use `Math.random()`, and sessions have no expiry. Server restarts invalidate tokens; logout only clears client state.
- The PUT route has no authorization check. Server-side validation is limited, and item prices are accepted from the client.
- SQLite requires durable storage to retain orders. The Render free-tier filesystem is ephemeral, so stored orders can be lost when the instance is replaced or restarted.
- CORS allows all origins; it is not an authorization mechanism.
- Booking does not send a reservation, and checkout does not process payments or arrange delivery.
- The hosted API may take time to respond after inactivity.

## Image Credits

Pizza photographs are sourced from Wikimedia Commons. Source titles:

- Margherita: "Eq it-na pizza-margherita sep2005 sml.jpg"
- Diavola: "Pizza Diavola (Verde Ischia).jpg"
- Prosciutto: "2014 Pizza con funghi e prosciutto cotto e mozzarella di bufala.jpg"
- Quattro Formaggi: "Pizza quattro formaggi at restaurant, Chalk Farm Road, London.jpg"
- Capricciosa: "Pizza capricciosa, Munich.jpg"
- Marinara: "Pizza marinara (Napoli).jpg"

Interior photographs:

- "Sala della Trattoria del Cimino.jpg" — CC BY-SA 4.0
- "Capri Italian Restaurant - June 2022 - Sarah Stierch 03.jpg" — CC BY 4.0
- "L'eau Vive restaurant, Rome.jpg" — CC BY-SA 3.0
