import { createContext, ReactNode, useContext, useState } from "react";
import { OrderType, OrderContextType } from "../types/types";

const defaultOrder = {
  info: { name: "", email: "", phone: "" },
  plan: { id: 0, planName: "", price: 0, frequency: "monthly" as "monthly"},
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
