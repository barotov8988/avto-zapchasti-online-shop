
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Car, Wrench, Settings, FileSpanners } from "lucide-react";

interface ServiceCategory {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const serviceCategories: ServiceCategory[] = [
  {
    id: 1,
    title: "Диагностика",
    description: "Компьютерная диагностика всех систем автомобиля с помощью профессионального оборудования.",
    icon: <Car className="text-auto-blue h-8 w-8" />
  },
  {
    id: 2,
    title: "Ремонт двигателя",
    description: "Капитальный ремонт, замена узлов и агрегатов, регулировка клапанов и ГРМ.",
    icon: <Wrench className="text-auto-blue h-8 w-8" />
  },
  {
    id: 3,
    title: "Ремонт ходовой части",
    description: "Замена амортизаторов, пружин, рычагов, сайлентблоков и других элементов подвески.",
    icon: <Settings className="text-auto-blue h-8 w-8" />
  },
  {
    id: 4,
    title: "Плановое ТО",
    description: "Регулярное техническое обслуживание по регламенту с использованием качественных материалов.",
    icon: <FileSpanners className="text-auto-blue h-8 w-8" />
  }
];

const ServiceCategories: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-auto-gray mb-4">
            Услуги автосервиса
          </h2>
          <p className="text-xl text-auto-gray/80 max-w-2xl mx-auto">
            Полный спектр услуг по ремонту и техническому обслуживанию автомобилей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceCategories.map((category) => (
            <Card key={category.id} className="border-l-4 border-l-auto-blue hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">{category.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-auto-gray mb-2">{category.title}</h3>
                    <p className="text-auto-gray/80">{category.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="/services" 
            className="inline-block bg-auto-gray hover:bg-auto-blue text-white px-8 py-3 rounded-md transition-colors text-lg font-medium"
          >
            Все услуги автосервиса
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
