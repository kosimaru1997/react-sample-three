import { FC, Suspense } from 'react';
import { homeText } from '../css/Home.css';
import { ThreeHome } from '../threeElement/ThreeHome';

export const Home: FC = () => (
  <>
    <h2 className={homeText}>MyPortFolio(Kosimaru1997)</h2>
    <Suspense>
      <ThreeHome />
    </Suspense>
  </>
);
