import { useOrder } from "../context/OrderContext";
import { AddOnType, AddOnProps } from "../types/types";

export const AddOn = ({ addOn }: AddOnProps) => {
  const { order, setOrder } = useOrder();

  // add addOn to order, or remove if unselected
  const handleSelectAddOn = (addOn: AddOnType) => {
    const newAddOn = {
      id: addOn.id,
      addOn: addOn.item,
      price: addOn.price[order.plan.frequency],
    };

    setOrder((prev) =>
      prev.addOns.find((orderAddOn) => orderAddOn.id === addOn.id)
        ? {
            ...prev,
            addOns: prev.addOns.filter(
              (orderAddOn) => orderAddOn.id !== addOn.id,
            ),
          }
        : { ...prev, addOns: [...prev.addOns, newAddOn] },
    );
  };
console.log(order)
  return (
    <div
      className={`flex flex-1 flex-row items-center gap-3 rounded-lg border ${order.addOns.find((entry) => entry.id === addOn.id) ? "border-primary2" : "border-primary3"} bg-neutral3 p-3 cursor-pointer`}
      onClick={() => handleSelectAddOn(addOn)}
    >
      <input
        type="checkbox"
        className="h-5 w-5 accent-primary2"
        checked={order.addOns.find((entry) => entry.id === addOn.id) ? true : false}
        readOnly
      />
      <div>
        <div className="font-bold text-primary1">{addOn.item}</div>
        <div className="text-neutral1">{addOn.description}</div>
      </div>
      <div className="ml-auto text-sm text-primary2">
        +$
        {order.plan.frequency === "monthly"
          ? `${addOn.price.monthly}/mo`
          : `${addOn.price.yearly}/yr`}
      </div>
    </div>
  );
};
