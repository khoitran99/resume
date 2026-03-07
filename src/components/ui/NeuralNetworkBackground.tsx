import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { MotionValue } from "framer-motion";

// Generate random points in a sphere
const generatePoints = (count: number, radius: number) => {
  const positions = new Float32Array(count * 3);
  const velocities = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    // Random position within a sphere
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

    // Random velocity
    velocities[i * 3] = (Math.random() - 0.5) * 0.02; // vx
    velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02; // vy
    velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02; // vz
  }

  return { positions, velocities };
};

interface NeuralNetworkFieldProps {
  scrollYProgress?: MotionValue<number>;
}

const NeuralNetworkField: React.FC<NeuralNetworkFieldProps> = ({
  scrollYProgress,
}) => {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const { mouse, viewport } = useThree();

  const particleCount = 150;
  const maxDistance = 2.5; // Max distance to draw a line between particles
  const radius = 10;

  // Initialize particles
  const initialData = useMemo(
    () => generatePoints(particleCount, radius),
    [particleCount, radius],
  );

  const positions = initialData.positions;
  const velocities = useRef(initialData.velocities).current;

  // Buffer geometry arrays
  // Max possible lines = (n * (n - 1)) / 2
  // We allocate a reasonably large buffer and update drawCount dynamically
  const maxLines = 3000;
  const linePositions = useMemo(
    () => new Float32Array(maxLines * 6),
    [maxLines],
  );
  const lineColors = useMemo(() => new Float32Array(maxLines * 6), [maxLines]);

  useFrame((state, delta) => {
    if (!pointsRef.current || !linesRef.current) return;

    const positionsArray = pointsRef.current.geometry.attributes.position
      .array as Float32Array;

    // 1. Update particle positions based on velocity
    for (let i = 0; i < particleCount; i++) {
      let x = positionsArray[i * 3];
      let y = positionsArray[i * 3 + 1];
      let z = positionsArray[i * 3 + 2];

      const vx = velocities[i * 3];
      const vy = velocities[i * 3 + 1];
      const vz = velocities[i * 3 + 2];

      x += vx;
      y += vy;
      z += vz;

      // Bounce off invisible sphere boundaries
      if (Math.sqrt(x * x + y * y + z * z) > radius) {
        velocities[i * 3] *= -1;
        velocities[i * 3 + 1] *= -1;
        velocities[i * 3 + 2] *= -1;
      }

      positionsArray[i * 3] = x;
      positionsArray[i * 3 + 1] = y;
      positionsArray[i * 3 + 2] = z;
    }

    // Flag positions as needing update
    pointsRef.current.geometry.attributes.position.needsUpdate = true;

    // 2. Calculate connections (lines)
    let lineIndex = 0;
    let vertexIndex = 0;
    const colorCache = new THREE.Color("#64748b"); // Slate 500

    // Convert normalized mouse coordinates (-1 to +1) to world coordinates (approximate Z)
    const mouseWorldX = (mouse.x * viewport.width) / 2;
    const mouseWorldY = (mouse.y * viewport.height) / 2;

    for (let i = 0; i < particleCount; i++) {
      const x1 = positionsArray[i * 3];
      const y1 = positionsArray[i * 3 + 1];
      const z1 = positionsArray[i * 3 + 2];

      // Interaction: repel particles slightly from mouse cursor
      const dxMouse = mouseWorldX - x1;
      const dyMouse = mouseWorldY - y1;
      const distToMouse = Math.sqrt(
        dxMouse * dxMouse + dyMouse * dyMouse + z1 * z1,
      );

      const repelRadius = 3;
      if (distToMouse < repelRadius) {
        const force = (repelRadius - distToMouse) / repelRadius;
        positionsArray[i * 3] -= (dxMouse / distToMouse) * force * 0.05;
        positionsArray[i * 3 + 1] -= (dyMouse / distToMouse) * force * 0.05;
        // Adjust velocity slightly to make interaction dynamic
        velocities[i * 3] -= (dxMouse / distToMouse) * force * 0.005;
        velocities[i * 3 + 1] -= (dyMouse / distToMouse) * force * 0.005;
      }

      for (let j = i + 1; j < particleCount; j++) {
        const x2 = positionsArray[j * 3];
        const y2 = positionsArray[j * 3 + 1];
        const z2 = positionsArray[j * 3 + 2];

        // Euclidean distance squared
        const distSq = (x1 - x2) ** 2 + (y1 - y2) ** 2 + (z1 - z2) ** 2;

        if (distSq < maxDistance * maxDistance) {
          const dist = Math.sqrt(distSq);

          // Calculate opacity based on distance
          const alpha = 1.0 - dist / maxDistance;

          // Add line vertices
          // eslint-disable-next-line
          linePositions[vertexIndex++] = x1;
          // eslint-disable-next-line
          linePositions[vertexIndex++] = y1;
          // eslint-disable-next-line
          linePositions[vertexIndex++] = z1;

          // eslint-disable-next-line
          linePositions[vertexIndex++] = x2;
          // eslint-disable-next-line
          linePositions[vertexIndex++] = y2;
          // eslint-disable-next-line
          linePositions[vertexIndex++] = z2;

          // Add line colors (with alpha applied to RGB roughly, since LineBasicMaterial vertexColors doesn't robustly support per-vertex alpha without custom shaders. We'll fade to background color)
          // Background is roughly #f8fafc (Slate 50)
          const bgColor = new THREE.Color("#f8fafc");
          const blendedColor = bgColor.clone().lerp(colorCache, alpha * 0.5); // Max opacity 0.5

          // eslint-disable-next-line
          lineColors[lineIndex * 6 + 0] = blendedColor.r;
          // eslint-disable-next-line
          lineColors[lineIndex * 6 + 1] = blendedColor.g;
          // eslint-disable-next-line
          lineColors[lineIndex * 6 + 2] = blendedColor.b;

          // eslint-disable-next-line
          lineColors[lineIndex * 6 + 3] = blendedColor.r;
          // eslint-disable-next-line
          lineColors[lineIndex * 6 + 4] = blendedColor.g;
          // eslint-disable-next-line
          lineColors[lineIndex * 6 + 5] = blendedColor.b;

          lineIndex++;
          if (lineIndex >= maxLines) break;
        }
      }
      if (lineIndex >= maxLines) break;
    }

    linesRef.current.geometry.setDrawRange(0, lineIndex * 2);
    linesRef.current.geometry.attributes.position.needsUpdate = true;
    linesRef.current.geometry.attributes.color.needsUpdate = true;

    // 3. Overall scene rotation / translation based on scroll
    if (scrollYProgress) {
      const progress = scrollYProgress.get();
      // Target values based on scroll depth
      const targetRotationX = progress * Math.PI * 0.5;
      const targetRotationY = progress * Math.PI * -1.5;
      const targetZoomZ = progress * 3; // Move slightly closer

      // Smoothly interpolate (lerp) towards the target rotation to avoid stuttering
      state.scene.rotation.y = THREE.MathUtils.lerp(
        state.scene.rotation.y,
        targetRotationY,
        0.05,
      );
      state.scene.rotation.x = THREE.MathUtils.lerp(
        state.scene.rotation.x,
        targetRotationX,
        0.05,
      );

      state.scene.position.z = THREE.MathUtils.lerp(
        state.scene.position.z,
        targetZoomZ,
        0.05,
      );
    } else {
      // Fallback auto rotation if no scroll linked
      state.scene.rotation.x += delta * 0.05;
      state.scene.rotation.y += delta * 0.02;
    }
  });

  return (
    <>
      {/* Particles */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
            count={positions.length / 3}
            array={positions}
            itemSize={3}
            usage={THREE.DynamicDrawUsage}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.1}
          color="#475569" // Slate 600
          transparent
          opacity={0.8}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </points>

      {/* Connections (Lines) */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
            usage={THREE.DynamicDrawUsage}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[lineColors, 3]}
            count={lineColors.length / 3}
            array={lineColors}
            itemSize={3}
            usage={THREE.DynamicDrawUsage}
          />
        </bufferGeometry>
        <lineBasicMaterial
          vertexColors
          transparent
          opacity={0.6}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </>
  );
};

interface NeuralNetworkBackgroundProps {
  scrollYProgress?: MotionValue<number>;
}

const NeuralNetworkBackground: React.FC<NeuralNetworkBackgroundProps> = ({
  scrollYProgress,
}) => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-slate-50 transition-colors duration-700 dark:bg-slate-950">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        {/* Subtle fog to hide particles fading into the distance */}
        <fog attach="fog" args={["#f8fafc", 5, 20]} />
        <NeuralNetworkField scrollYProgress={scrollYProgress} />
      </Canvas>
    </div>
  );
};

export default NeuralNetworkBackground;
