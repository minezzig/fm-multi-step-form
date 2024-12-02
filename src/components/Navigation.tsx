import { Button } from "./Button";
import { NavigationProps } from "../types/types";

const Navigation = ({ step, setStep, verifyInput }: NavigationProps) => {

  const handleNextStep = () => {
    // if no errors, proceed to next step
    const isValid = verifyInput();
    if (!isValid) return;
    setStep((prev) => (prev < 4 ? prev + 1 : prev));
  };

  const handlePrevStep = () => {
    setStep((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleSubmit = () => {
    setStep(5);
  };

  return (
    <div className="fixed bottom-0 left-0 mt-auto flex w-full items-center justify-between bg-neutral5 p-5 md:static md:mb-3 md:p-0 md:pb-0">
      {step > 1 && step < 5 && (
        <Button
          text={"Go Back"}
          action={handlePrevStep}
          className={"bg-transparent text-blue-400"}
        />
      )}
      <div className="ml-auto">
        {step < 4 ? (
          <Button text={"Next Step"} action={handleNextStep} />
        ) : step === 4 ? (
          <Button text={"Submit"} action={handleSubmit} />
        ) : null}
      </div>
    </div>
  );
};

export default Navigation;
