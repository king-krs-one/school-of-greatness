'use client'

import { useLogoutMutation } from "@/redux/features/authApiSlice";
import { useAppDispatch } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { logout as setLogout } from "@/redux/features/authSlice";
import { toast } from "react-toastify";

export default function useLogout() {
  const router = useRouter();
  const [logout] = useLogoutMutation();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    logout(undefined)
      .unwrap()
      .then(() => {
        toast.success("Succesfully logged out");
        dispatch(setLogout());
      })
      .finally(() => {
        router.push("/");
      });
  };

  return {
    handleLogout
  };
} 