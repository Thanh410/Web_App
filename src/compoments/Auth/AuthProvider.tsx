"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";
// import { createServerContext } from "react";

function AuthProvider({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default AuthProvider;
