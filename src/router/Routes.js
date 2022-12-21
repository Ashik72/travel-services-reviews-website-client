import Main from "../layout/Main";
import AddService from "../pages/AddService/AddService";
import Blog from "../pages/Blog/Blog";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import MyReviews from "../pages/MyReviews/MyReviews";
import NotFound from "../pages/NotFound/NotFound";
import ServicesDetails from "../pages/ServiceDetails/ServiceDetails";
import Services from "../pages/Services/Services";
import Signup from "../pages/Signup/Signup";
import { PrivateRouter } from "./PrivateRouter";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/myreviews",
        element: (
          <PrivateRouter>
            <MyReviews></MyReviews>
          </PrivateRouter>
        ),
      },
      {
        path: "/addservice",
        element: (
          <PrivateRouter>
            <AddService></AddService>
          </PrivateRouter>
        ),
      },
      {
        path: "/servicedetails/:id",
        element: <ServicesDetails></ServicesDetails>,
        loader: ({ params }) =>
          fetch(
            `https://b6a11-service-review-server-side-ashik72-ashik72.vercel.app/services/${params.id}`
          ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
export default router;
