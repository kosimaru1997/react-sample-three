import { FC } from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import { Home } from './threeElement/Home';


export const App: FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
);
