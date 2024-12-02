import { useOrder } from "../context/OrderContext";
import { InputFieldProps } from "../types/types";

const InputField = ({label, placeholder, name, error}: InputFieldProps) => {
  const {setOrder} = useOrder();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrder(prev => ({...prev, info: {...prev.info, [e.target.name]: e.target.value}}))
}
  
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between">
        <label htmlFor={label} className="text-sm">{label}</label>
        <div className={`text-primary5 text-xs font-bold ${error ? "block" : "hidden"}`}>This field is required</div>
      </div>
      <input
        className="border-neutral2 rounded-md border p-2 focus:outline-primary2"
        placeholder={placeholder}
        name={name}
        onChange={handleOnChange}
      />
    </div>
  );
}

export default InputField;
