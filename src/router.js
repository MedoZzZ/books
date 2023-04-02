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
import ProductChapterList from "./pages/product/productChaptersList";
import AdminView from "./pages/admin/adminView";
import UpdateBook from "./pages/admin/updateBook";
import AddBook from "./pages/admin/addBook";
import ShowRequests from "./pages/admin/showRequests";
import ShowHistory from "./pages/admin/showHistory";

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
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/showRequests",
        element: <ShowRequests />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/showHistory",
        element: <ShowHistory />,
      },
      {
        path: "/showChapters",
        element: <ProductChapterList />,
      },
      {
        path: "/adminView",
        element: <AdminView />,
      },
      {
        path: "/addBook",
        element: <AddBook />,
      },
      {
        path: "/updateBook",
        element: <UpdateBook />,
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
