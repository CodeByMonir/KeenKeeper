import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import RootLayout from "./layout/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/Home/HomePage";
import PersonDetails from "./components/items/PersonDetails";
import Timeline from "./pages/Timeline/Timeline";
import TimelineProvider from "./Context/TimelineProvider";
import { ToastContainer } from "react-toastify";
import Stats from "./pages/Stats/Stats";
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
        element: <Timeline />,
      },
      {
        path: "stats",
        element: <Stats />,
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
    <TimelineProvider>
    <RouterProvider router={router} />
    </TimelineProvider>
    <ToastContainer />
  </StrictMode>,
);