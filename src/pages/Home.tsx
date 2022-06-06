import { FC, Suspense } from 'react';
import { NavLink } from 'react-router-dom';
import { aboutMeLink, homeText } from '../css/Home.css';
import { ThreeHome } from '../threeElement/ThreeHome';

export const Home: FC = () => (
  <>
    <h2 className={homeText}>MyPortFolio</h2>
    <h2 className={homeText} style={{top: '35px'}}>(Kosimaru1997)</h2>
    <NavLink to='/about' className={aboutMeLink}>About Me</NavLink>
    <Suspense>
      <ThreeHome />
    </Suspense>
  </>
);
