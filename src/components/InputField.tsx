import { useState } from "react";

interface InputFieldProps {
    label: string;
    placeholder: string;
}

const InputField = ({label, placeholder}: InputFieldProps) => {

  const [error, setError] = useState(false);
  
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between">
        <label htmlFor={label} className="text-sm">{label}</label>
        <div className={`text-primary5 text-xs font-bold ${error ? "block" : "hidden"}`}>This field is required</div>
      </div>
      <input
        className="border-neutral2 rounded-md border p-2 focus:outline-primary2"
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputField;
