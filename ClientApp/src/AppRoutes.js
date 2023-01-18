import { Agenda } from "./components/Agenda";
import { Huren } from "./components/Huren";
import { Home } from "./components/Home";
import { Tickets } from "./components/Tickets";
import { Dontaties } from "./components/Dontaties";
import { Overons } from "./components/Overons";
import { Contact } from"./components/Contact";
import { MijnLaak } from"./components/MijnLaak";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/Agenda',
    element: <Agenda />
  },
  {
    path: '/Tickets',
    element: <Tickets />
  },
  {
    path: '/Huren',
    element: <Huren />
  },
  {
    path: '/Dontaties',
    element: <Dontaties />
  },
  {
    path: '/Overons',
    element: <Overons />
  },
  {
    path: '/Contact',
    element: <Contact />
  },{
    path: '/MijnLaak',
    element: <MijnLaak />
  },
];

export default AppRoutes;
