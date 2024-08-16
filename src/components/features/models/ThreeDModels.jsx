import React from 'react';
import { useGLTF } from '@react-three/drei';

export function ThreeDModels({ path, position }) {
  const { nodes } = useGLTF(path);

  return (
    <group dispose={null} scale={0.6}>
      {Object.entries(nodes).map(([key, node]) => (
        <mesh
          key={key}
          castShadow
          receiveShadow
          geometry={node.geometry}
          position={position[key] || [0, 0, 0]} 
          scale={node.scale || 1} 
        >
          <meshStandardMaterial color="#FFFCFB" /> 
        </mesh>
      ))}
    </group>
  );
}

useGLTF.preload('/grenades.glb');
