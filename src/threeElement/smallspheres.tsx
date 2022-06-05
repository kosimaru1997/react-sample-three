
import { gsap } from 'gsap';
import { FC, useEffect, useRef } from 'react';
import { Mesh } from 'three';

const SmallSphere: FC<{ x: number; y: number; z: number }> = ({
  x,
  y,
  z,
}): JSX.Element => {
  const sphereRef = useRef<Mesh>(null);

  // Animation
  useEffect(() => {
    if (sphereRef.current) {
      const timeline = gsap.timeline({ paused: true });

      timeline.to(sphereRef.current?.position, {
        x,
        duration: 7,
      });

      timeline.to(
        sphereRef.current?.position,
        {
          y,
          duration: 7,
        },
        '<',
      );

      timeline.to(
        sphereRef.current?.position,
        {
          z,
          duration: 9,
        },
        '<',
      );

      timeline.play();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sphereRef.current]);

  return (
    <mesh position={[-3, 5, -4]} castShadow ref={sphereRef}>
      <sphereGeometry args={[0.02, 28, 26]} />
      <meshStandardMaterial color="white" metalness={0.6} roughness={0.2} />
    </mesh>
  );
};

export const SmallSpheres: FC = () => (
  <>
    <SmallSphere x={3} y={1} z={1} />
    <SmallSphere x={2.5} y={1} z={1.5} />
    <SmallSphere x={2} y={1} z={2} />
    <SmallSphere x={1.5} y={1} z={2.5} />
    <SmallSphere x={1} y={1} z={3} />
    <SmallSphere x={0.5} y={1} z={2.5} />
    <SmallSphere x={0} y={1} z={2} />
    <SmallSphere x={3} y={1} z={1} />
    <SmallSphere x={-0.5} y={1} z={1.5} />
    <SmallSphere x={-0.5} y={1} z={0.5} />
    <SmallSphere x={0} y={1} z={0} />
    <SmallSphere x={0.5} y={1} z={-0.5} />
    <SmallSphere x={1} y={1} z={-1} />
    <SmallSphere x={1.5} y={1} z={-0.5} />
    <SmallSphere x={2} y={1} z={0} />
    <SmallSphere x={2.5} y={1} z={0.5} />
    <SmallSphere x={-1} y={1} z={1} />
    <SmallSphere x={3} y={1} z={1} />
    <SmallSphere x={2.5} y={0.5} z={1.5} />
    <SmallSphere x={2} y={0.5} z={2} />
    <SmallSphere x={1.5} y={0.5} z={2.5} />
    <SmallSphere x={1} y={0.5} z={3} />
    <SmallSphere x={0.5} y={0.5} z={2.5} />
    <SmallSphere x={0} y={0.5} z={2} />
    <SmallSphere x={3} y={0.5} z={1} />
    <SmallSphere x={-0.5} y={0.5} z={1.5} />
    <SmallSphere x={-0.5} y={0.5} z={0.5} />
    <SmallSphere x={0} y={0.5} z={0} />
    <SmallSphere x={0.5} y={0.5} z={-0.5} />
    <SmallSphere x={1} y={0.5} z={-1} />
    <SmallSphere x={1.5} y={0.5} z={-0.5} />
    <SmallSphere x={2} y={0.5} z={0} />
    <SmallSphere x={2.5} y={0.5} z={0.5} />
    <SmallSphere x={-1} y={0.5} z={1} />
    <SmallSphere x={2.5} y={0.1} z={1.5} />
    <SmallSphere x={2} y={0.1} z={2} />
    <SmallSphere x={1.5} y={0.1} z={2.5} />
    <SmallSphere x={1} y={0.1} z={3} />
    <SmallSphere x={0.5} y={0.1} z={2.5} />
    <SmallSphere x={0} y={0.1} z={2} />
    <SmallSphere x={3} y={0.1} z={1} />
    <SmallSphere x={-0.5} y={0.1} z={1.5} />
    <SmallSphere x={-0.5} y={0.1} z={0.5} />
    <SmallSphere x={0} y={0.1} z={0} />
    <SmallSphere x={0.5} y={0.1} z={-0.5} />
    <SmallSphere x={1} y={0.1} z={-1} />
    <SmallSphere x={1.5} y={0.1} z={-0.5} />
    <SmallSphere x={2} y={0.1} z={0} />
    <SmallSphere x={2.5} y={0.1} z={0.5} />
    <SmallSphere x={-1} y={0.1} z={1} />
  </>
);
