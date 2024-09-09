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

  // Apply mixed color material to the model
  // const applyMixedColorMaterial = (object) => {
  //   object.traverse((child) => {
  //     if (child.isMesh) {
  //       const mixRatio = Math.random(); // Random ratio for blending
  //       const mixedColor = new THREE.Color().lerpColors(
  //         new THREE.Color("white"), // White
  //         new THREE.Color("black"), // Black
  //         mixRatio // Blend ratio
  //       );

  //       child.material = new THREE.MeshStandardMaterial({
  //         color: mixedColor,
  //         emissive: mixedColor,
  //         emissiveIntensity: 1.5,
  //       });
  //     }
  //   });
  // };
  const applyWhiteMaterial = (object) => {
    object.traverse((child) => {
      if (child.isMesh) {
        // Apply a MeshStandardMaterial with white color and emissive properties
        child.material = new THREE.MeshStandardMaterial({
          color: new THREE.Color("white"), // Set the base color to white
          emissive: new THREE.Color("white"), // Make it glow with white
          emissiveIntensity: 1.5, // Adjust glow intensity (can tweak this value)
          roughness: 0.5, // Optional: Adjust the roughness for more realism
          metalness: 0.3, // Optional: Give it a metallic feel (tweakable based on your needs)
        });
      }
    });
  };
  
  

  useMemo(() => {
    applyWhiteMaterial(model.scene);
  }, [model]);

  return (
    <primitive
      object={model.scene}
      scale={[scale, scale, scale]}
      position={[0, (-bbox.y * scale) / 2, 0]} // Center the model vertically
    />
  );
};

const ModelsSection = ({ model }) => {
  return (
    <section>
      <Carousel
        transition={{ duration: 2 }}
        key={model.id}
        className="border rounded-2xl bg-gray-800 border-customPink-600 shadow-glass mb-16"
        style={{ width: "360px" }}
      >
          <img
            src={model.modelimg}
            alt="Model-Image"
            className="h-auto w-full mx-auto  size-[360px]"
          />
        <Canvas  style={{ width: "100%", height: "100%" }} camera={{ position: [0, 0, 5], fov: 40 }}>
          <ambientLight intensity={0.8} />
          <pointLight position={[0, 0, 6]} intensity={2} />
          <ThreeDModels path={model.path} />
          <OrbitControls />
        </Canvas>
      </Carousel>
    </section>
  );
};

export default ModelsSection;
