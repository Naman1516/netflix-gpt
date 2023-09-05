import React from "react";

import { AppRouter } from "../utils/routes";

import { RouterProvider } from "react-router-dom";

const Body = () => {
  return (
    <div>
      <RouterProvider router={AppRouter} />
    </div>
  );
};

export default Body;
