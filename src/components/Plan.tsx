interface Plan {
  id: number;
  plan: string;
  price: { yearly: number; monthly: number };
  icon: string;
}

interface PlanProps {
  plan: Plan;
  monthlyPlan: boolean;
}

export const Plan = ({ plan, monthlyPlan }: PlanProps) => {
  return (
    <div className="flex-1 rounded-lg border border-primary2 bg-neutral3 p-3 flex md:flex-col flex-row gap-3">
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
