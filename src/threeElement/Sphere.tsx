import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { gsap } from 'gsap';
import { FC, useEffect, useRef } from 'react';
import { BackSide, Mesh } from 'three';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import { angleToRadians } from './angle';

// code to move the camera around
const SphereOrbitControl = (): JSX.Element => {
  const orbitControlsRef = useRef<OrbitControlsImpl>(null);

  useFrame((state: { mouse: { x: number; y: number } }) => {
    // eslint-disable-next-line no-extra-boolean-cast
    if (!!orbitControlsRef.current) {
      const { x, y } = state.mouse;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(90));
      orbitControlsRef.current.setPolarAngle((y + 1) * angleToRadians(60));
      orbitControlsRef.current.update();
    }
  });

  return (
    <OrbitControls
      ref={orbitControlsRef}
      minAzimuthAngle={angleToRadians(40)}
      minPolarAngle={angleToRadians(60)}
      maxPolarAngle={angleToRadians(80)}
    />
  );
};

const UseSphereAnimation = (): JSX.Element => {
  const sphereRef = useRef<Mesh>(null);

  // Animation
  useEffect(() => {
    // eslint-disable-next-line no-extra-boolean-cast
    if (!!sphereRef.current) {
      const timeline = gsap.timeline({ paused: true });

      timeline.to(
        sphereRef.current?.position,
        {
          x: 2,
          duration: 2,
        },
        '<+=1',
      );

      timeline.to(
        sphereRef.current?.position,
        {
          y: 0.5,
          duration: 1.5,
          ease: 'bounce.out',
        },
        '<',
      );

      timeline.play();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sphereRef.current]);

  return (
    <mesh position={[-2, 2, 0]} castShadow ref={sphereRef}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="white" metalness={0.6} roughness={0.2} />
    </mesh>
  );
};

export const Sphere: FC = () => (
  <div id="canvas-container">
    <Canvas shadows>
      {/* camera */}
      <PerspectiveCamera makeDefault position={[0, 1, 5]} />
      <SphereOrbitControl />

      <UseSphereAnimation />

      {/* floor */}
      <mesh rotation={[-angleToRadians(90), 0, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#1ea3d8" />
      </mesh>

      {/* light */}
      <ambientLight args={['#ffffff', 0.25]} />
      {/* <directionalLight args={['#ffffff', 1]} position={[-4, 1, 0]}/> */}
      <spotLight
        args={['#ffffff', 1.5, 7, angleToRadians(45), 0.4]}
        position={[-4, 1, 0]}
        castShadow
      />

      <Environment background>
        <mesh>
          <sphereGeometry args={[50, 100, 100]} />
          <meshBasicMaterial side={BackSide} color="#1ea3d8" />
        </mesh>
      </Environment>
    </Canvas>
  </div>
);
