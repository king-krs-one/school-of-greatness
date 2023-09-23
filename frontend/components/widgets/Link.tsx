import { LinkProps as NextLinkProps } from 'next/link';
import Link from 'next/link';

type CustomLinkProps = NextLinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;


interface LinkProps extends CustomLinkProps {
  children: React.ReactNode;
  // Add any additional props specific to your CustomLink component
  // customProp?: string;
}


// interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
//   children: React.ReactNode;
//   // You can add your custom props here
//   // customProp?: string;
// }

const CustomLink: React.FC<LinkProps> = (props) => {
  // Extract the expected props
  const { children, href, className, ...otherProps } = props;

  return (
    <Link
      href={href}
      className={`font-semibold leading-6 text-indigo-600 hover:text-indigo-500
        ${className}`}
      {...otherProps} // Pass any additional props to the input element
    >
      {children}
    </Link>
  );
};

export default CustomLink;
