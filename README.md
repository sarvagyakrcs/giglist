# GigList

A modern web application for managing and organizing gigs/events, built with Next.js 15 and TypeScript.

## Features

- 🎨 Modern UI with Tailwind CSS and Radix UI components
- 🔐 Authentication with Clerk
- 📱 Responsive design
- 🌙 Dark mode support
- 📊 Data visualization with Recharts
- 🎯 Form handling with React Hook Form and Zod validation
- 🔄 State management with React Query
- 🗄️ Database with Prisma

## Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI, Headless UI
- **Authentication:** Clerk
- **Database:** Prisma
- **State Management:** React Query
- **Form Handling:** React Hook Form + Zod
- **Charts:** Recharts
- **Animations:** tw-animate-css

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. Set up your environment variables:
   - Copy `.env.example` to `.env`
   - Fill in the required environment variables

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `/app` - Next.js app router pages and layouts
- `/components` - Reusable UI components
- `/hooks` - Custom React hooks
- `/lib` - Utility functions and shared logic
- `/prisma` - Database schema and migrations
- `/providers` - React context providers
- `/schemas` - Zod validation schemas
- `/store` - State management
- `/public` - Static assets

## Development

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Author

- **Sarvagya Kumar** - [thesarvagyakumar@gmail.com](mailto:thesarvagyakumar@gmail.com)

## License

This project is private and proprietary.
