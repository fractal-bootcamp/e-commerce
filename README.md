# Snack Safari E-commerce Platform

## Project Overview

Snack Safari is a full-stack e-commerce platform allowing customers to sample the best snacks from around the world. The platform consists of three main components:

- **Customer Frontend**: A Next.js-based shopping experience
- **Admin Dashboard**: A separate Next.js application for business management
- **Backend API**: An Express.js server handling business logic and data persistence

You can view a live version of the site at https://snack-safari.vercel.app/

### Key Features

- International snack marketplace
- Secure payment processing with Stripe
- Firebase authentication
- Admin dashboard for order management
- AI-powered product search and recommendations
- Real-time inventory tracking
- Responsive design with dark mode support

## Project Structure

```
snack-safari/
├── frontend/           # Customer-facing Next.js application
├── frontend-admin/     # Admin dashboard Next.js application
└── backend/           # Express.js API server
```

## Technology Stack

### Frontend

- Next.js 15
- React 18
- TypeScript
- Tailwind CSS
- Firebase Auth
- Stripe Elements
- Zustand

### Backend

- Express.js
- PostgreSQL (Neon)
- Prisma ORM
- Redis
- Firebase Admin
- Stripe API

### Infrastructure

- Neon (Serverless Postgres)
- Redis Cache
- Firebase Authentication
- Stripe Payments
- Cloudinary (Image Storage)

## Getting Started

1. Clone the repository

```bash
git clone <repository-url>
cd snack-safari
```

2. Set up each component:

```bash
# Backend
cd backend
cp .env.template .env
npm install

# Frontend
cd ../frontend
cp .env.template .env.local
npm install

# Admin Dashboard
cd ../frontend-admin
cp .env.template .env.local
npm install
```

3. Start the development servers:

```bash
# In separate terminals:
cd backend && npm run dev
cd frontend && npm run dev
cd frontend-admin && npm run dev
```

## Development

### Running the Platform

- Backend API: http://localhost:3010
- Customer Frontend: http://localhost:3000
- Admin Dashboard: http://localhost:3001

### Environment Setup

Each component requires specific environment variables. See the README in each directory for detailed configuration instructions.

## Documentation

Detailed documentation for each component can be found in their respective directories:

- [Frontend Documentation](./frontend/README.md)
- [Admin Dashboard Documentation](./frontend-admin/README.md)
- [Backend Documentation](./backend/README.md)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
