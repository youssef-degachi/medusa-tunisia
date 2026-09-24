import type { Metadata } from "next";
import { CarePageContent } from "@/components/CarePageContent";

export const metadata: Metadata = {
  title: "Care & shipping",
  description: "How to care for your MEDUSA piece, and how shipping, delivery and returns work.",
};

export default function CarePage() {
  return <CarePageContent />;
}
