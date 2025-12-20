"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-4xl"
            >
                <h2 className="text-secondary font-mono tracking-widest text-lg mb-4">
                    HELLO, I AM
                </h2>

                <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-secondary">
                    Sathiskumar Saravanan
                </h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-3 text-xl md:text-2xl text-gray-300 font-light mb-10"
                >
                    <span className="font-semibold text-primary">Research Engineer</span>
                    <span className="hidden md:inline text-gray-600">|</span>
                    <span>TCS</span>
                    <span className="hidden md:inline text-gray-600">|</span>
                    <span>XR Enthusiast</span>
                    <span className="hidden md:inline text-gray-600">|</span>
                    <span>Full Stack Developer</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="flex gap-6 justify-center"
                >
                    <Link
                        href="https://github.com/Sathiskumar-S"
                        target="_blank"
                        className="p-3 rounded-full glass hover:bg-white/10 transition-all hover:scale-110 group"
                    >
                        <Github className="w-6 h-6 text-gray-300 group-hover:text-primary" />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/sathiskumar-saravanan/"
                        target="_blank"
                        className="p-3 rounded-full glass hover:bg-white/10 transition-all hover:scale-110 group"
                    >
                        <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-secondary" />
                    </Link>
                    <Link
                        href="mailto:sathiskumar.s@example.com"
                        className="p-3 rounded-full glass hover:bg-white/10 transition-all hover:scale-110 group"
                    >
                        <Mail className="w-6 h-6 text-gray-300 group-hover:text-accent" />
                    </Link>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 animate-bounce"
            >
                <span className="text-xs text-gray-500 font-mono">SCROLL TO EXPLORE</span>
            </motion.div>
        </section>
    );
}
