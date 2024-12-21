"use client";

import React, { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useAuthStore from "@/features/auth/store/authStore";

export default function TanstackProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();
  const setIsAuthenticated = useAuthStore((state) => state.setIsAuthenticated);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/auth/status", {
          credentials: "include", // Ensure cookies are included
          cache: "no-store", // Avoid using cached responses
        });

        if (response.ok) {
          const data = await response.json();
          setIsAuthenticated(data.isAuthenticated); // Update Zustand or global state
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error("Failed to check authentication status:", error);
        setIsAuthenticated(false);
      }
    };

    checkAuthStatus(); // Fetch status on mount
  }, [setIsAuthenticated]);
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
