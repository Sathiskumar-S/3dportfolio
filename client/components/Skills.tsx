"use client";

import { motion } from "framer-motion";

const skillCategories = [
    {
        title: "Frontend Development",
        gradient: "from-cyan-500 to-blue-500",
        skills: [
            { name: "Angular", level: 90 },
            { name: "TypeScript", level: 90 },
            { name: "Tailwind CSS", level: 95 },
            { name: "Three.js", level: 80 },
            { name: "A-Frame", level: 70 },
            { name: "WebXR", level: 75 },
            { name: "MindAR", level: 85 },
            { name: "React", level: 75 },
            { name: "React Native", level: 65 },
        ],
    },
    {
        title: "Backend Development",
        gradient: "from-purple-500 to-pink-500",
        skills: [
            { name: "Node.js", level: 90 },
            { name: "Express.js", level: 88 },
            { name: "FastAPI", level: 80 },
            { name: "REST APIs", level: 92 },
            { name: "JWT", level: 80 },
            { name: "Python", level: 85 },
        ],
    },
    {
        title: "XR/AR Technologies",
        gradient: "from-orange-500 to-red-500",
        skills: [
            { name: "Unity", level: 90 },
            { name: "Vuforia", level: 75 },
            { name: "AR Foundation", level: 80 },
            { name: "XR Interaction Toolkit", level: 78 },
            { name: "Three.js", level: 80 },
            { name: "WebXR", level: 75 },
            { name: "MindAR", level: 85 },
            { name: "OpenXR", level: 70 },
        ],
    },
    {
        title: "Databases",
        gradient: "from-green-500 to-emerald-500",
        skills: [
            { name: "MongoDB", level: 88 },
            { name: "MySQL", level: 85 },
            { name: "Firebase", level: 80 },
        ],
    },
    {
        title: "DevOps & Infrastructure",
        gradient: "from-green-500 to-emerald-500",
        skills: [
            { name: "Docker", level: 88 },
            { name: "Docker Compose", level: 82 },
            { name: "GitHub Actions", level: 80 },
            { name: "GitLab CI/CD", level: 76 },
            { name: "Nginx", level: 78 },
            { name: "PM2", level: 75 },
            { name: "Certbot", level: 72 },
            { name: "AWS EC2", level: 72 },
            { name: "Azure VM", level: 72 },
            { name: "Linux", level: 80 },
        ],
    },
    {
        title: "Tools & Productivity",
        gradient: "from-indigo-500 to-purple-500",
        skills: [
            { name: "Git & GitHub", level: 95 },
            { name: "GitLab", level: 88 },
            { name: "Postman", level: 80 },
            { name: "OpenCV", level: 75 },
            { name: "WebSockets", level: 78 },
            { name: "Responsive Design", level: 95 },
            { name: "VS Code", level: 95 },
            { name: "Android Studio", level: 70 },
            { name: "Blender", level: 65 },
        ],
    },
];

const techStackCategories = [
    {
        title: "Frontend",
        items: ["Angular", "React", "React Native", "Tailwind CSS", "Three.js", "A-Frame", "WebXR", "MindAR"],
    },
    {
        title: "Backend",
        items: ["Node.js", "Express.js", "FastAPI", "REST APIs", "JWT", "Python"],
    },
    {
        title: "XR Development",
        items: ["Unity", "Vuforia", "AR Foundation", "XR Interaction Toolkit", "Three.js", "WebXR", "MindAR", "OpenXR"],
    },
    {
        title: "AI",
        items: ["OpenAI", "AI Agents", "Prompt Engineering", "Azure AI Foundry", "LLM Integration", "AI Automation"],
    },
    {
        title: "Databases",
        items: ["MongoDB", "MySQL", "Firebase"],
    },
    {
        title: "DevOps",
        items: [
            "Docker",
            "Docker Compose",
            "GitHub Actions",
            "GitLab CI/CD",
            "Linux",
            "Nginx",
            "PM2",
            "Certbot",
            "AWS EC2",
            "Azure VM",
        ],
    },
    {
        title: "Programming Languages",
        items: ["JavaScript", "TypeScript", "Python", "C#", "C++", "HTML", "CSS"],
    },
    {
        title: "Tools",
        items: ["Git", "GitHub", "GitLab", "Postman", "Unity", "VS Code", "Android Studio", "Blender"],
    },
    {
        title: "Concepts",
        items: [
            "System Design",
            "Production Deployment",
            "Scalable Architecture",
            "Performance Optimization",
            "Clean Code",
            "API Design",
            "Real-time Applications",
        ],
    },
];

// Flattened unique tech list for old-style cloud display
const allTech = Array.from(new Set(techStackCategories.flatMap((c) => c.items)));

export default function Skills() {
    return (
        <section id="skills" className="relative min-h-screen py-20 px-4">
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
                        Skills & <span className="gradient-text">Expertise</span>
                    </h2>
                    <div className="h-1 w-24 bg-linear-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mb-6" />
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        A comprehensive toolkit spanning full-stack development, immersive technologies, and modern frameworks
                    </p>
                </motion.div>

                {/* Tech Stack Cloud */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="glass rounded-3xl p-8 mb-12"
                >
                    <h3 className="text-2xl font-bold text-center mb-8 text-white">Tech Stack</h3>

                    <div className="flex flex-wrap justify-center gap-3">
                        {allTech.map((tech, index) => (
                            <motion.span
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.03 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.1, y: -5 }}
                                            className="px-4 py-2 bg-linear-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-full text-sm font-medium text-cyan-400 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 cursor-default"
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>

                {/* Skill Categories */}
                <div className="grid md:grid-cols-2 gap-8">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className={`h-1 w-12 bg-linear-to-r ${category.gradient} rounded-full`} />
                                <h3 className="text-xl font-bold text-white">{category.title}</h3>
                            </div>

                            {/* Skills List */}
                            <div className="space-y-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                                        viewport={{ once: true }}
                                    >
                                        {/* Skill Name and Level */}
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-gray-300 font-medium">{skill.name}</span>
                                            <span className="text-cyan-400 text-sm font-semibold">{skill.level}%</span>
                                        </div>

                                        {/* Progress Bar */}
                                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.2, ease: "easeOut" }}
                                                viewport={{ once: true }}
                                                className={`h-full bg-linear-to-r ${category.gradient} rounded-full relative`}
                                            >
                                                {/* Glow Effect */}
                                                <div className="absolute inset-0 bg-white/30 blur-sm" />
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Certifications / Learning Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-12 glass rounded-2xl p-8 text-center"
                >
                    <h3 className="text-2xl font-bold text-white mb-4">
                        Continuous Learning
                    </h3>
                    <p className="text-gray-400 mb-6">
                        Learning and implementing AI technologies in XR and full‑stack applications.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <motion.a
                            href="https://leetcode.com/ssathiskumarsaravanan/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 bg-linear-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/50 rounded-lg text-yellow-400 font-semibold hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300"
                        >
                            LeetCode Profile
                        </motion.a>
                        <motion.a
                            href="https://auth.geeksforgeeks.org/user/ssathiskumabdok/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 bg-linear-to-r from-green-500/20 to-emerald-500/20 border border-green-500/50 rounded-lg text-green-400 font-semibold hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300"
                        >
                            GeeksforGeeks Profile
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
