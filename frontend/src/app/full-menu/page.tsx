import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Navbar from '@/components/Navbar';

const drinksMenu = [
  { name: "Spanish Latte", description: "Extra rich drink made with two types of milk and a strong espresso shot.", price: "₱120" },
  { name: "Biscoff Latte", description: "Sweet and spiced flavor of Biscoff Latte made with Lotus Biscoff cookies and a smooth espresso base topped with lotus biscoff biscuit.", price: "₱160" },
  { name: "Creamy Strawberry", description: "Sweet and refreshing milk with strawberry bits.", price: "₱110" },
];

const foodMenu = [
  { name: "Fudgy Brownies", description: "Melt-in-your-mouth fudgy brownies, packed with chocolatey goodness in every bite.", price: "₱230" },
  { name: "Baked Biscoff Cheesecake", description: "Creamy cheesecake with the perfect balance of sweet Biscoff flavor, topped with a Lotus Biscoff biscuit.", price: "₱150" },
  { name: "Classic Chocolate Cookie", description: "Perfect blend of buttery dough and rich chocolate chips, baked to perfection.", price: "₱40" },
];

const FullMenu = () => {
  return (
    <div className="min-h-screen bg-[#fafafa] pt-32"> {/* Add pt-16 for top padding */}
      <Navbar />
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#171717] text-center mb-8">Our Menu</h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          A menu crafted with passion—meet our food and drinks that captured our baristas&apos; hearts!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Drinks Card */}
          <Card className="bg-[#f9f9f9] border-2 border-[#ffbd59] text-gray-900">
            <CardHeader>
              <CardTitle className="text-3xl">Drinks</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {drinksMenu.map((item, index) => (
                <div key={index}>
                  <h4 className="text-lg font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                  <p className="text-sm font-bold">{item.price}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Food Card */}
          <Card className="bg-[#f9f9f9] border-2 border-[#ffbd59] text-gray-900">
            <CardHeader>
              <CardTitle className="text-3xl">Food</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {foodMenu.map((item, index) => (
                <div key={index}>
                  <h4 className="text-lg font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                  <p className="text-sm font-bold">{item.price}</p>
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