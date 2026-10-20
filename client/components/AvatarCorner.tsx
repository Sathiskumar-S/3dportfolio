"use client";

import React, { Suspense, useRef } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Environment, Preload } from "@react-three/drei";
import { publicAssetPath } from "@/lib/site";

function AvatarModel() {
    const gltf = useGLTF(publicAssetPath("/avatar.glb"));
    const ref = useRef<THREE.Object3D | null>(null);

    // No idle animation — keep static but rotated slightly to face left
    return (
        <primitive
            ref={ref}
            object={gltf.scene}
            rotation={[0, 0, 0]} // rotate so avatar faces slightly left
            position={[0, -2.3, 0]} // raise model so head is visible and lower body is cropped
            scale={[1.6, 1.6, 1.6]}
        />
    );
}

export default function AvatarCorner() {
    return (
        // small fixed canvas in bottom-right, pointer-events-none so it doesn't block clicks
        <div className="fixed bottom-6 right-6 w-56 h-48 z-50 pointer-events-none overflow-hidden rounded-lg">
            {/* <Canvas camera={{ position: [0, 1.8, 1.8], fov: 35 }} gl={{ antialias: true, alpha: true }}>
                <Suspense fallback={null}>
                    <AvatarModel />
                    <Environment preset="studio" />
                    <Preload all />
                </Suspense>
            </Canvas> */}
        </div>
    );
}

useGLTF.preload(publicAssetPath("/avatar.glb"));
