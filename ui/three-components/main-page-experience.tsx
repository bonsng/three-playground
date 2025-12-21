import {
  useScroll,
  Image,
  type ImageProps,
  ScrollControls,
} from "@react-three/drei";
import { ThreeElements, useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef, useState } from "react";
import * as THREE from "three";

export default function MainPageExperience() {
  return (
    <>
      <ScrollControls pages={4} infinite>
        <Rig rotation={[0, 0, 0]}>
          <Carousel />
        </Rig>
      </ScrollControls>
    </>
  );
}

const Rig = (props: ThreeElements["group"]) => {
  const ref = useRef<THREE.Group>(null);
  const scroll = useScroll();
  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y = -scroll.offset * (Math.PI * 2);
    state.events?.update?.();
    // easing.damp3(
    //   state.camera.position,
    //   [-state.pointer.x * 2, state.pointer.y + 1.5, 10],
    //   0.3,
    //   delta
    // );
    state.camera.lookAt(0, 0, 0);
  });

  return <group ref={ref} {...props} />;
};

type CarouselProps = {
  radius?: number;
  count?: number;
};

const Carousel = ({ radius = 1.4, count = 8 }: CarouselProps) => {
  return Array.from({ length: count }, (_, i) => (
    <Card
      key={i}
      url={`/img${Math.floor(i % 10) + 1}_.jpg`}
      position={[
        Math.sin((i / count) * Math.PI * 2) * radius,
        0,
        Math.cos((i / count) * Math.PI * 2) * radius,
      ]}
      rotation={[0, Math.PI + (i / count) * Math.PI * 2, 0]}
    />
  ));
};

type CardProps = ImageProps & {
  url: string;
};

const Card = ({ url, ...props }: CardProps) => {
  const ref = useRef<THREE.Mesh>(null);
  const [hovered, hover] = useState(false);
  const pointerOver = (e: PointerEvent) => (e.stopPropagation(), hover(true));
  const pointerOut = () => hover(false);
  useFrame((state, delta) => {
    if (!ref.current) return;
    easing.damp3(ref.current.scale, hovered ? 1.15 : 1, 0.1, delta);
    easing.damp(
      ref.current.material,
      "radius",
      hovered ? 0.25 : 0.1,
      0.2,
      delta
    );
    easing.damp(ref.current.material, "zoom", hovered ? 1 : 1.5, 0.2, delta);
  });

  return (
    <Image
      ref={ref}
      url={url}
      alt={`Image-${url}`}
      transparent
      side={THREE.DoubleSide}
      onPointerOver={pointerOver}
      onPointerOut={pointerOut}
      {...props}
    />
  );
};
