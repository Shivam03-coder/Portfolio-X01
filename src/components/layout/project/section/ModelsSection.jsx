import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { ThreeDModels } from "../../../features/models/ThreeDModels";
import { Typography } from "@material-tailwind/react";
import { ThreeDmodelsData } from "../../../../data";

const ModelsSection = ({ model }) => {
  return (
    <div
      key={model.id}
      className="border rounded-t-2xl border-customOrange-600 shadow-glass mb-16"
      style={{ height: "300px", width: "300px" }}
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <ThreeDModels path={model.path} position={model.position} />
        <OrbitControls />
      </Canvas>
      <div className=" bg-customOrange-600 text-center rounded-b-2xl mx-auto p-3">
        <Typography className="text-center uppercase" variant="h5">
          {model.label}
        </Typography>
      </div>
    </div>
  );
};

export default ModelsSection;
