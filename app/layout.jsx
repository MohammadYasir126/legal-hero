import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata = {
  title: "LegalOS — Manage every part of your legal work",
  description:
    "Track matters, coordinate schedules, manage clients, centralize documents, and handle communication — all in one system.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className={`${dmSans.className} antialiased`}>{children}</body>
    </html>
  );
}
