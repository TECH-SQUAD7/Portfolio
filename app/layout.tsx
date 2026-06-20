import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rajat | Student, Builder, Researcher, Founder",
  description:
    "Personal portfolio of Rajat, a student, product builder, researcher, and founder building AI products, communities, and startup ideas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
