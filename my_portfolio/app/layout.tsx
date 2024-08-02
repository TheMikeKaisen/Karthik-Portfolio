import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";

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
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative pt-36 sm:pt-28`}>
        <div className="bg-gradient-to-r from-[#f7f7f7] to-[#e0f7fa] absolute top-0 left-0 w-full h-full -z-20"
        
        ></div>
        <div className="bg-[#e0f7fa] absolute top-[-2rem] -z-10 left-[-30rem] h-[30rem] w-[45rem] rounded-full blur-[8rem] sm:w-[65rem] md:left-[-28rem] lg:left-[-24rem] xl:left-[-20rem] 2xl:left-[-15rem]"></div>
        <div className="bg-[#f5f5dc] absolute top-[-4rem] -z-10 right-[-5rem] h-[30rem] w-[30rem] rounded-full blur-[8rem] sm:w-[60rem] dark:bg-[#f5f5dc]"></div>
        <Header />
        {children}
      </body>
    </html>
  );
}
