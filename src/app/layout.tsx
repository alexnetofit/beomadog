import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import { siteConfig } from "@/config/site";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.beomadog.com.br"),
  title: `${siteConfig.brand.name} | ${siteConfig.brand.tagline}`,
  description: siteConfig.brand.description,
  openGraph: {
    title: `${siteConfig.brand.name} | ${siteConfig.brand.tagline}`,
    description: siteConfig.brand.description,
    url: "https://www.beomadog.com.br",
    siteName: siteConfig.brand.name,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "DigestiCão — petisco funcional para cães com pastor alemão ao lado do pote",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.brand.name} | ${siteConfig.brand.tagline}`,
    description: siteConfig.brand.description,
    images: ["/og.png"],
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "512x512" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
