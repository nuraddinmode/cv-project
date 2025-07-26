import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import AboutUs from "./pages/AboutUs.jsx";

const router = createBrowserRouter([{
  path:"/",
  element: <App/>
},
{
  path:"/page/AboutUs",
  element: <AboutUs/>
}]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
