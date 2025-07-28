// import { Children } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Main from "./pages/Main";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Contacts from "./pages/Contacts";

function App() {
  const router = createBrowserRouter([
    {
      element: <Header />,
      path: "/",
      children: [
        {
          element: (
            <>
              <Hero />
              <Main />
            </>
          ),
          path: "/",
        },
        {
          element: <AboutUs />,
          path: "/aboutUs",
        },
        {
          element: <Services />,
          path: "/services",
        },
        { element: <Contacts />, path: "/contacts" },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
