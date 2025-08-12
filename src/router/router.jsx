import { createBrowserRouter } from "react-router";
import Main from "../Layout/Main";
import ErrorPage from "../Layout/ErrorPage";
import Home from "../Pages/Home";
import Offers from "../Pages/2ndLayerPage/Offers";

import ServiceCenter from "../Pages/2ndLayerPage/ServiceCenter";
import Blog from "../Pages/2ndLayerPage/Blog";
import Stores from "../Pages/2ndLayerPage/Stores";
import Corporate from "../Pages/2ndLayerPage/Corporate";
import AboutUs from "../Pages/2ndLayerPage/About Us";
import Banner from "../Pages/Banner";
import SignUp from "../Pages/LogIn/SignUp";
import SmartPhone from "../Pages/2ndLayerPage/Phone/SmartPhone";
import RegardingUs from "../Pages/FooterPage/AboutUs/RegardingUs";
import TermsConditions from "../Pages/FooterPage/AboutUs/TermsConditions";
import Career from "../Pages/FooterPage/AboutUs/Career";
import DeliveryPolicy from "../Pages/FooterPage/Policy/DeliveryPolicy";
import ReturnPolicy from "../Pages/FooterPage/Policy/ReturnPolicy";
import RefundPolicy from "../Pages/FooterPage/Policy/RefundPolicy";
import CancellationPolicy from "../Pages/FooterPage/Policy/CancellationPolicy";
import PrivacyPolicy from "../Pages/FooterPage/Policy/PrivacyPolicy";
import WarrantyPolicy from "../Pages/FooterPage/Policy/WarrantyPolicy";
import ContactUs from "../Pages/FooterPage/Help/ContactUs";
import Exchange from "../Pages/FooterPage/Help/Exchange";
import Announcement from "../Pages/FooterPage/Help/Announcement";
import PcBuilder from "../Pages/2ndLayerPage/PcBuilder/PcBuilder";
import MotherBoard from "../Pages/2ndLayerPage/PcBuilder/MotherBoard/MotherBoard";
import Processor from "../Pages/2ndLayerPage/PcBuilder/Processor/Processor";

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
      //Pc Builder All Page here
      {
        path: "/motherBoard",
        element: <MotherBoard/>,
      },
      {
        path: "/processor",
        element: <Processor/>,
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
        path: "/smartPhone",
        element: <SmartPhone />,
      },

      //Footer Pages...
      { path: "/regardingUs", element: <RegardingUs /> },
      { path: "/termsConditions", element: <TermsConditions /> },
      { path: "/career", element: <Career /> },
      { path: "/deliveryPolicy", element: <DeliveryPolicy /> },
      { path: "/returnPolicy", element: <ReturnPolicy /> },
      { path: "/refundPolicy", element: <RefundPolicy/> },
      { path: "/cancellationPolicy", element: <CancellationPolicy/> },
      { path: "/privacyPolicy", element: <PrivacyPolicy/> },
      { path: "/warrantyPolicy", element: <WarrantyPolicy/> },
      { path: "/contactUs", element: <ContactUs/> },
      { path: "/exchange", element: <Exchange/> },
      { path: "/announcement", element: <Announcement/> },
    ],
  },
]);

export default router;
