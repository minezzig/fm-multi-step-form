import Header from "./Header";
import PersonalInfo from "./PersonalInfo";
import { SelectPlan } from "./SelectPlan";
import { AddOns } from "./AddOns";
import Navigation from "./Navigation";
import { FinishingUp } from "./FinishingUp";
import { Thankyou } from "./Thankyou";

export default function Card() {
  return (
    <div className="m-5 rounded-lg bg-neutral5 p-5 shadow-xl md:h-[600px]">
      <div className="h-full md:flex md:gap-20">
        <div className="absolute left-0 top-0 w-full md:static md:max-w-[275px]">
          <Header />
        </div>
        <form>
          <div className="flex h-full flex-col">
            {/* whichever card i want to view */}
            {/* <PersonalInfo /> */}
            {/* <SelectPlan /> */}
            {/* <AddOns /> */}
            {/* <FinishingUp /> */}
            <Thankyou />
            {/* <Navigation /> */}
          </div>
        </form>
      </div>
    </div>
  );
}
