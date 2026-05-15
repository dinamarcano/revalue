# Revalue 

Revalue is an interactive platform that incentivises recycling through campaigns, rewards, and smart recycling machines.

# Vercel Link: https://revalue-2.vercel.app/


## Structure

```
revalue/
├── client/          # React + Vite frontend
│   ├── src/
│   │   ├── components/
│   │   ├── config/
│   │   ├── context/
│   │   ├── lib/
│   │   ├── pages/
│   │   ├── providers/
│   │   ├── router/
│   │   └── services/
│   ├── public/
│   ├── index.html
│   └── package.json
└── server/          # Express + TypeScript backend
    ├── src/
    │   ├── config/
    │   ├── features/
    │   │   ├── auth/
    │   │   ├── campaigns/
    │   │   └── machines/
    │   └── middlewares/
    └── package.json
```

## Getting started

Install dependencies for both workspaces:

```bash
npm run install:all
```

Run both dev servers in parallel:

```bash
npm run dev
```

Or run them individually:

```bash
npm run dev:client   # http://localhost:5173
npm run dev:server   # http://localhost:3000
```

## Environment variables

Copy the example files and fill in the values:

```bash
cp client/.env.example client/.env
cp server/.env.example server/.env
```

### client/.env

| Variable | Description |
|---|---|
| `VITE_APP_NAME` | Application display name |
| `VITE_API_URL` | Backend API base URL |
| `VITE_SUPABASE_URL` | Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` | Supabase anonymous key |

### server/.env

| Variable | Description |
|---|---|
| `PORT` | Port the server listens on |
| `JWT_SECRET` | Secret used to sign JWT tokens |
| `DATABASE_URL` | PostgreSQL connection string |
| `CLIENT_URL` | Frontend origin (for CORS) |
