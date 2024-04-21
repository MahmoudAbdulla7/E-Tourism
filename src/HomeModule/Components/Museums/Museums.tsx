import { Link } from "react-router-dom";
import amoon from "../../../assets/Amoon.png";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { useTranslation } from "react-i18next";
export default function Museums() {
  const { t, i18n } = useTranslation();
  return (
    <div className="Museums">
      <div className="h-full w-full bg-white bg-opacity-40 py-16">
        <div className="mx-auto max-w-7xl pl-1 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2">
            <div className="border-y-[4vh] w-10/12 border-t-main rounded-[28%] mx-6 border-b-gray-400 px-8 my-3">
              <div className="w-1/2 md:w-3/4  lg:w-1/2 flex items-center amoon-image">
                <img src={amoon} alt="" />
                <div>
                  <div className="flex flex-col justify-between h-[25vh]">
                    <p></p>
                    <h2 className="text-main text-5xl font-semibold">
                      {t("Museums")}
                 
                    </h2>
                    <Link
                      to="/museums"
                      onClick={ () => {
                        window.scrollTo(0, 0);
                      }}
                      className="text-lg text-main flex items-center bg-main hover:text-white group hover:border-2 hover:border-white border-2 border-main rounded-3xl duration-500"
                    >
                      <span className="mx-2 text-gray-300 group-hover:text-white group-hover:duration-500">
                        {t("Explore All Museums")}
                      </span>
                      <IoMdArrowDroprightCircle className="text-gray-300 group-hover:text-white group-hover:duration-500"/>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="museum-background rounded-lg group md:h-[100%] h-[35vh]  duration-500 m-3 ">
              <div className="museum-details flex items-center justify-center w-full h-full text-white px-3 overflow-hidden">
                <div className="text-center">
                  <h2 className="text-xl block group-hover:translate-x-[110%] py-3 group-hover:duration-500 rounded-xl bg-black bg-opacity-40 translate-y-2/3">
               {t("The Grand Egyptian Museum")}
                  </h2>
                  <p className="py-3 translate-y-96 group-hover:translate-y-[-30px] rounded-xl bg-black bg-opacity-60 text-center group-hover:duration-500">
                    {t("The Grand Egyptian Museum (GEM) is the world’s largest museum dedicated to a single civilization. Egypt, near the pyramids. It will host over 100,000 artifacts from ancient Egyptian history")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex lg:justify-around flex-col lg:flex-row sm:py-8">
            <Link
              to=""
              className="text-4xl rounded-3xl group city overflow-hidden m-3"
            >
              <div className="py-16 px-32 bg-black bg-opacity-30 text-white group-hover:bg-black  group-hover:bg-opacity-50 group-hover:duration-700">
                <h3>Cairo</h3>
              </div>
            </Link>
            <Link
              to=""
              className="text-4xl rounded-3xl group acity overflow-hidden m-3"
            >
              <div className="py-16 px-32 bg-black bg-opacity-30 text-white group-hover:bg-black  group-hover:bg-opacity-50 group-hover:duration-700">
                <h3>Loxur</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
