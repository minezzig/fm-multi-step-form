import { createContext, ReactNode, useContext, useState } from "react";

interface OrderType {
  info: { name: string; email: string; phone: string };
  plan: { planName: string; price: number; frequency: string };
  addons: {addOn: string, price: number}[];
}

interface OrderContextType {
  order: OrderType;
  setOrder: React.Dispatch<React.SetStateAction<OrderType>>;
}

const defaultOrder = {
  info: { name: "", email: "", phone: "" },
  plan: { plan: "", price: 0, frequency: "" },
  addons: [{addOn: "", price: 0}],
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
