import { LinkProps as NextLinkProps } from "next/link";
import Link from "next/link";
import cn from "classnames";

type CustomLinkProps = NextLinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

interface LinkProps extends CustomLinkProps {
  children: React.ReactNode;
  type?: "anchor" | "button";
  variant?:
    | "default"
    | "primary"
    | "secondary"
    | "blue"
    | "indigo"
    | "orange"
    | "green"
    | "gray"
    | "white";
}

// interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
//   children: React.ReactNode;
//   // You can add your custom props here
//   // customProp?: string;
// }

const CustomLink: React.FC<LinkProps> = (props) => {
  // Extract the expected props
  const {
    children,
    href,
    className,
    type = "anchor",
    variant = "default",
    ...otherProps
  } = props;

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

  const color = colorsByVariant[variant];

  const linkClassName = cn(className, {
    "font-semibold leading-6 text-indigo-600 hover:text-indigo-500":
      type === "anchor",
    "rounded-md border px-3.5 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2":
      type === "button",
    [`bg-${color}-600 text-white border-${color}-600 hover:bg-${color}-500 focus-visible:outline-${color}-600`]:
      type === "button" && variant && !["default", "white"].includes(variant),
    "bg-white border-gray-300 text-gray-900 focus-visible:outline-gray-600":
      type === "button" && (variant === "default" || variant === "white"),
  });

  return (
    <Link
      href={href}
      className={linkClassName}
      {...otherProps} // Pass any additional props to the input element
    >
      {children}
    </Link>
  );
};

export default CustomLink;
