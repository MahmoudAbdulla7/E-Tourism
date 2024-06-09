import { useTranslation } from "react-i18next";
export default function Welcome() {
  const { t, i18n } = useTranslation();
  return (
    <div className="">
      <div className="mx-auto h-[81vh]  max-w-7xl pl-1 sm:px-6 lg:px-8 my-14 flex flex-col justify-between">
        <div>
          <h2 className="text-8xl font-bold text-yellow-400">
            {t("Explore")}
             <br/>
             {t("Egypt")}
          </h2>
          <p className="text-4xl font-semibold text-main my-8 mx-3">{t("Unlock the secrets of the Pharaohs")}</p>
        </div>
      </div>
    </div>
  );
}
