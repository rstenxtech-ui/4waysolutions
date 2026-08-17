import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Lato } from "next/font/google";
import "./globals.css";

const headingFont = Bebas_Neue({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400"],
});

const bodyFont = Lato({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "4Way Solutions — Chennai's Authorised Jaquar Partner",
  description:
    "4Way Solutions is Chennai's authorised partner for Jaquar sales, service and genuine spares — plus plumbing and home cleaning, handled by one dependable team.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo/4WaySolutions-icon.png", type: "image/png" },
    ],
    apple: "/logo/4WaySolutions-icon-180.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0E4E82",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${headingFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink font-body">
        {children}
      </body>
    </html>
  );
}
