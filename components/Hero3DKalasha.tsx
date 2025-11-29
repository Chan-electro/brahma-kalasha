import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

// Fix for missing R3F types in JSX
declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      mesh: any;
      sphereGeometry: any;
      meshStandardMaterial: any;
      cylinderGeometry: any;
      torusGeometry: any;
      ambientLight: any;
      spotLight: any;
    }
  }
}

const AbstractKalasha = (props: any) => {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
    }
  });

  return (
    <group ref={meshRef} {...props}>
      {/* Base Pot Body */}
      <mesh position={[0, -0.5, 0]}>
        <sphereGeometry args={[1.2, 64, 64]} />
        <meshStandardMaterial 
          color="#A58670" 
          metalness={0.8} 
          roughness={0.2}
          envMapIntensity={1.5}
        />
      </mesh>
      
      {/* Neck */}
      <mesh position={[0, 0.8, 0]}>
        <cylinderGeometry args={[0.5, 0.4, 0.6, 32]} />
        <meshStandardMaterial color="#8A6E5C" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Rim */}
      <mesh position={[0, 1.1, 0]}>
        <torusGeometry args={[0.5, 0.1, 16, 100]} />
        <meshStandardMaterial color="#CDBEB1" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Abstract Rings/Aura */}
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[1.6, 0.02, 16, 100]} />
        <meshStandardMaterial color="#43171A" emissive="#43171A" emissiveIntensity={0.5} />
      </mesh>
       <mesh position={[0, 0, 0]} rotation={[-Math.PI / 4, 0, 0]}>
        <torusGeometry args={[1.8, 0.02, 16, 100]} />
        <meshStandardMaterial color="#A58670" emissive="#A58670" emissiveIntensity={0.2} />
      </mesh>
    </group>
  );
};

const Hero3DKalasha: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Environment preset="sunset" />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <AbstractKalasha />
        </Float>
        <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />
      </Canvas>
    </div>
  );
};

export default Hero3DKalasha;