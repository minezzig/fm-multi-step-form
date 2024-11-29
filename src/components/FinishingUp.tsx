export const FinishingUp = () => {
  //!static order
  const order = {
    plan: "Arcade",
    price: 90,
    frequency: "Yearly",
    addOns: [
      { addOn: "Online service", price: 10 },
      { addOn: "Larer stroage", price: 20 },
    ],
  };

  // calculate total price
  const calcTotal = () =>
    order.price +
    order.addOns.reduce((sum, addOn) => (sum = sum + addOn.price), 0);

  return (
    <>
      <div className="my-5">
        <h1 className="text-2xl font-bold text-primary1">Finishing up</h1>
        <p className="text-lg text-neutral1">
          Double-check everything looks OK before confirming
        </p>
      </div>
      <div className="mt-5 flex flex-col gap-5 rounded-lg bg-neutral3 p-3 md:p-5">
        <div className="flex items-center justify-between">
          <div>
            <div>
              {order.plan} ({order.frequency})
            </div>
            <div className="text-neutral1 underline hover:text-primary2"><a href="">Change</a></div>
          </div>
          <div className="text-primary font-bold">
            +${order.price}/{order.frequency === "Monthly" ? "mo" : "yr"}
          </div>
        </div>
        <hr />
        <div className="flex flex-col gap-3">
          {order.addOns.map((addOn) => (
            <div className="flex items-center justify-between">
              <div className="text-neutral1">{addOn.addOn}</div>
              <div className="text-primary1">
                +${addOn.price}/{order.frequency === "Monthly" ? "mo" : "yr"}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between px-3 py-5">
        <div className="text-neutral1">Total (per {order.frequency === "Monthly" ? "month" : "year"})</div>
        <div className="text-primary2 font-bold">
          +${calcTotal()}/{order.frequency === "Monthly" ? "mo" : "yr"}
        </div>
      </div>
    </>
  );
};
