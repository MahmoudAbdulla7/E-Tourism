import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SideBar from "../../SharedModules/Components/SideBar/SideBar";
import Navbar from "../../SharedModules/Components/Navbar/Navbar";

export default function MasterLayout() {
  const { t, i18n } = useTranslation();

  return (
    <>
    <div dir={i18n.language == "ar" ? "rtl" : "ltr"}>
        <div className="flex">
          <div className="side-bg side">
          <SideBar />
          </div>
          <div className="[w-100]">
            <div className="ml-3">
            <Navbar/>
            <Outlet />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
