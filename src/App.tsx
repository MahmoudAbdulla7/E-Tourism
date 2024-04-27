import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AdminHome from "./AdminModule/AdminHome";
import Cities from "./AdminModule/Components/Cities/Cities";
import Users from "./AdminModule/Components/Users/Users";
import "./App.css";
import ChangePassword from "./AuthModule/Components/ChangePassword/ChangePassword";
import Login from "./AuthModule/Components/Login/Login";
import Register from "./AuthModule/Components/Register/Register";
import ResetPassword from "./AuthModule/Components/ResetPassword/ResetPassword";
import SendResetPasswordCode from "./AuthModule/Components/SendResetPasswordCode/SendResetPasswordCode";
import AllMonuments from "./HomeModule/Components/AllMonuments/AllMonuments";
import AllMuseums from "./HomeModule/Components/AllMuseums/AllMuseums";
import Booking from "./HomeModule/Components/Booking/Booking";
import PersonalDetails from "./HomeModule/Components/Booking/PersonalDetails/PersonalDetails";
import Monuments from "./HomeModule/Components/Monuments/Monuments";
import Home from "./HomeModule/Home";
import AuthLayout from "./Layouts/AuthLayout/AuthLayout";
import MasterLayout from "./Layouts/MasterLayout/MasterLayout";
import VisitorLayout from "./Layouts/VisitorLayout/VisitorLayout";
import NotFound from "./SharedModules/Components/NotFound/NotFound";
import SpecificMuseum from "./SpecificMuseumModule/SpecificMuseum";
import AdminMonuments from "./AdminModule/Components/AdminMonuments/AdminMonuments";

function App() {
  const router = createBrowserRouter([
    {
      path: "/auth",
      errorElement: <NotFound />,
      element: <AuthLayout />,
      children: [
        { index: true, element: <Login /> },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "change-password", element: <ChangePassword /> },
        { path: "reset-password", element: <ResetPassword /> },
        { path: "send-code", element: <SendResetPasswordCode /> },
      ],
    },
    {
      path: "/",
      element: <VisitorLayout />,
      children: [
        {
          index: true,
          errorElement: <NotFound />,
          element: <Home />,
        },
        { path: "/museums", element: <AllMuseums /> },
        { path: "/museums/:museumId", element: <SpecificMuseum /> },
        { path: "/monuments", element: <AllMonuments /> },
        { path: "/booking", element: <Booking/> },
        { path: "/booking/personal-details", element: <PersonalDetails/> },
      ],
    },
    {
      path: "/dashboard",
      element: <MasterLayout/>,
      children: [
        {
          index: true,
          errorElement: <NotFound />,
          element: <AdminHome/>,
        },
        { path: "users", element: <Users/> },
        { path: "adminmonuments", element: <AdminMonuments/> },
        { path: "cities", element: <Cities/> }
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
