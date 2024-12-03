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
import { emailValidator } from "../utils/emailValidator";
import { phoneValidator } from "../utils/phoneValidator";

export default function Card() {
  const [step, setStep] = useState<number>(1);
  const { order } = useOrder();
  const [error, setError] = useState<ErrorType>({
    name: "",
    email: "",
    phone: "",
  });

  // verify input to submit page form.  this sets the errors object and sets isValid status
  const verifyInput = () => {
    let isValid = true;
    const newError = { name: "", email: "", phone: "" };
    // check for errors in info section
    if (step === 1) {
      if (!order.info.name) {
        newError.name = "This field is required";
        isValid = false;
      }
      if (!order.info.email || !emailValidator(order.info.email)) {
        newError.email = "This field is required";
        isValid = false;
      }
      if (!order.info.phone || !phoneValidator(order.info.phone)) {
        newError.phone = "This field is required";
        isValid = false;
      }
    }
    // check to ensure a plan is selected
    if (step === 2 && !order.plan.planName) isValid = false;

    setError(newError);
    return isValid;
  };

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
        return <FinishingUp setStep={setStep} />;
      case 5:
        return <Thankyou />;
      default:
        return <PersonalInfo error={error} />;
    }
  };

  return (
    <div className="m-5 rounded-lg bg-neutral5 p-5 shadow-xl md:h-[600px]">
      <div className="flex h-full md:gap-20">
        <div className="absolute left-0 top-0 z-0 w-full md:static md:min-w-[275px] md:max-w-[275px]">
          <Header step={step} />
        </div>
        <div
          id="mobile-container"
          className="absolute left-1/2 top-24 flex h-auto w-11/12 -translate-x-1/2 transform flex-col rounded-xl bg-white p-5 shadow-xl md:static md:top-auto md:h-full md:w-full md:translate-x-0 md:bg-inherit md:pr-16 md:shadow-none"
        >
          {renderStep()}
          {/* show navigation in div on desktop */}
          <div className="mt-auto hidden md:block">
            <Navigation
              step={step}
              setStep={setStep}
              verifyInput={verifyInput}
            />
          </div>
        </div>
      </div>
      {/* // show navigation at bottom of screen on mobile */}
      <div className="block md:hidden">
        <Navigation step={step} setStep={setStep} verifyInput={verifyInput} />
      </div>
    </div>
  );
}
