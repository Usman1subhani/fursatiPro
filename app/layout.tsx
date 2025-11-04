import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/layout/Navbar";
import Footer from "@/component/layout/Footer";
import { Box } from "@mui/material";
import Home from "../app/Screens/home/page";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FursatiPro",
  description: "Developed by Usman Subhani",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <Box sx={{ position: "relative" }}> */}
          <Navbar />
          {/* Top-right decorative frame (behind navbar)
          <Box
            component="img"
            src="/profile/Frame.png"
            alt="decorative-frame"
            sx={{
              position: "absolute",
              top: { xs: -20, md: -40 },
              right: { xs: -20, md: -60 },
              width: { xs: 120, md: 260 },
              height: "auto",
              zIndex: 0,
              pointerEvents: "none",
              display: { xs: "none", sm: "block" },
            }}
          />
        </Box>
       
       
        {/* {children} */}
         <Home />
        <Footer />
      </body>
    </html>
  );
}
