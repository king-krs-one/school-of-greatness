import { ChangeEvent, FormEvent } from "react";
import { ValidInputTypes } from "@/components/widgets/Input";
import { Button, Spinner } from "@/components/widgets";
import { InputFieldWithLabel } from "@/components/widgets/Input";
import { LinkProps } from "../hoc/withLabel";

export interface ConfigProps {
  labelText: string;
  labelId: string;
  link?: LinkProps;
  type: ValidInputTypes;
  value: string;
  required?: boolean;
  formInputType?: string;
}

export interface FormProps {
  config: ConfigProps[];
  isLoading: boolean;
  btnText: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export default function Form({
  config,
  isLoading,
  btnText,
  onChange,
  onSubmit,
}: FormProps) {
  return (
    <form className="space-y-6" onSubmit={onSubmit}>
      {config.map((input) => (
        <InputFieldWithLabel
          labelId={input.labelId}
          type={input.type}
          key={input.labelId}
          value={input.value}
          onChange={onChange}
          link={input.link}
          required={input.required}
        >
          {input.labelText}
        </InputFieldWithLabel>
      ))}
      <div>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? <Spinner md /> : btnText}
        </Button>
      </div>
    </form>
  );
}
