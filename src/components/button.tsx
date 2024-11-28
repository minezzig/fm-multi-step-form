interface ButtonProps {
    text: string;
    action: () => null;
}

export const Button = ({text, action}: ButtonProps) => {
  return (
    <button onClick={action} type="submit" className="cursor-pointer px-3 py-2  rounded-md bg-primary1 text-primary4">{text}</button>
  )
}
