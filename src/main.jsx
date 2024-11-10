import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./MainLayout/Layout";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path:'/signIn',
        element: <SignIn />
      },
      {
        path:'/signUp',
        element: <SignUp />
      }
    ]
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />{" "}
  </StrictMode>
);
