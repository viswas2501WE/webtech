'use client'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Poppins, Roboto } from 'next/font/google';
import ClientWrapper from "@/components/ClientWrapper";
import { usePathname } from "next/navigation";
import { Suspense, useEffect } from "react";
// import { Suspense } from 'react';
import { labelMap } from "@/components/PageCover"
import { Toaster } from 'react-hot-toast';


const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600'], display: 'swap' });
const roboto = Roboto({ subsets: ['latin'], weight: ['400'], display: 'swap' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});



export default function RootLayout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    const pageTitle = labelMap[pathname] || 'Page';
    document.title = `Webtech Evolution - ${pageTitle}`;
  }, [pathname]);

  const isAdminRoute = pathname.startsWith('/admin');

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.className} ${roboto.className} antialiased overflow-x-hidden`}
      >
{/* 

        {isAdminRoute ? (
          // If it's an admin route, render only children directly, allowing admin/layout.jsx to handle its own header/footer
          children
        ) : ( */}
          {/* // For other routes, wrap children with ClientWrapper (which includes the main Header/Footer) */}
           <Suspense>
            <ClientWrapper>
              <Toaster position="bottom-center" reverseOrder={false} />
              {children}
            </ClientWrapper>
          </ Suspense>
        {/* )} */}

      </body>
    </html>
  );
}