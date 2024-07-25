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
      <body className={`${inter.className} bg-gray-50 text-blue-400 relative`}>
        <div
          className="bg-[#e84348] absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full  -z-10
        blur-[10rem] sm:w-[68.75rem]"
        
        >
          
          
        </div>
        <div className="bg-[#6d6697] absolute top-[-1rem] left-[11rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] -z-10"></div>
        {children}
      </body>
    </html>
  );
}
