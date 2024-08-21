import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./defaultLayout/defaultLayout";
import Home from "../components/home";
import Signup from "../components/form/signup";
import Login from "../components/form/login";

const router = createBrowserRouter([
  {
    path: "/signup",
    element: <Signup/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        category: "cOLLECTIONS",
        path: "/Collections",
        element: <h1>New & Featured</h1>,
      },
      {
        category: "MEN",
        path: "/Men",
        element: <h1>Men</h1>,
      },
      {
        category: "WOMEN",
        path: "/Women",
        element: <h1>Women</h1>,
      },
      {
        category: "KIDS",
        path: "/Kids",
        element: <h1>Kids</h1>,
      },
      {
        category: "SALE",
        path: "/Sale",
        element: <h1>Sale</h1>,
      },
    ],
  },
]);

export default router;
