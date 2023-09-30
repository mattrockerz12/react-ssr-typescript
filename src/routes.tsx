import type { RouteObject } from "react-router";
import PageTwo from "./pages/PageTwo";
import PageOne from "./pages/PageOne";

const routes: RouteObject[] = [
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <PageOne />,
      },
      {
        path: "/two",
        element: <PageTwo />,
      },
    ],
  },
];

export default routes;
