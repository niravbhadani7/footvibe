import React, { useState } from "react";
import { RouterProvider } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import router from "./routes";

function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
