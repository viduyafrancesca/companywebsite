import React from 'react';
import Navbar from '@/components/Navbar';
import MenuSection from '@/components/MenuSection'; 
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import '@fortawesome/fontawesome-free/css/all.min.css';



const CoffeeShopPage = () => {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Navbar />

      {/* Hero Section - Added pt-16 to account for fixed navbar */}
      <div className="relative h-[60vh] bg-black pt-16 bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-with-overlay-1.png')" }}>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Beantalks Coffee
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Brewing happiness, one sip at a time

            </p>
          </div>
        </div>
      </div>
      
      {/* Menu Section */}
      <MenuSection />

      {/* About Us Section */}
      <div className="py-16 px-4 mx-auto" id="about">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#171717] text-center mb-8">About Us</h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Discover the story behind Beantalks Coffee and what we do!
          </p>
        </div>
        <div className="space-y-8 px-4">
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
      <Contact />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default CoffeeShopPage;