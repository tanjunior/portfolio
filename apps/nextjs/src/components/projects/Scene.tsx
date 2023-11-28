"use client";

import { useLayoutEffect, useRef } from "react";
import { useScroll, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import * as THREE from "three";

import { Building } from "./Building";
import { Extras } from "./Extras";
import { Interior } from "./Interior";
import { Reveal } from "./Reveal";

export function Scene() {
  const ref = useRef<THREE.Group>(null);
  const tl = useRef<GSAPTimeline>();
  const scroll = useScroll();
  const skyBoxMap = useTexture("/skybox.jpg");

  useFrame(() => {
    if (!tl.current) return;
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    if (!ref.current) return;
    tl.current = gsap.timeline({
      defaults: { duration: 2, ease: "power1.inOut" },
    });

    tl.current
      // .to(ref.current.rotation, {y: -1}, 2)
      // .to(ref.current.position, {z: 2}, 2)

      .to(ref.current.rotation, { y: -1.8 }, 2) // rotate right
      .to(ref.current.position, { y: -2.4 }, 2) // move up
      .to(ref.current.position, { x: -0.2 }, 2) // move right
      .to(ref.current.position, { z: 4 }, 4) //zoom in
      // .to(ref.current.position, {z: 3}, 6)

      .to(ref.current.position, { x: 0 }, 6)
      .to(ref.current.rotation, { y: 1 }, 6)

      .to(ref.current.position, { z: 1 }, 8)
      .to(ref.current.position, { y: -1 }, 8)
      .to(ref.current.rotation, { y: 0 }, 8)
      .to(ref.current.rotation, { x: 1.3 }, 8)

      .to(ref.current.position, { y: 4 }, 10);
    // .to(ref.current.position, {x: 0}, 11)

    // .to(ref.current.rotation, {y: 0}, 13)
    // .to(ref.current.rotation, {x: -1}, 13)
    // .to(ref.current.position, {x: 0}, 13)

    // .to(ref.current.rotation, {y: 0}, 16)
    // .to(ref.current.rotation, {x: 0}, 16)
    // .to(ref.current.position, {x: 0}, 16)

    // .to(ref.current.rotation, {y: 0}, 20)
    // .to(ref.current.rotation, {x: 0}, 20)
    // .to(ref.current.position, {x: 0}, 20)
  }, []);

  return (
    <group scale={0.12} position={[-0.0, -2, -0.2]} rotation-y={-0.3} ref={ref}>
      <mesh rotation-y={(Math.PI / 4) * 3}>
        <sphereGeometry args={[120, 64, 64]} />
        <meshStandardMaterial map={skyBoxMap} side={THREE.BackSide} />
      </mesh>
      <Building />
      <Extras />
      <Interior />
      <Reveal />
    </group>
  );
}

export default Scene;
