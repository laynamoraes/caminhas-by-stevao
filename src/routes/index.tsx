import { createBrowserRouter } from "react-router-dom"

import Home from "../pages/Home/index"
import SignIn from "../pages/SignIn"
import Register from "../pages/Register"
import Ecommerce from "../pages/Ecommerce"

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
    element: <Ecommerce />,
  },
])

export default routes
