"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

interface ThemeProps {
  children: ReactNode;
}

export default function Theme({ children }: ThemeProps) {
  return (
    <ThemeProvider attribute="class" enableSystem={false}>
      {children}
    </ThemeProvider>
  );
}
