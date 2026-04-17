import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/headerFooter/navbar/page";
import Footer from "./components/headerFooter/footer/page";
import { InteractionProvider } from "./context/dContext";

export const metadata = {
  title: "Keen Keeper",
  description: "Friends to keep close in your Life",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col bg-[#f8fafc]">
        <Navbar/>
        <main>
          <InteractionProvider>
            {children}
          </InteractionProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
