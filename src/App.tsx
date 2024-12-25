import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
//pages
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import News from "./pages/News";
import NewsDetails from "./pages/NewsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "news/:newsId",
        element: <NewsDetails />,
      },
      {
        path: "*",
        element: <ErrorPage/>
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
