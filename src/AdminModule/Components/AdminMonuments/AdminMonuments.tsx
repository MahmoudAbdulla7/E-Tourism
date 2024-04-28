import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import SharedModal from "../../../SharedModules/Components/SharedModal/SharedModal";
import { useForm } from "react-hook-form";
import ErrorMessage from "../../../SharedModules/Components/ErrorMessage/ErrorMessage";
import { Select } from "flowbite-react";
import axios from "axios";
import { baseUrl } from "../../../Utls/BaseUrl";
import { useDispatch, useSelector } from "react-redux";
import { getAllCities } from "../../../Utls/getData";
import { setCities } from "../../../Redux/CitySlice/CitySlice";
import { toast } from "react-toastify";
import { ImSpinner9 } from "react-icons/im";
import { FaPlus } from "react-icons/fa";

interface MonumentInfo {
  name: string;
  ticketPrice: string;
  type: string;
  location: string;
  description: string;
  image?: Record<string, File>;
  subImages?: Record<string, File>;
}

export default function AdminMonuments() {
  const { t, i18n } = useTranslation();
  const [openModal, setOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const { headers } = useSelector((state: any) => state.authReducer);
  const { cities } = useSelector((state: any) => state.CitiesReducer);
  function onCloseModal() {
    setOpenModal(false);
  }
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    getAllCities("city",(res) => {
      return dispatch(setCities(res));
    });
    console.log(cities);
  }, []);



  const convertDataIntoFormData = (monumentObject: any): FormData => {
    delete monumentObject.cityID;
    const formData = new FormData();
    formData.append("name", monumentObject.name);
    formData.append("ticketPrice", monumentObject.ticketPrice);
    formData.append("type", monumentObject.type);
    formData.append("location", monumentObject.location);
    formData.append("description", monumentObject.description);

    if (Object.keys(monumentObject.image).length > 0) {
      formData.append("image", monumentObject.image["0"]);
    }
    for (const key in monumentObject.subImages) {
      if (monumentObject.subImages.hasOwnProperty(key)) {
        formData.append(`subImages`, monumentObject.subImages[key]);
      }
    }
    return formData;
  };

  const postData = (formData: any, data: MonumentInfo, cityID: string) => {

    axios
      .post(`${baseUrl}city/${cityID}/destination`, formData, headers)
      .then((res) => {

        toast.success(res.data.message);
        onCloseModal();
        for (const key in data) {
          setValue(key, "");
        }
        getAllCities("city",(res) => {
          return dispatch(setCities(res));
        });

      })
      .catch((err) => {

        toast.error(err.response.data.message || "failed to create monument");
        toast.error(err.response.data.validationErr[0].message||"Network error");

      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const onSubmit = (data: MonumentInfo | any) => {
    setIsLoading(true);
    let cityID = data.cityID;
    const formData = convertDataIntoFormData(data);
    postData(formData, data, cityID);
  };

  return (
    <>
      <div
        className="home-container my-5 mx-2 p-4 rounded-lg grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 align-items-center "
        dir={i18n.language == "ar" ? "rtl" : "ltr"}
      >
        <div className="lg:col-span-2 ">
          <h4 className="text-2xl font-medium text-main">
            {t("Monuments Details")} !
          </h4>
          <p>{t("You can check all details")}</p>
        </div>
        <div></div>
        <div className="text-end">
          <button
            onClick={() => setOpenModal(true)}
            type="button"
            className="text-white bg-main hover:bg-blue-950 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center duration-500"
          >
            {t("Add New Monuments")}
          </button>
        </div>
      </div>

      <SharedModal
        title="Add New Monument"
        openModal={openModal}
        onclose={onCloseModal}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="px-3 pb-5">
          <div className="grid gap-4 mb-3 grid-cols-2">
            
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-main dark:text-white"
              >
                Name
              </label>
              <div className="flex items-center">
                <div className="flex-auto mx-1">
                  <input
                    id="name"
                    type="text"
                    {...register("name", { required: "City Name is required" })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type Monument name"
                  />
                </div>
                {errors?.name && (
                  <ErrorMessage text={String(errors?.name?.message)} />
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="ticketPrice"
                className="block mb-2 text-sm font-medium text-main dark:text-white"
              >
                Ticket Price
              </label>
              <div className="flex items-center">
                <div className="flex-auto mx-1">
                  <input
                    type="number"
                    {...register("ticketPrice", {
                      required: "Ticket Price is required",
                    })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Ticket Price"
                    id="ticketPrice"
                  />
                </div>
                {errors?.ticketPrice && (
                  <ErrorMessage text={String(errors?.ticketPrice?.message)} />
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="ticketPrice"
                className="block mb-2 text-sm font-medium text-main dark:text-white"
              >
                Type
              </label>

              <div className="flex items-center">
                <div className="flex-auto mx-1">
                  <Select
                    {...register("type", { required: "Type is required" })}
                  >
                    <option value="Museum">Museum</option>
                    <option value="Monument">Monument</option>
                  </Select>
                </div>
                {errors?.type && (
                  <ErrorMessage text={String(errors?.type?.message)} />
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="city"
                className="block mb-2 text-sm font-medium text-main dark:text-white"
              >
                City
              </label>

              <div className="flex items-center">
                <div className="flex-auto mx-1">
                  <Select
                    {...register("cityID", { required: "City is required" })}
                  >
                    {cities?.length > 0
                      ? cities.map((city: any, idx: number) => (
                          <option key={idx} value={city._id}>
                            {city.name}
                          </option>
                        ))
                      : ""}
                  </Select>
                </div>
                {errors?.cityID && (
                  <ErrorMessage text={String(errors?.cityID?.message)} />
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="location"
                className="block mb-2 text-sm font-medium text-main dark:text-white"
              >
                Location
              </label>
              <div className="flex items-center">
                <div className="flex-auto mx-1">
                  <input
                    type="text"
                    {...register("location", {
                      required: "Location is required",
                    })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Location Link from google map"
                    id="location"
                  />
                </div>
                {errors?.location && (
                  <ErrorMessage text={String(errors?.location?.message)} />
                )}
              </div>
            </div>

            <div className="col-span-2">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-main dark:text-white"
              >
                Description
              </label>
              <div className="flex items-center">
                <div className="flex-auto mx-1">
                  <textarea
                    rows={5}
                    cols={40}
                    {...register("description", {
                      required: "Description is required",
                    })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type Monument Description"
                    id="description"
                  />
                </div>
                {errors?.description && (
                  <ErrorMessage text={String(errors?.description?.message)} />
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="image"
                className="block mb-2 text-sm font-medium text-main dark:text-white"
              >
                image
              </label>
              <div className="flex items-center">
                <div className="flex-auto mx-1">
                  <input
                    type="file"
                    {...register("image", {
                      required: "image is required",
                    })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    id="image"
                  />
                </div>
                {errors?.image && (
                  <ErrorMessage text={String(errors?.image?.message)} />
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="subImages"
                className="block mb-2 text-sm font-medium text-main dark:text-white"
              >
                Choose 3 images for monument Highlights
              </label>
              <div className="flex items-center">
                <div className="flex-auto mx-1">
                  <input
                    type="file"
                    {...register("subImages", {
                      required: "Highlights is required",
                      minLength: 3 || "please choose 3 images",
                      maxLength: 3 || "please choose 3 images",
                    })}
                    multiple
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    id="subImages"
                  />
                </div>
                {errors?.subImages && (
                  <ErrorMessage text={String(errors?.subImages?.message)} />
                )}
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-gray-800  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center duration-500"
          >
            {!isLoading ? (
              <span className="flex items-center">
                <FaPlus className="mx-2" />
                Add new Monument
              </span>
            ) : (
              <ImSpinner9 className="animate-spin" />
            )}
          </button>
        </form>
      </SharedModal>
    </>
  );
}
