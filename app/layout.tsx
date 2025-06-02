import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AmplifyProvider from "./components/AmplifyProvider";
import "./app.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amplify + Next.js",
  description: "Amplify + Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AmplifyProvider>{children}</AmplifyProvider>
      </body>
    </html>
  );
}
