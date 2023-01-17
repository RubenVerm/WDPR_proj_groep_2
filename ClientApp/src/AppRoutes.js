import { Counter } from "./components/Counter";
import { Halls } from "./components/Halls";
import { Home } from "./components/Home";
import { Bands } from "./components/Bands";
import { Shows } from "./components/Shows";
import { SeatsSelection } from"./components/SeatsSelection";
import { ShoppingCart } from"./components/ShoppingCart";

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
  {
    path: '/SeatsSelection',
    element: <SeatsSelection />
  },
  {
    path: '/ShoppingCart',
    element: <ShoppingCart />
  },
];

export default AppRoutes;
