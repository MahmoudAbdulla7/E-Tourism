import { useState } from "react";
import { useTranslation } from "react-i18next";
import { GiLouvrePyramid } from "react-icons/gi";
import { HiMiniUsers } from "react-icons/hi2";
import { IoIosLogOut, IoMdHome } from "react-icons/io";
import { LiaCitySolid } from "react-icons/lia";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import ammon from "../../../assets/Amoon.png";
import { logOut } from "../../../Redux/AuthSlice/AuthSlice";
import { useDispatch } from "react-redux";

export default function SideBar() {
  const { t, i18n } = useTranslation();
  let [isCollapsed, setIsCollapsed] = useState(true);

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
              component={<Link to="/dashboard" />}
            >
              {" "}
              {t("Home")}{" "}
            </MenuItem>

            <MenuItem
              icon={<HiMiniUsers className="text-2xl" />}
              component={<Link to="/dashboard/users" />}
            >
              {" "}
              {t("Users")}{" "}
            </MenuItem>

            <MenuItem
              icon={<GiLouvrePyramid className="text-2xl" />}
              component={<Link to="/dashboard/adminmonuments" />}
            >
              {t("Monuments")}{" "}
            </MenuItem>

            <MenuItem
              icon={<LiaCitySolid className="text-2xl" />}
              component={<Link to="/dashboard/cities" />}
            >
              {" "}
              {t("Cities")}{" "}
            </MenuItem>

            {/* <MenuItem icon={<FaKey className='fs-4' />} onClick={handleShow}>Change Password</MenuItem> */}
            
            <MenuItem
              onClick={() => {
                dispatch(logOut());
              }}
              icon={<IoIosLogOut className="fs-4" />}
            >
              Logout
            </MenuItem>
          </Menu>
        </Sidebar>
      </div>
    </>
  );
}
