import cn from "classnames";
import { ImSpinner3 } from "react-icons/im";

interface SpinnerProps {
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  className?: string;
}

const Spinner: React.FC<SpinnerProps> = (props) => {
  const { sm, md, lg, className } = props;
  const classNameSpinner = cn(
    "animate-spin text-white-300 fill-white-300 mr-2",
    className,
    {
      "w-4 h-4": sm,
      "w-6 h-6": md,
      "w-8 h-8": lg,
    }
  );

  return (
    <div role="status">
      <ImSpinner3 className={classNameSpinner} />
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;
