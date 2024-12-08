import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import ProtectedRoute from "../pages/protectedRoute/ui/protectedRoute";
import Layout from "../pages/protectedRoute/ui/layout";
import Home from "../pages/home/ui/home";
import CreateFoodWithCamera from "../pages/createfood/ui/createfoodwithcamera";
import CreateFoodDetail from "../pages/createfood/ui/createfooddetail";
import RefriList from "../pages/refri-list/ui/refriList";
import RefriDetail from "../pages/refri-list/ui/refridetail";
import Signin from "../pages/signin/ui/signin";
import Signup from "../pages/signup/ui/signup";

const queryClient = new QueryClient();

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      { path: "", element: <Home /> },
      {
        path: "create-with-camera",
        element: <CreateFoodWithCamera />,
      },
      { path: "create-detail", element: <CreateFoodDetail /> },
      { path: "refri-list", element: <RefriList /> },
      { path: "refri-list/:refriId", element: <RefriDetail id={"0"} /> },
    ],
  },
  {
    path: "/login",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default function AppProvider() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routes} />
    </QueryClientProvider>
  );
}
