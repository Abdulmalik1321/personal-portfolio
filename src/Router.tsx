import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider } from "./shadcn/theme-provider";

import { Home } from "./Home";

export function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
