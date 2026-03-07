import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { MotionValue } from "framer-motion";

// Helper function to generate moving data packets along grid lines
const generateDataPackets = (
  count: number,
  gridSize: number,
  length: number,
) => {
  const positions = new Float32Array(count * 3);
  const velocities = new Float32Array(count * 3);

  // We'll define paths that packets follow - either exactly along X or Z axes to match the grid
  for (let i = 0; i < count; i++) {
    const isZAxis = Math.random() > 0.5; // True = moving along Z, False = moving along X

    // Snap to grid lines (e.g., if grid size is 2, lines are at -4, -2, 0, 2, 4...)
    const snapToGrid = (val: number) => Math.round(val / gridSize) * gridSize;

    // Random start position within the visible area
    let x = (Math.random() - 0.5) * length;
    let z = (Math.random() - 0.5) * length;

    if (isZAxis) {
      x = snapToGrid(x); // Snap X so it travels precisely on a Z-axis grid line
      velocities[i * 3 + 2] =
        (Math.random() * 0.1 + 0.05) * (Math.random() > 0.5 ? 1 : -1); // Vz
    } else {
      z = snapToGrid(z); // Snap Z so it travels precisely on an X-axis grid line
      velocities[i * 3 + 0] =
        (Math.random() * 0.1 + 0.05) * (Math.random() > 0.5 ? 1 : -1); // Vx
    }

    positions[i * 3] = x;
    positions[i * 3 + 1] = 0.05; // Slightly above ground to avoid z-fighting
    positions[i * 3 + 2] = z;
  }

  return { positions, velocities };
};

interface HighwayFieldProps {
  scrollYProgress?: MotionValue<number>;
}

const HighwayField: React.FC<HighwayFieldProps> = ({ scrollYProgress }) => {
  const gridRef = useRef<THREE.Group>(null);
  const packetsRef = useRef<THREE.InstancedMesh>(null);
  const cameraGroupRef = useRef<THREE.Group>(null);

  const gridSize = 2; // Spacing between grid lines
  const gridDivisions = 60; // How many lines
  const gridExtent = gridSize * gridDivisions; // Total size of the world area
  const packetCount = 200;

  // Initial dummy matrix for instanced meshes
  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Generate packet data
  const initialData = useMemo(
    () => generateDataPackets(packetCount, gridSize, gridExtent),
    [packetCount, gridSize, gridExtent],
  );

  const packetPositions = useRef(initialData.positions).current;
  const packetVelocities = useRef(initialData.velocities).current;

  // Custom colors for different packets
  const packetColors = useMemo(() => {
    const baseColor = new THREE.Color("#0ea5e9"); // Sky 500
    const highlightColor = new THREE.Color("#38bdf8"); // Sky 400
    const colors = new Float32Array(packetCount * 3);
    for (let i = 0; i < packetCount; i++) {
      // eslint-disable-next-line
      const c = Math.random() > 0.8 ? highlightColor : baseColor;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    return colors;
  }, [packetCount]);

  useFrame((state, delta) => {
    // 1. Move Data Packets
    if (packetsRef.current) {
      for (let i = 0; i < packetCount; i++) {
        let x = packetPositions[i * 3];
        const y = packetPositions[i * 3 + 1];
        let z = packetPositions[i * 3 + 2];

        const vx = packetVelocities[i * 3];
        const vz = packetVelocities[i * 3 + 2];

        x += vx;
        z += vz;

        // Loop packets around when they go too far out of bounds (infinite highway effect)
        const halfExtent = gridExtent / 2;
        if (x > halfExtent) x = -halfExtent;
        if (x < -halfExtent) x = halfExtent;
        if (z > halfExtent) z = -halfExtent;
        if (z < -halfExtent) z = halfExtent;

        packetPositions[i * 3] = x;
        packetPositions[i * 3 + 2] = z;

        // Update instance matrix
        dummy.position.set(x, y, z);

        // Stretch the packet slightly in the direction of travel to look like a light streak
        if (Math.abs(vx) > 0) {
          dummy.scale.set(1.5, 0.1, 0.2); // Elongate along X
        } else {
          dummy.scale.set(0.2, 0.1, 1.5); // Elongate along Z
        }

        dummy.updateMatrix();
        packetsRef.current.setMatrixAt(i, dummy.matrix);
      }
      packetsRef.current.instanceMatrix.needsUpdate = true;
    }

    // 2. Camera Scroll Effect (Move the whole scene relative to the camera to simulate moving forward)
    if (cameraGroupRef.current) {
      if (scrollYProgress) {
        // We move the scene 'backward' (positive Z and X) so the camera feels like it goes forward
        const progress = scrollYProgress.get();
        // Since we want infinite scrolling, we scale the progress to a large distance
        const rawTargetZ = progress * 50;
        const rawTargetX = progress * 25;

        // Apply lerp safely without modulus breaking the current position
        cameraGroupRef.current.position.z = THREE.MathUtils.lerp(
          cameraGroupRef.current.position.z,
          rawTargetZ,
          0.05,
        );
        cameraGroupRef.current.position.x = THREE.MathUtils.lerp(
          cameraGroupRef.current.position.x,
          rawTargetX,
          0.05,
        );
      } else {
        // Auto-drift if no scroll
        cameraGroupRef.current.position.z += delta * 2;
        cameraGroupRef.current.position.x += delta * 1;

        // Modulo safe here, but to avoid visual snapping, just let it run.
        if (cameraGroupRef.current.position.z > 1000) {
          cameraGroupRef.current.position.z = 0;
          cameraGroupRef.current.position.x = 0;
        }
      }
    }
  });

  return (
    <group ref={cameraGroupRef}>
      {/* City/Highway Grid */}
      <group ref={gridRef} rotation={[-Math.PI / 2, 0, 0]}>
        <gridHelper
          args={[gridExtent, gridDivisions, "#94a3b8", "#e2e8f0"]} // Center line color, Grid line color
          position={[0, 0, 0]}
        />
        {/* Transparent floor plane to catch subtle shadows or ambient light if needed, though this is primarily unlit */}
        <mesh position={[0, -0.1, 0]}>
          <planeGeometry args={[gridExtent, gridExtent]} />
          <meshBasicMaterial color="#f8fafc" depthWrite={false} />
        </mesh>
      </group>

      {/* Data Packets (Light Streaks) */}
      <instancedMesh
        ref={packetsRef}
        args={[undefined, undefined, packetCount]}
      >
        <boxGeometry args={[1, 1, 1]}>
          <instancedBufferAttribute
            attach="attributes-color"
            args={[packetColors, 3]}
          />
        </boxGeometry>
        <meshBasicMaterial vertexColors toneMapped={false} />
      </instancedMesh>
    </group>
  );
};

const CameraSetup = () => {
  const { camera } = useThree();
  React.useEffect(() => {
    camera.lookAt(0, 0, 0);
  }, [camera]);
  return null;
};

interface IsometricDataHighwayProps {
  scrollYProgress?: MotionValue<number>;
}

const IsometricDataHighway: React.FC<IsometricDataHighwayProps> = ({
  scrollYProgress,
}) => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-slate-50 transition-colors duration-700 dark:bg-slate-950">
      <Canvas
        // Orthographic camera represents isometric perspective perfectly, but a carefully placed perspective camera
        // with narrow FOV creates a nice "fake" isometric look with better depth perception during "forward" movement.
        camera={{ position: [20, 15, 20], fov: 35 }}
      >
        {/* Lock camera to look at center */}
        <CameraSetup />

        {/* Soft fog to hide the edges of the grid and create depth */}
        <fog attach="fog" args={["#f8fafc", 20, 45]} />

        <HighwayField scrollYProgress={scrollYProgress} />
      </Canvas>
    </div>
  );
};

export default IsometricDataHighway;
