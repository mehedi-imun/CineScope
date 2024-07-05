import MainLayout from "@/components/Layouts/MainLayouts";
import Home from "@/pages/Home/Home";
import MovieDetails from "@/pages/Movies/MovieDetails";
import Movies from "@/pages/Movies/Movies";
import NotFound from "@/pages/shared/NotFound";
import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/movie/:id",
        element: <MovieDetails />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
