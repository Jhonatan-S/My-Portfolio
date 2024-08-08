"use client"

import { Hero } from "@/components/HomePage/Hero";
import { SectionAbout } from "@/components/HomePage/SectionAbout/SectionAbout";
import { SectionProjects } from "@/components/HomePage/SectionProjects/SectionProjects";
import { TechsSection } from "@/components/HomePage/TechsSection/TechsSection";
import { smothScroll } from "@/utils/smothScroll";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {

    smothScroll()

  }, [])

  return (
    <main className="w-full">
      <Hero />
      <TechsSection />
      <SectionProjects />
      <SectionAbout />
    </main>
  );
}
