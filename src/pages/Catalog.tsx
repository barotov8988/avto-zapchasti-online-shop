
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { ShoppingCart, Search, Filter } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CartContext } from "@/App";
import { useContext } from "react";
import MiniCart from "@/components/MiniCart";

// Sample product data
const products = [
  {
    id: 1,
    name: "Тормозные колодки Brembo",
    price: 2500,
    image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJha2UlMjBwYWRzfGVufDB8fDB8fHww",
    category: "Тормозная система",
    brand: "Brembo",
    compatibility: ["Toyota", "Honda", "Nissan"]
  },
  {
    id: 2,
    name: "Масляный фильтр Bosch",
    price: 650,
    image: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b2lsJTIwZmlsdGVyfGVufDB8fDB8fHww",
    category: "Фильтры",
    brand: "Bosch",
    compatibility: ["Volkswagen", "BMW", "Mercedes"]
  },
  {
    id: 3,
    name: "Амортизаторы KYB",
    price: 3800,
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3VzcGVuc2lvbnxlbnwwfHwwfHx8MA%3D%3D",
    category: "Подвеска",
    brand: "KYB",
    compatibility: ["Toyota", "Honda", "Mazda"]
  },
  {
    id: 4,
    name: "Свечи зажигания NGK",
    price: 950,
    image: "https://images.unsplash.com/photo-1611044748418-bcdd1debf6df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BhcmslMjBwbHVnfGVufDB8fDB8fHww",
    category: "Система зажигания",
    brand: "NGK",
    compatibility: ["Toyota", "Honda", "Subaru", "Nissan"]
  },
  {
    id: 5,
    name: "Ремень ГРМ Continental",
    price: 1750,
    image: "https://images.unsplash.com/photo-1676322559689-1f53832dc1a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRpbWluZyUyMGJlbHR8ZW58MHx8MHx8fDA%3D",
    category: "Привод ГРМ",
    brand: "Continental",
    compatibility: ["Volkswagen", "Audi", "Skoda"]
  },
  {
    id: 6,
    name: "Воздушный фильтр MANN",
    price: 780,
    image: "https://images.unsplash.com/photo-1635583269533-5ae49b6aa006?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWlyJTIwZmlsdGVyfGVufDB8fDB8fHww",
    category: "Фильтры",
    brand: "MANN",
    compatibility: ["BMW", "Mercedes", "Volkswagen"]
  }
];

const categories = ["Все", "Тормозная система", "Фильтры", "Подвеска", "Система зажигания", "Привод ГРМ"];
const brands = ["Все", "Brembo", "Bosch", "KYB", "NGK", "Continental", "MANN"];
const carModels = ["Все", "Toyota", "Honda", "Nissan", "BMW", "Mercedes", "Volkswagen", "Audi", "Skoda", "Mazda", "Subaru"];

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [selectedBrand, setSelectedBrand] = useState("Все");
  const [selectedCar, setSelectedCar] = useState("Все");
  const [showFilters, setShowFilters] = useState(false);
  
  const { items, addItem, removeItem, updateQuantity, isCartOpen, toggleCart } = useContext(CartContext);

  const filteredProducts = products.filter(product => {
    // Filter by search term
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter by category
    const matchesCategory = selectedCategory === "Все" || product.category === selectedCategory;
    
    // Filter by brand
    const matchesBrand = selectedBrand === "Все" || product.brand === selectedBrand;
    
    // Filter by car model
    const matchesCar = selectedCar === "Все" || product.compatibility.includes(selectedCar);
    
    return matchesSearch && matchesCategory && matchesBrand && matchesCar;
  });

  return (
    <div className="min-h-screen flex flex-col bg-auto-light">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Каталог автозапчастей</h1>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters - Desktop */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-md p-4">
              <h2 className="font-bold text-lg mb-3">Фильтры</h2>
              <Separator className="mb-4" />
              
              <div className="mb-4">
                <label className="font-medium mb-2 block">Категория</label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Выберите категорию" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="mb-4">
                <label className="font-medium mb-2 block">Производитель</label>
                <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Выберите бренд" />
                  </SelectTrigger>
                  <SelectContent>
                    {brands.map(brand => (
                      <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="mb-4">
                <label className="font-medium mb-2 block">Автомобиль</label>
                <Select value={selectedCar} onValueChange={setSelectedCar}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Выберите модель" />
                  </SelectTrigger>
                  <SelectContent>
                    {carModels.map(car => (
                      <SelectItem key={car} value={car}>{car}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <Button variant="outline" className="w-full" onClick={() => {
                setSelectedCategory("Все");
                setSelectedBrand("Все");
                setSelectedCar("Все");
              }}>
                Сбросить фильтры
              </Button>
            </div>
          </div>
          
          {/* Main content */}
          <div className="flex-1">
            {/* Search and filter controls */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                <Input 
                  className="pl-10" 
                  placeholder="Поиск запчастей..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button 
                className="md:hidden bg-auto-gray hover:bg-gray-600 flex items-center gap-2"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter size={18} />
                Фильтры
              </Button>
            </div>
            
            {/* Mobile Filters */}
            {showFilters && (
              <div className="md:hidden bg-white rounded-lg shadow-md p-4 mb-6">
                <h2 className="font-bold text-lg mb-3">Фильтры</h2>
                <Separator className="mb-4" />
                
                <div className="mb-4">
                  <label className="font-medium mb-2 block">Категория</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Выберите категорию" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(category => (
                        <SelectItem key={category} value={category}>{category}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="mb-4">
                  <label className="font-medium mb-2 block">Производитель</label>
                  <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Выберите бренд" />
                    </SelectTrigger>
                    <SelectContent>
                      {brands.map(brand => (
                        <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="mb-4">
                  <label className="font-medium mb-2 block">Автомобиль</label>
                  <Select value={selectedCar} onValueChange={setSelectedCar}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Выберите модель" />
                    </SelectTrigger>
                    <SelectContent>
                      {carModels.map(car => (
                        <SelectItem key={car} value={car}>{car}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <Button variant="outline" className="w-full" onClick={() => {
                  setSelectedCategory("Все");
                  setSelectedBrand("Все");
                  setSelectedCar("Все");
                }}>
                  Сбросить фильтры
                </Button>
              </div>
            )}
            
            {/* Results count */}
            <p className="text-gray-600 mb-6">Найдено товаров: {filteredProducts.length}</p>
            
            {/* Products grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <Card key={product.id} className="overflow-hidden card-shadow">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <span className="bg-gray-100 rounded-full px-3 py-1">{product.category}</span>
                        <span className="ml-2 text-auto-blue font-medium">{product.brand}</span>
                      </div>
                      <p className="text-lg font-bold text-auto-blue mb-3">{product.price} ₽</p>
                      <Button 
                        className="w-full bg-auto-blue hover:bg-blue-700 flex items-center justify-center gap-2"
                        onClick={() => addItem({
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          image: product.image
                        })}
                      >
                        <ShoppingCart size={18} />
                        В корзину
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold text-gray-600">Товары не найдены</h3>
                <p className="text-gray-500 mt-2">Попробуйте изменить параметры поиска</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
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

export default Catalog;
