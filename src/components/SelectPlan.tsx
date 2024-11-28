import { Plan } from "./Plan"


export const SelectPlan = () => {
  return (
    <>
    <div className="my-5">
      <h1 className="text-2xl font-bold text-primary1">Select your plan</h1>
      <p className="text-lg text-neutral1">
        You have the option of monthly or yearly billing.
      </p>
    </div>
    <div className="flex flex-col gap-3">
      <Plan />
      
    </div>

  </>
  )
}
