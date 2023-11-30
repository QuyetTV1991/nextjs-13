import Link from "next/link";

type ButtonProps = {
  type: "button" | "submit" | "reset" | undefined;
  label: String;
  route?: String;
};

const Button = ({ type, label, route }: ButtonProps) => {
  return (
    <button
      type={type}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      <Link href={`${route}`}>{label}</Link>
    </button>
  );
};

export default Button;
