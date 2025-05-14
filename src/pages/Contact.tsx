
import React, { useContext } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CartContext } from "@/App";
import MiniCart from "@/components/MiniCart";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react";
import { toast } from "sonner";

const ContactPage = () => {
  const { items, removeItem, updateQuantity, isCartOpen, toggleCart } = useContext(CartContext);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, you would send the form data to a server
    toast.success("Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.");
    
    // Reset form
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  // Contact information
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-auto-red" />,
      title: "Адрес",
      details: [
        "ул. Автомобильная, 123",
        "г. Москва, 123456"
      ]
    },
    {
      icon: <Phone className="h-6 w-6 text-auto-red" />,
      title: "Телефон",
      details: [
        "+7 (123) 456-78-90",
        "+7 (123) 456-78-91"
      ]
    },
    {
      icon: <Mail className="h-6 w-6 text-auto-red" />,
      title: "Email",
      details: [
        "info@авто-запчасти.рф",
        "support@авто-запчасти.рф"
      ]
    },
    {
      icon: <Clock className="h-6 w-6 text-auto-red" />,
      title: "Режим работы",
      details: [
        "Пн-Пт: 9:00-20:00",
        "Сб-Вс: 10:00-18:00"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-auto-light">
      <Navbar />
      
      {/* Hero section */}
      <div className="bg-gradient-to-r from-auto-blue to-auto-dark py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581270995889-a6a6cb7579cc?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Контакты</h1>
            <p className="text-xl text-gray-100 mb-8">
              Свяжитесь с нами любым удобным способом, и мы с радостью 
              ответим на все ваши вопросы и поможем решить любые проблемы.
            </p>
          </div>
        </div>
      </div>
      
      {/* Contact info and form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact info */}
            <div className="lg:col-span-1 space-y-8">
              <h2 className="text-2xl font-bold mb-8">Наши контакты</h2>
              
              {contactInfo.map((info, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
              
              <div className="pt-6">
                <h3 className="font-bold text-lg mb-4">Мы в социальных сетях</h3>
                <div className="flex gap-4">
                  <a href="#" className="bg-auto-blue hover:bg-blue-700 text-white p-3 rounded-full transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-auto-blue hover:bg-blue-700 text-white p-3 rounded-full transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm6.5-.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM12 4c-2.474 0-2.878.007-4.029.058-.784.037-1.31.142-1.798.332-.434.168-.747.369-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029.037.783.142 1.31.331 1.797.17.435.37.748.702 1.08.337.336.65.537 1.08.703.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058.782-.037 1.309-.142 1.797-.331.433-.169.748-.37 1.08-.702.337-.337.538-.65.704-1.08.19-.493.296-1.02.332-1.8.052-1.104.058-1.49.058-4.029 0-2.474-.007-2.878-.058-4.029-.037-.782-.142-1.31-.332-1.798a2.911 2.911 0 0 0-.703-1.08 2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4Zm0-2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2Z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-auto-blue hover:bg-blue-700 text-white p-3 rounded-full transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 2.8 9.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.093 4.093 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 18.407a11.615 11.615 0 0 0 6.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="bg-auto-blue hover:bg-blue-700 text-white p-3 rounded-full transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816Zm-10.615 12.816v-8l8 3.993-8 4.007Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg p-8 shadow-md">
                <h2 className="text-2xl font-bold mb-6">Отправьте нам сообщение</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Имя</label>
                      <Input id="name" required placeholder="Ваше имя" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                      <Input id="email" type="email" required placeholder="your@email.com" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">Телефон</label>
                    <Input id="phone" placeholder="+7 (___) ___-__-__" />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">Тема</label>
                    <Input id="subject" required placeholder="Тема сообщения" />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Сообщение</label>
                    <Textarea 
                      id="message" 
                      required
                      placeholder="Введите ваше сообщение..." 
                      className="min-h-[150px]" 
                    />
                  </div>
                  
                  <div className="flex justify-end">
                    <Button type="submit" className="bg-auto-blue hover:bg-blue-700 flex items-center gap-2">
                      <Send size={18} />
                      Отправить сообщение
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Как нас найти</h2>
          
          <div className="aspect-[16/9] w-full rounded-lg overflow-hidden shadow-lg">
            {/* Replace with actual map or iframe */}
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.3164651474894!2d37.61778081574771!3d55.75468999963631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2z0JzQvtGB0LrQvtCy0YHQutC40Lkg0JrRgNC10LzQu9GM!5e0!3m2!1sru!2sru!4v1645091650494!5m2!1sru!2sru" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Карта"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quick contact */}
      <section className="py-16 bg-auto-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Нужна быстрая связь?</h2>
          <p className="text-xl text-white/80 mb-8">Позвоните нам или напишите в онлайн-чат</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-auto-blue hover:bg-gray-100 text-lg px-8 py-6 flex items-center gap-2">
              <Phone size={20} />
              +7 (123) 456-78-90
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/10 text-lg px-8 py-6 flex items-center gap-2">
              <MessageSquare size={20} />
              Начать чат
            </Button>
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

export default ContactPage;
