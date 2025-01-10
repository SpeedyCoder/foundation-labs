import { type Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Foundation Labs | UUID Generator",
  description: "Online UUID Generator",
};

export default function UUIDLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
