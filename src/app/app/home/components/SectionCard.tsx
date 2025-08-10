import { CardContent, CardHeader } from "@/components/ui/card";
import { ReactNode } from "react";
import TypographyH2 from "@/components/typography/TypographyH2";
import ContainerCard from "@/components/ContainerCard";

interface SectionCardProps {
  children: ReactNode;
  title: string;
  icon: ReactNode;
}

export default function SectionCard({
  children,
  title,
  icon,
}: SectionCardProps) {
  return (
    <ContainerCard variant="gray">
      <CardHeader>
        <TypographyH2 extraClasses="flex gap-3 items-center">
          {icon} {title}
        </TypographyH2>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </ContainerCard>
  );
}
