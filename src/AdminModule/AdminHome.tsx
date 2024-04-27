
import { useTranslation } from "react-i18next";
import Header from "../SharedModules/Components/Header/Header";

export default function AdminHome() {
  const { t, i18n } = useTranslation();
  return ( 
    <>
      <Header />

      <div dir={i18n.language == "ar" ? "rtl" : "ltr"}  className="home-container mx-2 p-4 rounded-lg grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 align-items-center ">

          <div className="lg:col-span-2 ">
            <h4 className="text-2xl font-medium text-main">
            {t("Fill your destinations")} !
            </h4>
            <p>
              {t("you can now fill your monuments easily using the table and form")},
              <br /> 
              {t("click here and sill it with the table")}!
            </p>
          </div>
          <div></div>
          <div className="text-end">
            <button
              type="button"
              className="text-white bg-main hover:bg-blue-950 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center duration-500"
            >
              {t("Fill Destinations")}
             
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        
      </div>
    </>
  );
}
