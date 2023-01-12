import { Counter } from "./components/Counter";
import { Halls } from "./components/Halls";
import { Home } from "./components/Home";
import { Bands } from "./components/Bands";
import { Shows } from "./components/Shows";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/Halls',
    element: <Halls />
  },
  {
    path: '/Bands',
    element: <Bands />
  },
  {
    path: '/Shows',
    element: <Shows />
  },
];

export default AppRoutes;
