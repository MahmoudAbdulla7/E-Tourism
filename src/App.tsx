import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AuthLayout from "./Layouts/AuthLayout/AuthLayout";
import Login from "./AuthModule/Components/Login/Login";
import Register from "./AuthModule/Components/Register/Register";
import ChangePassword from "./AuthModule/Components/ChangePassword/ChangePassword";
import ResetPassword from "./AuthModule/Components/ResetPassword/ResetPassword";
import SendResetPasswordCode from "./AuthModule/Components/SendResetPasswordCode/SendResetPasswordCode";
import NotFound from "./SharedModules/Components/NotFound/NotFound";
import Home from "./HomeModule/Home";
import AllMuseums from "./HomeModule/Components/AllMuseums/AllMuseums";
import AllMonuments from "./HomeModule/Components/AllMonuments/AllMonuments";

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
      errorElement: <NotFound />,
      element: <Home />,
    },
    { path: "/museums", element: <AllMuseums /> },
    { path: "/monuments", element: <AllMonuments /> },
  ]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
