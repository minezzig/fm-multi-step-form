interface AddOn {
  id: number;
  item: string;
  description: string;
  price: { monthly: number; yearly: number };
}

interface AddOnProps {
  addOn: AddOn;
  selectedAddOns: number[];
  setSelectedAddOns: React.Dispatch<React.SetStateAction<number[]>>;
}

export const AddOn = ({ addOn, selectedAddOns, setSelectedAddOns }: AddOnProps) => {
  const monthlyPlan = true; //! HARD CODED, access from context 

  // add addOn to array, or remove if unselected
  const handleSelectAddOn = (id: number) => {
    setSelectedAddOns(prev => 
        prev.includes(id) ? prev.filter(addOnId => addOnId !== id) : [...prev, id]
    );
  }

  return (
    <div
      className={`flex flex-1 flex-row items-center gap-3 rounded-lg border ${selectedAddOns.includes(addOn.id) ? "border-primary2" : " border-primary3"} bg-neutral3 p-3`}
    >
      <input
        type="checkbox"
        className="h-5 w-5 accent-primary2"
        onClick={() => handleSelectAddOn(addOn.id)}
      />
      <div>
        <div className="font-bold text-primary1">{addOn.item}</div>
        <div className="text-neutral1">{addOn.description}</div>
      </div>
      <div className="ml-auto text-sm text-primary2">
        +$
        {monthlyPlan ? `${addOn.price.monthly}/mo` : `${addOn.price.yearly}/yr`}
      </div>
    </div>
  );
};
