interface ProgressBarProps {
  active: boolean;
  step: number;
  title: string;
}

export const ProgressBar = ({ active, step, title }: ProgressBarProps) => {

  return (
    <div
      className={`${active ? "bg-primary4 text-primary2" : "bg-primary2 text-primary4"} border border-primary4 rounded-full flex h-10 w-10 items-center justify-center font-bold`}
    >
      {step}
    </div>
  );
};
