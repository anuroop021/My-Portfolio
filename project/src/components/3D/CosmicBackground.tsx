import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function CosmicBackground() {
  const particlesRef = useRef<THREE.Points>(null);
  const starsRef = useRef<THREE.Points>(null);

  // Create particles geometry
  const particlesGeometry = new THREE.BufferGeometry();
  const starsGeometry = new THREE.BufferGeometry();

  // Create particles
  const particleCount = 1000;
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;
    positions[i3] = (Math.random() - 0.5) * 10;
    positions[i3 + 1] = (Math.random() - 0.5) * 10;
    positions[i3 + 2] = (Math.random() - 0.5) * 10;

    colors[i3] = Math.random();
    colors[i3 + 1] = Math.random();
    colors[i3 + 2] = Math.random();
  }

  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  // Create stars
  const starCount = 500;
  const starPositions = new Float32Array(starCount * 3);

  for (let i = 0; i < starCount; i++) {
    const i3 = i * 3;
    starPositions[i3] = (Math.random() - 0.5) * 20;
    starPositions[i3 + 1] = (Math.random() - 0.5) * 20;
    starPositions[i3 + 2] = (Math.random() - 0.5) * 20;
  }

  starsGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (particlesRef.current) {
      particlesRef.current.rotation.y = time * 0.05;
      particlesRef.current.position.y = Math.sin(time * 0.2) * 0.1;
    }

    if (starsRef.current) {
      starsRef.current.rotation.y = time * 0.02;
    }
  });

  return (
    <>
      <points ref={particlesRef}>
        <primitive object={particlesGeometry} />
        <pointsMaterial
          size={0.02}
          vertexColors
          transparent
          opacity={0.6}
          sizeAttenuation={true}
        />
      </points>

      <points ref={starsRef}>
        <primitive object={starsGeometry} />
        <pointsMaterial
          size={0.01}
          color="#ffffff"
          transparent
          opacity={0.8}
          sizeAttenuation={true}
        />
      </points>

      {/* Ambient light for overall scene */}
      <ambientLight intensity={0.2} />
    </>
  );
}