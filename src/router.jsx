import { createBrowserRouter } from "react-router-dom";

import { Counter, Fetch, Focus, Home, Stopwatch, Todo, Video } from "@/app";
import { GlobalLayout } from "@/layouts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "counter",
        element: <Counter />,
      },
      {
        path: "stopwatch",
        element: <Stopwatch />,
      },
      {
        path: "focus",
        element: <Focus />,
      },
      {
        path: "video",
        element: <Video />,
      },
      {
        path: "fetch",
        element: <Fetch />,
      },
      {
        path: "todo",
        element: <Todo />,
      },
    ],
  },
]);
