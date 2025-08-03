import { createBrowserRouter } from "react-router";
import Main from "../Layout/Main";
import ErrorPage from "../Layout/ErrorPage";
import Home from "../Pages/Home";

const router = createBrowserRouter([
  {
path: "/",
element: <Main/>,
errorElement: <ErrorPage/>,
children: [
  {
path: "/",
element: <Home/>,
  },
]
  },
]);

export default router;
