import cn from "classnames";

export type variantTypes =
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

const colorsByVariant = {
  default: "white",
  primary: "blue",
  secondary: "gray",
  blue: "blue",
  indigo: "indigo",
  orange: "orange",
  green: "green",
  gray: "gray",
  white: "white",
};

export function getButtonClassName(
  variant: ButtonProps["variant"] = "default",
  className: string = ""
) {
  const color = colorsByVariant[variant];

  const buttonClassName = cn(
    "flex justify-center rounded-md text-sm font-semibold leading-6 px-3 py-1.5",
    {
      [`bg-${color}-600 text-white border border-${color}-600 hover:bg-${color}-500 focus-visible:outline-${color}-600`]:
        variant && !["default", "white"].includes(variant),
      "bg-white border border-gray-300 text-gray-900 focus-visible:outline-gray-600":
        variant === "default" || variant === "white",
    },
    className
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
