
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface MiniCartProps {
  items: CartItem[];
  onClose: () => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
}

const MiniCart: React.FC<MiniCartProps> = ({
  items,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
}) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-end">
      <div className="w-full max-w-md bg-white h-full shadow-lg flex flex-col animate-fade-in">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold text-auto-gray">Корзина</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-auto-red">
            <X size={24} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-grow flex items-center justify-center p-8">
            <p className="text-lg text-gray-500 text-center">
              Ваша корзина пуста.
              <br />
              Добавьте товары из каталога.
            </p>
          </div>
        ) : (
          <>
            <div className="flex-grow overflow-auto p-4">
              {items.map((item) => (
                <div key={item.id} className="flex border-b py-4">
                  <div className="w-20 h-20 bg-gray-100 mr-4 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-auto-gray font-medium">{item.name}</h3>
                    <div className="text-auto-blue font-bold mt-1">
                      {item.price} ₽
                    </div>
                    <div className="flex items-center mt-2">
                      <button
                        className="w-8 h-8 border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                        onClick={() =>
                          onUpdateQuantity(
                            item.id,
                            Math.max(1, item.quantity - 1)
                          )
                        }
                      >
                        -
                      </button>
                      <span className="w-8 h-8 border-t border-b border-gray-300 flex items-center justify-center">
                        {item.quantity}
                      </span>
                      <button
                        className="w-8 h-8 border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                        onClick={() =>
                          onUpdateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="ml-4 text-auto-red hover:text-red-700 text-sm"
                      >
                        Удалить
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t">
              <div className="flex justify-between text-lg font-bold mb-4">
                <span>Итого:</span>
                <span>{total} ₽</span>
              </div>
              <Button className="w-full bg-auto-blue hover:bg-auto-gray text-lg py-6">
                Оформить заказ
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MiniCart;
