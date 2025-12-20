"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { TechParticles } from "./Particles";
import { Environment, Preload } from "@react-three/drei";

export default function Scene() {
    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 75 }}
                gl={{ antialias: true, alpha: true }}
                dpr={[1, 2]} // Handle high DPI screens
            >
                <Suspense fallback={null}>
                    <color attach="background" args={["#050B14"]} />

                    {/* Ambient and Point Lights for 3D objects later */}
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} color="#7000FF" />
                    <pointLight position={[-10, -10, -10]} intensity={1} color="#00F0FF" />

                    <TechParticles count={3000} />

                    <Environment preset="city" />
                    <Preload all />
                </Suspense>
            </Canvas>
        </div>
    );
}
