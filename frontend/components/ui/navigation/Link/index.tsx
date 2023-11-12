import { LinkProps as NextLinkProps } from "next/link";
import Link from "next/link";
import cn from "classnames";
import { getButtonClassName, buttonVariantTypes } from "../..";

export type variantTypes =
  | "blank"
  | "default"
  | "blue"
  | "cornflower"
  | "indigo"
  | "gray"
  | "white";

type CustomLinkProps = NextLinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

interface LinkProps extends CustomLinkProps {
  children: React.ReactNode;
  type?: "link" | "button";
  variantLink?: variantTypes
  variantButton?: buttonVariantTypes
}

const CustomLink: React.FC<LinkProps> = (props) => {
  // Extract the expected props
  const {
    children,
    href,
    className,
    type = "link",
    variantLink = "default",
    variantButton = "default",
    ...otherProps
  } = props;
  
  const linkClassName =
    type === "link"
      ? cn(
        {
          "": variantLink === "blank",
          "font-semibold leading-6": variantLink !== "blank",
          "text-gray-600 hover:text-gray-500": variantLink === "default" || variantLink === "gray",
          "text-blue-600 hover:text-blue-500": variantLink === "blue",
          "text-sky-500 hover:text-sky-600": variantLink === "cornflower",
          "text-indigo-600 hover:text-indigo-500": variantLink === "indigo",
          "text-white hover:text-gray-100": variantLink === "white",
          // Add more conditional styles for other variants as needed
        },
        className
      )
      : getButtonClassName(variantButton, className);


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
