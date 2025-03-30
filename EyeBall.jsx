
 
import { useState, Suspense, useEffect, useRef } from "react";
import * as THREE from 'three';
import { Canvas, useFrame, } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Eyeball from "../../../public/Eyeball.jsx";

import './Eyeball.css';

 

 





 function EyeFunction () {
  
   const meshRef = useRef();
   const [mousePos, setMousePos] =  useState({ x: 0, y: 0 });
 
//function to handle mouse movement
   const handleMouseMove = (event) => {
     setMousePos ({
     x: (event.clientX / window.innerWidth) * 2 - 1,
     y: -(event.clientY / window.innerHeight) * 2 + 1,
     });
     if (event.type === 'touchmove') {
      const touch = event.touches[0];
      setMousePos({
        x: (touch.clientX / window.innerWidth) * 2 - 1,
        y: -(touch.clientY / window.innerHeight) * 2 + 1,
      });
    } else {
      setMousePos({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      });
    }
   };
  
   useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleMouseMove);
    };
  }, []);
 
useFrame(() => {
 
const cursorPosition = new THREE.Vector3(-mousePos.x * .3, -mousePos.y* .5, 0);
const pupilPosition = new THREE.Vector3(0, 0, 1); 
const direction = new THREE.Vector3().subVectors(cursorPosition, pupilPosition);
meshRef.current.lookAt(direction);
 

 
});

 

   return (
     <mesh ref={meshRef}  >
       <Eyeball />
       <meshStandardMaterial color="blue" />
     </mesh>
   );
 }
function Scene() {
 
  return (
 <div className="canvasWrapper ">
    <Canvas >
         
         
      <ambientLight intensity={2.5} />
      <pointLight position={[0, 0, 0.1]} /> 
        <OrbitControls    enabled={false} enableZoom={false}/>
        <Suspense fallback={null}>
                 <EyeFunction />
        </Suspense>
    
      </Canvas> 
      </div>
  );
}
export default function App() {
  return <Scene />;
}
 
Environment.presets;
// city, park, matcap, warehouse, apartment, forest, stadium, sunset, night, dawn, dusk