import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Carousel, Typography } from "@material-tailwind/react";
import { useMemo } from "react";
import * as THREE from "three";

const ThreeDModels = ({ path }) => {
  const model = useGLTF(path);

  // Calculate the bounding box of the model
  const bbox = useMemo(() => {
    const box = new THREE.Box3().setFromObject(model.scene);
    const size = new THREE.Vector3();
    box.getSize(size);
    return size;
  }, [model]);

  // Calculate the scaling factor to normalize the model size
  const scale = useMemo(() => {
    const maxDimension = Math.max(bbox.x, bbox.y, bbox.z);
    return 2 / maxDimension; // Adjust the size within a standard range
  }, [bbox]);

  // Apply bright and colorful material to the model
  const applyColorfulMaterial = (object) => {
    object.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({
          color: new THREE.Color(`hsl(${Math.random() * 360}, 100%, 50%)`), // Random colorful material
          emissive: new THREE.Color(`hsl(${Math.random() * 360}, 100%, 50%)`), // Emissive for brightness
          emissiveIntensity: 1.5,
        });
      }
    });
  };

  useMemo(() => {
    applyColorfulMaterial(model.scene);
  }, [model]);

  return (
    <primitive
      object={model.scene}
      scale={[scale, scale, scale]}
      position={[0, (-bbox.y * scale) / 2, 0]} // Center the model
    />
  );
};

const ModelsSection = ({ model }) => {
  return (
    <Carousel
      transition={{ duration: 2 }}
      key={model.id}
      className="border rounded-2xl bg-gray-800 border-customOrange-600 shadow-glass mb-16"
      style={{ height: "300px", width: "300px" }}
    >
      <img
        src={model.modelimg}
        alt="Model-Image"
        className="h-full w-full object-cover"
      />
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 0, 5]} intensity={2} />
        <ThreeDModels path={model.path} />
        <OrbitControls />
      </Canvas>
    </Carousel>
  );
};

export default ModelsSection;
