import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "@/pages/Login";
import Dashboard from "@/pages/auth-pages/Dashboard";
import ProjectHistory from "@/pages/auth-pages/ProjectHistory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/project-history",
    element: <ProjectHistory />,
  },
  {
    path: "/users",
    element: <Dashboard />, // Placeholder for now
  },
  {
    path: "/settings",
    element: <Dashboard />, // Placeholder for now
  },
  {
    path: "/profile",
    element: <Dashboard />, // Placeholder for now
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
