"use client";

import { Form } from ".";
import { ConfigProps } from "./Form";
import { useResetPasswordConfirm } from "@/hooks";

interface Props {
  uid: string;
  token: string;
}

export default function PasswordResetConfirmForm({ uid, token }: Props) {
  const { new_password, re_new_password, isLoading, onChange, onSubmit } =
    useResetPasswordConfirm(uid, token);

  const config: ConfigProps[] = [
    {
      labelText: "New Password",
      labelId: "new_password",
      type: "password",
      // onChange: onChange,
      value: new_password,
      required: true,
    },
    {
      labelText: "Confirm New Password",
      labelId: "re_new_password",
      type: "password",
      // onChange: onChange,
      value: re_new_password,
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
