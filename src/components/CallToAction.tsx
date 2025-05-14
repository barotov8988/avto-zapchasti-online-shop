
import React from "react";
import { Button } from "@/components/ui/button";

const CallToAction: React.FC = () => {
  return (
    <section className="bg-auto-blue py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Нужна консультация специалиста?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Если у вас есть вопросы по подбору запчастей или необходимому ремонту,
            наши специалисты готовы вам помочь.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-auto-blue hover:bg-gray-100 text-lg px-8 py-6">
              Заказать звонок
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/10 text-lg px-8 py-6">
              Написать в чат
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
