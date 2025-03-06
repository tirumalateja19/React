import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About.js";
import Contact from "./components/Contact";
import Restaurent_menu from "./components/RestMenu.js";
import Error from "./components/Error.js";
import UserClass from "./components/UserClass.js";
import UserContext from "./components/UserContext.js";

const Grocery = lazy(() => import("./components/Grocery.js"));

const Container = () => {
  const [userName, setuserName] = useState();
  useEffect(() => {
    // here we can make an api call / auth and fetch user data
    // this is some mock data
    const data = {
      name: "Teja",
    };
    setuserName(data.name);
  }, []);
  return (
    <UserContext.Provider value={{ loggedInUser: userName, setuserName }}>
      {/* to change the username from UI we are passing setuserName from context aloows access from other components */}
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/user", element: <UserClass /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      { path: "/restaurents/:resId", element: <Restaurent_menu /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
