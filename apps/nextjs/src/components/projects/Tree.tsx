"use client";

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 public/models/tree.glb --types 
*/
import { useLayoutEffect, useRef } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import type * as THREE from "three";
import type { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    tree1_1: THREE.Mesh;
    tree1_2: THREE.Mesh;
    tree1_3: THREE.Mesh;
  };
  materials: {
    Livistona: THREE.MeshStandardMaterial;
    ["Livistona.005"]: THREE.MeshStandardMaterial;
    ["Material.000"]: THREE.MeshStandardMaterial;
  };
};

// type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export function Tree(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/tree.glb") as GLTFResult;
  const tl = useRef<GSAPTimeline>();
  const scroll = useScroll();

  useFrame(() => {
    if (!tl.current) return;
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    // if (!ref.current) return
    tl.current = gsap.timeline({ defaults: { duration: 1 } });

    Object.values(materials).forEach((material) => {
      material.transparent = true;
      tl.current
        .to(
          material,
          {
            opacity: 0,
          },
          0,
        )
        .to(
          material,
          {
            opacity: 0,
          },
          1,
        );
    });
  }, []);

  return (
    <group {...props} dispose={null}>
      <group
        position={[21.116, -0.076, 13.169]}
        rotation={[Math.PI, -0.594, Math.PI]}
        scale={0.007}
      >
        <mesh
          geometry={nodes.tree1_1.geometry}
          material={materials.Livistona}
        />
        <mesh
          geometry={nodes.tree1_2.geometry}
          material={materials["Livistona.005"]}
        />
        <mesh
          geometry={nodes.tree1_3.geometry}
          material={materials["Material.000"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/tree.glb");
