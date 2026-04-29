"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles() {
  const mesh = useRef<THREE.Points>(null);

  const count = 2000;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, []);

  const colors = useMemo(() => {
    const arr = new Float32Array(count * 3);
    const color1 = new THREE.Color("#6C47FF");
    const color2 = new THREE.Color("#EC4899");
    const color3 = new THREE.Color("#8B6FFF");
    for (let i = 0; i < count; i++) {
      const mix = Math.random();
      const c = mix < 0.33 ? color1 : mix < 0.66 ? color2 : color3;
      arr[i * 3] = c.r;
      arr[i * 3 + 1] = c.g;
      arr[i * 3 + 2] = c.b;
    }
    return arr;
  }, []);

  const posAttr = useMemo(() => new THREE.BufferAttribute(positions, 3), [positions]);
  const colAttr = useMemo(() => new THREE.BufferAttribute(colors, 3), [colors]);

  useFrame((state) => {
    if (!mesh.current) return;
    const time = state.clock.getElapsedTime();
    mesh.current.rotation.y = time * 0.02;
    mesh.current.rotation.x = Math.sin(time * 0.05) * 0.05;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[posAttr.array, 3]} />
        <bufferAttribute attach="attributes-color" args={[colAttr.array, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function FloatingOrbs() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();
    groupRef.current.children.forEach((child, i) => {
      child.position.y += Math.sin(time * 0.5 + i) * 0.002;
      child.rotation.z += 0.001 * (i % 2 === 0 ? 1 : -1);
    });
  });

  return (
    <group ref={groupRef}>
      <mesh position={[4, 2, -5]}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshBasicMaterial color="#6C47FF" transparent opacity={0.15} />
      </mesh>
      <mesh position={[-5, -3, -6]}>
        <sphereGeometry args={[3, 32, 32]} />
        <meshBasicMaterial color="#8B5CF6" transparent opacity={0.1} />
      </mesh>
      <mesh position={[2, -4, -4]}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshBasicMaterial color="#EC4899" transparent opacity={0.12} />
      </mesh>
    </group>
  );
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <Particles />
        <FloatingOrbs />
      </Canvas>
    </div>
  );
}
