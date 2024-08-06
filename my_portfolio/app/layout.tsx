import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Karthik | Personal Portfolio",
  description: "Let's draw your dreams on screen.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-36 sm:pt-28 pb-10 overflow-x-hidden`}
      >

        <div className="bg-gradient-to-r from-[#f7f7f7] to-[#e0f7fa] dark:from-[#1c1c1c] sm:w-full w-[31.25rem] dark:to-[#2e2e2e] absolute top-0 left-0 h-full -z-20 flex"></div>
        <div className="bg-[#e0f7fa] dark:bg-[#2e2e2e] absolute top-[-2rem] -z-10 left-[-30rem] h-[30rem] sm:w-full w-[31.25rem] rounded-full blur-[8rem] md:left-[-28rem] lg:left-[-24rem] xl:left-[-20rem] 2xl:left-[-15rem]"></div>
        <div className="bg-[#f5f5dc] dark:bg-[#3a3a3a] absolute top-[-4rem] sm:w-full w-[31.25rem] -z-10 right-[-5rem] h-[30rem] rounded-full blur-[8rem]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <ThemeSwitch />
            <Toaster position="bottom-center" />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
