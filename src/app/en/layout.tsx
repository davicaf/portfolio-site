import React from "react";
import { Providers } from "../providers";

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <Providers initialLocale="en">{children}</Providers>;
}
