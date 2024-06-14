import { FaPlus, FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { TiHome } from "react-icons/ti";
import { Link, useNavigate, useParams } from "react-router-dom";
import { baseUrl } from "../../../Utls/BaseUrl";
import { useEffect, useState } from "react";
import axios from "axios";
import Highlights from "../Highlights/Highlights";
import { useTranslation } from "react-i18next";
import Loading from "../../../SharedModules/Components/Loading/Loading";
import { Modal, Table } from "flowbite-react";
import { IoClose, IoLogoYoutube } from "react-icons/io5";
import { ImSpinner9 } from "react-icons/im";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import ErrorMessage from "../../../SharedModules/Components/ErrorMessage/ErrorMessage";

export interface destination {
  name: string;
  description: string;
  image: {
    secure_url: string;
  };
  destinationID: string;
  cityId: {
    _id: string;
  };
  _id: string;
  video: string;
  subImages: {
    secure_url: string;
  }[];
}

interface reviews {
  comment: string;
}

export default function AboutMuseum() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [modalState, setModalState] = useState("close");
  const handleClose = () => setModalState("close");
  const [isLoading, setIsLoading] = useState(false);
  const { headers } = useSelector((state: any) => state.authReducer);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isSpeaking, setIsSpeaking] = useState(false);
  
    let { cityId, destinationId } = useParams();
    const [destination, setDestination] = useState<destination>();
    const [reviewss, setReviewss] = useState<reviews>();

  const handleSpeak = () => {
    setIsSpeaking(true);
    const text = destination?.description;
    const value = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(value);
  };

  const handlePause = () => {
    window.speechSynthesis.pause();
    setIsSpeaking(false);
  };

  const getSpecificAttraction = () => {
    axios
      .get(`${baseUrl}city/${cityId}/destination/${destinationId}`)
      .then((res) => {
        // console.log(res?.data?.touristDestination);
        setDestination(res?.data?.touristDestination);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const showAddModal = () => {
    setModalState("add-modal");
  };
  // add review
  const onSubmit = (data: any) => {
    const dummy = {
      comment: data.comment,
      rating: 5,
    };
    setIsLoading(true);
    axios
      .post(
        `${baseUrl}city/${cityId}/destination/${destinationId}/review`,
        dummy,
        headers
      )
      .then((res) => {
        setIsLoading(false);
        handleClose();
        toast.success(res?.data?.message);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        toast.error(err?.response?.data?.message);
      });
  };
  //get all reviews
  const getReviews = () => {
    axios
      .get(`${baseUrl}city/${cityId}/destination/${destinationId}/review`)
      .then((res) => {
        console.log(res.data.reviews[0]);
        setReviewss(res.data.reviews);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getSpecificAttraction();
    getReviews();
  }, []);

  const bookNow = () => {
    localStorage.setItem("destData", JSON.stringify(destination));
    navigate("/home/booking");
  };

  return (
    <div className="min:h-[100vh] ">
      {destination ? (
        <>
          <div className="mx-auto max-w-7xl pl-1 sm:px-6 lg:px-8 py-6">
            <div className="navigation">
              <label className="md:text-4xl mx-2 text-sm sm:text-lg text-main flex items-center mb-8">
                <Link to="/">
                  <TiHome />
                </Link>
                <span className="text-xl font-bold">
                  <IoIosArrowForward />
                </span>
                <Link to={`/museums/${destination?.cityId?._id}`}>
                  {t("Museums")}
                </Link>
                <span className="text-xl font-bold">
                  <IoIosArrowForward />
                </span>
                {destination?.name}
              </label>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 bg- shadow-2xl rounded-3xl overflow-hidden m-3 h-[84vh] md:h-[auto]">
              <div
                className={` w-full h-auto lg:h-auto md:h-[70vh] overflow-hidden`}
              >
                <img
                  className="w-full  rounded-3xl"
                  src={destination?.image?.secure_url}
                  alt="mesume-photo"
                />
              </div>
              <div className="lg:col-span-3 text-sm sm:text-normal md:text-lg p-4 flex flex-col justify-between">
                <div className="name">
                  <div className=" flex justify-between items-center">
                    <h2 className="text-xl sm:text-lg md:text-3xl font-semibold mb-2">
                      {destination?.name}
                    </h2>
                    <div className="youtube flex items-center my-2">
                      <div className="clock border border-red-950 block p-2 cursor-pointer rounded-full shadow-sm border-dashed">
                        <Link target="_blank" to={destination?.video}>
                          <IoLogoYoutube className="text-xl text-red-700" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <p className="text-lg">{destination?.description}</p>
                </div>

                <div className="booking grid sm:grid-cols-2 grid-cols-1  mt-8">
                  <div>
                    <p className="flex text-main items-center">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </p>
                    <p>{t("Prices may vary depending on selected date")}.</p>
                  </div>

                  <div className="btn flex justify-end items-center">
                    <div className="mr-2">
                      <button
                        onClick={showAddModal}
                        className="px-4   sm:w-auto w-full sm:m-0 mt-2  font-bold rounded-full bg-main border-main hover:text-main duration-700 border-2 text-white hover:bg-transparent"
                      >
                        {t("Add Review")}
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={bookNow}
                        className="px-4   sm:w-auto w-full sm:m-0 mt-2  font-bold rounded-full bg-main border-main hover:text-main duration-700 border-2 text-white hover:bg-transparent"
                      >
                        {t("Book Now")}
                      </button>
                    </div>
                    <div className=" ml-2">
                      <button
                        onClick={isSpeaking ? handlePause : handleSpeak}
                        className="px-4  sm:w-auto w-full sm:m-0 mt-2  font-bold rounded-full bg-main border-main hover:text-main duration-700 border-2 text-white hover:bg-transparent"
                      >
                        {!isSpeaking ? "Speak" : "Pause"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Highlights
            firstImagee={String(destination?.subImages[0]?.secure_url)}
            secImagee={String(destination?.subImages[1]?.secure_url)}
            thirdImagee={String(destination?.subImages[2]?.secure_url)}
          />

          <div className="mx-auto max-w-7xl pl-1 sm:px-6 lg:px-8 mt-3 pb-5 ">
            <div className="Highlights text-center border-[12px] rounded-xl ">
              <h2 className="text-main text-3xl md:text-6xl font-bold py-6 ">
                {t("Opening Hours")}
              </h2>
              <div className="overflow-x-auto w-[95%] md:w-[70%] h-[85vh] md:h-[auto] m-auto  py-0 md:py-2 mb-0 md:mb-5">
                <Table className="text-center" hoverable>
                  <Table.Head className="">
                    <Table.HeadCell
                      colSpan={4}
                      className=" text-center text-xl md:text-4xl bg-main text-white"
                    >
                      {t("Opening Hours")}
                    </Table.HeadCell>
                  </Table.Head>
                  <Table.Body className="divide-zinc-800 divide-y-8">
                    <Table.Row className="bg-blue-200  ">
                      <Table.Cell className="font-medium text-gray-900">
                        {t("MON")}
                      </Table.Cell>
                      <Table.Cell>{t("9:00 AM")}</Table.Cell>
                      <Table.Cell>{t("To")}</Table.Cell>
                      <Table.Cell>{t("6:00 PM")}</Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-blue-200  ">
                      <Table.Cell className="font-medium text-gray-900">
                        {t("TUE")}
                      </Table.Cell>
                      <Table.Cell>{t("9:00 AM")}</Table.Cell>
                      <Table.Cell>{t("To")}</Table.Cell>
                      <Table.Cell>{t("6:00 PM")}</Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-blue-200 ">
                      <Table.Cell className="font-medium text-gray-900">
                        {t("WED")}
                      </Table.Cell>
                      <Table.Cell>{t("9:00 AM")}</Table.Cell>
                      <Table.Cell>{t("To")}</Table.Cell>
                      <Table.Cell>{t("6:00 PM")}</Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-blue-200  ">
                      <Table.Cell className="font-medium text-gray-900">
                        {t("THU")}
                      </Table.Cell>
                      <Table.Cell>{t("9:00 AM")}</Table.Cell>
                      <Table.Cell>{t("To")}</Table.Cell>
                      <Table.Cell>{t("6:00 PM")}</Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-blue-200 ">
                      <Table.Cell className="font-medium text-gray-900">
                        {t("FRI")}
                      </Table.Cell>
                      <Table.Cell>{t("9:00 AM")}</Table.Cell>
                      <Table.Cell>{t("To")}</Table.Cell>
                      <Table.Cell>{t("6:00 PM")}</Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-blue-200  ">
                      <Table.Cell className="font-medium text-gray-900">
                        {t("SAT")}
                      </Table.Cell>
                      <Table.Cell>{t("9:00 AM")}</Table.Cell>
                      <Table.Cell>{t("To")}</Table.Cell>
                      <Table.Cell>{t("6:00 PM")}</Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-blue-200">
                      <Table.Cell className="font-medium text-gray-900">
                        {t("SUN")}
                      </Table.Cell>
                      <Table.Cell>{t("9:00 AM")}</Table.Cell>
                      <Table.Cell>{t("To")}</Table.Cell>
                      <Table.Cell>{t("6:00 PM")}</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </div>
            </div>
          </div>

        {reviewss?.length>0?
          <div className="mx-auto max-w-7xl pl-1 sm:px-6 lg:px-8 mt-3 pb-5 ">
          <div className="Highlights text-center border-[12px] rounded-xl ">
            <h2 className="text-main text-3xl md:text-6xl font-bold py-6 ">
              {t("Reviews")}
            </h2>
            
            <div className="overflow-x-auto w-[95%] md:w-[70%]  md:h-[auto] m-auto  py-0 md:py-2 mb-0 md:mb-5">
              {reviewss?.map((review: reviews, idx: any) => (
                <div key={idx} className="bg-auth-button-color shadow-lg rounded-lg p-4 mb-4">
                  <div className="flex items-start mb-2">
                    <FaQuoteLeft className="text-gray-500 mr-2" />
                    <div className="text-gray-700">{review?.comment}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      :""
      }
{/* add-modal */}
          <Modal
            show={modalState == "add-modal"}
            size="md"
            onClose={handleClose}
            popup
          >
            <div className="flex items-center justify-between p-4  md:px-5  rounded-t">
              <h3 className="text-lg font-semibold text-main dark:text-white">
                {t("Add Review")}
              </h3>
              <button onClick={handleClose}>
                <IoClose />
              </button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="px-5 md:pb-5">
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-main dark:text-white"
                  >
                    {t("Review")}
                  </label>
                  <div className="flex items-center">
                    <div className="flex-auto">
                      <textarea
                        id="comment"
                        rows={5}
                        cols={40}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Type Your Comment"
                        {...register("comment", {
                          required: true,
                          minLength: {
                            value: 2,
                            message:
                              "Review shouldn't be less than two character",
                          },
                        })}
                      ></textarea>
                    </div>
                    {errors?.comment && (
                      <ErrorMessage
                        text={String(
                          errors?.comment?.message || "comment is required"
                        )}
                      />
                    )}
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className={
                  "text-white bg-main hover:bg-blue-950 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center duration-500" +
                  (isLoading ? " disabled" : " ")
                }
              >
                {isLoading == true ? (
                  <ImSpinner9 className="animate-spin" />
                ) : (
                  <>
                    <FaPlus className="mx-1" />
                    {t("Add  Review")}
                  </>
                )}
              </button>
            </form>
          </Modal>
          
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}
