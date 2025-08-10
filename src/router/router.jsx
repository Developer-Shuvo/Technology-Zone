import { createBrowserRouter } from "react-router";
import Main from "../Layout/Main";
import ErrorPage from "../Layout/ErrorPage";
import Home from "../Pages/Home";
import Offers from "../Pages/2ndLayerPage/Offers";
import PcBuilder from "../Pages/2ndLayerPage/PcBuilder";
import ServiceCenter from "../Pages/2ndLayerPage/ServiceCenter";
import Blog from "../Pages/2ndLayerPage/Blog";
import Stores from "../Pages/2ndLayerPage/Stores";
import Corporate from "../Pages/2ndLayerPage/Corporate";
import AboutUs from "../Pages/2ndLayerPage/About Us";
import Banner from "../Pages/Banner";
import SignUp from "../Pages/LogIn/SignUp";
import SmartPhone from "../Pages/2ndLayerPage/Phone/SmartPhone";



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
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/banner",
        element: <Banner />,
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
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/stores",
        element: <Stores />,
      },
      { path: "/corporate", element: <Corporate /> },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },

      // 2nd Navbar pages ...
      {
        path : "/smartPhone",
        element: <SmartPhone/>,
      },
    ],
  },
]);

export default router;
