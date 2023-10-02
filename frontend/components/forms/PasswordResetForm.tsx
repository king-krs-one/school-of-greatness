"use client";

import { Form } from ".";
import { ConfigProps } from "./Form";
import { useResetPassword } from "@/hooks";

export default function PasswordResetForm() {
  const {
    email,
    isLoading,
    onChange,
    onSubmit
  } = useResetPassword()

  const config: ConfigProps[] = [
    {
      labelText: "Email address",
      labelId: "email",
      type: "email",
      // onChange: onChange,
      value: email,
      required: true,
    },
  ];

  return (
    <Form
      config={config}
      isLoading={isLoading}
      btnText="Request password reset"
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
}
