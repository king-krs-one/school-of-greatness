"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useActivationMutation } from "@/redux/features/authApiSlice";
import { Heading } from "@/components/widgets";
import { toast } from "react-toastify";
import { PageElement } from "@/components/layout";

interface PageProps {
  params: {
    uid: string;
    token: string;
  };
}

export default function Page({ params }: PageProps) {
  const router = useRouter();
  const [activation] = useActivationMutation();
  useEffect(() => {
    const { uid, token } = params;
    activation({ uid, token })
      .unwrap()
      .then((response) => {
        toast.success("Account activated");
      })
      .catch((response) => {
        toast.error(`Failed to activate account: ${response.data.detail}`);
      })
      .finally(() => {
        router.push("/auth/login");
      });
  }, [activation, params, router]);

  return (
    <PageElement>
      <Heading level="h1">Activating your account...</Heading>
    </PageElement>
  );
}
