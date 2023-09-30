'use client'

import { Fragment } from "react";
import { useVerify } from "@/hooks";

export default function Setup() {
  useVerify();

  return <Fragment></Fragment>;
}
