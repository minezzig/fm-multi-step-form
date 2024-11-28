import InputField from "./InputField";

function PersonalInfo() {
  return (
    <div className="m-5 -translate-y-24 rounded-lg bg-neutral5 p-5 py-10">
      <div className="mb-5">
        <h1 className="text-2xl font-bold text-primary1">Personal info</h1>
        <p className="text-lg text-neutral1">
          Please provide your name, email address, and phone number.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <InputField label={"Name"} placeholder={"e.g. Stephen King"} />
        <InputField
          label={"Email Address"}
          placeholder={"e.g. stephenking@lorem.com"}
        />
        <InputField
          label={"Phone Number"}
          placeholder={"e.g. +1 234 567 890"}
        />
      </div>

    </div>
  );
}

export default PersonalInfo;
