import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./defaultLayout/defaultLayout";
import Home from "../components/home";
import Signup from "../components/form/signup";
import Login from "../components/form/login";
import Category from "./category/category";
import DelaySuspense from "../common/loader/delaySuspense/delaySuspense";

const router = createBrowserRouter([
  {
    path: "/signup",
    element: (
      <DelaySuspense>
        <Signup />
      </DelaySuspense>
    ),
  },
  {
    path: "/login",
    element: (
      <DelaySuspense>
        <Login />,
      </DelaySuspense>
    ),
  },
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: (
          <DelaySuspense>
            <Home />,
          </DelaySuspense>
        ),
      },
      {
        path: "/:category",
        element: <Category />,
      },
    ],
  },
]);

export default router;
