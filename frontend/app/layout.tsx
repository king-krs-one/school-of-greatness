import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Provider from "@/redux/provider";
import { Navbar, Footer } from "@/components/layout";
import { Notification } from "@/components/widgets";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "School of Greatness",
  description: "Online platform to become a person of greatness",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Notification />
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
