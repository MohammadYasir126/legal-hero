"use client";

import { motion } from "framer-motion";

export default function FloatingCard({
  icon: Icon,
  label,
  bgColor,
  rotation,
  className,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: [0, -6, 0],
      }}
      transition={{
        opacity: {
          duration: 0.5,
          delay,
        },
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        },
      }}
      whileHover={{
        scale: 1.04,
      }}
      className={`
        absolute
        flex items-center gap-3
        px-8 py-5
        rounded-full
        text-white
        shadow-[0_10px_30px_rgba(0,0,0,0.08)]
        ${bgColor}
        ${rotation}
        ${className}
      `}
    >
      <Icon size={20} />

      <span className="text-[18px] font-medium tracking-tight">
        {label}
      </span>
    </motion.div>
  );
}