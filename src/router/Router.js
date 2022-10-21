import { createBrowserRouter } from "react-router-dom";
import Booking from "../components/Booking/Booking";
import BookingInfo from "../components/BookingInfo/BookingInfo";
import Main from "../layout/Main";
import { bookingLoader } from "../loader/Loader";
import Pricing from "../Shared/Pricing/Pricing";
import SignIn from "../Shared/SignIn/SignIn";
import SignUp from "../Shared/SignUp/SignUp";
import PrivateRouter from "./PrivateRouter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        loader: bookingLoader,
        element: <Booking></Booking>,
      },
      {
        path: "/home",
        loader: bookingLoader,
        element: <Booking></Booking>,
      },
      {
        path: "/bookinginfo/:id",
        element: (
          <PrivateRouter>
            <BookingInfo></BookingInfo>
          </PrivateRouter>
        ),
      },
      {
        path: "/login",
        element: <SignIn></SignIn>,
      },
      {
        path: "/pricing",
        element: <Pricing></Pricing>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
