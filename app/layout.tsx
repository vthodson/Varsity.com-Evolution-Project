import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Varsity.com Evolution",
  description: "The future of Varsity.com",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}