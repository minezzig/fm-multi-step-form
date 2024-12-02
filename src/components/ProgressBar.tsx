import { ProgressBarProps } from "../types/types";

export const ProgressBar = ({ currentStep, step, title }: ProgressBarProps) => {
  return (
    <div className="flex gap-5 items-center">
      <div
        className={`${currentStep === step ? "bg-primary4 text-primary2" : "bg-primary2 text-primary4"} flex h-8 w-8 items-center justify-center rounded-full border border-primary4 font-bold`}
      >
        {step}
      </div>
      <div className="hidden md:block uppercase">
        <div className="text-primary3 text-xs">Step {step}</div>
        <div className="text-primary4 font-bold  text-sm">{title}</div>
      </div>
    </div>
  );
};
