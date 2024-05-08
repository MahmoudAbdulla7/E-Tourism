import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GiConfirmed } from "react-icons/gi";
import { ImSpinner9 } from "react-icons/im";
import { useSelector } from "react-redux";
import ErrorMessage from "../../../SharedModules/Components/ErrorMessage/ErrorMessage";
import { baseUrl } from "../../../Utls/BaseUrl";
import { toast } from "react-toastify";

export default function Booking() {
  const [isLoading, setIsLoading] = useState(false);

  const { headers } = useSelector((state: any) => state.authReducer);

  // const webcamRef = useRef(null);
  // const [imageSrc, setImageSrc] = useState(null);
  //   const capturePhoto = () => {
  //     const image = webcamRef.current.getScreenshot();
  //     setImageSrc(image);
  //   };
  // const sendPhoto = async () => {
  //   if (imageSrc) {
  //     try {
  //       // Convert Base64 to Blob
  //       const byteString = atob(imageSrc.split(',')[1]);
  //       const mimeString = imageSrc.split(',')[0].split(':')[1].split(';')[0];
  //       const arrayBuffer = new ArrayBuffer(byteString.length);
  //       const uint8Array = new Uint8Array(arrayBuffer);
  //       for (let i = 0; i < byteString.length; i++) {
  //         uint8Array[i] = byteString.charCodeAt(i);
  //       }
  //       const blob = new Blob([uint8Array], { type: mimeString });
  //       // Create FormData and append the Blob with a filename
  //       const formData = new FormData();
  //       formData.append('image', blob, 'captured-photo.jpg');
  //       formData.append('person_name', 'Mostafafa');

  //       const response = await axios.post('https://face-matching.onrender.com/add_person', formData, {
  //         headers: {
  //           'Content-Type': 'multipart/form-data',
  //         },
  //       });

  //       if (response.status === 200) {
  //         console.log('Photo sent successfully!');
  //       } else {
  //         console.error('Failed to send photo');
  //       }
  //     } catch (error) {
  //       console.error('Error sending photo:', error);
  //     }
  //   }
  // };
  const Data = localStorage.getItem("destData");
  const Modified = JSON.parse(String(Data));
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(Math.max(count - 1, 0));
  };
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {

    const dummyData = {
      touristDestination: {
        touristDestinationId: `${Modified?.id}`,
        quantity: count,
      },
      DateOfVisit: `${data.date}T${data.time}Z`,
      paymentType: "card",
    };
    console.log(dummyData);
    reserveTicket(dummyData);
  };

  const reserveTicket = (dummyData: any) => {
    setIsLoading(true);
    axios
      .post(`${baseUrl}order`, dummyData, headers)
      .then((res) => {
        const {url}=res.data
        setIsLoading(false);
        window.location.href=url;
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response?.data?.validationErr[0]?.message||"Network Error");
        setIsLoading(false);
      });
  };

  return (
    <div className="booking">
      <div>
        <div>
          {/* <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={320}
        height={240}
      /> */}
          {/* <button className="bg-main text-white px-5 py-2  my-2 rounded-xl" onClick={capturePhoto}>Capture Photo</button>
      <button className="bg-main text-white px-5 py-2  my-2 rounded-xl" onClick={sendPhoto}>Send Photo</button> */}
          {/* {imageSrc && <img src={imageSrc} alt="Captured" />} */}
        </div>
      </div>
      <div className="ticket-details bg-white p-5 flex  my-5 mx-auto max-w-6xl px-2 sm:px-6 lg:px-8 rounded-lg shadow-md">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
          <div className="rounded-lg ">
            <img
              className="w-full rounded-3xl shadow-lg"
              src={Modified?.image.secure_url}
              alt="site-image"
            />
          </div>
          <div className=" p-4  col-span-2">
            <div className="left-header flex justify-between items-center">
              <h1 className="text-main text-2xl font-bold">{Modified?.name}</h1>
              <p className="text-main text-2xl font-bold">
                {Modified?.ticketPrice}
              </p>
            </div>
            <a target="_blank" href={Modified?.location} className="text-main">
              <div className="flex items-center">
                <FaLocationDot /> Location
              </div>
            </a>

            <div className="openning-hours  flex items-center my-2">
              <div className="clock border block p-2 cursor-pointer rounded-full shadow-sm border-dashed">
                <FaRegClock />
              </div>
              <div className="openning-right ml-5">
                <p className="text-main">Openning hours</p>
                <div className="text-slate-400 text-sm">
                  <div>All days</div>
                  <div>9:00 AM- 6:00 PM</div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="ms-auto">
              <div className="counter">
                <span>No.of tickets</span>
                <div className="buttons rounded-2xl   flex items-center justify-between p-2  bg-slate-100">
                  <button
                    type="button"
                    onClick={handleDecrement}
                    className="bg-red-600 block size-8 cursor-pointer rounded-full shadow-sm text-white mr-1"
                  >
                    -
                  </button>
                  <input
                    className="text-center border-none"
                    type="text"
                    value={count}
                    onChange={(e: any) => setCount(e.target.value)} // Update count state on change
                  />
                  <button
                    type="button"
                    onClick={handleIncrement}
                    className="bg-main block size-8 cursor-pointer rounded-full shadow-sm text-white ml-1"
                  >
                    +
                  </button>
                </div>
              </div>
              <p className="mt-2 font-semibold text-main">Total Price: {Number(Modified?.ticketPrice) * count} </p>
              <div className="dateAndTimePicker">
                <p className="mt-2">Select date of your visit</p>
                <div className="Data-Time flex items-center my-2">
                  <input
                    {...register("date", { required: "Date is required" })}
                    id="date"
                    type="date"
                    placeholder="Select date"
                    className="bg-gray-200 border  border-gray-300 text-gray-900 text-sm rounded-l-2xl focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
                  />
                  <input
                    {...register("time", { required: "Time is required" })}
                    id="date"
                    type="time"
                    placeholder="Select date"
                    className="bg-gray-200 border  border-gray-300 text-gray-900 text-sm rounded-r-3xl focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
                  />
                  {errors?.date && (
                    <ErrorMessage text={String(errors?.date.message)} />
                  )}
                  {errors?.time && (
                    <ErrorMessage text={String(errors?.time.message)} />
                  )}
                </div>
              </div>
              <div className="continue my-3">
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
                  <GiConfirmed className="mx-1 text-xl" />
                  Pay now
                </>
              )}
                 
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
