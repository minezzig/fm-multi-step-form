import Header from "./Header";
import PersonalInfo from "./PersonalInfo";
import { SelectPlan } from "./SelectPlan";
import { AddOns } from "./AddOns";
import Navigation from "./Navigation";
import { FinishingUp } from "./FinishingUp";
import { Thankyou } from "./Thankyou";
import { useState } from "react";
import { useOrder } from "../context/OrderContext";
import { ErrorType } from "../types/types";

export default function Card() {
  const [step, setStep] = useState<number>(1);
  const {order} = useOrder();
  const [error, setError] = useState<ErrorType>({name: "", email: "", phone: ""});

  // verify input to submit page form.  this sets the errors object and sets isValid status
  const verifyInput = () => {
    let isValid = true;
    const newError = {name: "", email: "", phone: ""};
    // check for errors in info section
    if (step === 1) {
      if (!order.info.name) {
        newError.name = "This field is required"
        isValid = false;
      }
      if (!order.info.email) {
        newError.email = "This field is required"
        isValid = false;
      }
      if (!order.info.phone) {
        newError.phone = "This field is required"
        isValid = false;
      }
    } 
    // check to ensure a plan is selected
    if(step === 2 && !order.plan.planName) isValid = false;
    
    setError(newError);
    return isValid;
  }

  // use Switch statement to display page currently working on
  const renderStep = () => {
    switch (step) {
      case 1:
        return <PersonalInfo error={error} />;
      case 2:
        return <SelectPlan />;
      case 3:
        return <AddOns />;
      case 4:
        return <FinishingUp setStep={setStep}/>;
      case 5:
        return <Thankyou />;
      default:
        return <PersonalInfo error={error}/>;
    }
  };

  return (
    <div className="m-5 rounded-lg bg-neutral5 p-5 shadow-xl md:h-[600px]">
      <div className="h-full md:flex md:gap-20">
        <div className="z-0 absolute left-0 top-0 w-full md:static md:min-w-[275px] md:max-w-[275px]">
          <Header step={step}/>
        </div>
        <div className="flex h-full w-full flex-col">
          {renderStep()}
          <Navigation step={step} setStep={setStep} verifyInput={verifyInput}/>
        </div>
      </div>
    </div>
  );
} 
