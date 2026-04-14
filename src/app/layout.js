import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./headerFooter/navbar/page";
import Footer from "./headerFooter/footer/page";

export const metadata = {
  title: "Keen Keeper",
  description: "Friends to keep close in your Life",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className='h-full'
    >
      <body className="min-h-full flex flex-col">
        <Navbar/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
