import { Label, InputField } from "../widgets";
import { ValidInputTypes } from "../widgets/Input";

import { ChangeEvent } from "react";

interface InputProps {
  labelId: string;
  type: ValidInputTypes;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  children: React.ReactNode;
  required?: boolean;
}

export default function Input({
  labelId,
  type,
  value,
  onChange,
  children,
  required = false,
}: InputProps) {
  return (
    <div>
      <Label htmlFor={labelId}>{children}</Label>
      <div className="mt-2">
        <InputField
          id={labelId}
          name={labelId}
          type={type}
          onChange={onChange}
          value={value}
          required={required}
        />
      </div>
    </div>
  );
}
