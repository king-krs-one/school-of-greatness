"use client";

import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";
import { Spinner } from "../widgets";
import { toast } from "react-toastify";

interface RequireAuthProps {
  children: React.ReactNode;
}

export default function RequireAuth({ children }: RequireAuthProps) {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAppSelector((state) => state.auth);

  if (isLoading) {
    <div className="flex justify-center my-8">
      <Spinner lg />
    </div>;
  }

  if (!isAuthenticated) {
    toast.error("Must be logged in")
    router.push("/auth/login")
  }

  return <>{children}</>;
}
