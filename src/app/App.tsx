import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
        element: <CreateFoodCamera />,
        children: [{ path: "/create-detail", element: <CreateDetail /> }],
      },
      { path: "refri-list", element: <RefriList /> },
      { path: "refri-list/:refriId", element: <RefriDetail /> },
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
