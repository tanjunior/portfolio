"use client";

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 public/models/reveal.glb --types 
*/
import { useLayoutEffect, useRef } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import type * as THREE from "three";

import type { RevealResult } from "../types";

// type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export function Reveal(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("models/reveal.glb") as RevealResult;
  const ref = useRef<THREE.Group>(null);
  const tl = useRef<GSAPTimeline>();
  const scroll = useScroll();

  useFrame(() => {
    if (!tl.current) return;
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    if (!ref.current) return;
    tl.current = gsap.timeline({ defaults: { duration: 1 } });

    Object.values(materials).forEach((material) => {
      material.transparent = true;
      tl.current
        .to(
          material,
          {
            opacity: 0,
          },
          1,
        )
        .to(
          material,
          {
            opacity: 0,
          },
          2,
        );
    });
  }, []);

  return (
    <group {...props} dispose={null} ref={ref}>
      <group
        position={[1.003, 19.85, -1]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[4, 1.65, 5]}
      >
        <mesh geometry={nodes.reveal1_1.geometry} material={materials.stone} />
        <mesh
          geometry={nodes.reveal1_2.geometry}
          material={materials["plaster white irregular"]}
        />
      </group>
      <mesh
        geometry={nodes.reveal2.geometry}
        material={materials["Wood Wall Slits Variation 2"]}
        position={[0, 23.15, 0]}
        scale={[4, 1.65, 5]}
      />
      <group position={[0, 21.5, 0]}>
        <mesh
          geometry={nodes.reveal3_1.geometry}
          material={materials["Metal Semirough 01"]}
        />
        <mesh
          geometry={nodes.reveal3_2.geometry}
          material={materials["EEVEE Glass Shader"]}
        />
      </group>
      <group position={[-7.01, 10.9, 7.947]}>
        <mesh
          geometry={nodes.reveal4_1.geometry}
          material={materials["Metal Semirough 01"]}
        />
        <mesh
          geometry={nodes.reveal4_2.geometry}
          material={materials["EEVEE Glass Shader"]}
        />
      </group>
      <group position={[2.013, 18.143, -2.022]}>
        <mesh
          geometry={nodes.reveal5_1.geometry}
          material={materials["Metal Semirough 01"]}
        />
        <mesh
          geometry={nodes.reveal5_2.geometry}
          material={materials["EEVEE Glass Shader"]}
        />
      </group>
      <mesh
        geometry={nodes.reveal6.geometry}
        material={materials["EEVEE Glass Shader.001"]}
        position={[5.871, 21.587, -3.588]}
        scale={[-0.005, -0.052, -0.037]}
      />
      <mesh
        geometry={nodes.reveal7.geometry}
        material={materials["Metal Semirough 01"]}
        position={[4.037, 21.554, 2.881]}
        scale={[-0.037, -0.054, -0.037]}
      />
    </group>
  );
}

useGLTF.preload("models/reveal.glb");