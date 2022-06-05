import { FC, Suspense } from "react";
import { ThreeHome } from "../threeElement/ThreeHome";

export const Home: FC = () => (
  <Suspense>
    <ThreeHome />
  </Suspense>
)