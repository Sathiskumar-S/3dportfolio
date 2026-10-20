"use client";

import { motion } from "framer-motion";
import { Code2, Sparkles, Rocket, GraduationCap } from "lucide-react";
import { publicAssetPath } from "@/lib/site";

const highlights = [
    {
        icon: Code2,
        title: "Full Stack Expertise",
        description: "MEAN/MERN Stack, Python FastAPI, PHP, and modern frameworks",
    },
    {
        icon: Sparkles,
        title: "XR/AR Specialist",
        description: "Unity, WebAR, ARCore - Building immersive learning experiences",
    },
    {
        icon: Rocket,
        title: "DevOps & Production",
        description: "Docker, CI/CD, Linux, Nginx, SSL and production-ready deployments",
    },
    {
        icon: GraduationCap,
        title: "Education Focus",
        description: "Bridging the gap between education and emerging technology",
    },
];

export default function About() {
    return (
        <section id="about" className="relative min-h-screen flex items-center justify-center py-20 px-4">
            <div className="max-w-7xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="glass rounded-3xl p-8 md:p-12 lg:p-16"
                >
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
                        >
                            About <span className="gradient-text">Me</span>
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, scaleX: 0 }}
                            whileInView={{ opacity: 1, scaleX: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"
                        />
                    </div>

                    {/* Main Content */}
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Left Column - Bio */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="space-y-4 text-gray-300 leading-relaxed">
                                <p className="text-lg">
                                    Hi! I'm <span className="text-cyan-400 font-semibold">Sathiskumar Saravanan</span>, a Full Stack Software Engineer experienced in
                                    building scalable web applications, immersive XR solutions, and AI-powered experiences. I hold a <span className="text-cyan-400 font-semibold">Bachelor's degree in Computer Science</span>.
                                </p>

                                <p>
                                    My work spans modern JavaScript frameworks, Node.js, Python, Unity, cloud infrastructure, and production deployments. I focus on
                                    designing systems that are scalable, secure, and maintainable while delivering feature-rich user experiences.
                                </p>

                                <p>
                                    I have hands-on experience with Docker, CI/CD pipelines, Linux servers, Nginx, SSL configuration, and production observability.
                                    On the XR side, I build AR/VR and WebXR applications using Unity, Vuforia, AR Foundation, A-Frame, Three.js, and MindAR. My
                                    EduAR project converts curriculum content into interactive 3D learning experiences to make education more engaging.
                                </p>

                                <p className="text-cyan-400 italic font-medium">
                                    I enjoy solving engineering challenges and building production-ready solutions. Let's connect and create impactful software. 🚀
                                </p>
                            </div>

                            {/* Download Resume Button */}
                            <motion.a
                                href={publicAssetPath("/resume.pdf")}
                                download
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Download Resume
                            </motion.a>
                        </motion.div>

                        {/* Right Column - Highlights */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            {highlights.map((highlight, index) => (
                                <motion.div
                                    key={highlight.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.02, x: 5 }}
                                    className="glass-card p-6 rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl">
                                            <highlight.icon className="w-6 h-6 text-cyan-400" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold text-white mb-2">
                                                {highlight.title}
                                            </h3>
                                            <p className="text-gray-400 text-sm leading-relaxed">
                                                {highlight.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Stats Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-white/10"
                    >
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">TCS</div>
                            <div className="text-gray-400 text-sm">Current Company</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">6+</div>
                            <div className="text-gray-400 text-sm">Projects</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">AR/VR</div>
                            <div className="text-gray-400 text-sm">Specialization</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">∞</div>
                            <div className="text-gray-400 text-sm">Commitment Level</div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
