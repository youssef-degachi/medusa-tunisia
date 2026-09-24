import type { Metadata } from "next";
import { ContactPageContent } from "@/components/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with MEDUSA. Workshop in Tunis; we reply to every message within a couple of days.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
