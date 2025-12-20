"use client";

import { motion } from "framer-motion";
import { Code2, Sparkles, Rocket, GraduationCap } from "lucide-react";

const highlights = [
    {
        icon: Code2,
        title: "Full Stack Expertise",
        description: "MEAN/MERN Stack, Java Spring Boot, PHP, and modern frameworks",
    },
    {
        icon: Sparkles,
        title: "XR/AR Specialist",
        description: "Unity, WebAR, ARCore - Building immersive learning experiences",
    },
    {
        icon: Rocket,
        title: "Innovation Driven",
        description: "Working toward an AR-focused startup in educational technology",
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
                                    Hi! I'm <span className="text-cyan-400 font-semibold">Sathiskumar Saravanan</span>,
                                    a passionate full-stack developer with a strong foundation in both front-end and
                                    back-end technologies. I graduated with a{" "}
                                    <span className="text-purple-400 font-semibold">CGPA of 8.46/10.0</span> in Computer Science
                                    from University College of Engineering, Ramanathapuram.
                                </p>

                                <p>
                                    I currently work as a <span className="text-purple-400 font-semibold">Full Stack Developer (Immersive Experience) at TCS</span>,
                                    where I develop cutting-edge WebXR AR experiences using AI agents, MindAR, and A-Frame.
                                    I've built tools that significantly accelerate Unity procedure setup and automated AR scene generation.
                                </p>

                                <p>
                                    My expertise spans the <span className="text-cyan-400 font-semibold">MEAN/MERN stack</span>,
                                    with hands-on experience in building scalable OTT platforms at Shortfundly and e-commerce solutions
                                    at Selfmade Ninja Academy. I specialize in creating{" "}
                                    <span className="text-cyan-400 font-semibold">immersive AR/VR applications</span> using Unity,
                                    WebAR, and ARCore.
                                </p>

                                <p>
                                    I'm passionate about bridging education and technology through AR/VR. My flagship project,{" "}
                                    <span className="text-purple-400 font-semibold">EduAR</span>, showcases the Tamilnadu state board
                                    syllabus in 3D, making complex concepts easier to understand for students. I've also published
                                    research on Virtual Business Cards using Augmented Reality.
                                </p>

                                <p className="text-cyan-400 italic font-medium">
                                    Let's connect and build the future of immersive learning together! 🚀
                                </p>
                            </div>

                            {/* Download Resume Button */}
                            <motion.a
                                href="/resume.pdf"
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
