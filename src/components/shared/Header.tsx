"use client";
import React, { useState } from "react";
import { Typography } from "@/components/ui/typography";
import { INFO_DATA, MOBILE, NAV_DATA } from "@/lib/data";
import Link from "next/link";
import { motion } from "framer-motion";
import { useDeviceWidth } from "@/hooks/useDevice";
import { Menu, X } from "lucide-react";
import SideMenu from "./SideMenu";
import { useParams, usePathname } from "next/navigation";
import { usePath } from "@/hooks/usePath";
import { headerContainerVariants } from "@/lib/animation";

const Header = () => {
  const params = usePath()
  //State
  const [isOpen, setIsOpen] = useState<boolean>(false);
  //Hook
  const device = useDeviceWidth();

  const onToggle = () => setIsOpen(!isOpen);

  if (device === 0) {
  return (
    <motion.div variants={headerContainerVariants} initial="hidden" animate="visible" className="m-5 mb-1">
      <div className="sticky top-5 z-10 bg-primary/90 backdrop-blur max-w-6xl text-white rounded-4xl p-2 my-4 mb-3 mx-4 [@media(min-width:1178px)]:mx-auto">
        <div className="flex justify-between items-center animate-pulse">

          {/* Left (logo + name) */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-4xl bg-white/30" />
            <div className="h-4 w-24 rounded bg-white/30" />
          </div>

          {/* Center (nav links) */}
          <div className="hidden md:flex gap-6">
            <div className="h-3 w-12 rounded bg-white/30" />
            <div className="h-3 w-12 rounded bg-white/30" />
            <div className="h-3 w-12 rounded bg-white/30" />
          </div>

          {/* Right (button) */}
          <div className="h-8 w-24 rounded-4xl bg-white/30" />
        </div>
      </div>
    </motion.div>
  )
}


  return (
    <>
      {Number(device) >= MOBILE ? (
        <header className="sticky top-5 z-10 bg-primary/90 backdrop-blur max-w-6xl text-white rounded-4xl p-2 my-4 mx-4 [@media(min-width:1178px)]:mx-auto flex justify-between items-center">
          {/* First */}
          <div className="flex items-center gap-2">
            <div className="bg-secondary rounded-4xl p-1 w-8 text-center">
              <Typography variant={"h5"} className="text-primary font-bold p-0">
                K
              </Typography>
            </div>
            <Typography variant={"h4"} className="text-white tracking-wider">
              {INFO_DATA?.name}
            </Typography>
          </div>
          {/* Second */}
          <nav className="flex gap-8">
            {NAV_DATA?.map((nav, index: number) => (
              <div key={index}>
                <Link
                  href={nav?.link}
                 className={`
            text-sm font-light hover:underline hover:text-secondary
            ${nav.isActive?.includes(params) ? 'underline text-secondary' : ''}
          `}
                >
                  {nav?.name}
                </Link>
              </div>
            ))}
          </nav>
          {/* Third */}
          <button className="bg-white text-primary rounded-4xl p-1.5 px-3 text-sm font-medium hover:bg-secondary">
            Contact Me
          </button>
        </header>
      ) : (
        <>
          <motion.header variants={headerContainerVariants} initial="hidden" animate="visible" className="sticky top-0 z-10 bg-primary/98 text-white p-3 flex justify-between items-center">
            <div className="flex justify-center items-center gap-3">
              <div onClick={onToggle}>
                {!isOpen ? <Menu size={21} /> : <X size={21} />}
              </div>
              <Typography variant={"h4"} className="text-white tracking-wider">
                {INFO_DATA?.name}
              </Typography>
            </div>
            <button className="bg-white text-primary rounded-4xl p-1.5 px-3 text-sm font-medium hover:bg-secondary">
              Contact Me
            </button>
          </motion.header>
          <SideMenu open={isOpen} setOpen={setIsOpen}/>
        </>
      )}
    </>
  );
};

export default Header;