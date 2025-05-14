
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  id: number;
  name: string;
  car: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Александр П.",
    car: "Toyota Camry",
    text: "Отличный сервис! Быстро нашли и заменили нужную запчасть. Сделали все в срок, как и обещали.",
    rating: 5
  },
  {
    id: 2,
    name: "Елена С.",
    car: "Volkswagen Polo",
    text: "Регулярно обслуживаю свой автомобиль в этом сервисе. Всегда качественная работа и адекватные цены.",
    rating: 5
  },
  {
    id: 3,
    name: "Дмитрий К.",
    car: "Kia Sportage",
    text: "Заказывал запчасти через интернет-магазин, всё пришло быстро. Сделали ТО грамотно, обнаружили скрытые проблемы.",
    rating: 4
  }
];

const Star: React.FC<{ filled: boolean }> = ({ filled }) => (
  <svg
    className={`w-5 h-5 ${filled ? "text-yellow-400" : "text-gray-300"}`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M10 1l2.598 6.764h6.78l-5.414 4.067 2.598 6.765L10 14.53l-6.562 4.067 2.598-6.765L.622 7.764h6.78L10 1z"
      clipRule="evenodd"
    />
  </svg>
);

const Rating: React.FC<{ value: number }> = ({ value }) => {
  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star key={star} filled={star <= value} />
      ))}
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section className="bg-auto-gray/5 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-auto-gray mb-4">
            Отзывы клиентов
          </h2>
          <p className="text-xl text-auto-gray/80 max-w-2xl mx-auto">
            Что говорят наши клиенты о качестве обслуживания и запчастях
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white shadow hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Rating value={testimonial.rating} />
                </div>
                <p className="text-auto-gray mb-6 italic">"{testimonial.text}"</p>
                <div className="font-semibold text-auto-gray">{testimonial.name}</div>
                <div className="text-sm text-auto-gray/70">{testimonial.car}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
