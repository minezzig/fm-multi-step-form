import { ProgressBar } from "./ProgressBar";

function Header() {
  return (
    <div className="h-48 w-full bg-[url('/assets/images/bg-sidebar-mobile.svg')] bg-cover flex items-center justify-center">
      <div className="flex -translate-y-8 gap-3">
        <ProgressBar step={1} active={true} title="your info"/>
        <ProgressBar step={2} active={false} title="select plan"/>
        <ProgressBar step={3} active={false} title="add-ons"/>
        <ProgressBar step={4} active={false} title="summary"/>
      </div>
    </div>
  );
}

export default Header;
