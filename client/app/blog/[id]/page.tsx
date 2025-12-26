"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

interface Post {
    id: number;
    title: string;
    content: string;
    created_at: string;
    updated_at?: string;
}

export default function BlogPost() {
    const params = useParams();
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (params.id) {
            fetchPost(params.id as string);
        }
    }, [params.id]);

    const fetchPost = async (id: string) => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`);
            if (!response.ok) {
                throw new Error("Post not found");
            }
            const data = await response.json();
            setPost(data);
        } catch (error) {
            console.error("Error fetching post:", error);
            setError(true);
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

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="inline-block w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    if (error || !post) {
        return (
            <div className="min-h-screen flex items-center justify-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass-card rounded-2xl p-12 text-center border border-white/10 max-w-md"
                >
                    <p className="text-gray-400 text-lg mb-6">Post not found</p>
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors duration-300"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Back to Blog
                    </Link>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen px-4 py-20">
            <div className="max-w-4xl mx-auto">
                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mb-8"
                >
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Back to Blog
                    </Link>
                </motion.div>

                {/* Article */}
                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="glass-card rounded-2xl p-8 md:p-12 border border-white/10"
                >
                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(post.created_at)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{getReadingTime(post.content)}</span>
                        </div>
                        {post.updated_at && post.updated_at !== post.created_at && (
                            <span className="text-xs px-3 py-1 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-400">
                                Updated
                            </span>
                        )}
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                        {post.title}
                    </h1>

                    {/* Divider */}
                    <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-8" />

                    {/* Content */}
                    <div className="prose prose-invert prose-lg max-w-none">
                        <div className="text-gray-300 leading-relaxed whitespace-pre-wrap">
                            {post.content}
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-12 pt-8 border-t border-white/10">
                        <div className="flex items-center justify-between">
                            <p className="text-gray-400 text-sm">
                                Published on {formatDate(post.created_at)}
                            </p>
                            <Link
                                href="/blog"
                                className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors duration-300"
                            >
                                View All Posts →
                            </Link>
                        </div>
                    </div>
                </motion.article>

                {/* Share / Actions */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-8 text-center"
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
