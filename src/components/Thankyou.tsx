
export const Thankyou = () => {
  return (
    <>
      <div className="my-5 h-full flex flex-col items-center justify-center gap-5">
        <img src="/assets/images/icon-thank-you.svg" alt="success"/>
        <h1 className="text-2xl font-bold text-primary1">Thank you!</h1>
        <p className="text-lg text-neutral1 text-center">
          Thanks for confirmin your subscription! We hope you have fun using our
          platform. If you ever need support, please feel free to email us at
          support@loremgaming.com.
        </p>
      </div>
    </>
  );
};
