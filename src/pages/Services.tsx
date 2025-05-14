
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Car, Wrench, Settings } from "lucide-react";
import { CartContext } from "@/App";
import { useContext } from "react";
import MiniCart from "@/components/MiniCart";

// Sample service data
const services = [
  {
    id: 1,
    title: "Техническое обслуживание",
    description: "Регулярное ТО с заменой всех необходимых жидкостей и фильтров для поддержания вашего автомобиля в идеальном состоянии.",
    price: "от 2 500 ₽",
    duration: "1-3 часа",
    icon: <Car className="h-8 w-8" />
  },
  {
    id: 2,
    title: "Диагностика ходовой части",
    description: "Профессиональная проверка состояния подвески, тормозной системы и рулевого управления.",
    price: "от 1 200 ₽",
    duration: "30-60 минут",
    icon: <Settings className="h-8 w-8" />
  },
  {
    id: 3,
    title: "Ремонт двигателя",
    description: "Комплексный ремонт и восстановление работоспособности двигателя любой сложности.",
    price: "от 5 000 ₽",
    duration: "от 1 дня",
    icon: <Wrench className="h-8 w-8" />
  },
  {
    id: 4,
    title: "Замена масла и фильтров",
    description: "Замена масла в двигателе и всех необходимых фильтров с использованием качественных материалов.",
    price: "от 1 800 ₽",
    duration: "30-60 минут",
    icon: <Car className="h-8 w-8" />
  },
  {
    id: 5,
    title: "Компьютерная диагностика",
    description: "Полная диагностика электронных систем автомобиля с выявлением ошибок и неисправностей.",
    price: "от 1 500 ₽",
    duration: "30-60 минут",
    icon: <Settings className="h-8 w-8" />
  },
  {
    id: 6,
    title: "Ремонт тормозной системы",
    description: "Замена тормозных колодок, дисков и ремонт тормозной системы любой сложности.",
    price: "от 2 000 ₽",
    duration: "1-3 часа",
    icon: <Wrench className="h-8 w-8" />
  }
];

// Quality metrics
const qualityMetrics = [
  { label: "Качество работ", value: 95 },
  { label: "Скорость обслуживания", value: 90 },
  { label: "Уровень сервиса", value: 98 },
  { label: "Соотношение цена/качество", value: 92 }
];

// Work process steps
const workProcess = [
  {
    number: "01",
    title: "Запись и консультация",
    description: "Запишитесь на удобное время и получите предварительную консультацию по вашему вопросу."
  },
  {
    number: "02",
    title: "Диагностика",
    description: "Наши специалисты проведут детальную диагностику вашего автомобиля и выявят все проблемы."
  },
  {
    number: "03",
    title: "Согласование работ",
    description: "Мы предоставим детальный план работ с указанием сроков и стоимости и согласуем его с вами."
  },
  {
    number: "04",
    title: "Выполнение работ",
    description: "Высококвалифицированные мастера выполнят все необходимые работы на современном оборудовании."
  }
];

const Services = () => {
  const { items, removeItem, updateQuantity, isCartOpen, toggleCart } = useContext(CartContext);
  
  return (
    <div className="min-h-screen flex flex-col bg-auto-light">
      <Navbar />
      
      {/* Hero section */}
      <div className="bg-gradient-to-r from-auto-blue to-blue-800 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1613214143545-e0e4664744ef?auto=format&fit=crop&q=80&w=2274')] bg-cover bg-center opacity-15"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Услуги автосервиса</h1>
            <p className="text-xl text-gray-100 mb-8">
              Профессиональное обслуживание и ремонт автомобилей любых марок и моделей.
              Гарантия качества и доступные цены.
            </p>
            <Button size="lg" className="bg-auto-red hover:bg-red-700 text-white font-bold py-3 px-6 text-lg">
              Записаться на сервис
            </Button>
          </div>
        </div>
      </div>
      
      {/* Services list */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2">Наши услуги</h2>
          <p className="text-xl text-gray-600 mb-10">Полный комплекс услуг по обслуживанию и ремонту автомобилей</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(service => (
              <Card key={service.id} className="card-shadow">
                <CardContent className="p-6">
                  <div className="bg-auto-blue/10 rounded-full p-3 inline-block mb-4 text-auto-blue">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex justify-between mb-4">
                    <div>
                      <span className="text-gray-500 text-sm">Цена</span>
                      <p className="font-bold text-auto-blue">{service.price}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-gray-500 text-sm">Время</span>
                      <p className="font-medium">{service.duration}</p>
                    </div>
                  </div>
                  <Button className="w-full bg-auto-blue hover:bg-blue-700">Записаться</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why choose us */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Почему выбирают наш сервис</h2>
              <p className="text-gray-600 mb-8">
                Мы предоставляем полный комплекс услуг по ремонту и техническому обслуживанию автомобилей. 
                Наши мастера имеют многолетний опыт работы и регулярно проходят обучение.
              </p>
              
              <div className="space-y-6">
                {qualityMetrics.map((metric, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{metric.label}</span>
                      <span className="font-bold">{metric.value}%</span>
                    </div>
                    <Progress value={metric.value} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&q=80&w=2274" 
                alt="Auto service" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Work process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center">Как мы работаем</h2>
          <p className="text-xl text-gray-600 mb-10 text-center">Простой и удобный процесс обслуживания</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workProcess.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-lg p-6 card-shadow h-full flex flex-col">
                  <div className="text-4xl font-bold text-auto-blue mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < workProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/3 right-0 -mr-4 z-10">
                    <div className="w-8 h-8 bg-auto-blue rounded-full text-white flex items-center justify-center">→</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="bg-auto-gray py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Запишитесь на сервис сегодня
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Наши специалисты проведут полную диагностику вашего автомобиля 
              и предложат оптимальные решения для его обслуживания и ремонта.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-auto-red hover:bg-red-700 text-white font-bold py-3 px-8 text-lg">
                Записаться онлайн
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/10 font-bold py-3 px-8 text-lg">
                +7 (123) 456-78-90
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

export default Services;
