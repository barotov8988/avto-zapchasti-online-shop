
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, MessageSquare } from "lucide-react";

interface Review {
  id: number;
  author: string;
  text: string;
  rating: number;
  date: string;
}

interface Mechanic {
  id: number;
  name: string;
  position: string;
  photo: string;
  experience: number;
  specializations: string[];
  carBrands: string[];
  skills: Array<{name: string, level: number}>;
  reviews: Review[];
}

const renderStars = (rating: number) => {
  return Array(5)
    .fill(0)
    .map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
        }`}
      />
    ));
};

const MechanicProfile: React.FC<{ mechanic: Mechanic }> = ({ mechanic }) => {
  return (
    <Card className="mb-8">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/4">
            <div className="aspect-ratio-1/1 rounded-lg overflow-hidden mb-4">
              <Avatar className="h-48 w-48 border-4 border-auto-blue rounded-lg">
                <AvatarImage src={mechanic.photo} alt={mechanic.name} className="object-cover" />
                <AvatarFallback className="text-4xl bg-auto-blue text-white">
                  {mechanic.name.split(" ").map(n => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
            </div>
            <h3 className="text-2xl font-bold">{mechanic.name}</h3>
            <p className="text-auto-blue font-medium mb-2">{mechanic.position}</p>
            <p className="text-gray-600 mb-4">
              Опыт работы: <span className="font-semibold">{mechanic.experience} лет</span>
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {mechanic.specializations.map((spec, index) => (
                <Badge key={index} className="bg-auto-blue hover:bg-blue-700">{spec}</Badge>
              ))}
            </div>
          </div>
          
          <div className="md:w-3/4">
            <Tabs defaultValue="brands">
              <TabsList className="mb-6">
                <TabsTrigger value="brands">Марки автомобилей</TabsTrigger>
                <TabsTrigger value="skills">Навыки</TabsTrigger>
                <TabsTrigger value="reviews">Отзывы клиентов</TabsTrigger>
              </TabsList>
              
              <TabsContent value="brands" className="pt-2">
                <h4 className="text-xl font-semibold mb-4">Специализация по маркам</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {mechanic.carBrands.map((brand, index) => (
                    <div 
                      key={index} 
                      className="bg-gray-100 rounded-lg p-4 text-center hover:bg-gray-200 transition-colors"
                    >
                      <p className="font-medium">{brand}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="skills" className="pt-2">
                <h4 className="text-xl font-semibold mb-4">Профессиональные навыки</h4>
                <div className="space-y-4">
                  {mechanic.skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <div className="flex">{renderStars(skill.level)}</div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="bg-auto-blue h-2.5 rounded-full" 
                          style={{ width: `${(skill.level / 5) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="pt-2">
                <h4 className="text-xl font-semibold mb-4">
                  Отзывы клиентов 
                  <span className="text-gray-500 text-base ml-2">
                    ({mechanic.reviews.length})
                  </span>
                </h4>
                <div className="space-y-6">
                  {mechanic.reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0">
                      <div className="flex justify-between mb-2">
                        <div className="font-medium">{review.author}</div>
                        <div className="text-gray-500 text-sm">{review.date}</div>
                      </div>
                      <div className="flex mb-3">{renderStars(review.rating)}</div>
                      <p className="text-gray-600">{review.text}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MechanicProfile;
