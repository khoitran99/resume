import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import { MotionValue } from "framer-motion";

// ------------------------------------------------------------------
// Internal Components
// ------------------------------------------------------------------

// High-performance "fake" glass material configuration
const glassMaterialProps = {
  transparent: true, // Use standard transparency instead of heavy transmission passes
  opacity: 0.6,
  metalness: 0.1,
  roughness: 0.05, // Smooth surface
  specularIntensity: 1,
  specularColor: new THREE.Color("#ffffff"),
  clearcoat: 1,
  clearcoatRoughness: 0.1,
  envMapIntensity: 2, // High reflection to sell the glass look without refractive cost
};

// Generates a random position within a specific bounds
const getRandomPosition = (range: number): [number, number, number] => [
  (Math.random() - 0.5) * range,
  (Math.random() - 0.5) * range,
  (Math.random() - 0.5) * (range / 2) - 2, // Push slightly back
];

interface PrimitiveShapeProps {
  position: [number, number, number];
  color: string;
  type: "torus" | "icosahedron" | "cylinder" | "sphere" | "box";
  scale: number;
}

const FloatingPrimitive: React.FC<PrimitiveShapeProps> = ({
  position,
  color,
  type,
  scale,
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  // Create randomized offsets for the floating math so they don't look uniform
  // eslint-disable-next-line
  const randomOffset = useMemo(() => Math.random() * Math.PI * 2, []);

  // Slowly rotate the mesh locally for extra life and simulate floating
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x -= delta * 0.15;
      meshRef.current.rotation.y -= delta * 0.2;

      // Native float simulation (cheaper than drei's Float component)
      const t = state.clock.getElapsedTime();
      meshRef.current.position.y =
        position[1] + Math.sin(t * 1.5 + randomOffset) * 0.3;
      meshRef.current.position.x =
        position[0] + Math.cos(t * 1.2 + randomOffset) * 0.1;
    }
  });

  // Render the specific geometry based on type
  const renderGeometry = () => {
    switch (type) {
      case "torus":
        return <torusGeometry args={[1, 0.4, 32, 64]} />;
      case "icosahedron":
        return <icosahedronGeometry args={[1, 0]} />;
      case "cylinder":
        return <cylinderGeometry args={[0.7, 0.7, 2, 32]} />;
      case "box":
        // Add minimal bevel with smooth normals for a polished look? Box is fine
        return <boxGeometry args={[1.5, 1.5, 1.5]} />;
      case "sphere":
      default:
        return <sphereGeometry args={[1, 64, 64]} />;
    }
  };

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      {renderGeometry()}
      <meshPhysicalMaterial {...glassMaterialProps} color={color} />
    </mesh>
  );
};

interface PrimitivesFieldProps {
  scrollYProgress?: MotionValue<number>;
}

const COLORS = ["#bae6fd", "#7dd3fc", "#38bdf8", "#e2e8f0", "#94a3b8"];
const SHAPE_TYPES: Array<PrimitiveShapeProps["type"]> = [
  "torus",
  "icosahedron",
  "cylinder",
  "sphere",
  "box",
];

const PrimitivesField: React.FC<PrimitivesFieldProps> = ({
  scrollYProgress,
}) => {
  const groupRef = useRef<THREE.Group>(null);

  // Memoize fewer random shapes (10 instead of 15) to save draw calls and fill rate
  const shapes = useMemo(() => {
    return Array.from({ length: 10 }).map((_, i) => ({
      id: i,
      position: getRandomPosition(15),
      // eslint-disable-next-line
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      // eslint-disable-next-line
      type: SHAPE_TYPES[Math.floor(Math.random() * SHAPE_TYPES.length)],
      // eslint-disable-next-line
      scale: Math.random() * 0.8 + 0.4, // Scale between 0.4 and 1.2
    }));
  }, []);

  useFrame((_, delta) => {
    if (groupRef.current) {
      if (scrollYProgress) {
        // Move scene based on scroll
        const progress = scrollYProgress.get();
        // Rotate the entire field slowly based on scroll
        const targetRotationY = progress * Math.PI * 0.5;
        // Raise the shapes up so they don't clip through the bottom as we scroll
        const targetPositionY = progress * 10;

        groupRef.current.rotation.y = THREE.MathUtils.lerp(
          groupRef.current.rotation.y,
          targetRotationY,
          0.05,
        );
        groupRef.current.position.y = THREE.MathUtils.lerp(
          groupRef.current.position.y,
          targetPositionY,
          0.05,
        );
      } else {
        // Fallback auto-spin
        groupRef.current.rotation.y -= delta * 0.05;
      }
    }
  });

  return (
    <group ref={groupRef}>
      {shapes.map((shape) => (
        <FloatingPrimitive
          key={shape.id}
          position={shape.position}
          color={shape.color}
          type={shape.type}
          scale={shape.scale}
        />
      ))}
    </group>
  );
};

// ------------------------------------------------------------------
// Main Background Component
// ------------------------------------------------------------------

interface GlassmorphicPrimitivesBackgroundProps {
  scrollYProgress?: MotionValue<number>;
}

const GlassmorphicPrimitivesBackground: React.FC<
  GlassmorphicPrimitivesBackgroundProps
> = ({ scrollYProgress }) => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-slate-50 dark:bg-slate-800/50 transition-colors duration-700 dark:bg-slate-950">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "high-performance",
        }} // Turn off antialias, not needed for blurry shapes
        dpr={[1, 1]} // Hard cap DPI at 1. Retina pixel rendering on full screen WebGL causes massive lag.
        performance={{ min: 0.5 }} // Allow React Three Fiber to downscale resolution if framerate drops
      >
        {/* Environment mapping is critical for MeshPhysicalMaterial (glass) to have something to reflect/refract */}
        <Environment preset="city" />

        {/* Global Lights */}
        <ambientLight intensity={0.5} />
        {/* Soft directional light to provide highlights */}
        <directionalLight
          position={[10, 10, 5]}
          intensity={1.5}
          color="#ffffff"
        />
        {/* Secondary colored fill light */}
        <pointLight position={[-10, -10, -5]} intensity={1} color="#38bdf8" />

        {/* The floating glass shapes */}
        <PrimitivesField scrollYProgress={scrollYProgress} />

        {/* Soft floor shadow optionally. Bake it by setting frames={1} so it doesn't recalculate every tick */}
        <ContactShadows
          position={[0, -6, 0]}
          opacity={0.4}
          scale={20}
          blur={2}
          far={10}
          resolution={256}
          frames={1}
        />
      </Canvas>
    </div>
  );
};

export default GlassmorphicPrimitivesBackground;
