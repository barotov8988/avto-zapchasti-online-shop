
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-auto-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-gradient">АвтоЗапчасти</h3>
            <p className="text-gray-300 mb-6">
              Качественные автозапчасти и профессиональное обслуживание автомобилей 
              любых марок и моделей.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-auto-red transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-auto-red transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-auto-red transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-auto-red transition-colors" aria-label="Youtube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Магазин</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/catalog" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  Каталог запчастей
                </Link>
              </li>
              <li>
                <Link to="/brands" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  Бренды и производители
                </Link>
              </li>
              <li>
                <Link to="/delivery" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  Доставка и оплата
                </Link>
              </li>
              <li>
                <Link to="/warranty" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  Гарантия и возврат
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Сервис</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  Услуги автосервиса
                </Link>
              </li>
              <li>
                <Link to="/appointment" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  Запись на сервис
                </Link>
              </li>
              <li>
                <Link to="/prices" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  Цены на работы
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  Частые вопросы
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="text-gray-300 flex items-center gap-2">
                <MapPin size={18} className="text-auto-red flex-shrink-0" />
                <span>ул. Автомобильная, 123</span>
              </li>
              <li className="text-gray-300 flex items-center gap-2">
                <Phone size={18} className="text-auto-red flex-shrink-0" />
                <span>+7 (123) 456-78-90</span>
              </li>
              <li className="text-gray-300 flex items-center gap-2">
                <Mail size={18} className="text-auto-red flex-shrink-0" />
                <span>info@авто-запчасти.рф</span>
              </li>
              <li className="text-gray-300 flex items-center gap-2">
                <Clock size={18} className="text-auto-red flex-shrink-0" />
                <span>Пн-Пт: 9:00-20:00, Сб-Вс: 10:00-18:00</span>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-gray-800" />
        
        <div className="text-center text-gray-400">
          <p>© {currentYear} АвтоЗапчасти. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
