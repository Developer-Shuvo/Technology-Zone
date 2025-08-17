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
import Ram from "../Pages/2ndLayerPage/PcBuilder/Ram/Ram";
import HDD from "../Pages/2ndLayerPage/PcBuilder/HDD/HDD";
import SSD from "../Pages/2ndLayerPage/PcBuilder/SSD/SSD";
import CoolerFan from "../Pages/2ndLayerPage/PcBuilder/CoolerFan/CoolerFan";
import Casing from "../Pages/2ndLayerPage/PcBuilder/Casing/Casing";
import PowerSupply from "../Pages/2ndLayerPage/PcBuilder/PowerSupply/PowerSupply";
import GraphicsCard from "../Pages/2ndLayerPage/PcBuilder/GraphicsCard/GraphicsCard";
import Monitor from "../Pages/2ndLayerPage/PcBuilder/Monitor/Monitor";
import Mouse from "../Pages/2ndLayerPage/PcBuilder/Mouse/Mouse";
import Keyboard from "../Pages/2ndLayerPage/PcBuilder/Keyboard/Keyboard";
import Speaker from "../Pages/2ndLayerPage/PcBuilder/Speaker/Speaker";
import FeaturedPhone from "../Pages/2ndLayerPage/Phone/FeaturedPhone";
import Tablet from "../Pages/2ndLayerPage/Tablet/Tablet";
import AllPhone from "../Pages/2ndLayerPage/Phone/AllPhone";
import Xiaomi from "../Pages/2ndLayerPage/Tablet/Xiaomi";
import Mac from "../Pages/2ndLayerPage/Mac/Mac";
import MacPro from "../Pages/2ndLayerPage/Mac/MacPro";
import MacMini from "../Pages/2ndLayerPage/Mac/MacMini";
import IMac from "../Pages/2ndLayerPage/Mac/iMac";
import AppleTablet from "../Pages/2ndLayerPage/Tablet/IPad";
import SamsungTablet from "../Pages/2ndLayerPage/Tablet/SamsungTablet";
import SonyTablet from "../Pages/2ndLayerPage/Tablet/SonyTablet";
import Asus from "../Pages/2ndLayerPage/Laptop/Asus";
import Dell from "../Pages/2ndLayerPage/Laptop/Dell";
import Hp from "../Pages/2ndLayerPage/Laptop/Hp";
import Lenovo from "../Pages/2ndLayerPage/Laptop/Lenovo";
import Apple from "../Pages/2ndLayerPage/Laptop/Apple";
import AsusLaptop from "../Pages/2ndLayerPage/Laptop/AsusLaptop";
import Acer from "../Pages/2ndLayerPage/Laptop/Acer";
import BrandPc from "../Pages/2ndLayerPage/Desktop/BrandPc";
import GamingPc from "../Pages/2ndLayerPage/Desktop/GamingPc";
import Printer from "../Pages/2ndLayerPage/Accessories/Printer";
import Accessories from "../Pages/2ndLayerPage/Accessories/Accessories";
import Scanner from "../Pages/2ndLayerPage/Accessories/Scanner";
import PowerSuply from "../Pages/2ndLayerPage/Accessories/PowerSupply";
import Gimbal from "../Pages/2ndLayerPage/SmartGadget/Gimbal";
import SmartGadget from "../Pages/2ndLayerPage/SmartGadget/SmartGadget";
import DeviceStand from "../Pages/2ndLayerPage/SmartGadget/DeviceStand";
import ActionCamera from "../Pages/2ndLayerPage/SmartGadget/ActionCamera";
import DroneGear from "../Pages/2ndLayerPage/SmartGadget/DroneGear";
import SmartWatch from "../Pages/2ndLayerPage/SmartWatch/SmartWatch";
import AppleWatch from "../Pages/2ndLayerPage/SmartWatch/AppleWatch";
import XiaomiWatch from "../Pages/2ndLayerPage/SmartWatch/XiaomiWatch";
import OnePlusWatch from "../Pages/2ndLayerPage/SmartWatch/OnePlusWatch";
import SamsungWatch from "../Pages/2ndLayerPage/SmartWatch/SamsungWatch";
import Monitorr from "../Pages/2ndLayerPage/Monitor/Monitor";
import LgMonitor from "../Pages/2ndLayerPage/Monitor/LgMonitor";
import DellMonitor from "../Pages/2ndLayerPage/Monitor/DellMonitor";
import LenovoMonitor from "../Pages/2ndLayerPage/Monitor/LenovoMonitor";
import AppleMonitor from "../Pages/2ndLayerPage/Monitor/AppleMonitor";
import SamsungMonitor from "../Pages/2ndLayerPage/Monitor/SamsungMonitor";
import Desktop from "../Pages/2ndLayerPage/Desktop/Desktop";
import Laptop from "../Pages/2ndLayerPage/Laptop/Laptop";
import Headphone from "../Pages/2ndLayerPage/Accessories/Headphone";
import DetailsPage from "../Pages/2ndLayerPage/DetailsPage/DetailsPage";

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
        element: <MotherBoard />,
      },
      {
        path: "/processor",
        element: <Processor />,
      },
      {
        path: "/ram",
        element: <Ram />,
      },
      {
        path: "/hdd",
        element: <HDD />,
      },
      {
        path: "/ssd",
        element: <SSD />,
      },
      {
        path: "/cooler",
        element: <CoolerFan />,
      },
      {
        path: "/casing",
        element: <Casing />,
      },
      {
        path: "/powerSupply",
        element: <PowerSupply />,
      },
      {
        path: "/graphicsCard",
        element: <GraphicsCard />,
      },
      {
        path: "/monitor",
        element: <Monitor />,
      },
      {
        path: "/mouse",
        element: <Mouse />,
      },
      {
        path: "/keyboard",
        element: <Keyboard />,
      },
      {
        path: "/speaker",
        element: <Speaker />,
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
        path: "/allPhone",
        element: <AllPhone />,
      },
      {
        path: "/smartPhone",
        element: <SmartPhone />,
      },
      {
        path: "/featuredPhone",
        element: <FeaturedPhone />,
      },
      {
        path: "/tablet",
        element: <Tablet />,
      },
      {
        path: "/xiaomi",
        element: <Xiaomi />,
      },
      {
        path: "/appleTablet",
        element: <AppleTablet />,
      },
      {
        path: "/samsungTablet",
        element: <SamsungTablet />,
      },
      {
        path: "/sonyTablet",
        element: <SonyTablet />,
      },
      {
        path: "/mac",
        element: <Mac />,
      },
      {
        path: "/iMac",
        element: <IMac />,
      },
      {
        path: "/macPro",
        element: <MacPro />,
      },
      {
        path: "/macMini",
        element: <MacMini />,
      },

      // laptop
      {
        path: "/laptop",
        element: <Laptop />,
      },
      {
        path: "/asus",
        element: <Asus />,
      },
      {
        path: "/dell",
        element: <Dell />,
      },
      {
        path: "/hp",
        element: <Hp />,
      },
      {
        path: "/lenovo",
        element: <Lenovo />,
      },
      {
        path: "/apple",
        element: <Apple />,
      },
      {
        path: "/asusLaptop",
        element: <AsusLaptop />,
      },
      {
        path: "/acer",
        element: <Acer />,
      },

      // Desktop
      { path: "/desktop", element: <Desktop /> },
      {
        path: "/brandPc",
        element: <BrandPc />,
      },
      {
        path: "/gamingPc",
        element: <GamingPc />,
      },
      // Accessories
      {
        path: "/accessories",
        element: <Accessories />,
      },
      {
        path: "/headphone",
        element: <Headphone />,
      },

      {
        path: "/printer",
        element: <Printer />,
      },
      {
        path: "/scanner",
        element: <Scanner />,
      },
      {
        path: "/powerSuply",
        element: <PowerSuply />,
      },

      // Smart Gadget

      {
        path: "/smartGadget",
        element: <SmartGadget />,
      },

      {
        path: "/gimbal",
        element: <Gimbal />,
      },
      {
        path: "/deviceStand",
        element: <DeviceStand />,
      },
      {
        path: "/actionCamera",
        element: <ActionCamera />,
      },
      {
        path: "/droneGear",
        element: <DroneGear />,
      },

      //Smart Watch
      {
        path: "/smartWatch",
        element: <SmartWatch />,
      },
      {
        path: "/appleWatch",
        element: <AppleWatch />,
      },
      {
        path: "/xiaomiWatch",
        element: <XiaomiWatch />,
      },
      {
        path: "/onePlusWatch",
        element: <OnePlusWatch />,
      },
      {
        path: "/samsungWatch",
        element: <SamsungWatch />,
      },

      //Monitor
      {
        path: "/monitorr",
        element: <Monitorr />,
      },
      {
        path: "/lg",
        element: <LgMonitor />,
      },
      {
        path: "/dellMonitor",
        element: <DellMonitor />,
      },
      {
        path: "/lenovoMonitor",
        element: <LenovoMonitor />,
      },
      {
        path: "/appleMonitor",
        element: <AppleMonitor />,
      },
      {
        path: "/samsungMonitor",
        element: <SamsungMonitor />,
      },

      // Product Details Page__________***
      {
        path: "/detailsPage",
        element: <DetailsPage />,
      },

      //Footer Pages...
      { path: "/regardingUs", element: <RegardingUs /> },
      { path: "/termsConditions", element: <TermsConditions /> },
      { path: "/career", element: <Career /> },
      { path: "/deliveryPolicy", element: <DeliveryPolicy /> },
      { path: "/returnPolicy", element: <ReturnPolicy /> },
      { path: "/refundPolicy", element: <RefundPolicy /> },
      { path: "/cancellationPolicy", element: <CancellationPolicy /> },
      { path: "/privacyPolicy", element: <PrivacyPolicy /> },
      { path: "/warrantyPolicy", element: <WarrantyPolicy /> },
      { path: "/contactUs", element: <ContactUs /> },
      { path: "/exchange", element: <Exchange /> },
      { path: "/announcement", element: <Announcement /> },
    ],
  },
]);

export default router;
