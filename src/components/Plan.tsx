import { useOrder } from "../context/OrderContext";
import { PlanType, PlanProps } from "../types/types";


export const Plan = ({ plan }: PlanProps) => {
  const {order, setOrder} = useOrder();
  //destructure freqency
  const {frequency} = order.plan;

  // hanlde selected a plan
  const handleSelectPlan = (plan: PlanType) => {
    const orderPlanObject = {id: plan.id, planName: plan.plan, price: plan.price[frequency], frequency: frequency}

    // add to order object context
    setOrder(prev => ({...prev, plan: orderPlanObject, addOns:[]}));
  }
  return (
    <div className={`h-48 flex-1 rounded-lg border p-3 flex md:flex-col flex-row gap-3 cursor-pointer md:justify-between hover:border-primary2 transition-all ${order.plan.id === plan.id ? "border-primary2 bg-neutral3" : "border-neutral2"}`} 
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
