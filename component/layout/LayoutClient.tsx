"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LayoutClient({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isAuthRoute = pathname.startsWith("/auth");

    return (
        <>
          
            {!isAuthRoute && <Navbar />}
            <main>{children}</main>
            {!isAuthRoute && <Footer />}
        </>
    );
}
