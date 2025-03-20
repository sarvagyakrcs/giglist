import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
import { ThemeProvider } from "./theme-provider";
import QueryClientProvider from "./query-client";

type Props = {
  children: React.ReactNode;
};

const GlobalProvider = ({ children }: Props) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <QueryClientProvider>
        {children}
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default GlobalProvider;
