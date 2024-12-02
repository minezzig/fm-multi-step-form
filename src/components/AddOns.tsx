import AddOnData from "../data/add-ons.json";
import { AddOn } from "./AddOn";


export const AddOns = () => {
    
  return (
    <>
      <div className="my-5">
        <h1 className="text-2xl font-bold text-primary1">Pick add-ons</h1>
        <p className="text-lg text-neutral1">
          Add-ons help enhance your gaming experience.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        {AddOnData.map((addOn) => (
          <AddOn addOn={addOn} key={addOn.id}/>
        ))}
      </div>
    </>
  );
};
