"use client";

import cn from "classnames";
import { Button } from "../..";
import { ImGoogle, ImFacebook } from "react-icons/im";
import { continueWithGoogle, continueWithFacebook } from "@/utils";

interface SocialButtonProps {
  provider: "google" | "facebook";
  children: React.ReactNode;
  [rest: string]: any;
}

const SocialButton: React.FC<SocialButtonProps> = ({
  provider,
  children,
  ...rest
}) => {
  const buttonClassName = cn(
    "flex justify-start rounded-md text-sm font-semibold leading-6 px-3 py-1.5",
    {
      "flex-1 items-start bg-blue-500 border border-blue-700 text-white focus-visible:outline-blue-600":
        provider === "facebook",
      "flex-1 bg-red-500 border border-red-700 text-white focus-visible:outline-red-600":
        provider === "google",
    }
  );

  return (
    <Button variant="blank" className={buttonClassName} {...rest}>
      <span className="flex justify-start items-center">{children}</span>
    </Button>
  );
};

const SocialButtons: React.FC = () => {
  return (
    <div className="flex justify-between items-center gap-2 mt-5">
      <SocialButton provider="google" onClick={continueWithGoogle}>
        <ImGoogle className="mr-2" />Google Signin
      </SocialButton>
      <SocialButton provider="facebook" onClick={continueWithFacebook}>
        <ImFacebook className="mr-2" />Facebook Signin
      </SocialButton>
    </div>
  );
};

export default SocialButtons;
export { SocialButton, SocialButtons };
