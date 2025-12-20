"use client";

import { motion } from "framer-motion";
import { Trophy, Award, Star, Code2 } from "lucide-react";

const awards = [
    {
        title: "Best Paper Award",
        organization: "NCIDA Conference",
        year: "2023",
        icon: Trophy,
        gradient: "from-yellow-500 to-orange-500",
        description: "Recognized for outstanding research paper presentation",
    },
    {
        title: "2nd Place in Tamilnadu",
        organization: "Naan Mudhalvan Niral Thiruvizha",
        year: "2024",
        icon: Award,
        gradient: "from-purple-500 to-pink-500",
        description: "State-level competition achievement",
    },
];

const achievements = [
    {
        title: "Project Selected for Final Round",
        organization: "IFERP Project Competition",
        year: "2023",
        icon: Star,
        gradient: "from-cyan-500 to-blue-500",
    },
    {
        title: "250+ Problems Solved",
        organization: "GeeksforGeeks",
        year: "Ongoing",
        icon: Code2,
        gradient: "from-green-500 to-emerald-500",
    },
];

const publication = {
    title: "A Novel Approach to Virtual Business Cards through Augmented Reality",
    authors: ["S.Sathiskumar", "Dr.A.Muthumari", "M. Saiban Ali", "M.Dinesh"],
    journal: "Indian Journal of Natural Sciences",
    year: "2023",
};

export default function Awards() {
    return (
        <section id="awards" className="relative min-h-screen py-20 px-4">
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
                        Awards & <span className="gradient-text">Achievements</span>
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mb-6" />
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Recognition for excellence in research, development, and problem-solving
                    </p>
                </motion.div>

                {/* Awards Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {awards.map((award, index) => (
                        <motion.div
                            key={award.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.03, y: -5 }}
                            className="glass-card rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 relative overflow-hidden group"
                        >
                            {/* Gradient Background */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${award.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                            />

                            {/* Content */}
                            <div className="relative z-10">
                                {/* Icon */}
                                <div className={`inline-flex p-4 bg-gradient-to-br ${award.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <award.icon className="w-8 h-8 text-white" />
                                </div>

                                {/* Year Badge */}
                                <div className="absolute top-0 right-0">
                                    <span className={`px-4 py-2 bg-gradient-to-r ${award.gradient} rounded-bl-2xl rounded-tr-2xl text-white font-bold text-sm`}>
                                        {award.year}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                                    {award.title}
                                </h3>

                                {/* Organization */}
                                <p className="text-cyan-400 font-semibold mb-3">{award.organization}</p>

                                {/* Description */}
                                <p className="text-gray-400 text-sm leading-relaxed">{award.description}</p>

                                {/* Bottom Accent */}
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                                    viewport={{ once: true }}
                                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${award.gradient}`}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Achievements */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h3 className="text-3xl font-bold text-center mb-8">
                        Notable <span className="gradient-text">Achievements</span>
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={achievement.title}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.02 }}
                                className="glass-card rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`p-3 bg-gradient-to-br ${achievement.gradient} rounded-lg`}>
                                        <achievement.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-lg font-bold text-white mb-1">{achievement.title}</h4>
                                        <p className="text-gray-400 text-sm">{achievement.organization}</p>
                                    </div>
                                    <span className="text-cyan-400 text-sm font-semibold">{achievement.year}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Publication */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="glass rounded-3xl p-8 md:p-12 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 border border-cyan-500/30"
                >
                    <div className="flex items-start gap-4 mb-6">
                        <div className="p-4 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-2xl">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                Published Research
                            </h3>
                            <p className="text-cyan-400 text-sm font-semibold mb-4">
                                {publication.journal} • {publication.year}
                            </p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <h4 className="text-xl font-bold text-white mb-3">{publication.title}</h4>
                            <div className="flex flex-wrap gap-2">
                                {publication.authors.map((author, index) => (
                                    <span
                                        key={author}
                                        className={`px-3 py-1 rounded-full text-sm ${index === 0
                                                ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold"
                                                : "bg-white/10 text-gray-300 border border-white/20"
                                            }`}
                                    >
                                        {author}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <p className="text-gray-400 leading-relaxed">
                            This research paper presents a novel approach to creating dynamic and interactive virtual business cards
                            using Augmented Reality technology, published in a peer-reviewed journal.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
