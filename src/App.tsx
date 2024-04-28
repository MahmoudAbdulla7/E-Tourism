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
import Booking from "./HomeModule/Components/Booking/Booking";
import PersonalDetails from "./HomeModule/Components/Booking/PersonalDetails/PersonalDetails";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { login } from "./Redux/AuthSlice/AuthSlice";
import MasterLayout from "./Layouts/MasterLayout/MasterLayout";
import AdminHome from "./AdminModule/AdminHome";
import Users from "./AdminModule/Components/Users/Users";
import AdminMonuments from "./AdminModule/Components/AdminMonuments/AdminMonuments";
import Cities from "./AdminModule/Components/Cities/Cities";
import AdminProtectedRoute from "./ProtectedRoutes/AdminProtectedRoute";
import { getAllCities } from "./Utls/getCities";
import { setCities } from "./Redux/CitySlice/CitySlice";

function App() {

  const dispatch =useDispatch();
  
  
  // const {headers}=useSelector((state:any)=>state.authReducer);
  const {cities}=useSelector((state:any)=>state.CitiesReducer);

  useEffect(() => {
    getAllCities((res)=>{return dispatch(setCities(res))})
    dispatch(login());
    // console.log(cities);
    
  }, []);

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
        { path: "/booking", element: <Booking/> },
        { path: "/booking/personal-details", element: <PersonalDetails/> },
      ],
    },
    {
      path: "/dashboard",
      element: <AdminProtectedRoute><MasterLayout/></AdminProtectedRoute>,
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
