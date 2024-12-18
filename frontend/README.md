# Snack Safari Frontend

## Project Overview

The Snack Safari frontend is a Next.js application that provides a modern e-commerce experience for browsing and purchasing international snacks. It features a responsive design, real-time cart management, and secure payment processing with Stripe.

### Key Features

- Product browsing and filtering
- Shopping cart management
- Stripe payment integration
- Firebase authentication
- Responsive design
- Dark mode support
- AI-powered chat assistance

### Technologies

- Next.js 15
- React 18
- TypeScript
- Tailwind CSS
- Firebase Authentication
- Stripe Payment Elements
- Zustand (State Management)
- Axios

## Project Structure

```
frontend/
├── src/
│   ├── app/             # Next.js app router pages
│   ├── components/      # React components
│   │   ├── stripe/      # Stripe-related components
│   │   └── ...         # Other components
│   ├── api/            # API client functions
│   ├── store/          # Zustand store definitions
│   ├── utils/          # Utility functions
│   ├── hooks/          # Custom React hooks
│   └── types/          # TypeScript type definitions
├── public/             # Static assets
└── tailwind.config.js  # Tailwind configuration
```

### Key Components

- `XProductListing.tsx` - Product display grid
- `XAddToCart.tsx` - Cart management
- `stripe/CheckoutForm.tsx` - Stripe payment form
- `XAIChat.tsx` - AI chat interface

## Prerequisites

- Node.js 16+
- Firebase Account
- Stripe Account
- Backend API running

## Installation & Setup

1. Clone the repository

```bash
git clone <repository-url>
cd frontend
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Set up environment variables

```bash
cp .env.template .env.local
```

4. Configure environment variables:

```
# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=

# Backend
NEXT_PUBLIC_BACKEND_URL=

# Auth
NEXT_PUBLIC_AUTH_REDIRECT_URI=
```

5. Start the development server

```bash
npm run dev
# or
yarn dev
```

## Development

### Running the Application

The application will be available at `http://localhost:3000`

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Create production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Key Features Implementation

#### Cart Management

The cart is implemented using Zustand for state management:

```typescript
import { create } from "zustand";

export const useCart = create((set) => ({
  items: [],
  addItem: (item) =>
    set((state) => ({
      items: [...state.items, item],
    })),
  // ...
}));
```

#### Stripe Integration

Payment processing is handled through Stripe Elements:

```typescript
<Elements stripe={stripePromise} options={options}>
  <CheckoutForm />
</Elements>
```

#### Firebase Authentication

```typescript
import { auth } from "../firebase/firebaseConfig";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export const firebaseAuth = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  // ...
};
```

## Pages

- `/` - Home page with product listings
- `/cart` - Shopping cart
- `/payment` - Stripe payment processing
- `/payment/status` - Payment confirmation
- `/chat` - AI chat assistant

## AI Chat Assistant

The `/chat` page features a RAG (Retrieval Augmented Generation) powered assistant that helps users:

- Find specific products
- Get information about snacks from different countries
- Answer questions about ingredients and dietary restrictions
- Provide recommendations based on preferences

The chat interface uses a backend RAG system that:

- Retrieves relevant product information from the database
- Combines it with AI-generated responses
- Provides accurate, context-aware answers about the product catalog

## State Management

The application uses Zustand for state management with the following stores:

- `storeCart` - Shopping cart state
- `storeStripe` - Stripe payment state
- `storeAuth` - Authentication state

## Styling

The project uses Tailwind CSS for styling with a custom configuration for:

- Colors
- Typography
- Responsive breakpoints
- Dark mode
