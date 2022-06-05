import { OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import { angleToRadians } from './angle';

export const HomeOrbitControl = (): JSX.Element => {
  const orbitControlsRef = useRef<OrbitControlsImpl>(null);

  useFrame((state: { mouse: { x: number; y: number } }) => {
    // eslint-disable-next-line no-extra-boolean-cast
    if (!!orbitControlsRef.current) {
      const { x, y } = state.mouse;
      orbitControlsRef.current.setAzimuthalAngle(x + 0.7);
      orbitControlsRef.current.setPolarAngle((y + 1.2) * angleToRadians(45));
      orbitControlsRef.current.update();
    }
  });

  return (
    <OrbitControls
      ref={orbitControlsRef}
      minAzimuthAngle={angleToRadians(40)}
      minPolarAngle={angleToRadians(60)}
      maxPolarAngle={angleToRadians(85)}
    />
  );
};
