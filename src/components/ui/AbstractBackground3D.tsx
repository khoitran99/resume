import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { MotionValue } from "framer-motion";

// Generate random points in a sphere
const generatePoints = (count: number, radius: number) => {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const u = Math.random();
    const v = Math.random();
    const theta = u * 2.0 * Math.PI;
    const phi = Math.acos(2.0 * v - 1.0);
    const r = Math.cbrt(Math.random()) * radius;

    const sinPhi = Math.sin(phi);
    const x = r * sinPhi * Math.cos(theta);
    const y = r * sinPhi * Math.sin(theta);
    const z = r * Math.cos(phi);

    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
  }
  return positions;
};

interface ParticleFieldProps {
  scrollYProgress?: MotionValue<number>;
}

const ParticleField: React.FC<ParticleFieldProps> = ({ scrollYProgress }) => {
  const ref = useRef<THREE.Points>(null);

  // Use useMemo to avoid recreating points every render
  const points = useMemo(() => generatePoints(3000, 15), []);

  useFrame((_, delta) => {
    if (ref.current) {
      if (scrollYProgress) {
        // Read the current scroll progress (0 to 1) synchronously without triggering renders
        const progress = scrollYProgress.get();

        // Target values based on scroll depth
        const targetRotationY = progress * Math.PI * -1.5; // Rotate 75% of a full circle by the bottom
        const targetZoomZ = -progress * 5; // Move the field slightly forward Z index

        // Smoothly interpolate (lerp) towards the target rotation to avoid stuttering
        ref.current.rotation.y = THREE.MathUtils.lerp(
          ref.current.rotation.y,
          targetRotationY,
          0.05,
        );

        // Let X rotation slowly auto-spin ambiently
        ref.current.rotation.x -= delta / 20;

        // Apply slight Z translation smoothly
        ref.current.position.z = THREE.MathUtils.lerp(
          ref.current.position.z,
          targetZoomZ,
          0.05,
        );
      } else {
        // Fallback auto rotation if no scroll linked
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
      }
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={points} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#343a40"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
};

interface AbstractBackground3DProps {
  scrollYProgress?: MotionValue<number>;
}

const AbstractBackground3D: React.FC<AbstractBackground3DProps> = ({
  scrollYProgress,
}) => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-slate-50 dark:bg-slate-800/50">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        {/* Ambient light for subtle illumination if using meshes, but Points use basic materials mostly */}
        <ambientLight intensity={0.5} />
        {/* Particle System */}
        <ParticleField scrollYProgress={scrollYProgress} />
      </Canvas>
    </div>
  );
};

export default AbstractBackground3D;
