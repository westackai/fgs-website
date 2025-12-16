import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fresh Grain & Spices | Premium Quality Pulses & Grains",
  description:
    "Leading manufacturer and exporter of premium quality Toor Dal, Kabuli Chana, and processed grains. State-of-the-art facilities with Sortex technology.",
  keywords: [
    "Fresh Grain and Spices",
    "Toor Dal",
    "Kabuli Chana",
    "Pulses Manufacturer",
    "Indore",
    "India Exporter",
    "Sortex Cleaned",
  ],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Fresh Grain & Spices | Premium Quality Pulses & Grains",
    description:
      "Leading manufacturer and exporter of premium quality Toor Dal, Kabuli Chana, and processed grains.",
    siteName: "Fresh Grain & Spices",
    images: [{ url: "/logo.png" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fresh Grain & Spices | Premium Quality Pulses & Grains",
    description:
      "Leading manufacturer and exporter of premium quality Toor Dal, Kabuli Chana, and processed grains.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
