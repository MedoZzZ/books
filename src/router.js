import React, { Children } from "react";
import { createBrowserRouter, useSearchParams } from "react-router-dom";
import ProductList from "./pages/product/productList";
import Login from "./pages/login/login";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import NotFound from './shared/notFound'
import App from "./App";
import ProductInfo from "./pages/product/components/productInfo";
import Admin from "./pages/admin/admin";
import Reader from "./pages/reader/reader";
import Account from "./shared/account";
import AdminProduct from "./pages/product/components/adminProduct";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ProductList />,
      },
      {
        path: "admin/books",
        element: <Reader />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/reader",
        element: <Reader />,
      },
      {
        path: '/account',
        element: <Account />,
      },
      {
        path: "/productInfo/:id",
        element: <ProductInfo />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
