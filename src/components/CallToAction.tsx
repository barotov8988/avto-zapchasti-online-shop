
import React from "react";
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare } from "lucide-react";

const CallToAction: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-auto-blue to-blue-800 py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526626607369-4f1e8c7daee1?q=80&w=1074&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Нужна консультация специалиста?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Если у вас есть вопросы по подбору запчастей или необходимому ремонту,
            наши специалисты готовы вам помочь в любое время.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-auto-blue hover:bg-gray-100 text-lg px-8 py-6 flex items-center gap-2">
              <Phone size={20} />
              <span>Заказать звонок</span>
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/10 text-lg px-8 py-6 flex items-center gap-2">
              <MessageSquare size={20} />
              <span>Написать в чат</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
