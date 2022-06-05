import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import { Mesh } from 'three';

export const Sphere = (): JSX.Element => {
  const sphereRef = useRef<Mesh>(null);

  // Animation
  useEffect(() => {
    if (sphereRef.current) {
      const timeline = gsap.timeline({ paused: true });

      timeline.to(
        sphereRef.current?.position,
        {
          x: 1.3,
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