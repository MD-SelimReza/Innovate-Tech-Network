import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayouts from "../layouts/MainLayouts";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/User/Login/Login";
import Register from "../pages/User/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import UserProfile from "../pages/Profile/UserProfile";
import ErrorState from "../pages/ErrorState/ErrorState";
import EstateDetails from "../pages/EstateDetails/EstateDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <ErrorState />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/estate/:id",
        loader: () => fetch("/industrial.json"),
        element: (
          <PrivateRoutes>
            <EstateDetails></EstateDetails>
          </PrivateRoutes>
        ),
      },
      {
        path: "/services",
        element: (
          <PrivateRoutes>
            <Services></Services>
          </PrivateRoutes>
        ),
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <UserProfile></UserProfile>
          </PrivateRoutes>
        ),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
