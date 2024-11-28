import { Button } from "./Button";

const Navigation = () => {
  return (
    <div className="fixed bottom-0 left-0 mt-auto flex w-full items-center justify-end bg-neutral5 p-5 md:static md:mb-3 md:p-0 md:pb-0">
      <Button text={"Next Step"} action={() => null} />
    </div>
  );
};

export default Navigation;
