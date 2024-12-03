import { PersonalInfoProps } from "../types/types";
import InputField from "./InputField";

function PersonalInfo({ error, setError }: PersonalInfoProps) {
  return (
    <>

      <div className="my-5">
        <h1 className="text-2xl font-bold text-primary1">Personal info</h1>
        <p className="text-lg text-neutral1">
          Please provide your name, email address, and phone number.
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <InputField
          label={"Name"}
          placeholder={"e.g. Stephen King"}
          name={"name"}
          error={error.name}
          setError={setError}
        />
        <InputField
          label={"Email Address"}
          placeholder={"e.g. stephenking@lorem.com"}
          name={"email"}
          error={error.email}
          setError={setError}
        />
        <InputField
          label={"Phone Number"}
          placeholder={"e.g. +1 234 567 890"}
          name={"phone"}
          error={error.phone}
          setError={setError}
        />
      </div>
    </>
  );
}

export default PersonalInfo;
