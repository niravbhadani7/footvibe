import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cart from "./cart";

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
      <Cart/>
    </div>
  );
}

export default App;
