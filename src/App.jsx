import React, { useState } from "react";
import { RouterProvider } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import router from "./routes";
import { Toaster } from "react-hot-toast";

function App() {

  return (
    <div>
      <RouterProvider router={router} />
      <Toaster position="top-right"/>
    </div>
  );
}

export default App;
