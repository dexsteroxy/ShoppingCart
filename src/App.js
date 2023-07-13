import React from "react";
import Header from "./component/Header";
import Signin from "./pages/Signin";
import Footer from "./footer/Footer";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import { productData } from "./api/api";
import Register from "./pages/Register";
import Cart from "./pages/Cart";

const Layout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}></Route>
        <Route index element={<Home />} loader={productData}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Route>
    )
  );
  return (
    <div className=" font-poppins bg-gray-100">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
