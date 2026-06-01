'use client'
import { Typography } from "@/components/ui/typography";
import { Play } from "lucide-react";
import Image from "next/image";
import { IMG } from "../../../../public";
import { motion } from 'framer-motion'
import { heroContainerVariants, heroImageContainerVariants, heroItemVariants } from "@/lib/animation";

export default function HeroSection() {
  return (
    <div className="min-h-[518px] relative">
      <div className="max-w-6xl p-2 pb-0 mx-auto">
        <div className="flex flex-col md:flex-row">
          {/* Content  */}
        <motion.div
  className="w-full mt-2 md:mt-24"
  variants={heroContainerVariants}
  initial="hidden"
  animate="visible"
>
  <motion.div
  variants={heroItemVariants}
  className="border w-fit p-1 px-2 border-[1.4] relative overflow-hidden"
  style={{
    borderColor: "transparent", // Hide default border
  }}
>
  {/* Animated gradient border */}
  <motion.div
    className="absolute inset-0 -z-10"
    style={{
      background: "linear-gradient(90deg, #22c55e, #eab308, #22c55e)",
      padding: "1.4px", // Border thickness
      WebkitMask: 
        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
      WebkitMaskComposite: "xor",
      maskComposite: "exclude",
    }}
    animate={{
      backgroundPosition: ["0% 0%", "200% 0%"],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      repeatType: "loop",
      ease: "linear",
    }}
  />
  <Typography>Hello There! 👋</Typography>
</motion.div>

  <motion.div variants={heroItemVariants}>
    <Typography variant={"h1"} className="my-4">
      I’m{" "}
      <span className="text-secondary font-semibold underline">
        Kavi K,
      </span>
      <br /> Product Developer <br /> Based in India.
    </Typography>
  </motion.div>

  <motion.div variants={heroItemVariants}>
    <Typography variant={"p"} className="my-4">
      I’m an experienced Product Developer with 4+ years in the field,
      collaborating with various companies and startups.
    </Typography>
  </motion.div>

  <motion.div variants={heroItemVariants} className="flex items-center gap-4">
    <button className="bg-secondary flex gap-2 items-center p-0.5 rounded-3xl cursor-pointer">
      <span className="bg-primary text-white text-sm rounded-3xl p-1.5 px-3">
        View My Portfolio
      </span>
      <div className="bg-white p-1.5 rounded-3xl">
        <Play size={18} strokeWidth={1} fill="black" />
      </div>
    </button>

    <button className="border border-[1.4px] rounded-4xl p-1 px-6 border-primary">
      Hire
    </button>
  </motion.div>
</motion.div>

          {/* Photo */}
          <motion.div variants={heroImageContainerVariants} initial="hidden" animate="visible" className="w-full mt-20">
            <Image
              src={IMG.Banner}
              alt="banner"
              width={720}
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
      {/* Footer */}
      <div className="relative py-4">
        <div className="bg-secondary z-1 absolute -left-10 -right-10 p-6 px-12 rotate-1"></div>
        <div className="bg-primary absolute -left-10 -right-10 p-6 -rotate-1" />
      </div>
    </div>
  );
}
