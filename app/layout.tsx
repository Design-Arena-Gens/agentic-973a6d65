import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Animal Alphabet Adventure",
  description:
    "A vibrant, playful alphabet rhyme for kids featuring animals from A to Z."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
