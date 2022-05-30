import { FC, Suspense } from "react";
import { Sphere } from "./Sphere";

export const Home: FC = () => (
  <Suspense>
    <Sphere />
  </Suspense>
)