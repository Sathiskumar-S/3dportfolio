"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Award } from "lucide-react";

const experiences = [
    {
        company: "Tata Consultancy Services",
        role: "Full Stack Developer (Immersive Experience)",
        duration: "February 2025 – Present",
        location: "Chennai, India",
        type: "Full-time",
        current: true,
        achievements: [
            "Developed a web-based tool using pure JavaScript to generate structured JSON for step-by-step Unity procedures and controller mappings, significantly accelerating content setup and reducing manual configuration effort",
            "Developed a dynamic WebXR AR experience generator using AI agents, MindAR, and A-Frame, enabling automated creation of interactive AR scenes and significantly speeding up experience production",
        ],
        gradient: "from-cyan-500 to-blue-500",
    },
    {
        company: "Shortfundly",
        role: "Full Stack Developer (MEAN Stack)",
        duration: "December 2024 – February 2025",
        location: "Chennai, India",
        type: "Full-time",
        current: false,
        achievements: [
            "Developed scalable APIs for Shortfundly's OTT platform, optimizing content delivery and improving performance and reliability across high-traffic user operations",
            "Built a modern, responsive Angular frontend, delivering an attractive and smooth user experience that boosted engagement and streamlined navigation across OTT features",
            "Engineered a white-label OTT solution (Brio) enabling rapid deployment for multiple clients, reducing time-to-market and supporting custom branding, content management, and subscription modules",
        ],
        gradient: "from-purple-500 to-pink-500",
    },
    {
        company: "Selfmade Ninja Academy",
        role: "WordPress Developer Intern",
        duration: "September 2023 – November 2023",
        location: "Bengaluru, India",
        type: "Internship",
        current: false,
        achievements: [
            "Developed a robust e-commerce website for a client in the fashion industry, catering to a diverse range of products",
            "Leveraged WordPress and WooCommerce to create a dynamic and scalable e-commerce platform",
            "Implemented payment gateways, integrated third-party APIs for shipping and order tracking, and optimized site performance through efficient use of caching and responsive design",
        ],
        gradient: "from-orange-500 to-red-500",
    },
];

export default function Experience() {
    return (
        <section id="experience" className="relative min-h-screen py-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        Work <span className="gradient-text">Experience</span>
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mb-6" />
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        My professional journey in full-stack development and immersive technologies
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 opacity-30" />

                    {/* Experience Cards */}
                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.company}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className={`relative grid md:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? "" : "md:flex-row-reverse"
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-4">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                                        viewport={{ once: true }}
                                        className={`w-6 h-6 rounded-full bg-gradient-to-r ${exp.gradient} shadow-lg ${exp.current ? "ring-4 ring-cyan-500/50 animate-pulse" : ""
                                            }`}
                                    />
                                </div>

                                {/* Content - Left or Right based on index */}
                                <div className={index % 2 === 0 ? "md:text-right" : "md:col-start-2"}>
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        className="glass-card rounded-2xl p-6 md:p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 relative overflow-hidden group"
                                    >
                                        {/* Gradient Background on Hover */}
                                        <div
                                            className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                                        />

                                        {/* Current Badge */}
                                        {exp.current && (
                                            <div className="absolute top-4 right-4">
                                                <span className="px-3 py-1 bg-green-500/20 border border-green-500/50 rounded-full text-green-400 text-xs font-semibold animate-pulse">
                                                    Current
                                                </span>
                                            </div>
                                        )}

                                        {/* Company & Role */}
                                        <div className="relative z-10">
                                            <h3 className={`text-2xl md:text-3xl font-bold text-white mb-2 group-hover:bg-gradient-to-r ${exp.gradient} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                                                {exp.company}
                                            </h3>
                                            <p className="text-lg text-cyan-400 font-semibold mb-4">{exp.role}</p>

                                            {/* Meta Information */}
                                            <div className={`flex flex-wrap gap-4 mb-6 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                                                <div className="flex items-center gap-2 text-gray-400 text-sm">
                                                    <Calendar className="w-4 h-4" />
                                                    <span>{exp.duration}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-gray-400 text-sm">
                                                    <MapPin className="w-4 h-4" />
                                                    <span>{exp.location}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-gray-400 text-sm">
                                                    <Briefcase className="w-4 h-4" />
                                                    <span>{exp.type}</span>
                                                </div>
                                            </div>

                                            {/* Achievements */}
                                            <div className="space-y-3">
                                                {exp.achievements.map((achievement, i) => (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        transition={{ duration: 0.4, delay: index * 0.2 + i * 0.1 }}
                                                        viewport={{ once: true }}
                                                        className={`flex items-start gap-3 ${index % 2 === 0 ? "md:flex-row-reverse md:text-right" : ""}`}
                                                    >
                                                        <div className={`mt-1 p-1 bg-gradient-to-r ${exp.gradient} rounded-full flex-shrink-0`}>
                                                            <Award className="w-3 h-3 text-white" />
                                                        </div>
                                                        <p className="text-gray-300 text-sm leading-relaxed">{achievement}</p>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Bottom Accent Line */}
                                        <motion.div
                                            initial={{ scaleX: 0 }}
                                            whileInView={{ scaleX: 1 }}
                                            transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                                            viewport={{ once: true }}
                                            className={`absolute bottom-0 ${index % 2 === 0 ? "right-0" : "left-0"} h-1 w-1/2 bg-gradient-to-r ${exp.gradient}`}
                                        />
                                    </motion.div>
                                </div>

                                {/* Spacer for the other side */}
                                <div className="hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Education Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-20"
                >
                    <h3 className="text-3xl font-bold text-center mb-8">
                        <span className="gradient-text">Education</span>
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="glass-card rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl">
                                    <Award className="w-6 h-6 text-purple-400" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-xl font-bold text-white mb-2">
                                        University College of Engineering, Ramanathapuram
                                    </h4>
                                    <p className="text-cyan-400 font-semibold mb-2">BE in Computer Science</p>
                                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                                        <span>Graduated: June 2024</span>
                                        <span className="text-green-400 font-semibold">CGPA: 8.46 / 10.0</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="glass-card rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl">
                                    <Award className="w-6 h-6 text-blue-400" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-xl font-bold text-white mb-2">
                                        DDV Higher Secondary School
                                    </h4>
                                    <p className="text-cyan-400 font-semibold mb-2">Higher Secondary Education</p>
                                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                                        <span>Graduated: May 2020</span>
                                        <span className="text-green-400 font-semibold">Percentage: 67.6%</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
