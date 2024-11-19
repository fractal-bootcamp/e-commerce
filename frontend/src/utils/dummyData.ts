// This file is used to generate dummy data for the app

// snacks from each country

export const products = [
  // India
  {
    id: 'india1',
    name: 'Haldiram\'s Soan Papdi',
    description: 'Popular flaky Indian sweet made with gram flour, ghee, and cardamom',
    imageUrl: '/products/Haldiram_Soan_Papdi.png',
    country: 'India',
    category: 'Sweets',
    inventory_count: 50,
    price: 599,
  },
  {
    id: 'india2',
    name: 'Kurkure Masala Munch',
    description: 'Crunchy corn puffs with authentic Indian spices',
    imageUrl: '/products/KurKureMasalaMunch.jpeg',
    country: 'India',
    category: 'Snacks',
    inventory_count: 100,
    price: 299,
  },
  {
    id: 'india3',
    name: 'Haldiram\'s Aloo Bhujia',
    description: 'Classic Indian crispy noodle snack made from potato and chickpea flour with traditional spices',
    imageUrl: '/products/aloo-bhujia.jpeg',
    country: 'India',
    category: 'Snacks',
    inventory_count: 50,
    price: 399,  // Reduced price as it's a savory snack
  },
  
  // Peru
  {
    id: 'peru1',
    name: 'Sublime Chocolate',
    description: 'Iconic Peruvian milk chocolate bar with peanuts',
    imageUrl: '/products/sublime-chocolate.jpeg',
    country: 'Peru',
    category: 'Sweets',
    inventory_count: 30,
    price: 799,
  },
  {
    id: 'peru2',
    name: 'Inca Corn (Maiz Gigante)',
    description: 'Giant toasted corn kernels - a traditional Peruvian snack',
    imageUrl: '/products/MaizGiganteOriginal.png',
    country: 'Peru',
    category: 'Snacks',
    inventory_count: 75,
    price: 399,
  },

  // Sri Lanka
  {
    id: 'sl1',
    name: 'Munchee Lemon Puff',
    description: 'Iconic Sri Lankan cream-filled lemon-flavored biscuits - a tea-time favorite',
    imageUrl: '/products/lemon-puff.png',
    country: 'Sri Lanka',
    category: 'Sweets',
    inventory_count: 40,
    price: 499,
  },
  {
    id: 'sl2',
    name: 'Cassava Chips Kochchii Chilli',
    description: 'Spicy cassava chips - a favorite Sri Lankan snack',
    imageUrl: '/products/casava-chips.jpeg',
    country: 'Sri Lanka',
    category: 'Snacks',
    inventory_count: 60,
    price: 349,
  },

  // Australia
  {
    id: 'aus1',
    name: 'Arnott\'s Tim Tams',
    description: 'Australia\'s favorite chocolate biscuit - malted cookies coated in chocolate',
    imageUrl: '/products/tim-tam.jpg',
    country: 'Australia',
    category: 'Sweets',
    inventory_count: 200,
    price: 499,
  },
  {
    id: 'aus2',
    name: 'Red Rock Deli Sweet Chilli & Sour Cream',
    description: 'Premium Australian potato chips with a perfect blend of sweet chilli and creamy tang',
    imageUrl: '/products/red-rock-deli.png',
    country: 'Australia',
    category: 'Snacks',
    inventory_count: 150,
    price: 499,  // Increased slightly as Red Rock Deli is a premium brand
  },
  {
    id: 'aus3',
    name: 'Arnott\'s Shapes BBQ',
    description: 'Iconic Australian savory biscuits with bold BBQ flavor - a party favorite',
    imageUrl: '/products/Shapes_BBQ.jpeg',
    country: 'Australia',
    category: 'Snacks',
    inventory_count: 120,
    price: 449,
  },
  
];

