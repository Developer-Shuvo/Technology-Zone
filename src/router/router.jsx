import { createBrowserRouter } from "react-router";
import Main from "../Layout/Main";
import ErrorPage from "../Layout/ErrorPage";
import Home from "../Pages/Home";
import Offers from "../Pages/2ndLayerPage/Offers";
import PcBuilder from "../Pages/2ndLayerPage/PcBuilder";
import ServiceCenter from "../Pages/2ndLayerPage/ServiceCenter";
import Blog from "../Pages/2ndLayerPage/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/offers",
        element: <Offers />,
      },

      {
        path: "/pcBuilder",
        element: <PcBuilder />,
      },
      {
        path: "/serviceCenter",
        element: <ServiceCenter />,
      },

      {
        path : "/blog",
        element: <Blog/>,
      },
    ],
  },
]);

export default router;
