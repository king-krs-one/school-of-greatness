import React, { useState, useMemo, CSSProperties } from 'react';
import { getInputStyles, getLabelStyles } from './style';

export type ValidInputTypes =
  | 'text'
  | 'password'
  | 'email'
  | 'number'
  | 'date'
  | 'tel'
  | 'url';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name?: string;
  label: string;
  isValid?: boolean;
  type?: ValidInputTypes;
  [rest: string]: any;
}

const InputField: React.FC<InputFieldProps> = (props) => {
  // Extract the expected props
  const {
    id,
    name,
    label,
    type,
    value,
    className,
    isValid = true,
    onChange,
    onFocus,
    onBlur,
    ...rest
  } = props;

  const [isActive, setIsActive] = useState(Boolean(value || false));
  const [isHover, setIsHover] = useState(Boolean(value || false));

  const styleInput = useMemo(() => getInputStyles(isActive, isValid, isHover), [isActive, isValid, isHover]);
  const styleLabel = useMemo(() => getLabelStyles(isActive, isValid), [isActive, isValid]);

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    if (event.type === 'focus' || value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }

    if (event?.type === 'blur' && onBlur) onBlur(event);
    if (event?.type === 'focus' && onFocus) onFocus(event);
  };

  return (
    <div style={{ position: "relative" }}>
      <input
        id={id}
        name={name}
        value={value}
        type={type || 'text'}
        className={'input-base hover:input-hover focus:input-focus without-ring'}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleFocus}
        onMouseOver={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        // chakra ui attributes / style
        // style={styleInput.input}
        // Pass any additional props to the input element
        {...rest}
      />
      <label
        htmlFor={id}
        className={`input-label ${ isActive && 'input-label-focus'}`}
        // style={styleLabel.label as CSSProperties}
        // {...style.label as FormLabelProps}
      >
        <div style={styleLabel.labelBgBorder} />
        <div style={{ position: "relative", zIndex: "2"}}>{label}</div>
      </label>
    </div>
  );
};

export default InputField;
