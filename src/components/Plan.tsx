import { useOrder } from "../context/OrderContext";

interface Plan {
  id: number;
  plan: string;
  price: { yearly: number; monthly: number };
  icon: string;
}

interface PlanProps {
  plan: Plan;
}

export const Plan = ({ plan }: PlanProps) => {
  const {order, setOrder} = useOrder();
  const {frequency} = order.plan;

  console.log(order)
  // hanlde selected a plan
  const handleSelectPlan = (plan: Plan) => {
    const orderPlanObject = {id: plan.id, planName: plan.plan, price: plan.price[frequency], frequency: frequency}

    // add to order object context
    setOrder(prev => ({...prev, plan: orderPlanObject}));
  }
  return (
    <div className={`flex-1 rounded-lg border  bg-neutral3 p-3 flex md:flex-col flex-row gap-3 cursor-pointer ${order.plan.id === plan.id ? "border-primary2" : "border-primary3"}`} 
    onClick={() => handleSelectPlan(plan)}>
      <div>
        <img src={plan.icon} alt={plan.plan} />
      </div>
      <div>
        <div className="font-bold text-primary2">{plan.plan}</div>
        <div className="text-neutral1">
          ${frequency === "monthly" ? `${plan.price.monthly}/mo` : `${plan.price.yearly}/yr`}
        </div>
        <div className={`text-xs ${frequency === "monthly" ? "hidden" : "block"}`}>
          2 months free
        </div>
      </div>
    </div>
  );
};
