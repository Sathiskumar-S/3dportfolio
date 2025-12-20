"use client";

import { useProgress } from "@react-three/drei";

export default function Loader() {
    const { progress } = useProgress();
    return (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-background z-50 pointer-events-none transition-opacity duration-1000"
            style={{ opacity: progress === 100 ? 0 : 1 }}>
            <div className="flex flex-col items-center">
                <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-primary transition-all duration-300 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                <p className="mt-4 text-primary font-mono text-sm">{progress.toFixed(0)}% Loaded</p>
            </div>
        </div>
    );
}
