import { Dropdown } from "flowbite-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState<string>("En");
  const { data } = useSelector((state: any) => state.authReducer);

  document.addEventListener("scroll", () => {
    const nav = document.getElementById("navbar");
    if (window.scrollY > 100) {
      nav?.classList.add("bg-zinc-100");
      nav?.classList.remove("bg-transparent");
    } else {
      nav?.classList.remove("bg-zinc-100");
      nav?.classList.add("bg-transparent");
    }
  });

  return (
    <div
      id="navbar"
      dir={i18n.language == "ar" ? "rtl" : "ltr"}
      className="shadow-md bg-transparent sticky top-0 z-10 bg-opacity-70"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div>
            <div className="">
              <div className="flex space-x-4">
                <div className="website-name">
                  <Link to="/">
                    <h1 className="text-main flex items-center font-semibold text-lg">
                      <svg
                        width="36"
                        height="45"
                        viewBox="0 0 46 57"
                        fill="none"
                        className="mx-2"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_d_212_12474)">
                          <path
                            d="M18.7604 1.55382L19.8151 6.53655C20.4901 6.26114 21.1967 6.05833 21.935 5.95577L21.9983 0.80249C20.8276 0.970732 19.6885 1.23808 18.7604 1.55382ZM23.9706 0.803643L23.9073 5.93503C24.6667 6.02491 25.3944 6.22196 26.0799 6.49507L27.1452 1.52616C25.9745 1.14474 25.0358 0.925791 23.9706 0.803643ZM29.012 2.25444L27.9362 7.31784C28.3053 7.42962 28.6639 7.56329 29.012 7.7154L32.5241 4.15005C31.3745 3.40679 30.1827 2.76954 29.012 2.25444ZM16.8936 2.29247C15.7229 2.81333 14.5311 3.45634 13.392 4.20306L16.8936 7.75573C17.2417 7.59786 17.6003 7.46188 17.9694 7.34665L16.8936 2.29247ZM34.2221 5.36347L30.8049 8.83548C30.9631 8.98413 31.1108 9.14431 31.2585 9.31601L35.6776 9.27913C35.319 8.16366 34.5491 5.89585 34.2221 5.36347ZM11.7045 5.42224C11.1983 6.77163 10.692 8.21552 10.3124 9.30909L14.721 9.35173C14.8475 9.19386 14.9846 9.04521 15.1323 8.90577L11.7045 5.42224ZM15.9022 11.3096C15.8178 11.5746 15.7862 11.8742 15.8917 12.2891C17.8323 9.59257 19.8889 10.0881 22.3885 11.1713L21.6503 13.1764C20.5745 12.7039 19.5831 12.4158 18.9186 12.4619C18.2542 12.5195 17.8534 12.7269 17.3893 13.741L16.1975 13.1072C16.4928 14.0637 15.5225 14.8933 14.742 14.3633C14.394 14.1328 14.1831 14.1674 14.1725 14.1674C14.4573 15.6424 14.6788 17.3709 15.1745 18.5463C15.3432 17.9125 15.5331 17.417 16.0604 17.3248C16.5561 17.2441 17.0202 17.6014 17.1467 18.1314C17.4737 19.5488 18.0221 21.2658 18.7077 22.5103C19.0452 23.1326 19.4249 23.6281 19.7624 23.9162C20.2159 24.4232 20.8487 24.1121 21.3128 24.4693C21.7135 24.8266 21.819 25.3797 21.8612 25.8521C21.9139 26.3246 21.9456 26.9238 21.9772 27.6613C22.1038 31.4295 22.051 34.9441 22.2198 38.6201C22.2409 39.6342 22.3253 41.3166 23.0003 41.7775C23.7596 41.0861 23.728 39.5996 23.7807 38.6201C23.9495 34.8404 23.8756 31.3719 24.0338 27.6613C24.0549 26.9238 24.0866 26.3246 24.1393 25.8521C24.1815 25.3336 24.3292 24.7574 24.6983 24.4693C25.2362 24.1812 25.8374 24.2504 26.2381 23.9162C26.5756 23.6281 26.9553 23.1326 27.2928 22.5103C27.9784 21.2658 28.5268 19.5488 28.8538 18.1314C28.9803 17.6014 29.4549 17.1865 29.9401 17.3248C30.71 17.5437 30.6678 18.0162 30.826 18.5463C31.3956 17.0021 31.6487 15.5502 31.828 14.1674C31.8174 14.1674 31.617 14.1328 31.2585 14.3633C30.478 14.8818 29.5288 14.0752 29.803 13.1187L28.6323 13.741C28.1682 12.7269 27.7674 12.5195 27.103 12.4619C26.4385 12.4158 25.4577 12.7039 24.3713 13.1764L23.6331 11.1828C26.1116 10.1457 28.4952 9.62714 30.1299 12.266C30.246 11.782 30.1827 11.4594 30.035 11.1482C27.5987 8.10604 17.2206 8.1556 15.9022 11.3096ZM31.828 14.1674H31.8385C31.828 14.1559 31.828 14.1674 31.828 14.1674ZM8.86744 13.5105L12.3479 13.499C12.6538 12.6809 13.1495 12.1623 13.8878 12.0355C13.8772 11.8512 13.8667 11.6668 13.8772 11.4939L9.58463 11.4478C9.3526 12.1853 9.05728 12.9344 8.86744 13.5105ZM36.4264 11.4248L32.1128 11.4594C32.1233 11.6437 32.1338 11.8396 32.1233 12.0355C32.851 12.1623 33.4206 12.8076 33.642 13.4644L37.1225 13.476C36.8905 12.7846 36.6585 12.1047 36.4264 11.4248ZM19.5409 13.4184C20.5956 13.3838 21.5342 14.3517 21.587 15.193C20.4479 15.8498 18.6338 15.4234 17.9588 15.1469L16.978 15.2275L17.885 14.4324C18.3913 13.7064 18.9819 13.4299 19.5409 13.4184ZM26.3963 13.4184C26.9553 13.4299 27.5354 13.7064 28.0522 14.4324L28.9592 15.2275L27.9784 15.1469C27.3034 15.4234 25.4893 15.8498 24.3503 15.193C24.403 14.3517 25.3417 13.3838 26.3963 13.4184ZM33.5999 15.6193C33.5049 16.2531 33.3995 16.8984 33.2413 17.5668L38.3987 17.5783C38.2194 16.9215 38.019 16.2762 37.8186 15.6308L33.5999 15.6193ZM12.4112 15.6539L8.17134 15.6654C7.97095 16.3107 7.77056 16.956 7.59127 17.6129L12.7698 17.6014C12.6116 16.9445 12.5061 16.2877 12.4112 15.6539ZM23.0003 17.8318C23.4432 18.2467 23.9706 18.2351 24.4874 18.2697C24.1077 18.8459 23.6647 19.3183 23.0003 19.4912C22.3358 19.3183 21.8928 18.8459 21.5131 18.2697C22.0299 18.2351 22.5573 18.2467 23.0003 17.8318ZM32.4924 19.7217C32.0389 20.8394 30.9948 21.7152 30.0667 21.116C29.9823 21.358 29.9401 21.6115 29.8874 21.865L39.4956 21.7959C39.3374 21.1045 39.1686 20.4131 38.9893 19.7332L32.4924 19.7217ZM13.5186 19.7562L7.00064 19.7678C6.82135 20.4476 6.6526 21.1391 6.49967 21.8305L16.1237 21.9111C16.092 21.6346 16.0077 21.358 15.9338 21.116C14.837 21.8305 13.8983 20.5283 13.5186 19.7562ZM23.0003 20.7473C23.3061 20.2517 24.2975 20.4937 24.403 20.6666C24.7299 21.2197 25.078 21.3695 25.3417 21.5424C24.4768 23.2709 23.8229 22.9943 23.0003 23.1096C22.1776 22.9943 21.5237 23.2709 20.6588 21.5424C20.9225 21.3695 21.2706 21.2197 21.6081 20.6666C21.9878 20.3094 22.6628 20.3785 23.0003 20.7473ZM39.9385 23.9508L29.4549 24.0314L29.0542 26.048H40.3077C40.1917 25.3336 40.0756 24.6422 39.9385 23.9508ZM6.05353 23.9853C5.92275 24.6652 5.80146 25.3682 5.69177 26.0826H16.9569L16.5561 24.066L6.05353 23.9853ZM17.2417 28.1914C14.0038 28.2836 10.5444 28.2375 7.23267 28.2375C7.9815 29.0557 8.92017 29.8508 9.78502 30.0582C13.2338 30.1158 14.8792 30.1849 17.3999 30.1849C17.3471 29.5281 17.3049 28.8598 17.2417 28.1914ZM28.7588 28.2029C28.7061 28.8598 28.6534 29.5051 28.6112 30.1504C31.3639 30.0812 32.4713 30.1734 36.2155 30.0582C37.3335 29.6894 38.1456 29.0211 38.7995 28.2029H28.7588ZM20.0155 28.2144C19.7518 28.2605 19.4881 28.3066 19.235 28.3642C19.7307 34.0914 19.8045 39.1848 19.5092 43.748C20.5956 44.0361 21.7557 44.1859 22.9686 44.1859C24.2026 44.1859 25.3838 44.0246 26.4913 43.725C26.196 39.1732 26.2803 34.0914 26.7655 28.3758C26.5124 28.3182 26.2487 28.2721 25.985 28.226C25.869 31.8213 25.9534 35.2437 25.7424 38.7353C25.6686 39.9453 25.7003 41.5125 25.2256 42.3767C24.6245 43.1258 23.8967 43.7596 23.0003 43.725C22.1143 43.6904 21.1862 43.1027 20.7749 42.3767C20.2792 41.2244 20.3108 39.8877 20.2581 38.7353C20.0999 35.0824 20.121 31.7521 20.0155 28.2144ZM6.47119 30.4385C6.39525 30.5998 6.3267 30.7496 6.26658 30.8994C0.97943 44.5086 8.20299 54.1998 23.0003 54.1998C37.7975 54.1998 45.0221 44.5086 39.7381 30.8994C39.6749 30.7496 39.601 30.5998 39.5272 30.45C38.9155 31.0492 38.1878 31.6254 37.2807 31.9596C37.2069 32.3514 37.1436 32.7432 37.0803 33.1349C38.0823 34.8519 38.6518 36.7764 38.6518 38.8275C38.6518 42.5266 36.8061 45.8338 33.9479 48.15C31.1003 50.4662 27.219 51.8605 22.9686 51.8605C18.7077 51.8605 14.8264 50.4662 11.9788 48.15C9.12056 45.8338 7.27486 42.5266 7.27486 38.8275C7.27486 36.7418 7.86549 34.7713 8.89908 33.0428C8.84635 32.6855 8.79361 32.3168 8.73033 31.9596C7.81275 31.6254 7.08502 31.0492 6.47119 30.4385ZM28.4635 32.3053C28.4319 32.9851 28.4003 33.6535 28.3686 34.3219L34.8866 34.3449C34.9921 33.6766 35.087 32.9967 35.203 32.3168L28.4635 32.3053ZM17.537 32.3398L10.8081 32.3514C10.9135 33.0428 11.019 33.7111 11.1245 34.3795L17.6319 34.3564C17.6108 33.6881 17.5792 33.0197 17.537 32.3398ZM28.3159 36.4767C28.2948 37.1797 28.2948 37.8596 28.2948 38.5394H34.2432C34.3592 37.8711 34.4647 37.1797 34.5702 36.4998L28.3159 36.4767ZM17.6952 36.5113L11.4409 36.5344C11.5358 37.2258 11.6518 37.9057 11.7573 38.574H17.7057C17.7057 37.8941 17.7057 37.2142 17.6952 36.5113ZM9.46861 36.8685C9.32095 37.5023 9.24713 38.1592 9.24713 38.8275C9.24713 40.7865 9.89049 42.6303 11.0612 44.232C10.2596 41.8121 9.83775 39.3576 9.46861 36.8685ZM36.5003 37.076C36.1522 39.4267 35.7409 41.7545 35.0026 44.0476C36.0784 42.4805 36.6796 40.7058 36.6796 38.8275C36.6796 38.2398 36.6163 37.6521 36.5003 37.076ZM28.337 40.6943C28.3475 41.3973 28.3792 42.0771 28.4108 42.7455H33.3151C33.5049 42.0771 33.6737 41.3857 33.8319 40.6943H28.337ZM12.1792 40.7289C12.3268 41.4203 12.5061 42.1117 12.696 42.7916H17.5792C17.6213 42.1117 17.653 41.4318 17.6635 40.7289H12.1792ZM28.5585 44.9004C28.6112 45.4881 28.6639 46.0642 28.7272 46.6289C29.6659 47.2281 30.3514 47.159 30.9737 46.8248C31.6276 46.3523 32.3131 45.684 32.5663 44.9004H28.5585ZM13.4448 44.9349C13.7612 45.6609 14.4784 46.5137 15.0268 46.8248C15.6491 47.159 16.3346 47.2281 17.2733 46.6289C17.3366 46.0758 17.3893 45.5111 17.442 44.9349H13.4448ZM26.66 45.9029C25.4893 46.191 24.2448 46.3408 22.9686 46.3408C21.703 46.3408 20.4901 46.191 19.3405 45.9144C19.2667 46.6289 19.2034 47.1935 19.1295 47.8849C18.6549 48.2537 18.1065 48.634 17.6213 48.8414C19.2561 49.406 21.0596 49.7057 22.9686 49.7057C24.8776 49.7057 26.7022 49.3945 28.3475 48.8299C27.7463 48.5533 27.3772 48.2652 26.871 47.8849C26.7971 47.2166 26.7233 46.4906 26.66 45.9029Z"
                            fill="#131550"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_d_212_12474"
                            x="0.541016"
                            y="0.80249"
                            width="44.9199"
                            height="61.3973"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_212_12474"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_212_12474"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>
                      {t("Egypt Here")}
                    </h1>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="flex  items-center justify-evenly">
            <div className="flex justify-between items-center">
              {data?.role=="User"? (
                <Link to={`/home/profile`} className="text-main text-sm sm:text-xs md:text-lg font-medium">
                  {t("Welcome")}
                  <span className="text-main">{`, ${data?.firstName} ${data?.lastName}`}</span>
                </Link>
              ) :
              data?.role=="Admin"?
              <Link to={`/dashboard/profile`} className="text-main text-sm sm:text-xs md:text-lg font-medium">
              {t("Welcome")}
              <span className="text-main">{`, ${data?.firstName} ${data?.lastName}`}</span>
            </Link>
              :
              data?.role=="Inspector"?
              <Link to={`/inspector/profile`} className="text-main text-sm sm:text-xs md:text-lg font-medium">
              {t("Welcome")}
              <span className="text-main">{`, ${data?.firstName} ${data?.lastName}`}</span>
            </Link>:
              (
                <>
                  <div className="mx-1">
                    <Link to={"/auth/login"}>
                      <button className="border-b-2 text-main hover:border-main focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center duration-500">
                      {t("Login")}
                      </button>
                    </Link>
                  </div>
                  <div>
                    <Link to={"/auth/register"}>
                      <button className="border-b-2 text-main hover:border-main focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center duration-500">
                      {t("Register")}
                      </button>
                    </Link>
                  </div>
                </>
              )}
            </div>

            <div className="ms-6">
              <Dropdown label={language} inline>
                <Dropdown.Item
                  onClick={() => {
                    i18n.changeLanguage("ar");
                    setLanguage("Ar");
                  }}
                >
                  <span>Ar</span>
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    i18n.changeLanguage("en");
                    setLanguage("En");
                  }}
                >
                  <span>En</span>
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    i18n.changeLanguage("fr");
                    setLanguage("Fr");
                  }}
                >
                  <span>Fr</span>
                </Dropdown.Item>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
