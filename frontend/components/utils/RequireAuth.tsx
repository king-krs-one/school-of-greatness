"use client";

import { redirect } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";
import { Spinner } from "../widgets";

interface RequireAuthProps {
  children: React.ReactNode;
}

export default function RequireAuth({ children }: RequireAuthProps) {
  const { isAuthenticated, isLoading } = useAppSelector((state) => state.auth);

  if (isLoading) {
    return (
      <div className="flex justify-center my-8">
        <Spinner lg />
      </div>
    );
  }

  if (!isAuthenticated) {
    redirect("/auth/login");
  }

  return <>{children}</>;
}
