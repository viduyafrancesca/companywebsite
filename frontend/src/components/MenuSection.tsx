'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';

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

const MenuSection = () => {
    return (

        <div className="bg-white py-16 px-4" id="menu">
            <div className="container mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-[#171717] text-center mb-8">Menu & Services</h2>
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
                    <Card className="bg-[#f9f9f9] border-2 border-[#ffbd59] text-gray-900 rounded-lg shadow-md">
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

                {/* Mobile Coffee Cart Section */}
                <div className="mt-16 bg-[#f9f9f9] border-2 border-[#ffbd59] p-8 rounded-lg shadow-md">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        {/* Description */}
                        <div>
                            <h3 className="text-4xl font-bold text-[#171717] mb-4">Mobile Coffee Cart</h3>
                            <p className="text-lg text-gray-600 mb-4">
                                Bring the café experience to your events with our mobile coffee cart! Perfect for weddings, parties, and corporate events,
                                our cart comes equipped with skilled baristas and a customizable menu to suit your preferences.
                            </p>
                            <p className="text-lg text-gray-600 mb-4">
                                Make your event unforgettable with our specialty food and drinks!
                            </p>
                        </div>

                        {/* Image */}
                        <div className="grid grid-cols-2 gap-4">
                            <Image
                                src="/images/services/cart-goodies.jpg"
                                alt="Beantalks Cookies and Drip Coffee"
                                width={800}
                                height={600}
                                layout="responsive"
                                className="rounded-lg shadow-lg"
                            />
                            <Image
                                src="/images/services/cart-overview-2.jpg"
                                alt="Beantalks Coffee Event"
                                width={800}
                                height={600}
                                layout="responsive"
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>

                {/* Full Menu Button */}
                <div className="text-center mt-8">
                    <Link href="full-menu">
                        <button className="px-6 py-3 rounded-lg bg-[#ffd159] text-gray-700 font-semibold hover:bg-[#ffbd59]">
                            View Full Menu and Services
                        </button>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default MenuSection;
