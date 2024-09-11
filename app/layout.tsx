import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "@/components";

// Metadata: provide type definitions for metadata related to the webpage.
export const metadata: Metadata = {
  title: "Car Hub",
  description: "Discover the best cars in the world.",
};

// ⁡⁣⁣⁢𝗥𝗼𝗼𝘁𝗟𝗮𝘆𝗼𝘂𝘁⁡: a React component that wraps the entire application -main layout for the application-.
// {children}: Readonly<{ children: React.ReactNode; }>⁡ ---> prop: type of prop.
// ⁡⁣⁢⁣𝘙𝘦𝘢𝘤𝘵.𝘙𝘦𝘢𝘤𝘵𝘕𝘰𝘥𝘦⁡ --> is a TypeScript type that represents any valid React content, such as elements, strings, numbers, fragments, and other components.

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
