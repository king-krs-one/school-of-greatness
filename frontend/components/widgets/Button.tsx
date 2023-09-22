interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  // You can add your custom props here
  //   customProp?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  // Extract the expected props
  const { children, type, className, ...otherProps } = props;

  return (
    <button
      type={type || "button"}
      className={`flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600
        ${className}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
