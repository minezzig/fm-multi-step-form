import { useOrder } from "../context/OrderContext";
import { InputFieldProps } from "../types/types";


const InputField = ({label, placeholder, name, error, setError}: InputFieldProps) => {
  const {order, setOrder} = useOrder();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrder(prev => ({...prev, info: {...prev.info, [e.target.name]: e.target.value}}))
}


  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between">
        <label htmlFor={label} className="text-sm">{label}</label>
        <div className={`text-primary5 text-xs font-bold ${error ? "block" : "hidden"}`}>{error}</div>
      </div>
      <input
        className={`cursor-pointer border-neutral2 rounded-md border p-2 focus:outline-primary2 ${error && "border-primary5"}`}
        placeholder={placeholder}
        name={name}
        value={order.info[name]}
        onChange={handleOnChange}
        onClick={() => setError(prev => ({...prev, [name]: ""}))}
      />
    </div>
  );
}

export default InputField;
