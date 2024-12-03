import { useOrder } from "../context/OrderContext";
import { FinishingUpProps } from "../types/types";

export const FinishingUp = ({setStep}: FinishingUpProps) => {
  const {order} = useOrder();

  // calculate total price
  const calcTotal = () =>
    order.plan.price +
    order.addOns.reduce((sum, addOn) => (sum = sum + addOn.price), 0);

  return (
    <>
      <div className="my-5">
        <h1 className="text-2xl font-bold text-primary1">Finishing up</h1>
        <p className="text-lg text-neutral1">
          Double-check everything looks OK before confirming
        </p>
      </div>
      <div className="mt-5 flex flex-col gap-5 rounded-lg bg-neutral3 p-3 md:p-5">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-bold text-primary1">
              {order.plan.planName} ({order.plan.frequency})
            </div>
            <div className="text-neutral1 underline hover:text-primary2 cursor-pointer" onClick={() => setStep(2)}>Change</div>
          </div>
          <div className="text-primary font-bold text-primary1">
            +${order.plan.price}/{order.plan.frequency === "monthly" ? "mo" : "yr"}
          </div>
        </div>
        <hr />
        <div className="flex flex-col gap-3">
          {order.addOns.map((addOn) => (
            <div className="flex items-center justify-between" key={addOn.addOn}>
              <div className="text-neutral1">{addOn.addOn}</div>
              <div className="text-primary1">
                +${addOn.price}/{order.plan.frequency === "monthly" ? "mo" : "yr"}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between px-3 py-5">
        <div className="text-neutral1">Total (per {order.plan.frequency === "monthly" ? "month" : "year"})</div>
        <div className="text-primary2 font-bold text-lg">
          +${calcTotal()}/{order.plan.frequency === "monthly" ? "mo" : "yr"}
        </div>
      </div>
    </>
  );
};
