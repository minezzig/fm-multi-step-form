import Header from "./Header";
import PersonalInfo from "./PersonalInfo";
import { SelectPlan } from "./SelectPlan";
import { AddOns } from "./AddOns";
import Navigation from "./Navigation";
import { FinishingUp } from "./FinishingUp";
import { Thankyou } from "./Thankyou";
import { useState } from "react";

export default function Card() {
  const [step, setStep] = useState<number>(1);

  // use Switch statement to display page currently working on
  const renderStep = () => {
    switch (step) {
      case 1:
        return <PersonalInfo />;
      case 2:
        return <SelectPlan />;
      case 3:
        return <AddOns />;
      case 4:
        return <FinishingUp />;
      case 5:
        return <Thankyou />;
      default:
        return <PersonalInfo />;
    }
  };

  return (
    <div className="m-5 rounded-lg bg-neutral5 p-5 shadow-xl md:h-[600px]">
      <div className="h-full md:flex md:gap-20">
        <div className="z-0 absolute left-0 top-0 w-full md:static md:min-w-[275px] md:max-w-[275px]">
          <Header />
        </div>
        <div className="flex h-full w-full flex-col">
          {renderStep()}
          <Navigation step={step} setStep={setStep} />
        </div>
      </div>
    </div>
  );
} 
