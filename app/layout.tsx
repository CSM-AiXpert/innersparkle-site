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
  metadataBase: new URL("https://innersparkle-site.vercel.app"),
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    title: "The Inner Sparkle | Premium AI Business Systems",
    description: "Voice AI, CRM automation, and digital employees designed to capture more opportunities and grow your business.",
    siteName: "The Inner Sparkle",
    images: [
      {
        url: "/social-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Inner Sparkle premium AI business systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Inner Sparkle | Premium AI Business Systems",
    description: "Voice AI, CRM automation, and digital employees designed to capture more opportunities and grow your business.",
    images: ["/social-image.jpg"],
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
