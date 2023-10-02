import type { Metadata } from "next";
import { PasswordResetConfirmForm } from "@/components/forms";
import { Image, Heading, Link } from "@/components/widgets";

export const metadata: Metadata = {
  title: "School of Greatness | Password Reset Confirm",
  description: "School of Greatness password reset confirm page",
};

interface Props {
  params: { uid: string; token: string };
}

export default function Page({params: {uid, token}}: Props) {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image
          className="h-10"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="School of Greatness"
        />
        <Heading level="h2" className="text-center">
          Reset your password
        </Heading>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <PasswordResetConfirmForm uid={uid} token={token}/>
      </div>
    </div>
  );
}
