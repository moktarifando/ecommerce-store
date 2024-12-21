import React, { ReactNode } from "react";
import { Button } from "../ui/button";

interface ShopNowViewAllProps {
  children: ReactNode; // Define children as a ReactNode
}

export default function ViewAllButton({ children }: ShopNowViewAllProps) {
  return (
    <Button
      variant="ghost"
      className="bg-blue-600 text-white font-bold px-10 py-6 rounded-full"
    >
      {children}
    </Button>
  );
}
