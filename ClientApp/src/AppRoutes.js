import ApiAuthorzationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { Home } from "./components/Web/Home";
import { Agenda } from "./components/Web/Agenda";
import { Huren } from "./components/Web/Huren";
import { Tickets } from "./components/Web/Tickets";
import { Dontaties } from "./components/Web/Dontaties";
import { Overons } from "./components/Web/Overons";
import { Contact } from"./components/Web/Contact";
import { MijnLaak } from"./components/Web/MijnLaak";

const AppRoutes = [
  
  {
    index: true,
    element: <Home />
  },
  {
    path: '/Agenda',
    requireAuth: true,
    element: <Agenda />
  },
  {
    path: '/Tickets',
    requireAuth: true,
    element: <Tickets />
  },
  {
    path: '/Huren',
    requireAuth: true,
    element: <Huren />
  },
  {
    path: '/Dontaties',
    requireAuth: true,
    element: <Dontaties />
  },
  {
    path: '/Overons',
    element: <Overons />
  },
  {
    path: '/Contact',
    element: <Contact />
  },
  {
    path: '/MijnLaak',
    requireAuth: true,
    element: <MijnLaak />
  },
  ...ApiAuthorzationRoutes
];

export default AppRoutes;
