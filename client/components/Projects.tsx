"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import ProjectVideos from "./ProjectVideos";
import { useState } from "react";

const projects = [
    {
        title: "EduAR",
        category: "AR Learning Platform",
        description: "An interactive AR-based learning platform designed to make complex educational concepts simple and engaging for school students through 3D visualization.",
        technologies: ["Unity", "WebAR", "AR", "3D Modeling"],
        link: "https://youtu.be/OznLCtB7BoE?si=He3IyFPKqQ3HLf9H",
        github: null,
        gradient: "from-cyan-500 to-blue-500",
        status: "Live",
    },
    {
        title: "Virtual Business Cards",
        category: "AR Android App",
        description: "An Android application showcasing dynamic and interactive business cards using Marker-based Augmented Reality technology.",
        technologies: ["AR", "Android", "Marker-based AR", "PHP"],
        link: "https://youtu.be/O9zgHftCdK0?si=9gYRJPkoriFLjMpU",
        github: null,
        gradient: "from-purple-500 to-pink-500",
        status: "Completed",
    },
    {
        title: "College Webpage",
        category: "Full Stack Web",
        description: "A comprehensive college webpage developed for educational institution with modern design and functionality.",
        technologies: ["Full Stack", "Web Development"],
        link: "https://ucer.selfmade.one/",
        github: null,
        gradient: "from-green-500 to-emerald-500",
        status: "Completed",
    },
    {
        title: "Face Mask Detection",
        category: "Computer Vision",
        description: "A Python-based application using OpenCV to detect whether a person is wearing a face mask or not in real-time.",
        technologies: ["Python", "OpenCV", "Computer Vision"],
        link: null,
        github: "https://github.com/Sathiskumar-S/without-facemask-detection",
        gradient: "from-yellow-500 to-orange-500",
        status: "Completed",
    },
    {
        title: "QR Code Generator",
        category: "Web Utility",
        description: "A lightweight and efficient web utility that enables users to instantly generate high-quality custom QR codes for URLs, text, and other digital assets, tailored for both personal and professional use.",
        technologies: ["JavaScript", "HTML", "CSS"],
        link: null,
        github: "https://github.com/Sathiskumar-S/qr-code-generator",
        gradient: "from-indigo-500 to-purple-500",
        status: "Completed",
    },
];

export default function Projects() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section id="projects" className="relative min-h-screen py-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mb-6" />
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Explore my portfolio of innovative projects spanning AR/VR, web development, and educational technology
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            onHoverStart={() => setHoveredIndex(index)}
                            onHoverEnd={() => setHoveredIndex(null)}
                            className="group relative"
                        >
                            <motion.div
                                whileHover={{ y: -8 }}
                                transition={{ duration: 0.3 }}
                                className="glass-card rounded-2xl p-6 h-full border border-white/10 hover:border-cyan-500/50 transition-all duration-300 relative overflow-hidden"
                            >
                                {/* Gradient Background on Hover */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}
                                />

                                {/* Status Badge */}
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-300 border border-white/20">
                                        {project.category}
                                    </span>
                                    <span
                                        className={`text-xs px-3 py-1 rounded-full ${project.status === "Live"
                                            ? "bg-green-500/20 text-green-400 border border-green-500/50"
                                            : project.status === "Completed"
                                                ? "bg-blue-500/20 text-blue-400 border border-blue-500/50"
                                                : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/50"
                                            }`}
                                    >
                                        {project.status}
                                    </span>
                                </div>

                                {/* Project Title */}
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-xs px-2 py-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex gap-3 mt-auto">
                                    {project.link && (
                                        <motion.a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg text-white text-sm font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 cursor-pointer"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            View Live
                                        </motion.a>
                                    )}
                                    {project.github && (
                                        <motion.a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className={`${project.link ? "px-4" : "flex-1"
                                                } flex items-center justify-center gap-2 py-2 bg-white/10 rounded-lg text-white text-sm font-semibold hover:bg-white/20 border border-white/20 transition-all duration-300 cursor-pointer`}
                                        >
                                            <Github className="w-4 h-4" />
                                            {!project.link && "View Code"}
                                        </motion.a>
                                    )}
                                </div>

                                {/* Hover Effect Line */}
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} origin-left`}
                                />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Project Demos */}
                <ProjectVideos />

                {/* View More on GitHub */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <motion.a
                        href="https://github.com/Sathiskumar-S"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-8 py-4 glass-card rounded-full text-white font-semibold hover:border-cyan-500/50 border border-white/10 transition-all duration-300"
                    >
                        <Github className="w-5 h-5" />
                        View More on GitHub
                        <ExternalLink className="w-4 h-4" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
