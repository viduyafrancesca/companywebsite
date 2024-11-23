import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import { PrismaClient } from "@prisma/client";

// Initialize Prisma Client
const prisma = new PrismaClient();

const FullMenu = async () => {
  // Fetch data from the database for each category
  const coffeeMenu = await prisma.menuItem.findMany({
    where: { category: "Coffee" },
  });

  const nonCoffeeMenu = await prisma.menuItem.findMany({
    where: { category: "NonCoffee" },
  });

  const addOnsMenu = await prisma.menuItem.findMany({
    where: { category: "AddOns" },
  });

  return (
    <div className="min-h-screen bg-[#fafafa] pt-32">
      <Navbar />
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#171717] text-center mb-8">Our Menu</h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          A menu crafted with passion—meet our food and drinks that captured our baristas&apos; hearts!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
    </div>
  );
};

export default FullMenu;
