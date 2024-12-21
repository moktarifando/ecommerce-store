import React, { ReactNode } from "react";

interface H1Props {
  children: ReactNode;
}

export default function H1({ children }: H1Props) {
  return <h1 className="text-4xl font-bold">{children}</h1>;
}
