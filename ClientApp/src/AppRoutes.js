import ApiAuthorzationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { Home } from "./components/Web/Home";
import { Agenda } from "./components/Web/Agenda";
import { Huren } from "./components/Web/Huren";
import { Tickets } from "./components/Web/Tickets";
import { Doneer } from "./components/Web/Doneer";
import { Overons } from "./components/Web/Overons";
import { Contact } from"./components/Web/Contact";
import { MijnLaak } from"./components/Web/MijnLaak";
import { ShowPage } from"./components/Web/ShowPage";
import { Payment } from"./components/Web/Payment";
import { Admin } from"./components/Web/Admin";
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
    path: '/Doneer',
    requireAuth: true,
    element: <Doneer />
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
  {
    path: '/show/:id',
    requireAuth: true,
    element: <ShowPage />
  },{
    path: '/Payment',
    requireAuth: true,
    element: <Payment />
  },
  {
    path: '/Admin',
    requireAuth: true,
    element: <Admin />
  },
  ...ApiAuthorzationRoutes
];

export default AppRoutes;
