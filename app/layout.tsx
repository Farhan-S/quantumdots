import type { Metadata } from "next";
import { Geist, Geist_Mono, Hind_Siliguri } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const hindSiliguri = Hind_Siliguri({
  variable: "--font-hind-siliguri",
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Quantum Dots Academic & Admission Coaching | Md. Ismail",
  description: "ভবিষ্যতের প্রস্তুতি আজ থেকেই - Class 6 থেকে Class 9 পর্যন্ত সব বিষয়ের মানসম্মত কোচিং। অভিজ্ঞ শিক্ষক Md. Ismail এর তত্ত্বাবধানে বিজ্ঞান, কলা ও বাণিজ্য বিভাগের সকল বিষয়ে পাঠদান।",
  keywords: ["coaching center", "tuition", "class 6-9", "Md. Ismail", "academic coaching", "SSC preparation", "science tuition"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${hindSiliguri.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
