import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import Provider from "@/provider/Provider";

export const metadata: Metadata = {
  title: "Next Shop",
  description: "Generated by create next app",
  authors: { name: "Mahdi FayyaziMoghaddam" },
  keywords: ["mahdi", "Shop", "fayyazi", "moghaddam", "project"],
  icons: "./image/favicon.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        cz-shortcut-listen="false"
        className="relative flex flex-col items-center min-h-screen bg-primary p-0 m-0 px-[6em] max-xl:px-[4em] max-lg:px-[3em] max-md:px-[2em] max-sm:px-[1em] transition-all duration-500!"
      >
        <Provider>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
