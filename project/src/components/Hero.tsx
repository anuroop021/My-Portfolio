import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ComputerSetup from './3D/ComputerSetup';
import CosmicBackground from './3D/CosmicBackground';

function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width * 2 - 1;
        const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Hi, I'm{' '}
            <span className="text-[#64ffda]">
              Anuroop Reddy
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Full Stack Developer specializing in modern web technologies
          </p>
          <div className="flex gap-4">
            <a
              href="#about"
              className="bg-[#64ffda] text-[#0a192f] px-6 py-2 rounded-lg font-medium
                     hover:bg-[#64ffda]/90 transition-colors text-sm"
            >
              Get in touch
            </a>
            <a
              href="/Anuroop_Reddy_Resume.pdf"
              download="Anuroop_Reddy_Resume.pdf"
              className="border border-[#64ffda] text-[#64ffda] px-6 py-2 rounded-lg font-medium
                     hover:bg-[#64ffda]/10 transition-colors text-sm"
            >
              My CV
            </a>
          </div>
        </motion.div>

        <div ref={containerRef} className="h-[400px] lg:h-[600px] relative">
          <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              minPolarAngle={Math.PI / 3}
              maxPolarAngle={Math.PI / 2}
            />
            <CosmicBackground />
            <ComputerSetup mousePosition={mousePosition} />
            <ambientLight intensity={0.5} />
          </Canvas>
        </div>
      </div>
    </section>
  );
}

export default Hero;