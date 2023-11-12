import { Label } from "../ui";
import { Link } from "../ui";
import { variantTypes as linkVariantTypes } from "../ui/navigation/Link";

export interface LinkProps {
  text: string;
  url: string;
  variant?: linkVariantTypes;
}

interface WithLabelProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelId: string;
  link?: LinkProps;
  // inputType?: ValidInputTypes;
  // onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
}

const withLabel = (WrappedComponent: React.ComponentType<any>) => {
  const WithLabelComponent = ({ labelId, link, children, ...rest }: WithLabelProps) => (
    <div className="mb-4">
      <div className="flex justify-between align-center">
        <Label htmlFor={labelId}>{children}</Label>
        {link && (
          <div className="text-sm">
            <Link href={link.url} variantLink={link.variant}>
              {link.text}
            </Link>
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

  // Set a displayName directly
  WithLabelComponent.displayName = `WithLabel(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return WithLabelComponent;
};

export default withLabel;
