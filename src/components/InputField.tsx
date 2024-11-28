
interface InputFieldProps {
    label: string;
    placeholder: string;
}

const InputField = ({label, placeholder}: InputFieldProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={label} className="text-sm">{label}</label>
      <input
        className="border-neutral2 rounded-md border p-2"
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputField;
