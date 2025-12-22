import {
  useScroll,
  Image,
  type ImageProps,
  ScrollControls,
  Html,
} from "@react-three/drei";
import { ThreeElements, useFrame, useThree } from "@react-three/fiber";
import { easing } from "maath";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { contents } from "@/lib/contents";
import { useRouter } from "next/navigation";

export default function MainPageExperience() {
  return (
    <>
      <ScrollControls pages={4} infinite>
        <Rig rotation={[0, 0, 0]}>
          <Carousel count={contents.length} />
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
    state.camera.lookAt(0, 0, 0);
  });

  return <group ref={ref} {...props} />;
};

type CarouselProps = {
  radius?: number;
  count?: number;
};

const Carousel = ({ radius = 1.4, count = 8 }: CarouselProps) => {
  return contents.map((val, i) => (
    <Card
      key={i}
      url={`/img${Math.floor(i % 10) + 1}_.jpg`}
      title={val.title}
      index={val.id}
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
  title: string;
  index: number;
};

const Card = ({ url, title, index, ...props }: CardProps) => {
  const ref = useRef<THREE.Mesh>(null);
  const { gl } = useThree();
  const portal = useRef<HTMLElement>(document.body);

  useEffect(() => {
    // ScrollControls renders into a scrollable overlay div; portaling prevents the label from moving with scroll.
    portal.current =
      (gl.domElement.parentElement as HTMLElement) ?? document.body;
  }, [gl]);

  const router = useRouter();

  const [hovered, hover] = useState(false);
  const pointerOver = (e: PointerEvent) => (e.stopPropagation(), hover(true));
  const pointerOut = () => hover(false);
  useFrame((state, delta) => {
    if (!ref.current) return;

    const material = ref.current.material as THREE.MeshBasicMaterial & {
      zoom: number;
      radius: number;
      opacity: number;
    };

    // 살짝 밝아지는 느낌
    easing.damp(material, "opacity", hovered ? 1 : 0.85, 0.2, delta);

    // 기존에 쓰던 것들
    easing.damp(material, "radius", hovered ? 0.25 : 0.1, 0.2, delta);
    easing.damp(material, "zoom", hovered ? 1 : 1.5, 0.2, delta);
  });

  const handleClick = () => {
    router.push(`/${title.toLowerCase()}`);
  };

  return (
    <Image
      ref={ref}
      url={url}
      alt={`Image-${url}`}
      transparent
      side={THREE.DoubleSide}
      onPointerOver={pointerOver}
      onPointerOut={pointerOut}
      onClick={handleClick}
      {...props}
    >
      {hovered && (
        <Html
          portal={portal}
          distanceFactor={1}
          center
          transform
          position={[0, 0.15, 0]}
          rotation={[0, Math.PI, 0]}
          style={{ pointerEvents: "none" }}
        >
          <div className="border text-black px-3 py-1 text-5xl shadow backdrop-blur w-[30vh] h-[10vh]">
            <h1
              className={`${
                hovered && "animate__animated animate__fadeInDown"
              }`}
            >
              {index.toString().padStart(2, "0")}
            </h1>
            <h1
              className={`${hovered && "animate__animated animate__fadeInUp"}`}
            >
              {title}
            </h1>
          </div>
        </Html>
      )}
    </Image>
  );
};
