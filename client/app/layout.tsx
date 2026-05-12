import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "./components/Navbar";
import Provider from "./Provider";

const gilroy = localFont({
  src: [
    {
      path: "./fonts/gilroy/Gilroy-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/gilroy/Gilroy-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/gilroy/Gilroy-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gilroy",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sahayak",
  description: "Local services platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${gilroy.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Provider>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}