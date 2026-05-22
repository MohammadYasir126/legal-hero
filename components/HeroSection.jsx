"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import {
  CreditCard,
  Briefcase,
  CheckSquare,
  FileText,
} from "lucide-react";

import FloatingCard from "./FloatingCard";
import PortalCard from "./PortalCard";
import BackgroundBlobs from "./BackgroundBlobs";

export default function HeroSection() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <section className="relative overflow-hidden bg-[#f3f3f5] dark:bg-[#0f0f16] min-h-screen flex items-center transition-colors duration-500">

      {/* DARK MODE BUTTON */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-6 right-6 z-50 px-4 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black transition-all duration-300 shadow-lg"
      >
        {darkMode ? "☀ Light" : "🌙 Dark"}
      </button>

      <BackgroundBlobs />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-8 lg:px-20 py-8 grid lg:grid-cols-2 gap-6 items-center">

        {/* LEFT */}
        <div className="max-w-[520px]">

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[64px] leading-[1.05] tracking-[-3px] font-light text-[#76739a] dark:text-[#d7d7f0]"
          >
            A single platform to{" "}
            <span className="font-medium text-[#6663a3] dark:text-[#8f8cff]">
              manage
            </span>{" "}
            every part of your{" "}
            <span className="font-medium text-[#6663a3] dark:text-[#8f8cff]">
              legal work
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-8 max-w-[420px] text-[#5b5fff] dark:text-[#8f8cff] text-[15px] leading-8"
          >
            Track matters, coordinate schedules, manage clients,
            centralize documents, and handle communication —
            all in one system.
          </motion.p>
        </div>

        {/* RIGHT */}
        <div className="relative h-[470px] hidden lg:block">

          {/* BILLING */}
          <FloatingCard
            icon={CreditCard}
            label="Billing"
            bgColor="bg-[#3042ff]"
            rotation="rotate-[12deg]"
            className="top-[110px] right-[85px]"
            delay={0}
          />

          {/* MATTERS */}
          <FloatingCard
            icon={Briefcase}
            label="Matters"
            bgColor="bg-[#e67f22]"
            rotation="-rotate-[14deg]"
            className="top-[265px] left-[15px]"
            delay={0.2}
          />

          {/* PORTAL */}
          <div className="absolute top-[235px] right-[125px] z-20">
            <PortalCard />
          </div>

          {/* TASKS */}
          <FloatingCard
            icon={CheckSquare}
            label="Tasks"
            bgColor="bg-[#2b2148]"
            rotation="rotate-0"
            className="bottom-[35px] left-[145px]"
            delay={0.4}
          />

          {/* DOCUMENTS */}
          <FloatingCard
            icon={FileText}
            label="Documents"
            bgColor="bg-[#2b2148]"
            rotation="-rotate-[8deg]"
            className="bottom-[25px] right-[10px]"
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
}