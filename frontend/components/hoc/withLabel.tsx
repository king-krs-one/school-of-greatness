import { Label } from "../widgets";

interface WithLabelProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelId: string;
  // inputType?: ValidInputTypes;
  // onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
}

const withLabel = (WrappedComponent: React.ComponentType<any>) => {
  return ({ labelId, children, ...rest }: WithLabelProps) => (
    <div className="mb-4">
      <Label htmlFor={labelId}>{children}</Label>
      <WrappedComponent
        id={labelId}
        name={labelId}
        // type={inputType}
        {...rest}
      />
    </div>
  );
};

export default withLabel;
