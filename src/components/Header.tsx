import { ProgressBar } from "./ProgressBar";
import { HeaderProps } from "../types/types";

function Header({step}: HeaderProps) {
  return (
    <div className="h-36 md:h-full flex items-center md:items-start md:justify-start justify-center md:rounded-lg bg-no-repeat p-5 md:bg-contain md:bg-[url('/assets/images/bg-sidebar-desktop.svg')] bg-cover bg-[url('./assets/images/bg-sidebar-mobile.svg')]">
      <div className="flex gap-3 md:flex-col md:gap-7">
        <ProgressBar step={1} currentStep={step} title="your info" />
        <ProgressBar step={2} currentStep={step} title="select plan" />
        <ProgressBar step={3} currentStep={step} title="add-ons" />
        <ProgressBar step={4} currentStep={step} title="summary" />
      </div>
    </div>
  );
}

export default Header;