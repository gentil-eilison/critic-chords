import { ReactNode } from "react";
import { Card } from "./ui/card";

interface ContainerCardProps {
  children: ReactNode;
  variant: "green" | "gray";
  extraClasses?: string;
}

const variantClasses = {
  green:
    "bg-gradient-to-r from-green-500/10 to-green-600/10 border-green-500/20",
  gray: "bg-gray-900/50 border-gray-800",
};

export default function ContainerCard({
  children,
  variant,
  extraClasses,
}: ContainerCardProps) {
  return (
    <Card className={`${variantClasses[variant]} ${extraClasses}`}>
      {children}
    </Card>
  );
}
