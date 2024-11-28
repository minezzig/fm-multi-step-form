import Header from "./Header";
// import PersonalInfo from "./PersonalInfo";
import Navigation from "./Navigation";
import { SelectPlan } from "./SelectPlan";

export default function Card() {
  return (
    <div className="m-5 rounded-lg bg-neutral5 p-5 shadow-xl md:h-[600px]">
      <div className="h-full md:flex md:gap-20">
        <div className="absolute left-0 top-0 w-full md:static md:max-w-[275px]">
          <Header />
        </div>
        <div className="flex flex-col">
          {/* whichever card i want to view */}
          {/* <PersonalInfo /> */}
          <SelectPlan />
          <Navigation />
        </div>
      </div>
    </div>
  );
}
