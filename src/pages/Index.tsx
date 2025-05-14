
import React, { useContext } from "react";
import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import FeaturedProducts from "@/components/FeaturedProducts";
import ServiceCategories from "@/components/ServiceCategories";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import MiniCart from "@/components/MiniCart";
import { CartContext } from "@/App";
import { Toaster } from "@/components/ui/sonner";

const Index = () => {
  const { items, removeItem, updateQuantity, isCartOpen, toggleCart } = useContext(CartContext);

  return (
    <div className="min-h-screen flex flex-col bg-auto-light">
      <Navbar />
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
          onClose={toggleCart} 
          onRemoveItem={removeItem}
          onUpdateQuantity={updateQuantity}
        />
      )}
      <Toaster />
    </div>
  );
};

export default Index;
