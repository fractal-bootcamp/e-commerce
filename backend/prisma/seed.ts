import { Country, OrderStatus } from "@prisma/client";
import { faker } from "@faker-js/faker";
import prisma from "./client";

const USERS_TO_CREATE = 50;
const PRODUCTS_PER_COUNTRY = 10;
const ORDERS_PER_USER = 5;

const categories = [
  "chips",
  "chocolate",
  "candy",
  "crackers",
  "drinks",
  "noodles",
  "cookies",
  "snacks",
];

async function main() {
  // Create Users
  const users = await Promise.all(
    Array(USERS_TO_CREATE)
      .fill(null)
      .map(async () => {
        return prisma.user.create({
          data: {
            auth0Id: `auth${faker.string.alphanumeric(24)}`,
            email: faker.internet.email(),
            name: faker.person.fullName(),
            address: faker.location.streetAddress(),
            stripeCustomerId: `cus_${faker.string.alphanumeric(14)}`,
          },
        });
      })
  );

  // Create Products for each country
  const products = await Promise.all(
    Object.values(Country).flatMap((country) =>
      Array(PRODUCTS_PER_COUNTRY)
        .fill(null)
        .map(() =>
          prisma.product.create({
            data: {
              name: `${faker.commerce.productName()} from ${country}`,
              description: faker.commerce.productDescription(),
              imageUrl: faker.image.url(),
              country: country,
              category: faker.helpers.arrayElement(categories),
              inventory_count: faker.number.int({ min: 10, max: 100 }),
              price: faker.number.int({ min: 299, max: 2999 }),
              stripePriceId: `price_${faker.string.alphanumeric(14)}`,
              stripeProductId: `prod_${faker.string.alphanumeric(14)}`,
            },
          })
        )
    )
  );

  // Create Orders for each user
  await Promise.all(
    users.flatMap((user) =>
      Array(ORDERS_PER_USER)
        .fill(null)
        .map(async () => {
          const orderProducts = faker.helpers.arrayElements(
            products,
            faker.number.int({ min: 1, max: 5 })
          );
          const total = orderProducts.reduce((sum: any, product: any) => sum + product.price, 0);

          return prisma.order.create({
            data: {
              userId: user.auth0Id,
              total,
              orderStatus: faker.helpers.enumValue(OrderStatus),
              paymentStatus: faker.helpers.arrayElement(["succeeded", "pending", "failed"]),
              paymentId: `pi_${faker.string.alphanumeric(24)}`,
              stripeSessionId: `cs_${faker.string.alphanumeric(24)}`,
              stripePaymentIntentId: `pi_${faker.string.alphanumeric(24)}`,
              products: {
                connect: orderProducts.map((product: any) => ({ id: product.id })),
              },
            },
          });
        })
    )
  );
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
