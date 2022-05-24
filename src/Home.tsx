import { FC, Suspense, useRef } from 'react';
import { useFrame, Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Mesh } from 'three';

const Cube = () => {
  const cube = useRef<Mesh>(null);

  useFrame(() => {
    cube.current!.rotation.x += 0.01;
    cube.current!.rotation.y += 0.01;
  });

  return (
    <mesh ref={cube}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#0391BA" />
    </mesh>
  );
};

const Scene = () => (
  <>
    <gridHelper />
    <axesHelper />
    <pointLight intensity={1.0} position={[5, 3, 5]} />
    <Cube />
  </>
);

export const Home: FC = () => (
  <div
    style={{
      height: '100vh',
      width: '100vw',
    }}
  >
    <Canvas
      camera={{
        near: 0.1,
        far: 1000,
        zoom: 1,
      }}
      onCreated={({ gl }) => {
        gl.setClearColor('#252934');
      }}
    >
      <OrbitControls />
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  </div>
);
