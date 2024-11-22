import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';

const CoffeeShopPage = () => {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Navbar />

      {/* Hero Section - Added pt-16 to account for fixed navbar */}
      <div className="relative h-[60vh] bg-black pt-16">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Beantalks Coffee
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Brewing happiness, one sip at a time

            </p>
            <Button size="lg" className="text-gray-600 bg-[#ffd159] hover:bg-[#ffbd59]">
              View Menu
            </Button>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="py-16 px-4 max-w-6xl mx-auto" id="about">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
          <p className="text-gray-600 mt-4">
            Discover the story behind Beantalks Coffee and what we do!
          </p>
        </div>
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-amber-600">Our Story</h3>
            <p className="text-gray-700 mt-2">
              Our journey began as a humble passion project at home, fueled by our profound love for coffee. What started with experimenting in our kitchen and sharing our craft with family has now grown into a space where we can share that same love and passion with the world.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-amber-600">Our Mission</h3>
            <p className="text-gray-700 mt-2">
              Our mission is to share our love for coffee with the world by crafting exceptional brews and serving quality food that everyone can enjoy. We are dedicated to delivering great taste at an affordable price—because everyone deserves to savor life&apos;s best moments.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-amber-600">Partnerships and Events</h3>
            <p className="text-gray-700 mt-2">
              Whether you&apos;re planning a cozy gathering, hosting a small event, or exploring a collaboration, we are here to make it happen!<br />
              <br /><strong>Event Reservations:</strong> We are excited to bring Beantalks experience to your special events with our mobile cart! Whether it&apos;s a wedding, corporate event, birthdays, or any other special events, our coffee cart is a great addition to your occassion!<br />
              <br /><strong>Brand Partnerships:</strong> We are always open to collaborating with local businesses, artists, and organizations. We are open to working together in creating something special for our community.
            </p>
          </div>
        </div>
      </div>


      {/* Contact Section */}
      <div className="py-16 px-4 bg-white" id="contact">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card
              className="bg-[#f9f9f9] border-2 border-[#ffbd59] text-gray-900 focus:ring-[#ffbd59] focus:border-[#ffbd59]"
            >
              <CardHeader>
                <CardTitle>Connect with us for events and partnerships!</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Your Name" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Your Email" />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      className="min-h-[120px]"
                    />
                  </div>
                  <Button className="w-full text-gray-600 bg-[#ffd159] hover:bg-[#ffbd59]">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card
              className="bg-[#f9f9f9] border-2 border-[#ffbd59] text-gray-900 focus:ring-[#ffbd59] focus:border-[#ffbd59]"
            >

              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-amber-600" />
                  <p>27 G. Del Pilar Street, Parang, Marikina City</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-amber-600" />
                  <p>(+63) 966 843 4064</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-amber-600" />
                  <p>beantalksph@gmail.com</p>
                </div>                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-amber-600" />
                  <div>
                    <p>Mon-Fri: 7am - 8pm</p>
                    <p>Sat-Sun: 8am - 9pm</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#333333] text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>© 2024 Beantalks Coffee PH. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default CoffeeShopPage;