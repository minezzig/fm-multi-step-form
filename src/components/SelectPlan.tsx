import { Plan } from "./Plan";
import plans from "../data/plans.json";
import { useState } from "react";

export const SelectPlan = () => {
  const [monthlyPlan, setMonthlyPlan] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState(1);

  // toggle between monthly and yearly prices
  const handleTogglePay = () => setMonthlyPlan((prev) => !prev);

  return (
    <>
      <div className="my-5">
        <h1 className="text-2xl font-bold text-primary1">Select your plan</h1>
        <p className="text-lg text-neutral1">
          You have the option of monthly or yearly billing.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-3">
        {plans.map((plan) => (
          <Plan plan={plan} monthlyPlan={monthlyPlan} key={plan.id} selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} />
        ))}
      </div>
      <div className="mt-5 flex items-center justify-center gap-5 rounded-lg bg-neutral3 p-3 font-bold">
        <div className="text-primary1">Monthly</div>
        <div
          className="relative rounded-full bg-primary1 px-6 py-3 cursor-pointer"
          onClick={handleTogglePay}
        >
          <div
            className={`absolute top-1 rounded-full bg-neutral3 p-2 ${monthlyPlan ? "left-1" : "right-1"}`}
          ></div>
        </div>
        <div className="text-neutral1">Yearly</div>
      </div>
    </>
  );
};
