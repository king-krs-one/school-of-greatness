"use client"

import { Heading, List, Spinner } from "@/components/widgets";
import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const { data: user, isLoading, isError } = useRetrieveUserQuery();
  const config = [
    { label: "First Name", value: user?.first_name },
    { label: "Last Name", value: user?.last_name },
    { label: "Email", value: user?.email },
  ];

  if (isLoading) {
    return (
      <div className="flex justify-center my-8">
        <Spinner lg />
      </div>
    );
  }

  if (isError) {
    router.push("/auth/login");
    toast.error("Please log in");
  }

  return (
    <>
      <header className="mx-auto max-w-7xl bg-white">
        <div className="px-4 py-6 sm:px-6 lg:px-8 border-b">
          <Heading level="h1">Dashboard</Heading>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <List config={config} />
      </main>
    </>
  );
}
