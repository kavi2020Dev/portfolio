'use client'
import { Typography } from "@/components/ui/typography";
import { SERVICES } from "@/lib/data";
import { Minus } from "lucide-react";
import { motion } from "framer-motion";
import { heroContainerVariants, heroImageContainerVariants } from "@/lib/animation";

export function Service() {
  return (
   <div className="py-10 bg-muted">
   <div className="max-w-6xl p-2 mx-auto">
    <div className="flex justify-center items-center font-medium"><Minus className="text-secondary mr-1"/>{" "} Services</div>
    <div className="flex justify-center items-center font-medium mt-2 mb-10">
     <Typography variant={'h3'}><span className="text-secondary font-light">Services</span> I Provide</Typography>  
     {/* Card  */}
    </div>
  <motion.div
  className="flex flex-wrap justify-center gap-6"
  variants={heroContainerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
>
  {SERVICES.map((services, index) => (
    <motion.div
      key={index}
      variants={heroImageContainerVariants}
      className="bg-white border p-4 w-[260px] h-[210px] border-[1.4px] rounded-xl"
    >
      <div className="w-16 h-16 rounded-full bg-gray-100" />
      <Typography variant={"h5"} className="text-primary/96 font-bold my-2">
        {services?.title}
      </Typography>
      <Typography variant={"small"}>
        {services?.description}
      </Typography>
    </motion.div>
  ))}
</motion.div>

   </div>   
   </div>   
  )  
}