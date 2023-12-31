import withLabel from "../../../hoc/withLabel";

export type ValidInputTypes =
  | "text"
  | "password"
  | "email"
  | "number"
  | "date"
  | "tel"
  | "url";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: ValidInputTypes;
  // You can add your custom props here
  //   customProp?: string;
}

const InputField: React.FC<InputProps> = (props) => {
  // Extract the expected props
  const {
    id,
    name,
    type,
    className,
    placeholder,
    onChange,
    onBlur,
    required,
    ...otherProps
  } = props;

  return (
    <input
      id={id}
      name={name}
      type={type || "text"}
      className={`input input-label-focus block w-full rounded-md py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6
        ${className || ""}`}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      required={required}
      {...otherProps} // Pass any additional props to the input element
    />
  );
};

const InputFieldWithLabel = withLabel(InputField);

export default InputField;
export { InputFieldWithLabel, InputField }

