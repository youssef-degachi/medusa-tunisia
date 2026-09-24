import type { Metadata } from "next";
import { ShopPageContent } from "@/components/ShopPageContent";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Nine handcrafted pieces from MEDUSA — jewelry, eyewear, leather goods and silk, made in Tunis, Djerba and Kairouan.",
};

export default function ShopPage() {
  return <ShopPageContent />;
}
