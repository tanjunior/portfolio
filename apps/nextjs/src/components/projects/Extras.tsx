"use client";

import { ExtraBuilding } from "./ExtraBuilding";
import { Floor } from "./Floor";
import { Tree } from "./Tree";

export function Extras(props: JSX.IntrinsicElements["group"]) {
  return (
    <group {...props} dispose={null}>
      <Floor />

      <ExtraBuilding />
      <ExtraBuilding position={[-15, 0, 0]} />
      <ExtraBuilding position={[25, 0, 0]} />
      <ExtraBuilding position={[-15, 0, 25]} />
      <ExtraBuilding position={[-30, 0, 25]} />
      <ExtraBuilding position={[0, 0, 28]} rotation-y={Math.PI / 2} />

      <Tree position={[0, 0, 6.5]} />
      <Tree position={[-5, 0, 6.5]} />
      <Tree position={[-10, 0, 6.5]} />
      <Tree position={[-15, 0, 6.5]} />
      <Tree position={[-20, 0, 6.5]} />
      <Tree position={[-25, 0, 6.5]} />
      <Tree position={[-30, 0, 6.5]} />
      <Tree position={[-35, 0, 6.5]} />

      <Tree />
      <Tree position={[0, 0, -5]} />
      <Tree position={[0, 0, -10]} />
      <Tree position={[0, 0, -15]} />
      <Tree position={[0, 0, -20]} />
      <Tree position={[0, 0, -25]} />

      <Tree position={[-11.8, 0, -6]} />
      <Tree position={[-11.8, 0, -11]} />
      <Tree position={[-11.8, 0, -16]} />
      <Tree position={[-11.8, 0, -21]} />
      <Tree position={[-11.8, 0, -26]} />
      <Tree position={[-11.8, 0, -31]} />
      <Tree position={[-11.8, 0, -36]} />
      <Tree position={[-11.8, 0, -41]} />

      <Tree position={[-16.8, 0, -6]} />
      <Tree position={[-21.8, 0, -6]} />
      <Tree position={[-26.8, 0, -6]} />
      <Tree position={[-31.8, 0, -6]} />
      <Tree position={[-36.8, 0, -6]} />
      <Tree position={[-41.8, 0, -6]} />
      <Tree position={[-46.8, 0, -6]} />
    </group>
  );
}
