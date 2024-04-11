import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayouts from "../layouts/MainLayouts";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Contact from "../pages/Contact/Contact";
import Profile from "../pages/Profile/Profile";
import Login from "../pages/User/Login/Login";
import Register from "../pages/User/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "services",
        element: <Services></Services>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "profile",
        element: <Profile></Profile>,
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
