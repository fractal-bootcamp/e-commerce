# Snack Safari Backend

## Project Overview

The Snack Safari backend is a Node.js/Express server that powers an e-commerce platform specializing in international snacks. It provides APIs for user authentication, product management, order processing, and payment integration with Stripe.

### Key Features

- Firebase Authentication integration
- Stripe payment processing
- Order management system
- Product catalog with search
- Redis caching for performance
- RAG (Retrieval Augmented Generation) for product search
- PostgreSQL database with Prisma ORM
- Cloudinary integration for image storage

### Technologies

- Node.js/Express
- PostgreSQL
- Neon (Serverless Postgres)
- Prisma ORM
- Firebase
- Stripe
- Redis
- TypeScript
- Docker
- Cloudinary
- OpenAI

## Project Structure

```
backend/
├── controllers/         # API route handlers
│   ├── stripe/         # Stripe-related controllers
│   └── ...            # Other controllers
├── services/           # Business logic layer
├── prisma/             # Database schema and client
├── firebase/           # Firebase configuration & middleware
├── redis/             # Redis client setup
├── types/             # TypeScript type definitions
├── utils/             # Utility functions
├── notifications/      # Email and notification services
├── rag/               # RAG implementation
└── db_test/           # Database test data
```

### Key Files

- `server.ts` - Application entry point
- `prisma/schema.prisma` - Database schema definition
- `firebase/firebaseMiddleware.ts` - Auth middleware
- `controllers/stripe/controllersPaymentIntent.ts` - Payment processing
- `docker-compose.yaml` - Docker services configuration
- `.env.template` - Environment variables template

## Prerequisites

- Node.js 16+
- PostgreSQL 13+ (for local development)
- Neon Account (for production/dev database)
- Redis
- Firebase Account
- Stripe Account
- Cloudinary Account
- OpenAI API Key
- Docker (optional)

## Installation & Setup

1. Clone the repository

```bash
git clone <repository-url>
cd backend
```

2. Install dependencies

```bash
npm install
# or
bun install
```

3. Set up environment variables

```bash
cp .env.template .env
```

4. Configure environment variables:

```env
# Firebase
FIREBASE_TYPE=
FIREBASE_PROJECT_ID=
FIREBASE_PRIVATE_KEY_ID=
FIREBASE_PRIVATE_KEY=
FIREBASE_CLIENT_EMAIL=
FIREBASE_CLIENT_ID=
FIREBASE_AUTH_URI=
FIREBASE_TOKEN_URI=
FIREBASE_AUTH_PROVIDER_X509_CERT_URL=
FIREBASE_CLIENT_X509_CERT_URL=

# Database
DATABASE_URL=          # Neon production database URL
DATABASE_URL_DEV=      # Local development database URL

# Cloudinary
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

# Stripe
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=

# OpenAI
OPENAI_KEY=
```

5. Start local services (optional)

```bash
# Start PostgreSQL
docker-compose -f docker-compose-db.yaml up -d

# Start Redis
docker-compose -f docker-compose-redis.yaml up -d
```

6. Run database migrations

```bash
npx prisma generate
npx prisma migrate dev
```

7. Start the development server

```bash
npm run dev
# or
bun run dev
```

## Database Management

### Prisma Commands

```bash
# Generate Prisma Client
npx prisma generate

# Run migrations
npx prisma migrate dev

# Reset database
npx prisma migrate reset

# Open Prisma Studio
npx prisma studio
```

## API Documentation

### Authentication Endpoints

- `POST /auth/signup` - User registration
- `POST /auth/login` - User login

### Product Endpoints

- `POST /product/getAllProducts` - Get all products
- `POST /product/getProduct` - Get single product
- `POST /product/getProductsFromCountry` - Get products by country

### Order Endpoints

- `POST /order/getAllOrders` - Get all orders
- `POST /order/getOrder` - Get single order
- `POST /order/addOrder` - Create new order
- `POST /order/updateOrder` - Update order
- `POST /order/deleteOrder` - Delete order

### Payment Endpoints

- `POST /stripe/create-payment-intent` - Create payment intent

## Troubleshooting

Common issues and their solutions:

1. Database connection issues:

   - Check Neon connection string
   - Verify network access

2. Redis connection errors:

   - Ensure Redis is running
   - Check Redis URL

3. Firebase authentication issues:
   - Verify Firebase credentials
   - Check service account configuration
