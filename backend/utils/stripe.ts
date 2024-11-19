if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is required');
}

export const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);