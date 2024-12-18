# Snack Safari Admin Dashboard

## Project Overview

The Snack Safari Admin Dashboard is a Next.js application that provides administrative tools for managing the e-commerce platform. It offers interfaces for order management, product administration, and user oversight.

### Key Features

- Order management and tracking
- Product inventory control
- User management
- Protected admin routes
- Real-time order status updates
- Secure admin authentication

### Technologies

- Next.js 15
- React 18
- TypeScript
- Tailwind CSS
- Firebase Authentication
- Zustand (State Management)
- Axios

## Project Structure

```
frontend-admin/
├── src/
│   ├── app/             # Next.js app router pages
│   │   ├── orders/      # Order management pages
│   │   └── login/       # Admin authentication
│   ├── components/      # React components
│   ├── api/            # API client functions
│   ├── hooks/          # Custom React hooks
│   └── types/          # TypeScript type definitions
├── public/             # Static assets
└── tailwind.config.js  # Tailwind configuration
```

### Key Components

- `XOrdersTable.tsx` - Order management interface
- `XOrderFilters.tsx` - Order filtering and search
- `XProtectedRoute.tsx` - Admin route protection
- `XSidebar.tsx` - Admin navigation

## Prerequisites

- Node.js 16+
- Firebase Account
- Backend API running
- Admin access credentials

## Installation & Setup

1. Clone the repository

```bash
git clone <repository-url>
cd frontend-admin
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

# Backend
NEXT_PUBLIC_BACKEND_URL=

# Admin Configuration
NEXT_PUBLIC_ADMIN_EMAILS=     # Comma-separated list of admin email addresses
```

5. Start the development server

```bash
npm run dev
# or
yarn dev
```

## Development

### Running the Application

The application will be available at `http://localhost:3001`

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Create production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Security

### Admin Authentication

The admin dashboard uses Firebase Authentication with additional email verification:

```typescript
const ALLOWED_ADMIN_EMAILS =
  process.env.NEXT_PUBLIC_ADMIN_EMAILS?.split(",") || [];

if (!ALLOWED_ADMIN_EMAILS.includes(user.email)) {
  throw new Error("Unauthorized access");
}
```

### Protected Routes

All admin routes are protected using the `XProtectedRoute` component:

```typescript
const XProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading]);

  return <>{children}</>;
};
```

## Features

### Order Management

- View all orders with filtering and sorting
- Update order status
- View detailed order information
- Process refunds
- Track order history

### User Management

- View user accounts
- Monitor user activity
- Manage user permissions

## Pages

- `/` - Dashboard overview
- `/orders` - Order management
- `/orders/[id]` - Order details
- `/orders/new` - Create new order
- `/login` - Admin authentication

## State Management

The application uses Zustand for state management with the following stores:

- `storeAuth` - Authentication state
- `storeOrders` - Order management state

## Styling

The project uses Tailwind CSS with a custom admin theme.
