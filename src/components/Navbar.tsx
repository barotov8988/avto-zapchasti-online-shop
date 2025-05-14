
import React, { useState, useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, X, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { CartContext } from "@/App";
import { Input } from "@/components/ui/input";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { items, toggleCart } = useContext(CartContext);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const location = useLocation();

  // Effect to track scrolling for background color change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-auto-blue shadow-md' : 'bg-auto-blue/90 backdrop-blur-sm'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-xl md:text-2xl font-bold text-white font-heading">
            АвтоЗапчасти
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`${isActive('/') ? 'text-auto-red' : 'text-white'} hover:text-auto-red transition-colors font-medium`}
            >
              Главная
            </Link>
            <Link 
              to="/catalog" 
              className={`${isActive('/catalog') ? 'text-auto-red' : 'text-white'} hover:text-auto-red transition-colors font-medium`}
            >
              Каталог
            </Link>
            <Link 
              to="/services" 
              className={`${isActive('/services') ? 'text-auto-red' : 'text-white'} hover:text-auto-red transition-colors font-medium`}
            >
              Услуги
            </Link>
            <Link 
              to="/about" 
              className={`${isActive('/about') ? 'text-auto-red' : 'text-white'} hover:text-auto-red transition-colors font-medium`}
            >
              О нас
            </Link>
            <Link 
              to="/contact" 
              className={`${isActive('/contact') ? 'text-auto-red' : 'text-white'} hover:text-auto-red transition-colors font-medium`}
            >
              Контакты
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="relative w-60">
              <Input 
                className="pl-10 bg-white/10 border-0 focus-visible:ring-auto-accent text-white placeholder:text-white/70" 
                placeholder="Поиск запчастей..." 
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 h-4 w-4" />
            </div>
            
            <Button 
              variant="outline" 
              className="text-white border-white hover:bg-auto-red hover:border-auto-red hover:text-white transition-colors"
              onClick={toggleCart}
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Корзина
              {totalItems > 0 && (
                <Badge variant="destructive" className="ml-2 bg-auto-red">
                  {totalItems}
                </Badge>
              )}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white hover:bg-white/10 mr-2"
              onClick={toggleCart}
              aria-label="Корзина"
            >
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-auto-red text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="text-white hover:bg-white/10"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-auto-blue animate-fade-in border-t border-white/10">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <div className="relative w-full mb-2">
              <Input 
                className="pl-10 bg-white/10 border-0 focus-visible:ring-auto-accent text-white placeholder:text-white/70" 
                placeholder="Поиск запчастей..." 
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 h-4 w-4" />
            </div>
            
            <Link
              to="/"
              className={`py-3 px-4 rounded-md ${isActive('/') ? 'bg-white/10 font-medium' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Главная
            </Link>
            <Link
              to="/catalog"
              className={`py-3 px-4 rounded-md ${isActive('/catalog') ? 'bg-white/10 font-medium' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Каталог
            </Link>
            <Link
              to="/services"
              className={`py-3 px-4 rounded-md ${isActive('/services') ? 'bg-white/10 font-medium' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Услуги
            </Link>
            <Link
              to="/about"
              className={`py-3 px-4 rounded-md ${isActive('/about') ? 'bg-white/10 font-medium' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              О нас
            </Link>
            <Link
              to="/contact"
              className={`py-3 px-4 rounded-md ${isActive('/contact') ? 'bg-white/10 font-medium' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Контакты
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
