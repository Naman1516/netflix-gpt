import { createBrowserRouter } from "react-router-dom";

import Login from "../components/Login";
import Browse from "../components/Browse";
import GptSection from "../components/GptSection";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
  {
    path: "/suggest",
    element: <GptSection />,
  },
]);
