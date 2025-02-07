import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ComputerSetupProps {
  mousePosition: { x: number; y: number };
}

export default function ComputerSetup({ mousePosition }: ComputerSetupProps) {
  const group = useRef<THREE.Group>(null);

  useFrame(() => {
    if (group.current) {
      // Smooth rotation based on mouse position
      group.current.rotation.y = THREE.MathUtils.lerp(
        group.current.rotation.y,
        mousePosition.x * 0.5,
        0.1
      );
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        mousePosition.y * 0.2,
        0.1
      );
    }
  });

  return (
    <group ref={group}>
      {/* Monitor */}
      <group position={[0, 0.5, 0]}>
        {/* Screen */}
        <mesh>
          <boxGeometry args={[3, 2, 0.1]} />
          <meshPhongMaterial color="#1a1a1a" />
        </mesh>
        {/* Screen Display */}
        <mesh position={[0, 0, 0.06]}>
          <boxGeometry args={[2.8, 1.8, 0.01]} />
          <meshPhongMaterial color="#000000" emissive="#114444" />
        </mesh>
        {/* Stand */}
        <mesh position={[0, -1.2, 0.2]}>
          <boxGeometry args={[0.2, 0.4, 0.2]} />
          <meshPhongMaterial color="#1a1a1a" />
        </mesh>
        <mesh position={[0, -1.4, 0]}>
          <boxGeometry args={[0.8, 0.1, 0.6]} />
          <meshPhongMaterial color="#1a1a1a" />
        </mesh>
      </group>

      {/* Keyboard */}
      <group position={[0, -1.2, 1]}>
        <mesh>
          <boxGeometry args={[2, 0.1, 0.8]} />
          <meshPhongMaterial color="#1a1a1a" />
        </mesh>
        {/* RGB Effect */}
        <mesh position={[0, -0.02, 0]}>
          <boxGeometry args={[2, 0.02, 0.8]} />
          <meshPhongMaterial emissive="#ff0000" emissiveIntensity={0.5} />
        </mesh>
      </group>

      {/* Mouse */}
      <group position={[1.2, -1.2, 1]}>
        <mesh>
          <boxGeometry args={[0.3, 0.1, 0.5]} />
          <meshPhongMaterial color="#1a1a1a" />
        </mesh>
        {/* RGB Effect */}
        <mesh position={[0, -0.02, 0]}>
          <boxGeometry args={[0.3, 0.02, 0.5]} />
          <meshPhongMaterial emissive="#00ff00" emissiveIntensity={0.5} />
        </mesh>
      </group>

      {/* RGB Lighting Effects */}
      <pointLight position={[-2, 1, 2]} color="#ff0000" intensity={0.5} />
      <pointLight position={[2, 1, 2]} color="#00ff00" intensity={0.5} />
      <pointLight position={[0, 1, -2]} color="#0000ff" intensity={0.5} />
    </group>
  );
}