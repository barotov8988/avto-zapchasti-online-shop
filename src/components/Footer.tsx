
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-auto-gray text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">АвтоЗапчасти</h3>
            <p className="text-gray-300 mb-4">
              Качественные автозапчасти и профессиональное обслуживание автомобилей 
              любых марок и моделей.
            </p>
            <p className="text-gray-300">© 2025 АвтоЗапчасти. Все права защищены.</p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Магазин</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/catalog" className="text-gray-300 hover:text-white transition-colors">
                  Каталог запчастей
                </Link>
              </li>
              <li>
                <Link to="/brands" className="text-gray-300 hover:text-white transition-colors">
                  Бренды и производители
                </Link>
              </li>
              <li>
                <Link to="/delivery" className="text-gray-300 hover:text-white transition-colors">
                  Доставка и оплата
                </Link>
              </li>
              <li>
                <Link to="/warranty" className="text-gray-300 hover:text-white transition-colors">
                  Гарантия и возврат
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Сервис</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Услуги автосервиса
                </Link>
              </li>
              <li>
                <Link to="/appointment" className="text-gray-300 hover:text-white transition-colors">
                  Запись на сервис
                </Link>
              </li>
              <li>
                <Link to="/prices" className="text-gray-300 hover:text-white transition-colors">
                  Цены на работы
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white transition-colors">
                  Частые вопросы
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">
                <strong className="text-white">Адрес:</strong> ул. Автомобильная, 123
              </li>
              <li className="text-gray-300">
                <strong className="text-white">Телефон:</strong> +7 (123) 456-78-90
              </li>
              <li className="text-gray-300">
                <strong className="text-white">Email:</strong> info@авто-запчасти.рф
              </li>
              <li className="text-gray-300">
                <strong className="text-white">Режим работы:</strong> Пн-Пт: 9:00-20:00, Сб-Вс: 10:00-18:00
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
