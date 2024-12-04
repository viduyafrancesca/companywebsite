import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { prisma } from '@/lib/prisma';
import Contact from '@/components/Contact';

export const dynamic = "force-dynamic"; // Ensure runtime rendering

const FullMenu = async () => {
  const coffeeMenu = await prisma.menuItem.findMany({
    orderBy: {
      id: 'asc',
    },
    where: { category: "Coffee" },
  });

  const nonCoffeeMenu = await prisma.menuItem.findMany({
    orderBy: {
      id: 'asc',
    },
    where: { category: "NonCoffee" },
  });

  const addOnsMenu = await prisma.menuItem.findMany({
    orderBy: {
      id: 'asc',
    },
    where: { category: "AddOns" },
  });

  const packages = await prisma.package.findMany({
    orderBy: {
      id: 'asc',
    },
    include: {
      coffee: true, // Include related coffee menu items
      nonCoffee: true, // Include related non-coffee menu items
    },
  });

  return (
    <div className="min-h-screen bg-white pt-16">
      <Navbar />
      <div className="bg-white px-8 py-16 mx-auto">
        {/* Menu */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#171717] text-center mb-8">
          Our Menu
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          A menu crafted with passion—meet our food and drinks that captured our
          baristas&apos; hearts!
        </p>

        <div className="px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Coffee Menu */}
          <Card className="bg-[#f9f9f9] border-2 border-[#ffbd59] text-gray-900">
            <CardHeader>
              <CardTitle className="text-3xl">Coffee</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {coffeeMenu.map((item) => (
                <div key={item.id}>
                  <h4 className="text-lg font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                  <p className="text-sm font-bold">{`₱${item.price.toFixed(2)}`}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Non-Coffee Menu */}
          <Card className="bg-[#f9f9f9] border-2 border-[#ffbd59] text-gray-900">
            <CardHeader>
              <CardTitle className="text-3xl">Non-Coffee</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {nonCoffeeMenu.map((item) => (
                <div key={item.id}>
                  <h4 className="text-lg font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                  <p className="text-sm font-bold">{`₱${item.price.toFixed(2)}`}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Add-Ons Menu */}
          <Card className="bg-[#f9f9f9] border-2 border-[#ffbd59] text-gray-900">
            <CardHeader>
              <CardTitle className="text-3xl">Add-Ons</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {addOnsMenu.map((item) => (
                <div key={item.id}>
                  <h4 className="text-lg font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                  <p className="text-sm font-bold">{`₱${item.price.toFixed(2)}`}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Services */}
      <div className="bg-paper-texture mx-auto px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#171717] text-center mb-8">Our Packages</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {packages.map((pkg) => (
            <Card key={pkg.id} className="bg-[#f9f9f9] border-2 border-[#ffbd59] text-gray-900">
              <CardHeader>
                <CardTitle className="text-3xl">{pkg.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg font-semibold mb-2  text-gray-700">Price: ₱{pkg.price}</p>
                <p className="text-sm font-semibold mb-2 text-gray-700">Inclusions:</p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  {pkg.inclusions.map((inclusion, index) => (
                    <li key={index}>{inclusion}</li>
                  ))}
                </ul>
                <p className="text-sm font-semibold mb-2 text-gray-700">Coffee Selections:</p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  {pkg.coffee.map((item) => (
                    <li key={item.id}>{item.name}</li>
                  ))}
                </ul>
                <p className="text-sm font-semibold mb-2 text-gray-700">Non-Coffee Selections:</p>
                <ul className="list-disc pl-6 text-gray-700">
                  {pkg.nonCoffee.map((item) => (
                    <li key={item.id}>{item.name}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-xl text-gray-400 text-center mt-8">*Please send us a message for custom package.</p>
      </div>

      <Contact />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FullMenu;
