import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoClose } from "react-icons/io5";

export default function Cities() {
  const { t, i18n } = useTranslation();
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState('');

  function onCloseModal() {
    setOpenModal(false);
    setEmail('');
  }
  return (
    <>
 <div dir={i18n.language == "ar" ? "rtl" : "ltr"}  className="home-container my-5 mx-2 p-4 rounded-lg grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 align-items-center ">

<div className="lg:col-span-2 ">
  <h4 className="text-2xl font-medium text-main">
  {t("City Details")} !
  </h4>
  <p>
    {t("You can check all details")}
   
  </p>
</div>
<div></div>
<div className="text-end">
  <button
  onClick={() => setOpenModal(true)}
    type="button"
    className="text-white bg-main hover:bg-blue-950 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center duration-500"
  >
    {t("Add New City")}
   
  </button>
</div>

</div>


    <div>
          <Modal show={openModal} size="md" onClose={onCloseModal} popup>   
           <div className="flex items-center justify-between p-4  md:px-5  rounded-t">
                <h3 className="text-lg font-semibold text-main dark:text-white">
                  Add New City
                </h3>
                <button  onClick={onCloseModal}>
                <IoClose/>
                </button>
              </div>
              {/* Modal body */}
              <form className="px-5 md:pb-5">
                <div className="grid gap-4 mb-4 grid-cols-2">
                  <div className="col-span-2">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-main dark:text-white"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Type city name"
                      required
                    />
                  </div>
                  <div className=" col-span-2 w-full">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-main dark:text-white"
                    >
                      City Name
                    </label>
                    <label
                      htmlFor="dropzone-file"
                      className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                          className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">Click to upload</span>{" "}
                          or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                      </div>
                      <input
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="text-white bg-main hover:bg-blue-950 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center duration-500"
                >
                  <svg
                    className="me-1 -ms-1 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Add new city
                </button>
              </form>
      </Modal>
    </div>
    </>
  )
}
