import LinkLayout from "./layouts/Layouts";
import AboutHW from "./pages/AboutHW17";
import ErrorPage from "./pages/ErrorPage";
import FactsHW from "./pages/FactsHW17";
import HomePage from "./pages/HomePage";
import MainPageHW from "./pages/MainPageHW17";
const router = [
  {
    element: <LinkLayout />,
    path: "/",
    children: [
      {
        element: <MainPageHW />,
        path: "main",
      },
      {
        element: <AboutHW />,
        path: "about",
      },
      {
        element: <FactsHW />,
        path: "facts/:id",
      },
      {
        element: <HomePage />,
        index: true,
      },
    ],
  },

  {
    element: <ErrorPage />,
    path: "*",
  },
];

export default router;
