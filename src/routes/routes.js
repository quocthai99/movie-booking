import HeaderOnly from "../layouts/HeaderOnly";
import CarouselOnly from "../layouts/CarouselOnly";

import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Detail from "../pages/Detail";

const publicRoutes = [
  { path: "/", component: Home, layout: CarouselOnly },
  { path: "/contact", component: Contact },
  { path: "/about", component: About },
  { path: "/detail/:id", component: Detail, layout: HeaderOnly },
];

export { publicRoutes };
