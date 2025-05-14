
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { useContext } from "react";
import { CartContext } from "@/App";

const CheckoutForm: React.FC<{ total: number; onClose: () => void }> = ({ total, onClose }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const { clearCart } = useContext(CartContext);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !phone || !email) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все обязательные поля",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Имитация отправки заказа
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Заказ оформлен!",
        description: "Мы свяжемся с вами в ближайшее время",
      });
      clearCart();
      onClose();
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Имя*</Label>
        <Input 
          id="name" 
          value={name} 
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      
      <div>
        <Label htmlFor="phone">Телефон*</Label>
        <Input 
          id="phone" 
          type="tel" 
          value={phone} 
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      
      <div>
        <Label htmlFor="email">Email*</Label>
        <Input 
          id="email" 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      
      <div>
        <Label htmlFor="address">Адрес доставки</Label>
        <Input 
          id="address" 
          value={address} 
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      
      <div className="pt-4 border-t">
        <div className="flex justify-between text-lg font-bold mb-4">
          <span>Итого:</span>
          <span>{total} ₽</span>
        </div>
        <Button 
          type="submit" 
          className="w-full bg-auto-blue hover:bg-auto-gray text-lg py-6"
          disabled={isLoading}
        >
          {isLoading ? "Оформление..." : "Оформить заказ"}
        </Button>
      </div>
    </form>
  );
};

export default CheckoutForm;
