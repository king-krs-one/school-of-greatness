"use client";

import { useLogin} from "@/hooks";
import { Form } from ".";
import { ConfigProps } from "./Form";

export default function RegisterForm() {
  const {
    email,
    password,
    isLoading,
    onChange,
    onSubmit,
  } = useLogin();

  const config: ConfigProps[] = [
    {
      labelText: "Email address",
      labelId: "email",
      type: "email",
      value: email,
      required: true,
    },
    {
      labelText: "Password",
      labelId: "password",
      type: "password",
      value: password,
      link: {
        text: "Forgot password",
        url: "/password-reset"
      },
      required: true,
    },
  ];

  return (
    <Form
      config={config}
      isLoading={isLoading}
      btnText="Sign In"
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
}
