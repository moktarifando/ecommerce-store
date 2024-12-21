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
import { useState } from "react";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";

const registerSchema = z.object({
  email: z.string().email(),
  username: z.string().min(3).max(20),
  password: z.string().min(6).max(10),
});

type RegisterFormData = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const { register, handleSubmit } = useForm<
    z.infer<typeof registerDataSchema>
  >({
    resolver: zodResolver(registerDataSchema),
  });

  const onSubmit = async();
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Register</CardTitle>
        <CardDescription>Enter your data to register</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Email</Label>
              <Input type="email" name="email" required />
            </div>

            <div className="space-y-2">
              <Label>Username</Label>
              <Input type="text" name="username" required />
            </div>

            <div className="space-y-2">
              <Label>Password</Label>
              <Input type="password" name="password" required />
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
    </Card>
  );
}
