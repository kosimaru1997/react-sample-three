import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { FC, useEffect, useRef } from 'react';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import { angleToRadians } from './angle';

const SphereOrbitControl = (): JSX.Element => {
  const orbitControlsRef = useRef<OrbitControlsImpl>(null);

  useFrame((state: { mouse: { x: number; y: number } }) => {
    // eslint-disable-next-line no-extra-boolean-cast
    if (!!orbitControlsRef.current) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { x, y } = state.mouse;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      orbitControlsRef.current.setAzimuthalAngle(angleToRadians(x * 24));
      orbitControlsRef.current.update();
    }
  });

  useEffect(() => {
    // eslint-disable-next-line no-extra-boolean-cast
    if (!!orbitControlsRef.current) {
      console.log(orbitControlsRef.current);
    }
  }, []);

  return(
    <OrbitControls ref={orbitControlsRef} />
  )
};

export const Sphere: FC = () => (
  <div id="canvas-container">
    <Canvas>
      {/* camera */}
      <PerspectiveCamera makeDefault position={[0, 1, 5]} />
      <SphereOrbitControl />

      {/* sphere */}
      <mesh position={[0, 0.5, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#0391BA" />
      </mesh>

      {/* floor */}
      <mesh rotation={[-angleToRadians(90), 0, 0]}>
        <planeGeometry args={[7, 7]} />
        <meshStandardMaterial color="grey" />
      </mesh>

      <ambientLight args={['#ffffff', 1]} />
    </Canvas>
  </div>
);
