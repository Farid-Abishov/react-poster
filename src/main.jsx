import React from "react";
import ReactDOM from "react-dom/client";
import Posts,{loader as postsLoader} from "./routes/Posts.jsx";
import NewPost,{action as newPostaction} from "./routes/NewPost.jsx";
import RootLayout from "./routes/RootLayout.jsx";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader:postsLoader,
        children: [
          {
            path: "/newpost",
            element: <NewPost />,
            action:newPostaction,
          },
        ],
      },
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
