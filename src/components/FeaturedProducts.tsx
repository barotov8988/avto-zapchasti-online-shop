
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
}

const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Масляный фильтр премиум",
    price: 950,
    image: "/placeholder.svg",
    category: "Фильтры",
    isNew: true,
  },
  {
    id: 2,
    name: "Тормозные колодки керамические",
    price: 3200,
    image: "/placeholder.svg",
    category: "Тормозная система",
    isSale: true,
  },
  {
    id: 3,
    name: "Свечи зажигания иридиевые",
    price: 1800,
    image: "/placeholder.svg",
    category: "Зажигание",
  },
  {
    id: 4,
    name: "Амортизаторы передние",
    price: 7500,
    image: "/placeholder.svg",
    category: "Подвеска",
  }
];

const FeaturedProducts: React.FC = () => {
  return (
    <section className="bg-auto-light py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-auto-gray mb-4">
            Популярные товары
          </h2>
          <p className="text-xl text-auto-gray/80 max-w-2xl mx-auto">
            Самые востребованные и качественные запчасти для вашего автомобиля
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="border border-gray-200 hover:shadow-lg transition-shadow overflow-hidden group">
              <div className="relative h-48 bg-gray-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
                {product.isNew && (
                  <Badge className="absolute top-2 left-2 bg-auto-blue text-white">Новинка</Badge>
                )}
                {product.isSale && (
                  <Badge className="absolute top-2 left-2 bg-auto-red text-white">Скидка</Badge>
                )}
              </div>
              <CardContent className="pt-4">
                <div className="text-sm text-auto-red mb-1">{product.category}</div>
                <h3 className="font-semibold text-lg mb-2 text-auto-gray">{product.name}</h3>
                <div className="text-xl font-bold text-auto-blue">{product.price} ₽</div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button className="w-full bg-auto-blue hover:bg-auto-gray">
                  <ShoppingCart className="mr-2 h-4 w-4" /> В корзину
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-auto-blue hover:bg-auto-gray text-white px-8 py-6 text-lg">
            Смотреть все товары
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
