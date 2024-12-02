import { createContext, ReactNode, useContext, useState } from "react";

interface OrderType {
  info: { name: string; email: string; phone: string };
  plan: { planName: string; price: number; frequency: "monthly" | "yearly" };
  addOns: {id: number; addOn: string, price: number}[];
}

interface OrderContextType {
  order: OrderType;
  setOrder: React.Dispatch<React.SetStateAction<OrderType>>;
}

const defaultOrder = {
  info: { name: "", email: "", phone: "" },
  plan: { planName: "", price: 0, frequency: "monthly" as "monthly"},
  addOns: []
};

//create context
const OrderContext = createContext<OrderContextType | undefined>(undefined);

//provider component
export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [order, setOrder] = useState<OrderType>(defaultOrder);

  return (
    <OrderContext.Provider value={{ order, setOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

//export hook to useContext
export const useOrder = () => {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error("useOrder must be used within a CartProvider");
  }
  return context;
};
