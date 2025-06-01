import { LayoutProps } from "@/types/types";
import React, { FC, useState, useEffect } from "react";
import {Footer} from "./footer";
import {Header} from "./header";

export const Layout: FC<LayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative overflow-hidden dark:bg-slate-900 dark:text-white">
      <div className="flex flex-col items-center max-w-3xl w-full mx-auto">
        {/*  */}
        <Header isScrolled={isScrolled} />
        {/*  */}
        <main className="w-full pb-12 px-4">{children}</main>
        {/*  */}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;