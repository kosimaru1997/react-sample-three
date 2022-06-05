import { Environment, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { FC } from 'react';
import { BackSide } from 'three';
import { angleToRadians } from './angle';
import { HomeOrbitControl } from './HomeOrbitControls';
import { SmallSpheres } from './smallspheres';
import { Sphere } from './Sphere';

export const ThreeHome: FC = () => (
  <div id="canvas-container">
    <Canvas shadows>
      {/* camera */}
      <PerspectiveCamera
        makeDefault
        position={[2, 1, 6]}
        rotation={[0.1, 0.3, 0]}
      />
      <HomeOrbitControl />

      <Sphere />
      <SmallSpheres />

      {/* floor */}
      <mesh rotation={[-angleToRadians(90), 0, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#1ea3d8" />
      </mesh>

      {/* light */}
      <ambientLight args={['#ffffff', 0.25]} />
      <directionalLight args={['#ffffff', 1]} position={[0, 1, -1]} />
      <spotLight
        args={['#ffffff', 1.5, 7, angleToRadians(45), 0.6]}
        position={[-3, 1, 0]}
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
