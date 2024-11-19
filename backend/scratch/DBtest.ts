// This script is used to test using the Prisma client to create the products in the database

import prisma from "../prisma/client";

const products = [
  // India
  {
    name: "Haldirams Soan Papdi",
    description: "Popular flaky Indian sweet made with gram flour, ghee, and cardamom",
    imageUrl: "https://res.cloudinary.com/ds4kobyhb/image/upload/v1/snack-safari/p89z92528hbssthkckkc.png?_a=BAMCkGJu0",
    country: "INDIA" as const,
    category: "sweets",
    inventory_count: 50,
    price: 599,
  },
  {
    name: "Haldirams Aloo Bhujia",
    description: "Classic Indian crispy noodle snack made from potato and chickpea flour with traditional spices",
    imageUrl: "https://res.cloudinary.com/ds4kobyhb/image/upload/v1/snack-safari/g6ug1iq6nk2heuhhqo03.jpg?_a=BAMCkGJu0",
    country: "INDIA" as const,
    category: "snacks",
    inventory_count: 50,
    price: 399,
  },
  
  // Peru
  {
    name: "Sublime Chocolate",
    description: "Iconic Peruvian milk chocolate bar with peanuts",
    imageUrl: "https://res.cloudinary.com/ds4kobyhb/image/upload/v1/snack-safari/hwugm6svvtfnx1mr2nyz.jpg?_a=BAMCkGJu0",
    country: "PERU" as const,
    category: "sweets",
    inventory_count: 30,
    price: 799,
  },
  {
    name: "Inca Corn (Maiz Gigante)",
    description: "Giant toasted corn kernels - a traditional Peruvian snack",
    imageUrl: "https://res.cloudinary.com/ds4kobyhb/image/upload/v1/snack-safari/pogm7ftydweqi1yxjtsl.png?_a=BAMCkGJu0",
    country: "PERU" as const,
    category: "snacks",
    inventory_count: 75,
    price: 399,
  },

  // Sri Lanka
  {
    name: "Munchee Lemon Puff",
    description: "Iconic Sri Lankan cream-filled lemon-flavored biscuits - a tea-time favorite",
    imageUrl: "https://res.cloudinary.com/ds4kobyhb/image/upload/v1/snack-safari/dhmlcoxpsnd4pyjocdlb.png?_a=BAMCkGJu0",
    country: "SRI_LANKA" as const,
    category: "sweets",
    inventory_count: 40,
    price: 499,
  },
  {
    name: "Cassava Chips Kochchii Chilli",
    description: "Spicy cassava chips - a favorite Sri Lankan snack",
    imageUrl: "https://res.cloudinary.com/ds4kobyhb/image/upload/v1/snack-safari/op6ytqajklvekbdblugd.jpg?_a=BAMCkGJu0",
    country: "SRI_LANKA" as const,
    category: "snacks",
    inventory_count: 60,
    price: 349,
  },

  // Australia
  {
    name: "Arnotts Tim Tams",
    description: "Australias favorite chocolate biscuit - malted cookies coated in chocolate",
    imageUrl: "https://res.cloudinary.com/ds4kobyhb/image/upload/v1/snack-safari/pqsxcqct1dhvwgvtnhpu.jpg?_a=BAMCkGJu0",
    country: "AUSTRALIA" as const,
    category: "sweets",
    inventory_count: 200,
    price: 499,
  },
  {
    name: "Red Rock Deli Sweet Chilli & Sour Cream",
    description: "Premium Australian potato chips with a perfect blend of sweet chilli and creamy tang",
    imageUrl: "https://res.cloudinary.com/ds4kobyhb/image/upload/v1/snack-safari/gyju9qrdvemcw36mup35.png?_a=BAMCkGJu0",
    country: "AUSTRALIA" as const,
    category: "snacks",
    inventory_count: 150,
    price: 499,
  },
  {
    name: "Arnotts Shapes BBQ",
    description: "Iconic Australian savory biscuits with bold BBQ flavor - a party favorite",
    imageUrl: "https://res.cloudinary.com/ds4kobyhb/image/upload/v1/snack-safari/bckudvwcy4d9njhrkoae.jpg?_a=BAMCkGJu0",
    country: "AUSTRALIA" as const,
    category: "snacks",
    inventory_count: 120,
    price: 449,
  },
];

const main = async () => {
  for (const product of products) {
    const response = await prisma.product.create({
      data: product,
    });
    console.log('response', response);
  }
};

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());

  