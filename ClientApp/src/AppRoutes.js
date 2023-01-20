import ApiAuthorzationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { Home } from "./components/Web/Home";
import { Agenda } from "./components/Web/Agenda";
import { Huren } from "./components/Web/Huren";
import { Tickets } from "./components/Web/Tickets";
import { Donaties } from "./components/Web/Donaties";
import { Overons } from "./components/Web/Overons";
import { Contact } from"./components/Web/Contact";
import { MijnLaak } from"./components/Web/MijnLaak";
import { ShowPage } from"./components/Web/ShowPage";

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
    path: '/Donaties',
    requireAuth: true,
    element: <Donaties />
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
  },{
    path: '/show/:id',
    requireAuth: true,
    element: <ShowPage />
  },
  ...ApiAuthorzationRoutes
];

export default AppRoutes;
