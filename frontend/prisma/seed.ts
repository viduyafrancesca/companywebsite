import { PrismaClient } from '@prisma/client';
import { config } from 'dotenv';

config();
const prisma = new PrismaClient();

async function main() {

  const menuItems = [
    {
      name: 'Americano',
      category: 'Coffee',
      description: 'Espresso | Water',
      price: 80,
      imageUrl: '',
    },
    {
      name: 'Latte',
      category: 'Coffee',
      description: 'Espresso | Milk',
      price: 100,
      imageUrl: '',
    },
    {
      name: 'Cinnamon Latte',
      category: 'Coffee',
      description: 'Espresso | Milk | Cinnamon',
      price: 105,
      imageUrl: '',
    },
    {
      name: 'Caramel Macchiato',
      category: 'Coffee',
      description: 'Espresso | Milk | Caramel Drizzle',
      price: 105,
      imageUrl: '',
    },
    {
      name: 'Spanish Latte',
      category: 'Coffee',
      description: 'Espresso | Milk | Cinnamon | Sweetened Milk',
      price: 120,
      imageUrl: '',
    },
    {
      name: 'Hazelnut Latte',
      category: 'Coffee',
      description: 'Espresso | Milk | Hazelnut',
      price: 120,
      imageUrl: '',
    },
    {
      name: 'Dark Mocha',
      category: 'Coffee',
      description: 'Espresso | Milk | Dark Chocolate',
      price: 120,
      imageUrl: '',
    },
    {
      name: 'Toffee Nut Latte',
      category: 'Coffee',
      description: 'Espresso | Milk | Toffee Nut | Sweet Cream',
      price: 130,
      imageUrl: '',
    },
    {
      name: 'Caramel Latte',
      category: 'Coffee',
      description: 'Espresso | Milk | Caramel',
      price: 130,
      imageUrl: '',
    },
    {
      name: 'Butterscotch Latte',
      category: 'Coffee',
      description: 'Espresso | Milk | Butterscotch | Sweet Cream',
      price: 130,
      imageUrl: '',
    },
    {
      name: 'Coffee Float',
      category: 'Coffee',
      description: 'Espresso | Milk | Chocolate Sauce | Vanilla Ice Cream',
      price: 130,
      imageUrl: '',
    },
    {
      name: 'Coffee Jelly',
      category: 'Coffee',
      description: 'Espresso | Milk | Coffee Jelly',
      price: 130,
      imageUrl: '',
    },
    {
      name: 'Peppermint Mocha',
      category: 'Coffee',
      description: 'Espresso | Milk | Chocolate | Peppermint',
      price: 130,
      imageUrl: '',
    },
    {
      name: 'White Chocolate Latte',
      category: 'Coffee',
      description: 'Espresso | Milk | White Chocolate | Sweet Cream',
      price: 150,
      imageUrl: '',
    },
    {
      name: 'Biscoff Latte',
      category: 'Coffee',
      description: 'Espresso | Milk | Biscoff | Crushed Biscoff',
      price: 160,
      imageUrl: '',
    },
    {
      name: 'Blueberry Pop',
      category: 'NonCoffee',
      description: 'Soda Water | Blueberry',
      price: 85,
      imageUrl: '',
    },
    {
      name: 'Lychee Pop',
      category: 'NonCoffee',
      description: 'Soda Water | Lychee',
      price: 85,
      imageUrl: '',
    },
    {
      name: 'Peach Pop',
      category: 'NonCoffee',
      description: 'Soda Water | Peach',
      price: 85,
      imageUrl: '',
    },
    {
      name: 'Strawberry Pop',
      category: 'NonCoffee',
      description: 'Soda Water | Strawberry',
      price: 85,
      imageUrl: '',
    },
    {
      name: 'Creamy Strawberry',
      category: 'NonCoffee',
      description: 'Milk | Strawberry',
      price: 120,
      imageUrl: '',
    },
    {
      name: 'Choco Strawberry',
      category: 'NonCoffee',
      description: 'Milk | Strawberry | Chocolate',
      price: 120,
      imageUrl: '',
    },
    {
      name: 'Beantalks Chocolate',
      category: 'NonCoffee',
      description: 'Milk | Beantalks Chocolate Blend',
      price: 120,
      imageUrl: '',
    },
    {
      name: 'Berry Strawberry',
      category: 'NonCoffee',
      description: 'Milk | Strawberry | Vanilla Ice Cream',
      price: 130,
      imageUrl: '',
    },
    {
      name: 'Berry Matcha',
      category: 'NonCoffee',
      description: 'Milk | Strawberry | Matcha',
      price: 130,
      imageUrl: '',
    },
    {
      name: 'Matcha Latte',
      category: 'NonCoffee',
      description: 'Milk | Matcha',
      price: 130,
      imageUrl: '',
    },
    {
      name: 'Biscoff Latte',
      category: 'NonCoffee',
      description: 'Milk | Biscoff Sauce | Sweet Cream | Crushed Biscoff',
      price: 85,
      imageUrl: '',
    },
    {
      name: 'Espresso Shot',
      category: 'AddOns',
      description: '',
      price: 15,
      imageUrl: '',
    },
    {
      name: 'Sweet Cream',
      category: 'AddOns',
      description: '',
      price: 20,
      imageUrl: '',
    },
    {
      name: 'Vanilla Ice Cream',
      category: 'AddOns',
      description: '',
      price: 20,
      imageUrl: '',
    },
    {
      name: 'Coffee Jelly',
      category: 'AddOns',
      description: '',
      price: 20,
      imageUrl: '',
    },
    {
      name: 'Oat / Soy Milk',
      category: 'AddOns',
      description: '',
      price: 40,
      imageUrl: '',
    },
  ];

  for (const item of menuItems) {
    const existingItem = await prisma.menuItem.findFirst({
      where: {
        name: item.name,
        category: item.category, // Optional: Add additional filters for specificity
      },
    });

    if (!existingItem) {
      await prisma.menuItem.create({
        data: item,
      });
      console.log(`Created menu item: ${item.name}`);
    } else {
      console.log(`Menu item already exists: ${item.name}`);
    }
  }

  // Packages
  // Seed Packages
  const packages = [
    {
      name: 'Regular Package 1',
      price: 7000,
      inclusions: [
        '50 Cups (8oz Hot/12oz Iced)',
        '4 Coffee / 2 Non-Coffee',
        '2 Baristas for 3 hours',
      ],
      coffeeSelections: ['Americano', 'Latte', 'Spanish Latte', 'Cinnamon Latte', 'Dark Mocha', 'Hazelnut Latte', 'Caramel Macchiato'], // Use existing menu item names
      nonCoffeeSelections: ['Blueberry Pop', 'Lychee Pop', 'Strawberry Pop', 'Peach Pop', 'Creamy Strawberry', 'Chocolate Strawberry'],
    },
    {
      name: 'Regular Package 2',
      price: 8500,
      inclusions: [
        '80 Cups (8oz Hot/12oz Iced)',
        '5 Coffee / 3 Non-Coffee',
        '2 Baristas for 4 hours',
      ],
      coffeeSelections: ['Americano', 'Latte', 'Spanish Latte', 'Cinnamon Latte', 'Dark Mocha', 'Hazelnut Latte', 'Caramel Macchiato'], // Use existing menu item names
      nonCoffeeSelections: ['Blueberry Pop', 'Lychee Pop', 'Strawberry Pop', 'Peach Pop', 'Creamy Strawberry', 'Chocolate Strawberry'],
    },
    {
      name: 'Premium Package 1',
      price: 9000,
      inclusions: [
        '50 Cups (8oz Hot/12oz Iced)',
        '5 Coffee / 2 Non-Coffee',
        '2 Baristas for 3 hours',
      ],
      coffeeSelections: ['Americano', 'Latte', 'Spanish Latte', 'Cinnamon Latte', 'Dark Mocha', 'Hazelnut Latte', 'Caramel Macchiato', 'Toffee Nut Latte', 'Butterscotch Latte', 'Coffee Jelly', 'Caramel Latte', 'White Chocolate', 'Biscoff Latte'], // Use existing menu item names
      nonCoffeeSelections: ['Blueberry Pop', 'Lychee Pop', 'Strawberry Pop', 'Peach Pop', 'Creamy Strawberry', 'Chocolate Strawberry', 'Beantalks Chocolate', 'Matcha Latte', 'Biscoff Latte'],
    },
    {
      name: 'Premium Package 2',
      price: 10600,
      inclusions: [
        '70 Cups (8oz Hot/12oz Iced)',
        '6 Coffee / 3 Non-Coffee',
        '3 Baristas for 4 hours',
      ],
      coffeeSelections: ['Americano', 'Latte', 'Spanish Latte', 'Cinnamon Latte', 'Dark Mocha', 'Hazelnut Latte', 'Caramel Macchiato', 'Toffee Nut Latte', 'Butterscotch Latte', 'Coffee Jelly', 'Caramel Latte', 'White Chocolate', 'Biscoff Latte'], // Use existing menu item names
      nonCoffeeSelections: ['Blueberry Pop', 'Lychee Pop', 'Strawberry Pop', 'Peach Pop', 'Creamy Strawberry', 'Chocolate Strawberry', 'Beantalks Chocolate', 'Matcha Latte', 'Biscoff Latte'],
    },
    {
      name: 'Premium Package 3',
      price: 13000,
      inclusions: [
        '100 Cups (8oz Hot/12oz Iced)',
        '7 Coffee / 5 Non-Coffee',
        '3 Baristas for 4 hours',
      ],
      coffeeSelections: ['Americano', 'Latte', 'Spanish Latte', 'Cinnamon Latte', 'Dark Mocha', 'Hazelnut Latte', 'Caramel Macchiato', 'Toffee Nut Latte', 'Butterscotch Latte', 'Coffee Jelly', 'Caramel Latte', 'White Chocolate', 'Biscoff Latte'], // Use existing menu item names
      nonCoffeeSelections: ['Blueberry Pop', 'Lychee Pop', 'Strawberry Pop', 'Peach Pop', 'Creamy Strawberry', 'Chocolate Strawberry', 'Beantalks Chocolate', 'Matcha Latte', 'Biscoff Latte'],
    },
  ];

  // Inside your main seeding function
  for (const packageData of packages) {
    // Check if package already exists
    const existingPackage = await prisma.package.findFirst({
      where: {
        name: packageData.name,
      },
    });

    // If package doesn't exist, create it
    if (!existingPackage) {
      // Find coffee menu items for this package
      const coffeeItems = await Promise.all(
        packageData.coffeeSelections.map(async (coffeeName) => {
          return prisma.menuItem.findFirst({
            where: {
              name: coffeeName,
              // You might want to add additional filters if needed
              // category: 'Coffee' 
            },
          });
        })
      );

      // Find non-coffee menu items for this package
      const nonCoffeeItems = await Promise.all(
        packageData.nonCoffeeSelections.map(async (nonCoffeeName) => {
          return prisma.menuItem.findFirst({
            where: {
              name: nonCoffeeName,
              // You might want to add additional filters if needed
              // category: 'Non-Coffee'
            },
          });
        })
      );

      // Filter out any null results (items not found)
      const validCoffeeItems = coffeeItems.filter(item => item !== null);
      const validNonCoffeeItems = nonCoffeeItems.filter(item => item !== null);

      // Create the package with its associated menu items
      await prisma.package.create({
        data: {
          name: packageData.name,
          price: packageData.price,
          inclusions: packageData.inclusions,
          coffee: {
            connect: validCoffeeItems.map(item => ({ id: item.id }))
          },
          nonCoffee: {
            connect: validNonCoffeeItems.map(item => ({ id: item.id }))
          }
        }
      });

      console.log(`Created package: ${packageData.name}`);
    } else {
      console.log(`Package ${packageData.name} already exists`);
    }
  }

}
main()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
