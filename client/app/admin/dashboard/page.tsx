import Link from "next/link";

export default function AdminDashboard() {
    return (
        <main className="min-h-screen flex items-center justify-center px-4 py-20">
            <div className="glass-card max-w-lg rounded-2xl p-8 text-center border border-white/10">
                <h1 className="text-3xl font-bold text-white mb-4">
                    Admin <span className="gradient-text">unavailable</span>
                </h1>
                <p className="text-gray-400 mb-6">
                    The admin tools require a server and are disabled on this static GitHub Pages site.
                </p>
                <Link href="/" className="text-cyan-400 hover:text-cyan-300">
                    Back to Home
                </Link>
            </div>
        </main>
    );
}
