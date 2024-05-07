import { useState } from "react";
import { useTranslation } from "react-i18next";
import { GiLouvrePyramid, GiTicket } from "react-icons/gi";
import { IoIosLogOut, IoMdHome } from "react-icons/io";
import { LiaCitySolid } from "react-icons/lia";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../../../Redux/AuthSlice/AuthSlice";
import ammon from "../../../assets/Amoon.png";

export default function SideBar() {
  const { t, i18n } = useTranslation();
  let [isCollapsed, setIsCollapsed] = useState(true);
  const { data } = useSelector((state: any) => state.authReducer);

  let handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };
  const dispatch = useDispatch();
  return (
    <>
      <div
        dir={i18n.language == "ar" ? "rtl" : "ltr"}
        className="sidebar-container sticky top-0 vh-100"
      >
        <Sidebar collapsed={isCollapsed}>
          <Menu>
            <div onClick={handleToggle}>
              <img className="w-auto" src={ammon} alt="logo" />
            </div>

            <MenuItem
              icon={<IoMdHome className="text-2xl" />}
              component={<Link to={data.role=="Admin"?"/dashboard":data.role=="User"?"/home":"/"} />}
            >
              {t("Home")}
            </MenuItem>

            {data?.role=="Admin"?            <MenuItem
              icon={<GiLouvrePyramid className="text-2xl" />}
              component={<Link to="/dashboard/adminmonuments" />}
            >
              {t("Monuments")}{" "}
            </MenuItem>:""}

            {data?.role=="Admin"?
            <MenuItem
              icon={<LiaCitySolid className="text-2xl" />}
              component={<Link to="/dashboard/cities" />}
            >
              {t("Cities")}
            </MenuItem>:""}

            {data?.role=="User"?
            <MenuItem
              icon={<GiTicket className="text-2xl" />}
              component={<Link to="/home/booking" />}
            >
              {t("Booking")}
            </MenuItem>:""}

            {/* <MenuItem icon={<FaKey className='fs-4' />} onClick={handleShow}>Change Password</MenuItem> */}
            
            <MenuItem
              onClick={() => {
                dispatch(logOut());
              }}
              icon={<IoIosLogOut className="fs-4" />}
            >
              {t("Logout")}
            </MenuItem>
          </Menu>
        </Sidebar>
      </div>
    </>
  );
}
