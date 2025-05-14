
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { CartContext } from "@/App";

interface NavbarProps {
  cartItemCount?: number;
}

const Navbar: React.FC<NavbarProps> = ({ cartItemCount = 0 }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { items } = useContext(CartContext);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  // Получаем функцию для открытия корзины из контекста
  const { toggleCart } = useContext(CartContext);

  return (
    <header className="bg-auto-blue text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl md:text-2xl font-bold">
          АвтоЗапчасти
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="hover:text-auto-red transition-colors">
            Главная
          </Link>
          <Link to="/catalog" className="hover:text-auto-red transition-colors">
            Каталог
          </Link>
          <Link to="/services" className="hover:text-auto-red transition-colors">
            Услуги
          </Link>
          <Link to="/about" className="hover:text-auto-red transition-colors">
            О нас
          </Link>
          <Link to="/contact" className="hover:text-auto-red transition-colors">
            Контакты
          </Link>
        </nav>

        {/* Shopping cart button */}
        <div className="hidden md:flex">
          <Button 
            variant="outline" 
            className="text-white border-white hover:bg-auto-red hover:text-white"
            onClick={() => toggleCart()}
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
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-auto-blue animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              to="/"
              className="py-2 hover:bg-auto-gray px-3 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Главная
            </Link>
            <Link
              to="/catalog"
              className="py-2 hover:bg-auto-gray px-3 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Каталог
            </Link>
            <Link
              to="/services"
              className="py-2 hover:bg-auto-gray px-3 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Услуги
            </Link>
            <Link
              to="/about"
              className="py-2 hover:bg-auto-gray px-3 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              О нас
            </Link>
            <Link
              to="/contact"
              className="py-2 hover:bg-auto-gray px-3 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Контакты
            </Link>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-auto-red hover:text-white justify-start"
              onClick={() => {
                toggleCart();
                setIsMenuOpen(false);
              }}
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
        </div>
      )}
    </header>
  );
};

export default Navbar;
