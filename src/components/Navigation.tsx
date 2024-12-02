import { Button } from "./Button";

interface NavigationProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}
const Navigation = ({ step, setStep }: NavigationProps) => {
  const handleNextStep = () => {
    setStep((prev) => (prev < 4 ? prev + 1 : prev));
  };

  const handlePrevStep = () => {
    setStep((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleSubmit = () => {
    
  }

  return (
    <div className="fixed bottom-0 left-0 mt-auto flex w-full items-center justify-between bg-neutral5 p-5 md:static md:mb-3 md:p-0 md:pb-0">
      {step > 1 && <Button text={"Go Back"} action={handlePrevStep} className="bg-transparent"/>}
      <div className="ml-auto">
        {step < 4 ? (
          <Button text={"Next Step"} action={handleNextStep} />
        ) : (
          <Button text={"Submit"} action={handleSubmit} />
        )}
      </div>
    </div>
  );
};

export default Navigation;
