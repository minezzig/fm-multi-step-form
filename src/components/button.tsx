interface ButtonProps {
    text: string;
}

export const Button = ({text}: ButtonProps) => {
  return (
    <button type="submit" className=" px-3 py-2  rounded-md bg-primary1 text-primary4">{text}</button>
  )
}
