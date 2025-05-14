
import React, { useContext } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CartContext } from "@/App";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Масло моторное синтетическое 5W-30",
    price: 2500,
    image: "https://via.placeholder.com/200x200?text=Oil",
    category: "Масла"
  },
  {
    id: 2,
    name: "Воздушный фильтр универсальный",
    price: 850,
    image: "https://via.placeholder.com/200x200?text=Filter",
    category: "Фильтры"
  },
  {
    id: 3,
    name: "Комплект тормозных колодок",
    price: 1650,
    image: "https://via.placeholder.com/200x200?text=Brakes",
    category: "Тормоза"
  },
  {
    id: 4,
    name: "Свечи зажигания (комплект 4 шт.)",
    price: 1200,
    image: "https://via.placeholder.com/200x200?text=Spark",
    category: "Электрика"
  }
];

const FeaturedProducts: React.FC = () => {
  const { addItem } = useContext(CartContext);
  
  return (
    <section className="bg-auto-gray/5 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-auto-gray mb-4">
            Популярные товары
          </h2>
          <p className="text-xl text-auto-gray/80 max-w-2xl mx-auto">
            Качественные запчасти для вашего автомобиля с гарантией
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square bg-white flex items-center justify-center p-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full object-contain"
                />
              </div>
              <CardContent className="p-4">
                <div className="text-sm text-auto-blue/80 mb-1">{product.category}</div>
                <h3 className="font-medium text-auto-gray mb-2 line-clamp-2">{product.name}</h3>
                <div className="flex items-center justify-between mt-4">
                  <div className="text-auto-blue font-bold">{product.price} ₽</div>
                  <Button 
                    size="sm" 
                    onClick={() => addItem(product)}
                    className="bg-auto-blue hover:bg-auto-gray"
                  >
                    В корзину
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/catalog"
            className="inline-block bg-auto-gray hover:bg-auto-blue text-white px-8 py-3 rounded-md transition-colors text-lg font-medium"
          >
            Весь каталог
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
