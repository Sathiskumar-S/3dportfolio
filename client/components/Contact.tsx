"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Instagram, Code2, BookOpen } from "lucide-react";

const socialLinks = [
    {
        name: "LinkedIn",
        icon: Linkedin,
        url: "https://www.linkedin.com/in/sathiskumar-saravanan/",
        color: "from-blue-500 to-blue-600",
        hoverColor: "hover:shadow-blue-500/50",
    },
    {
        name: "GitHub",
        icon: Github,
        url: "https://github.com/Sathiskumar-S",
        color: "from-gray-700 to-gray-900",
        hoverColor: "hover:shadow-gray-500/50",
    },
    {
        name: "LeetCode",
        icon: Code2,
        url: "https://leetcode.com/ssathiskumarsaravanan/",
        color: "from-yellow-500 to-orange-500",
        hoverColor: "hover:shadow-yellow-500/50",
    },
    {
        name: "GeeksforGeeks",
        icon: BookOpen,
        url: "https://auth.geeksforgeeks.org/user/ssathiskumabdok/",
        color: "from-green-500 to-emerald-600",
        hoverColor: "hover:shadow-green-500/50",
    },
    {
        name: "Instagram",
        icon: Instagram,
        url: "https://www.instagram.com/___s_a_t_h_i_s___/",
        color: "from-pink-500 to-purple-600",
        hoverColor: "hover:shadow-pink-500/50",
    },
];

export default function Contact() {
    return (
        <section id="contact" className="relative min-h-screen py-20 px-4 flex items-center">
            <div className="max-w-6xl mx-auto w-full">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        Let's <span className="gradient-text">Connect</span>
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mb-6" />
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Open to collaborations, partnerships, and exciting opportunities in AR/VR and full-stack development
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {/* Email Card */}
                        <div className="glass-card rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl">
                                    <Mail className="w-8 h-8 text-cyan-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">Email Me</h3>
                                    <p className="text-gray-400 text-sm">Let's discuss your ideas</p>
                                </div>
                            </div>
                            <a
                                href="mailto:sathiskumarsaravanan243214@gmail.com"
                                className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 break-all"
                            >
                                sathiskumarsaravanan243214@gmail.com
                            </a>
                        </div>

                        {/* CTA Box */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="glass rounded-2xl p-8 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/30"
                        >
                            <h3 className="text-2xl font-bold text-white mb-4">
                                Ready to Build Something Amazing?
                            </h3>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                I'm always excited to collaborate on innovative projects, especially in AR/VR and educational technology.
                                Let's connect and create the future of immersive learning together! 🚀
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <span className="px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-400 text-sm font-medium">
                                    AR/VR Projects
                                </span>
                                <span className="px-4 py-2 bg-purple-500/20 border border-purple-500/50 rounded-full text-purple-400 text-sm font-medium">
                                    Full Stack Dev
                                </span>
                                <span className="px-4 py-2 bg-pink-500/20 border border-pink-500/50 rounded-full text-pink-400 text-sm font-medium">
                                    EdTech Solutions
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Social Links */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6 text-center lg:text-left">
                            Find Me Online
                        </h3>
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.03, x: 10 }}
                                whileTap={{ scale: 0.98 }}
                                className={`flex items-center gap-4 glass-card rounded-xl p-6 border border-white/10 hover:border-white/30 ${social.hoverColor} hover:shadow-lg transition-all duration-300 group`}
                            >
                                <div className={`p-4 bg-gradient-to-br ${social.color} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                                    <social.icon className="w-6 h-6 text-white" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                                        {social.name}
                                    </h4>
                                    <p className="text-gray-400 text-sm">
                                        {social.name === "LinkedIn" && "Professional Network"}
                                        {social.name === "GitHub" && "Code Repository"}
                                        {social.name === "LeetCode" && "Coding Practice"}
                                        {social.name === "GeeksforGeeks" && "Problem Solving"}
                                        {social.name === "Instagram" && "Social Updates"}
                                    </p>
                                </div>
                                <svg
                                    className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </motion.a>
                        ))}
                    </motion.div>
                </div>

                {/* Footer Quote */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mt-16 pt-8 border-t border-white/10"
                >
                    {/* Blog Link */}
                    <div className="mb-6">
                        <a
                            href="/blog"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/50 rounded-lg text-cyan-400 font-semibold hover:bg-gradient-to-r hover:from-cyan-500/30 hover:to-purple-500/30 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                            Read My Blog
                        </a>
                    </div>

                    <p className="text-gray-400 italic text-lg mb-2">
                        "Commitment Level: Over 9000"
                    </p>
                    <p className="text-cyan-400 font-semibold">
                        Let's build the future together! 🚀
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
