
import React, { useContext } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CartContext } from "@/App";
import MiniCart from "@/components/MiniCart";
import { Check, Clock, MapPin, Trophy, Users } from "lucide-react";

const AboutPage = () => {
  const { items, removeItem, updateQuantity, isCartOpen, toggleCart } = useContext(CartContext);

  const stats = [
    { 
      icon: <Clock className="h-10 w-10 text-auto-blue" />,
      value: "10+",
      label: "лет опыта"
    },
    { 
      icon: <Users className="h-10 w-10 text-auto-blue" />,
      value: "25+",
      label: "квалифицированных сотрудников"
    },
    { 
      icon: <Trophy className="h-10 w-10 text-auto-blue" />,
      value: "5000+",
      label: "довольных клиентов"
    },
    { 
      icon: <MapPin className="h-10 w-10 text-auto-blue" />,
      value: "3",
      label: "сервисных центра"
    },
  ];

  const advantages = [
    "Прямые поставки оригинальных запчастей от производителей",
    "Высококвалифицированные механики с опытом работы более 5 лет",
    "Современное диагностическое и ремонтное оборудование",
    "Гарантия на все виды работ и запчасти",
    "Прозрачное ценообразование без скрытых платежей",
    "Соблюдение сроков выполнения работ"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-auto-light">
      <Navbar />
      
      {/* Hero section */}
      <div className="bg-gradient-to-r from-auto-dark to-auto-gray py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519752594763-2633e52e3a4c?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">О компании</h1>
            <p className="text-xl text-gray-100 mb-8">
              Мы – команда профессионалов, которая с 2015 года предоставляет 
              качественные услуги по продаже автозапчастей и обслуживанию автомобилей.
            </p>
          </div>
        </div>
      </div>
      
      {/* Our story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&q=80&w=2274" 
                alt="Our team" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Наша история</h2>
              <p className="text-gray-600 mb-6">
                Компания «АвтоЗапчасти» была основана в 2015 году группой энтузиастов, увлеченных автомобилями и стремящихся предоставить качественные услуги на автомобильном рынке России.
              </p>
              <p className="text-gray-600 mb-6">
                Начиная с небольшого магазина запчастей, мы постепенно расширяли ассортимент и спектр услуг. В 2017 году был открыт первый сервисный центр, а к 2020 году наша компания имела уже 3 полноценных сервисных центра в разных районах города.
              </p>
              <p className="text-gray-600">
                Сегодня «АвтоЗапчасти» – это современная компания с репутацией надежного партнера для владельцев автомобилей. Мы постоянно развиваемся, внедряем новые технологии и повышаем квалификацию наших сотрудников для того, чтобы предоставлять сервис высшего качества.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Компания в цифрах</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-auto-light rounded-lg p-6 text-center card-shadow">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-auto-blue mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our advantages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Наши преимущества</h2>
              <p className="text-gray-600 mb-8">
                Мы стремимся предоставлять клиентам сервис высочайшего качества и делаем все возможное, 
                чтобы каждое обращение в нашу компанию было максимально комфортным и эффективным.
              </p>
              
              <ul className="space-y-4">
                {advantages.map((advantage, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1">
                      <Check className="h-5 w-5 text-auto-blue" />
                    </div>
                    <span>{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&q=80&w=2064" 
                alt="Our advantages" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our team */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center">Наша команда</h2>
          <p className="text-xl text-gray-600 mb-10 text-center">Профессионалы своего дела</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Александр Петров",
                position: "Генеральный директор",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=774"
              },
              {
                name: "Елена Смирнова",
                position: "Главный механик",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=776"
              },
              {
                name: "Дмитрий Козлов",
                position: "Руководитель отдела запчастей",
                image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=774"
              },
              {
                name: "Наталья Иванова",
                position: "Менеджер по клиентскому сервису",
                image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=764"
              }
            ].map((member, index) => (
              <div key={index} className="card-shadow">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-gray-600">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="bg-auto-blue py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Станьте нашим клиентом
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Присоединяйтесь к тысячам довольных клиентов, которые уже оценили качество нашего сервиса.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-auto-blue hover:bg-gray-100 font-bold py-3 px-8 text-lg">
                Связаться с нами
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/10 font-bold py-3 px-8 text-lg">
                Наши контакты
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      
      {isCartOpen && (
        <MiniCart 
          items={items} 
          onClose={toggleCart} 
          onRemoveItem={removeItem}
          onUpdateQuantity={updateQuantity}
        />
      )}
    </div>
  );
};

export default AboutPage;
