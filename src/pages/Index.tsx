
import React, { useContext, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import FeaturedProducts from "@/components/FeaturedProducts";
import ServiceCategories from "@/components/ServiceCategories";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import MiniCart from "@/components/MiniCart";
import { CartContext } from "@/App";

const Index = () => {
  const { items, removeItem, updateQuantity } = useContext(CartContext);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        cartItemCount={items.reduce((sum, item) => sum + item.quantity, 0)} 
      />
      <main className="flex-grow">
        <HeroBanner />
        <FeaturedProducts />
        <ServiceCategories />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
      
      {isCartOpen && (
        <MiniCart 
          items={items} 
          onClose={() => setIsCartOpen(false)} 
          onRemoveItem={removeItem}
          onUpdateQuantity={updateQuantity}
        />
      )}
    </div>
  );
};

export default Index;
