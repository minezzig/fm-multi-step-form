import { ProgressBar } from "./ProgressBar";

function Header() {
  return (
    <div className="h-48 md:h-full flex items-center md:items-start md:justify-start justify-center md:rounded-lg bg-no-repeat p-5 md:bg-contain md:bg-[url('./assets/images/bg-sidebar-desktop.svg')] bg-cover bg-[url('./assets/images/bg-sidebar-mobile.svg')]">
      <div className="flex gap-3 md:flex-col md:gap-7">
        <ProgressBar step={1} active={true} title="your info" />
        <ProgressBar step={2} active={false} title="select plan" />
        <ProgressBar step={3} active={false} title="add-ons" />
        <ProgressBar step={4} active={false} title="summary" />
      </div>
    </div>
  );
}

export default Header;