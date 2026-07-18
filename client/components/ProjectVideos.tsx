"use client";

import { motion } from "framer-motion";

const videos = [
    // Replace the `videoId` values below with your YouTube video IDs (e.g. 'dQw4w9WgXcQ')
    { title: "EduAR Demo", description: "Short demo walkthrough of EduAR.", videoId: "OznLCtB7BoE" },
    { title: "Virtual Business Cards", description: "AR business card demo.", videoId: "O9zgHftCdK0" },
];

export default function ProjectVideos() {
    return (
        <section id="demos" className="relative py-12">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <h3 className="text-3xl md:text-4xl font-bold mb-2">Project <span className="gradient-text">Demos</span></h3>
                    <p className="text-gray-400 max-w-2xl mx-auto">Explore my work through these interactive demos</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    {videos.map((v) => (
                        <motion.div
                            key={v.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="glass-card rounded-2xl p-4 border border-white/10 overflow-hidden"
                        >
                            <div className="mb-3">
                                <div className="flex items-center justify-between">
                                    <h4 className="text-lg font-semibold text-white">{v.title}</h4>
                                    <span className="text-sm text-gray-400">Demo</span>
                                </div>
                                <p className="text-gray-400 text-sm">{v.description}</p>
                            </div>

                            {v.videoId ? (
                                <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full rounded-md"
                                        src={`https://www.youtube.com/embed/${v.videoId}`}
                                        title={v.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            ) : (
                                <div className="h-48 flex items-center justify-center rounded-md bg-white/5 text-gray-400">
                                    Video URL not set — edit <code className="text-xs">ProjectVideos.tsx</code>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
