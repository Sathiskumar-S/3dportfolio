"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

interface Post {
    id: number;
    title: string;
    content: string;
    created_at: string;
    updated_at?: string;
}

export default function Blog() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.error("Error fetching posts:", error);
        } finally {
            setLoading(false);
        }
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    const getReadingTime = (content: string) => {
        const wordsPerMinute = 200;
        const wordCount = content.split(/\s+/).length;
        const minutes = Math.ceil(wordCount / wordsPerMinute);
        return `${minutes} min read`;
    };

    return (
        <div className="min-h-screen px-4 py-20">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        My <span className="gradient-text">Blog</span>
                    </h1>
                    <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mb-6" />
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Thoughts, tutorials, and insights on full-stack development, AR/VR, and emerging technologies
                    </p>
                </motion.div>

                {/* Posts */}
                {loading ? (
                    <div className="text-center py-20">
                        <div className="inline-block w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin" />
                    </div>
                ) : posts.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="glass-card rounded-2xl p-12 text-center border border-white/10"
                    >
                        <p className="text-gray-400 text-lg">No blog posts yet. Check back soon!</p>
                    </motion.div>
                ) : (
                    <div className="space-y-8">
                        {posts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="glass-card rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group"
                            >
                                <Link href={`/blog/${post.id}`}>
                                    <div className="cursor-pointer">
                                        {/* Meta Info */}
                                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-4 h-4" />
                                                <span>{formatDate(post.created_at)}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Clock className="w-4 h-4" />
                                                <span>{getReadingTime(post.content)}</span>
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                                            {post.title}
                                        </h2>

                                        {/* Excerpt */}
                                        <p className="text-gray-300 leading-relaxed mb-6 line-clamp-3">
                                            {post.content}
                                        </p>

                                        {/* Read More */}
                                        <div className="flex items-center gap-2 text-cyan-400 font-semibold group-hover:gap-4 transition-all duration-300">
                                            <span>Read More</span>
                                            <ArrowRight className="w-5 h-5" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.article>
                        ))}
                    </div>
                )}

                {/* Back to Home */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <Link
                        href="/"
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                    >
                        ← Back to Home
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
