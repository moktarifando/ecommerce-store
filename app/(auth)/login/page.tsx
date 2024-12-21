"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useAuthStore from "@/features/auth/store/authStore";

const loginSchema = z.object({
  email: z.string().email("Invalid Email Format"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must be at most 20 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();
  const [dialogMessage, setDialogMessage] = useState<string | null>(null);
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const login = useAuthStore((state) => state.login);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({ resolver: zodResolver(loginSchema) });

  const handleClick = async (data: LoginFormData) => {
    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include", // include cookies in the request
      });

      if (response.ok) {
        // Update Zustand state to reflect the logged-in status
        login();

        // Show success dialog message
        setDialogMessage(
          "Login successful. You will be redirected to homepage."
        );
        setIsDialogVisible(true);

        // Redirect to homepage after 4 seconds
        setTimeout(() => {
          router.push("/");
        }, 4000);
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      // Show error dialog message
      setDialogMessage(`Failed to login: ${error}`);
      setIsDialogVisible(true);
    }
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Enter your email and password</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(handleClick)}>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Email</Label>
              <Input
                type="email"
                {...register("email")}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label>Password</Label>
              <Input
                type="password"
                {...register("password")}
                className={errors.password ? "border-red-500" : ""}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            <Button type="submit" className="w-full">
              Login
            </Button>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button
          variant={"outline"}
          className="w-full"
          onClick={() => {
            window.location.href =
              "http://localhost:8080/oauth2/authorization/google";
          }}
        >
          Login with Google
        </Button>
      </CardFooter>
      {isDialogVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-md">
            <p>{dialogMessage}</p>
            <Button className="mt-4" onClick={() => setIsDialogVisible(false)}>
              Close
            </Button>
          </div>
        </div>
      )}
    </Card>
  );
}
