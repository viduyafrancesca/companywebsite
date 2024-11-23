import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const americano = await prisma.menuItem.create({
    data: {
      name: 'Americano',
      category: 'Coffee',
      description: 'Espresso | Water',
      price: 80,
      imageUrl: '',
    },
  });

  const latte = await prisma.menuItem.create({
    data: {
      name: 'Latte',
      category: 'Coffee',
      description: 'Espresso | Milk',
      price: 100,
      imageUrl: '',
    },
  });

  const cinnamonLatte = await prisma.menuItem.create({
    data: {
      name: 'Cinnamon Latte',
      category: 'Coffee',
      description: 'Espresso | Milk | Cinnamon',
      price: 105,
      imageUrl: '',
    },
  });

  const caramelMacchiato = await prisma.menuItem.create({
    data: {
      name: 'Caramel Macchiato',
      category: 'Coffee',
      description: 'Espresso | Milk | Caramel Drizzle',
      price: 105,
      imageUrl: 'te.jpg',
    },
  });

  const spanishLatte = await prisma.menuItem.create({
    data: {
      name: 'Spanish Latte',
      category: 'Coffee',
      description: 'Espresso | Milk | Cinnamon | Sweetened Milk',
      price: 120,
      imageUrl: '',
    },
  });

  const hazelnutLatte = await prisma.menuItem.create({
    data: {
      name: 'Hazelnut Latte',
      category: 'Coffee',
      description: 'Espresso | Milk | Hazelnut',
      price: 120,
      imageUrl: '',
    },
  });

  const darkMocha = await prisma.menuItem.create({
    data: {
      name: 'Dark Mocha',
      category: 'Coffee',
      description: 'Espresso | Milk | Dark Chocolate',
      price: 120,
      imageUrl: '',
    },
  });

  const toffeeNutLatte = await prisma.menuItem.create({
    data: {
      name: 'Toffee Nut Latte',
      category: 'Coffee',
      description: 'Espresso | Milk | Toffee Nut | Sweet Cream',
      price: 130,
      imageUrl: '',
    },
  });

  const caramelLatte = await prisma.menuItem.create({
    data: {
      name: 'Caramel Latte',
      category: 'Coffee',
      description: 'Espresso | Milk | Caramel',
      price: 130,
      imageUrl: '',
    },
  });

  const butterscotchLatte = await prisma.menuItem.create({
    data: {
      name: 'Butterscotch Latte',
      category: 'Coffee',
      description: 'Espresso | Milk | Butterscotch | Sweet Cream',
      price: 130,
      imageUrl: '',
    },
  });

  const coffeeFloat = await prisma.menuItem.create({
    data: {
      name: 'Coffee Float',
      category: 'Coffee',
      description: 'Espresso | Milk | Chocolate Sauce | Vanilla Ice Cream',
      price: 130,
      imageUrl: '',
    },
  });

  const coffeeJelly = await prisma.menuItem.create({
    data: {
      name: 'Coffee Jelly',
      category: 'Coffee',
      description: 'Espresso | Milk | Coffee Jelly',
      price: 130,
      imageUrl: '',
    },
  });

  const peppermintMocha = await prisma.menuItem.create({
    data: {
      name: 'Peppermint Mocha',
      category: 'Coffee',
      description: 'Espresso | Milk | Chocolate | Peppermint',
      price: 130,
      imageUrl: '',
    },
  });

  const whiteChocolate = await prisma.menuItem.create({
    data: {
      name: 'White Chocolate Latte',
      category: 'Coffee',
      description: 'Espresso | Milk | White Chocolate | Sweet Cream',
      price: 150,
      imageUrl: '',
    },
  });

  const biscoffLatte = await prisma.menuItem.create({
    data: {
      name: 'Biscoff Latte',
      category: 'Coffee',
      description: 'Espresso | Milk | Biscoff | Crushed Biscoff',
      price: 160,
      imageUrl: '',
    },
  });

  const blueberryPop = await prisma.menuItem.create({
    data: {
      name: 'Blueberry Pop',
      category: 'NonCoffee',
      description: 'Soda Water | Blueberry',
      price: 85,
      imageUrl: '',
    },
  });

  const lycheePop = await prisma.menuItem.create({
    data: {
      name: 'Lychee Pop',
      category: 'NonCoffee',
      description: 'Soda Water | Lychee',
      price: 85,
      imageUrl: '',
    },
  });

  const peachPop = await prisma.menuItem.create({
    data: {
      name: 'Peach Pop',
      category: 'NonCoffee',
      description: 'Soda Water | Peach',
      price: 85,
      imageUrl: '',
    },
  });

  const strawberryPop = await prisma.menuItem.create({
    data: {
      name: 'Strawberry Pop',
      category: 'NonCoffee',
      description: 'Soda Water | Strawberry',
      price: 85,
      imageUrl: '',
    },
  });

  const creamyStrawberry = await prisma.menuItem.create({
    data: {
      name: 'Creamy Strawberry',
      category: 'NonCoffee',
      description: 'Milk | Strawberry',
      price: 120,
      imageUrl: '',
    },
  });

  const chocoStrawberry = await prisma.menuItem.create({
    data: {
      name: 'Choco Strawberry',
      category: 'NonCoffee',
      description: 'Milk | Strawberry | Chocolate',
      price: 120,
      imageUrl: '',
    },
  });

  const beantalksChocolate = await prisma.menuItem.create({
    data: {
      name: 'Beantalks Chocolate',
      category: 'NonCoffee',
      description: 'Milk | Beantalks Chocolate Blend',
      price: 120,
      imageUrl: '',
    },
  });

  const berryStrawberry = await prisma.menuItem.create({
    data: {
      name: 'Berry Strawberry',
      category: 'NonCoffee',
      description: 'Milk | Strawberry | Vanilla Ice Cream',
      price: 130,
      imageUrl: '',
    },
  });

  const berryMatcha = await prisma.menuItem.create({
    data: {
      name: 'Berry Matcha',
      category: 'NonCoffee',
      description: 'Milk | Strawberry | Matcha',
      price: 130,
      imageUrl: '',
    },
  });

  const matchaLatte = await prisma.menuItem.create({
    data: {
      name: 'Matcha Latte',
      category: 'NonCoffee',
      description: 'Milk | Matcha',
      price: 130,
      imageUrl: '',
    },
  });

  const biscoffLatteNonCoffee = await prisma.menuItem.create({
    data: {
      name: 'Biscoff Latte',
      category: 'NonCoffee',
      description: 'Milk | Biscoff Sauce | Sweet Cream | Crushed Biscoff',
      price: 85,
      imageUrl: '',
    },
  });

  const espresso = await prisma.menuItem.create({
    data: {
      name: 'Espresso Shot',
      category: 'AddOns',
      description: '',
      price: 15,
      imageUrl: '',
    },
  });

  const sweetCream = await prisma.menuItem.create({
    data: {
      name: 'Sweet Cream',
      category: 'AddOns',
      description: '',
      price: 20,
      imageUrl: '',
    },
  });

  const vanillaIceCream = await prisma.menuItem.create({
    data: {
      name: 'Vanilla Ice Cream',
      category: 'AddOns',
      description: '',
      price: 20,
      imageUrl: '',
    },
  });

  const coffeeJellyAddOn = await prisma.menuItem.create({
    data: {
      name: 'Coffee Jelly',
      category: 'AddOns',
      description: '',
      price: 20,
      imageUrl: '',
    },
  });

  const milkSub = await prisma.menuItem.create({
    data: {
      name: 'Oat / Soy Milk',
      category: 'AddOns',
      description: '',
      price: 40,
      imageUrl: '',
    },
  });

  console.log('Menu items seeded successfully!');
}

main()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
