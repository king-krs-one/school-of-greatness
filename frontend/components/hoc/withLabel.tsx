import { Label } from "../widgets";
import { Link } from "../widgets";

export interface LinkProps {
  text: string;
  url: string;
}

interface WithLabelProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelId: string;
  link?: LinkProps;
  // inputType?: ValidInputTypes;
  // onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
}

const withLabel = (WrappedComponent: React.ComponentType<any>) => {
  return ({ labelId, link, children, ...rest }: WithLabelProps) => (
    <div className="mb-4">
      <div className="flex justify-between align-center">
        <Label htmlFor={labelId}>{children}</Label>
        {link && (
          <div className="text-sm">
            <Link href={link.url}>{link.text}</Link>
          </div>
        )}
      </div>
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
