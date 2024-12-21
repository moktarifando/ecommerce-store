"use client";

import useAuthStore from "@/features/auth/store/authStore";
import LogoutButton from "@/features/auth/component/logout-button";
import LoginButton from "@/features/auth/component/login-button";

export default function LoginLogoutButton() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return <div>{isAuthenticated ? <LogoutButton /> : <LoginButton />}</div>;
}
