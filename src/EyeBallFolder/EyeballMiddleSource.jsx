

import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/eyeball.gltf");
  return (
    <group {...props} dispose={null}>
      {/* Rotate the entire model to face upwards */}
      <group rotation={[-Math.PI / -1.8, 0, -0.15]}>
        <mesh
          geometry={nodes.Object_7.geometry}
          material={materials.blinn2}
          rotation={[Math.PI / 2, 0, 0]}
          scale={2}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/eyeball.gltf");
