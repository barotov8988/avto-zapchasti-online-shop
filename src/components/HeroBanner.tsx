
import React from "react";
import { Button } from "@/components/ui/button";

const HeroBanner: React.FC = () => {
  return (
    <div className="relative bg-auto-gray overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-auto-gray to-auto-blue opacity-90" />
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Качественные автозапчасти и профессиональный ремонт
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Большой выбор оригинальных и аналоговых запчастей для автомобилей. 
            Полный спектр услуг по ремонту и обслуживанию.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-auto-red hover:bg-red-700 text-white font-bold py-3 px-6 text-lg">
              Каталог запчастей
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-auto-blue font-bold py-3 px-6 text-lg">
              Записаться на ремонт
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
