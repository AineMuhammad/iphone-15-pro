import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useState, useEffect, useRef } from "react";

function Model() {
  const { camera, gl } = useThree();
  const [model, setModel] = useState(null);
  const controlsRef = useRef(null);

  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.enableDamping = true;
      controlsRef.current.dampingFactor = 0.1;
    }
  }, [controlsRef]);

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load("glb/iphone_15.glb", (gltf) => {
      setModel(gltf.scene);
    });
  }, []);

  return (
    <>
      <OrbitControls enableZoom={false} ref={controlsRef} />
      {/* <ambientLight intensity={8} /> */}
      <directionalLight position={[0, 0, 5]} intensity={6} />
      <directionalLight position={[0, 0, -5]} intensity={6} />
      <directionalLight position={[5, 0, 0]} intensity={6} />
      <directionalLight position={[-5, 0, 0]} intensity={3} />
      <directionalLight position={[0, 5, 0]} intensity={6} />
      <directionalLight position={[0, -5, 0]} intensity={6} />
      {model && <primitive object={model} />}
    </>
  );
}

export default Model;
