import React from "react";
import { Providers } from "../providers";

export default function PtLayout({ children }: { children: React.ReactNode }) {
  return <Providers initialLocale="pt">{children}</Providers>;
}
