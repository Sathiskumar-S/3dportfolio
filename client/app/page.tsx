"use client";

import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";
import Loader from "@/components/canvas/Loader";

// Dynamically import Scene with no SSR, using Loader as fallback
const Scene = dynamic(() => import("@/components/canvas/Scene"), {
  ssr: false,
  loading: () => <Loader />,
});

export default function Home() {
  return (
    <main className="relative w-full min-h-screen">
      {/* 3D Background */}
      <Scene />

      {/* HTML Content Overlay */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Awards />
        <Contact />
      </div>
    </main>
  );
}
