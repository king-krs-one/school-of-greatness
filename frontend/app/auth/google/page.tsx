"use client";

import { useSocialAuthenticateMutation } from "@/redux/features/authApiSlice";
import { useSocialAuth } from "@/hooks";
import { Spinner } from "@/components/widgets";

export default function Page() {
  const [googleAuthenticate] = useSocialAuthenticateMutation();
  useSocialAuth(googleAuthenticate, "google-oauth2");

  return (
    <div className="my-8">
      <Spinner lg />
    </div>
  );
}
