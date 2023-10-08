import cn from "classnames";

export type variantTypes =
  | "blank"
  | "default"
  | "primary"
  | "secondary"
  | "blue"
  | "indigo"
  | "orange"
  | "green"
  | "gray"
  | "white";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: variantTypes;
}

export function getButtonClassName(
  variant: ButtonProps["variant"] = "default",
  className: string = ""
) {
  const buttonClassName = cn(
    className,
    {
      "flex justify-center rounded-md text-sm font-semibold leading-6 px-3 py-1.5":
        variant !== "blank",
      "bg-white border border-gray-300 text-gray-900 focus-visible:outline-gray-600":
        variant === "default" || variant === "white",
      "bg-blue-600 text-white border border-blue-700 hover:bg-blue-500 focus-visible:outline-blue-600":
        variant === "blue" || variant === "primary",
      "bg-gray-600 text-white border border-gray-700 hover:bg-gray-500 focus-visible:outline-gray-600":
        variant === "gray" || variant === "secondary",
      "bg-indigo-600 text-white border border-indigo-700 hover:bg-indigo-500 focus-visible:outline-indigo-600":
        variant === "indigo",
      "bg-orange-600 text-white border border-orange-700 hover:bg-orange-500 focus-visible:outline-orange-600":
        variant === "orange",
      "bg-green-600 text-white border border-green-700 hover:bg-green-500 focus-visible:outline-green-600":
        variant === "green",
    }
  );

  return buttonClassName;
}

const Button: React.FC<ButtonProps> = (props) => {
  // Extract the expected props
  const { children, type, className, variant, ...otherProps } = props;
  const btnClassName = getButtonClassName(variant, className);

  return (
    <button type={type || "button"} className={btnClassName} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
