# SportsTrakr

Web application for tracking sports scores and favorite games across multiple sports leagues.

## Overview

SportsTrakr allows users to:

- View live and upcoming games from multiple sports leagues
- Track scores for football (soccer), basketball, and NFL games
- Save favorite games to a personalized dashboard
- Get real-time updates on game scores

## Tech Stack

- **Frontend**: SvelteKit 2.x with Svelte 5 runes
- **UI**: TailwindCSS 4.x
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT-based authentication
- **API**: ESPN Sports API integration (proxied via backend)

## Prerequisites

- Node.js (v18+)
- npm/pnpm/yarn
- PostgreSQL database or Prisma Accelerate account

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/SportsTrakr.git
   cd SportsTrakr
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the project root:

   ```
   # Database connection
   DATABASE_URL=""
   # JWT Secret for authentication
   JWT_SECRET="superdupersecurejwtsecretgoesbrrr!@*&^%"
   ```

4. **Generate Prisma client**

   ```bash
   npx prisma generate
   ```

5. **Run database migrations**

   ```bash
   npx prisma migrate dev
   ```

6. **Start the development server**
   ```bash
   npm run dev
   ```

The application will be available at http://localhost:5173

## Features

- **Multi-sport tracking**: Follow football/soccer, basketball, and NFL games
- **League selection**: Filter games by specific leagues
- **Favorites**: Save games to your personal favorites list
- **User authentication**

## Project Structure

The general structure of the codebase:

```
├── prisma/                  # DB config
│   ├── schema.prisma        # DB schema def
│   └── migrations/
│
├── src/
│   ├── components/
│   │   ├── Basketball.svelte # Basketball scores component
│   │   ├── Card.svelte       # Card UI component for displaying games
│   │   ├── Favourites.svelte # User favorites component
│   │   ├── Football.svelte   # Football scores component
│   │   ├── Navbar.svelte     # Navbar component
│   │   ├── Nfl.svelte        # NFL scores component
│   │   ├── Tabs.svelte       # Tab navigation component
│   │   └── Toast.svelte      # Notification toast component
│   │
│   ├── lib/
│   │   ├── server/
│   │   │   └── server.ts    # Server-side utils and db connection
│   │   └── utils/
│   │       └── auth.ts      # Auth utils
│   │
│   ├── routes/              # SK routes
│   │   ├── (app)/           # Authenticated app routes
│   │   │   ├── dashboard/   # Dashboard pages and API endpoints
│   │   │   │   ├── basketball/ # Basketball API endpoints
│   │   │   │   ├── favourites/ # Favorites API endpoints
│   │   │   │   ├── football/   # Football API endpoints
│   │   │   │   └── nfl/        # NFL API endpoints
│   │   │   └── +layout.server.ts # Protected route layout handler
│   │   │
│   │   ├── (auth)/          # Auth routes
│   │   │   ├── login/       # Login page and handlers
│   │   │   ├── logout/      # Logout endpoint
│   │   │   └── signup/      # Signup page and handlers
│   │   │
│   │   ├── +layout.svelte   # Root layout component
│   │   └── +page.svelte     # Home page
│   │
│   ├── app.css
│   ├── app.html
│   └── hooks.server.ts      # Server hooks (JWT verification)
│
├──────────────────────────────────────────────────────────────
```

## Testing

You can test the application using these credentials:

- **Email**: test@email.com
- **Password**: test123

## API Requirements

The application uses the hidden ESPN API. Documentation on the hidden ESPN API is sparse but the most reliable endpoints I found were from this [link](gist.github.com/akeaswaran/b48b02f1c94f873c6655e7129910fc3b).

## License

MIT &copy; Samson Kikoma

---

_. Game data is sourced from the hidden ESPN public API for non-commercial use._
