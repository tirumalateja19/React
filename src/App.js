import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About.js";
import Contact from "./components/Contact";
import Restaurent_menu from "./components/RestMenu.js";
import Error from "./components/Error.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";

const Container = () => (
  <div id="container">
    <Header />
    <Outlet />
    <Footer />
  </div>
);
const Grocery = lazy(() => import("./components/Grocery.js"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurents/:resId",
        element: <Restaurent_menu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
