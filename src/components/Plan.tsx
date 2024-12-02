import { useOrder } from "../context/OrderContext";

interface Plan {
  id: number;
  plan: string;
  price: { yearly: number; monthly: number };
  icon: string;
}

interface PlanProps {
  plan: Plan;
  monthlyPlan: boolean;
  selectedPlan: number;
  setSelectedPlan: React.Dispatch<React.SetStateAction<number>>;
}

export const Plan = ({ plan, monthlyPlan, selectedPlan, setSelectedPlan }: PlanProps) => {
  const {order, setOrder} = useOrder();
  
  // hanlde selected a plan
  const handleSelectPlan = (id: number) => {
    setSelectedPlan(id)

    // retrive specific data for order object
    const frequency = monthlyPlan ? "monthly" : "yearly";
    const price = plan.price[frequency];

    // add to order object context
    setOrder(prev => ({...prev, plan: {planName: plan.plan, price: price, frequency: frequency}}));
  }
  return (
    <div className={`flex-1 rounded-lg border  bg-neutral3 p-3 flex md:flex-col flex-row gap-3 cursor-pointer ${selectedPlan === plan.id ? "border-primary2" : "border-primary3"}`} 
    onClick={() => handleSelectPlan(plan.id)}>
      <div>
        <img src={plan.icon} alt={plan.plan} />
      </div>
      <div>
        <div className="font-bold text-primary2">{plan.plan}</div>
        <div className="text-neutral1">
          ${monthlyPlan ? `${plan.price.monthly}/mo` : `${plan.price.yearly}/yr`}
        </div>
        <div className={`text-xs ${monthlyPlan ? "hidden" : "block"}`}>
          2 months free
        </div>
      </div>
    </div>
  );
};
