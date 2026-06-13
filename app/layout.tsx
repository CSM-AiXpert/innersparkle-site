import type { Metadata } from "next";
import { Cinzel, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "The Inner Sparkle | Premium AI Business Systems",
    template: "%s | The Inner Sparkle",
  },
  description: "Transform your business with CoastaFlow Voice AI and CoastaClaw Digital Employees. The premium AI receptionist and automation suite for modern enterprises.",
  applicationName: "The Inner Sparkle",
  keywords: ["AI receptionist", "voice AI", "business automation", "CRM automation", "digital employees"],
  authors: [{ name: "The Inner Sparkle" }],
  creator: "The Inner Sparkle",
  openGraph: {
    type: "website",
    title: "The Inner Sparkle | Premium AI Business Systems",
    description: "Voice AI, CRM automation, and digital employees designed to capture more opportunities and grow your business.",
    siteName: "The Inner Sparkle",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Inner Sparkle | Premium AI Business Systems",
    description: "Voice AI, CRM automation, and digital employees designed to capture more opportunities and grow your business.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#060404] text-[#f5d6cb]">
        {children}
      </body>
    </html>
  );
}
