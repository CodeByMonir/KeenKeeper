import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import RootLayout from "./layout/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/Home/HomePage";
import PersonDetails from "./components/items/PersonDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage/>
      },
      {
        path: "/timeline",
        element: <h2>TimelIne</h2>,
      },
      {
        path: "stats",
        element: <h2>Stats</h2>,
      },
      {
        path: "/friend/:name",
        element: <PersonDetails />,
        loader: ()=> fetch('/data.json')
      }
    ],
    errorElement: <ErrorPage />
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
