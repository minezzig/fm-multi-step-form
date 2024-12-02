import InputField from "./InputField";

function PersonalInfo() {
return (
    <>
      <div className="my-5">
        <h1 className="text-2xl font-bold text-primary1">Personal info</h1>
        <p className="text-lg text-neutral1">
          Please provide your name, email address, and phone number.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <InputField label={"Name"} placeholder={"e.g. Stephen King"} name={"name"}/>
        <InputField
          label={"Email Address"}
          placeholder={"e.g. stephenking@lorem.com"}
          name={"email"}
        />
        <InputField
          label={"Phone Number"}
          placeholder={"e.g. +1 234 567 890"}
          name={"phone"}
        />
      </div>

    </>
  );
}

export default PersonalInfo;
