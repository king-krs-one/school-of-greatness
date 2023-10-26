"use client";

import { Heading, List, Spinner } from "@/components/widgets";
import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";

export default function Page() {
  const { data: user, isLoading, isFetching } = useRetrieveUserQuery();
  const config = [
    { 
      label: "First Name", 
      value: user?.first_name 
    },
    { 
      label: "Last Name", 
      value: user?.last_name 
    },
    { 
      label: "Email", 
      value: user?.email 
    },
  ];

  if (isLoading || isFetching) {
    return (
      <div className="flex justify-center my-8">
        <Spinner lg />
      </div>
    );
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
