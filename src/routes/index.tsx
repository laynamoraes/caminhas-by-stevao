import { createBrowserRouter } from "react-router-dom"

import Home from "../pages/Home/index"
import SignIn from "../pages/SignIn"
import Register from "../pages/Register"
import Ecommerce from "../pages/Ecommerce"
import PrivateRoute from "./PrivateRoute"
import ProductDetails from "../pages/ProductDetails"

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/ecommerce",
    element: (
      <PrivateRoute>
        <Ecommerce />
      </PrivateRoute>
    ),
  },
  {
    path: "/ecommerce/:id",
    element: (
      <PrivateRoute>
        <ProductDetails />
      </PrivateRoute>
    ),
  },
])

export default routes
