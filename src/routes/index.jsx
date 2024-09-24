import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./defaultLayout/defaultLayout";
import Home from "../components/home";
import Signup from "../components/form/signup";
import Login from "../components/form/login";
import Category from "./category/category";
import DelaySuspense from "../common/loader/delaySuspense/delaySuspense";
import ProductInfo from "../components/productInformation"; // Ensure this is imported
import Cart from "../common/cart";

const router = createBrowserRouter([
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: (
          <DelaySuspense>
            <Home />
          </DelaySuspense>
        ),
      },
      {
        path: "/:category",
        element: <Category />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/product",
        element: <ProductInfo />,
      },
    ],
  },
]);

export default router;
