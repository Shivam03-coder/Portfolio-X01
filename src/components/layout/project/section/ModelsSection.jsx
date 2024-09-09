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
  const applyMixedColorMaterial = (object) => {
    object.traverse((child) => {
      if (child.isMesh) {
        const mixRatio = Math.random() * 0.5; // Random ratio for blending, limiting the brightness
        const mixedColor = new THREE.Color().lerpColors(
          new THREE.Color("white"), // White
          new THREE.Color("gray"),  // Gray to soften the brightness
          mixRatio // Blend ratio
        );
  
        child.material = new THREE.MeshStandardMaterial({
          color: mixedColor,
          emissive: mixedColor,
          emissiveIntensity: 0.5, // Reduced emissive intensity for softer glow
          metalness: 0.8, // Optional: slight metalness for better visual texture
          roughness: 0.6, // Optional: slightly rough surface for subtle shading
        });
      }
    });
  };
  
 
  
  

  useMemo(() => {
    applyMixedColorMaterial(model.scene);
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
        style={{ width: "380px", height:"215px" }}
      >
          <img
            src={model.modelimg}
            alt="Model-Image"
          />
       <Canvas style={{ width: "100%", height: "100%" }} camera={{ position: [0, 0, 5], fov: 40 }}>
  {/* Reduced ambient light intensity */}
  <ambientLight intensity={0.3} />
  
  {/* Reduced point light intensity */}
  <pointLight position={[0, 0, 6]} intensity={1.5} />
  
  <ThreeDModels path={model.path} position={[0, 0, 0]} /> {/* Centering the model */}
  <OrbitControls target={[0, 0, 0]} /> {/* Ensuring the controls target the center */}
</Canvas>

      </Carousel>
    </section>
  );
};

export default ModelsSection;
