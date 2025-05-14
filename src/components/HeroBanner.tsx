
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroBanner: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-auto-blue to-auto-dark overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599962314877-19228d07ae18?q=80&w=1074&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat mix-blend-overlay" />
      <div className="container mx-auto px-4 py-28 sm:py-36 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
            Качественные автозапчасти и профессиональный сервис
          </h1>
          <p className="text-xl text-gray-100 mb-8">
            Большой выбор оригинальных и аналоговых запчастей для автомобилей. 
            Полный спектр услуг по ремонту и обслуживанию.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-auto-red hover:bg-red-700 text-white font-bold text-lg">
              <Link to="/catalog">
                Каталог запчастей
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white/10 font-bold text-lg">
              <Link to="/services">
                Запись на сервис
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
