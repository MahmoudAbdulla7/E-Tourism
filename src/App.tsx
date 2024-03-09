import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import ChangePassword from "./AuthModule/Components/ChangePassword/ChangePassword";
import Login from "./AuthModule/Components/Login/Login";
import Register from "./AuthModule/Components/Register/Register";
import ResetPassword from "./AuthModule/Components/ResetPassword/ResetPassword";
import SendResetPasswordCode from "./AuthModule/Components/SendResetPasswordCode/SendResetPasswordCode";
import AllMonuments from "./HomeModule/Components/AllMonuments/AllMonuments";
import AllMuseums from "./HomeModule/Components/AllMuseums/AllMuseums";
import Map from "./HomeModule/Components/Map/Map";
import Home from "./HomeModule/Home";
import AuthLayout from "./Layouts/AuthLayout/AuthLayout";
import NotFound from "./SharedModules/Components/NotFound/NotFound";
import SpecificMuseum from "./SpecificMuseumModule/SpecificMuseum";
import VisitorLayout from "./Layouts/VisitorLayout/VisitorLayout";

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
        { path: "/map", element: <Map /> },
        { path: "/monuments", element: <AllMonuments /> },
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
