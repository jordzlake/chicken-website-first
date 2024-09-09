import "./globals.css";
import { Inter } from "next/font/google";
import { opensans, lato } from "./fonts";
import Header from "@/components/sections/header/Header";
import Footer from "@/components/sections/football/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chicken Website",
  description: "Selling the best livestock since we arrived.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${opensans.variable} ${lato.variable}`}>
        <section>
          <Header />
        </section>
        {children}
        <section>
          <Footer />
        </section>
      </body>
    </html>
  );
}
