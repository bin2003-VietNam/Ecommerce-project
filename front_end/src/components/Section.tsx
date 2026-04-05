import React from "react";
import { cn } from "@/lib/utils";

export default function Section({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="h-full w-screen">
      <div className={cn("w-[80%] mx-[12%] bg-white", className)}>{children}</div>
    </div>
  );
}
