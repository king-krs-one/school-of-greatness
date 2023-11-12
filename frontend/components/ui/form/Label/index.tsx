interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  // You can add your custom props here
  // customProp?: string;
}

const Label: React.FC<LabelProps> = (props) => {
  // Extract the expected props
  const { children, htmlFor, className, ...otherProps } = props;

  return (
    <label
      htmlFor={htmlFor}
      className={`block text-sm font-medium leading-6 text-gray-900
        ${className}`}
      {...otherProps} // Pass any additional props to the input element
    >
      {children}
    </label>
  );
};

export default Label;
