interface AnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  // You can add your custom props here
  // customProp?: string;
}

const Anchor: React.FC<AnchorProps> = (props) => {
  // Extract the expected props
  const { children, href, className, ...otherProps } = props;

  return (
    <a
      href={href}
      className={`font-semibold leading-6 text-indigo-600 hover:text-indigo-500
        ${className}`}
      {...otherProps} // Pass any additional props to the input element
    >
      {children}
    </a>
  );
};

export default Anchor;
