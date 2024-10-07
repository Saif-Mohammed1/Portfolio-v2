import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Footer from "@/components/footer/footer";
import SectionContextProvider from "@/context/section-context";
import ThemeContextProvider from "@/context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Personal Portfolio",
  description:
    "Hi there! I'm Saif, a MERN and React Native Developer.I specialize in simplifying the complex, transforming ideas into seamless experiences.",
  keywords:
    "MERN Stack Developer, React Native Developer, Full Stack Developer, Web Developer, Mobile Developer, Saif Mohammed, Saif, Mohammed, Saif Mohammed Portfolio, Saif Portfolio, Saif Mohammed Website, Saif Website, Saif Mohammed Developer, Saif Developer, Saif Mohammed Full Stack Developer, Saif Full Stack Developer, Saif Mohammed MERN Stack Developer, Saif MERN Stack Developer, Saif Mohammed React Native Developer, Saif React Native Developer, Saif Mohammed Web Developer, Saif Web Developer, Saif Mohammed Mobile Developer, Saif Mobile Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative  dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <ToastContainer position="top-right" />

        {/* <div className="bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] -z-10"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-35rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] -z-10"></div> */}
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <ThemeContextProvider>
          <SectionContextProvider>
            <Header />
            {children}
            <Footer />
          </SectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
