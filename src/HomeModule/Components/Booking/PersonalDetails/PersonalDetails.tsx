import { useForm } from "react-hook-form";
import { BsPersonVcardFill } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdLocationPin, MdOutlineMailOutline } from "react-icons/md";
import BookingHeader from "../../../../SharedModules/Components/BookingHeader/BookingHeader";
import ErrorMessage from "../../../../SharedModules/Components/ErrorMessage/ErrorMessage";
import Input from "../../../../SharedModules/Components/Input/Input";
import Navbar from "../../../../SharedModules/Components/Navbar/Navbar";
import site from "../../../../assets/museum.jpeg";
export default function PersonalDetails() {
    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
      } = useForm();
      const onSubmit = (data: any) => {
        console.log({ data });
      };
  return (
    <>
      <Navbar />
      <BookingHeader />
      <div className="flex">
        <div className="personal-details-header  bg-white    mx-auto my-9 w-[55%]  px-2 sm:px-6 lg:px-8 rounded-lg shadow-md">
         <div className="flex justify-between">
         <p className="text-main font-semibold">Personal Details</p>
          <div>
            <button className="bg-main text-white rounded-lg px-2 p-1">
              your Details
            </button>
            {/* <button className=" text-main rounded-lg p-1">
              Booking Details
            </button> */}
          </div>
         </div>
          <div>
          <p className="text-main text-2xl">Your Details</p>
          <form onSubmit={handleSubmit(onSubmit)} className="w-5/6 lg:w-3/4">
            <div className="name-inputs  my-4 flex justify-between ">
              <Input
                type="text"
                placeholder="first name"
                {...register("firstName", {
                  required: "FirstName is required",
                  minLength: {
                    value: 2,
                    message: "First name should be greater than two letters ",
                  },
                  maxLength: {
                    value: 8,
                    message: "First name should be less than eight letters",
                  },
                })}
                children={<BsPersonVcardFill />}
              />
              {errors?.firstName && (
                <ErrorMessage text={String(errors?.firstName.message)} />
              )}
              <Input
                type="text"
                placeholder="last name"
                {...register("lastName", {
                  required: "LastName is required",
                  minLength: {
                    value: 2,
                    message: "Last name should be greater than two letters",
                  },
                  maxLength: {
                    value: 8,
                    message: "Last name should be less than eight letters",
                  },
                })}
                children={<BsPersonVcardFill />}
              />
              {errors?.lastName && (
                <ErrorMessage text={String(errors?.lastName.message)} />
              )}
            </div>

            <div className="email-input  my-4  flex items-center">
              <div className="w-[98%]">
                <Input
                  type="email"
                  placeholder="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                      message: "Invalid Email Format",
                    },
                  })}
                  children={<MdOutlineMailOutline />}
                />
              </div>
              {errors?.email && (
                <ErrorMessage text={String(errors?.email.message)} />
              )}
            </div>
            <div className="phone-input  my-4  flex items-center">
              <div className="w-[98%]">
                <Input
                  type="phone"
                  placeholder="phone"
                  {...register("phone", {
                    required: "phone is required",
                    pattern: {
                      value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                      message: "Invalid phone Format",
                    },
                  })}
                  children={<IoPhonePortraitOutline/>}
                />
              </div>
              {errors?.phone && (
                <ErrorMessage text={String(errors?.phone.message)} />
              )}
            </div>
            
          </form>
          </div>
        </div>
        <div className="personal-details-header-right  bg-white p-5  w-[30%]   my-9 mx-auto  px-2 sm:px-6 lg:px-8 rounded-lg shadow-md">
          <p className="text-main font-semibold mb-5">Ticket Summary</p>
          <div className="ticket-dtls  m-auto">
            <div className="rounded-lg w-1/2">
              <img
                className="w-full rounded-3xl shadow-lg"
                src={site}
                alt="site"
              />
            </div>
            <p className="text-main my-2">The Grand Egyptian Museum</p>
            <span className="flex items-center text-slate-400 text-sm">
              {" "}
              <MdLocationPin className="" /> Giza Governorate
            </span>
            <div className="openning-hours my-4 flex items-center">
              <div className="clock border rounded-full p-3 w-[10%] border-dashed">
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
          </div>
          <div className="flex items-center justify-between">
          <p className="text-main text-lg ">50$</p>
          <button className="bg-main text-white px-5 py-2  rounded-xl">
         pay now
        </button>
          </div>
        </div>
      </div>
    </>
  );
}
