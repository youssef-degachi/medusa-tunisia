import type { Metadata } from "next";
import { TheHousePageContent } from "@/components/TheHousePageContent";

export const metadata: Metadata = {
  title: "The House",
  description:
    "MEDUSA was founded in Tunis in 2021, working with small workshops in Tunis, Djerba and Kairouan. Meet the house, the timeline and the materials.",
};

export default function TheHousePage() {
  return <TheHousePageContent />;
}
