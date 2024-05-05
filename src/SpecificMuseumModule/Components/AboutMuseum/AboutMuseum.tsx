import { FaStar } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { TiHome } from "react-icons/ti";
import { Link, useParams } from "react-router-dom";
import { baseUrl } from "../../../Utls/BaseUrl";
import { useEffect, useState } from "react";
import axios from "axios";
import Highlights from "../Highlights/Highlights";
import { useTranslation } from "react-i18next";

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
    subImages: {
      secure_url: string;
    }[];
}

export default function AboutMuseum() {
  const { t, i18n } = useTranslation();

 const  handleClick=()=>{
const text="Amsterdam, the capital of the Netherlands, is a city rich in  history, culture, and architecture. Guided walking tours are a popular way for visitors to explore the city while learning about its fascinating past. Knowledgeable guides often lead these tours, taking participants through iconic neighborhoods, landmarks, and hidden gems."
const value = new SpeechSynthesisUtterance(text);
window.speechSynthesis.speak(value);
  }
 let {cityId,destinationId}= useParams();
 const [destination, setDestination] = useState<destination>();

 const getSpecificAttraction=()=>{
  axios.get(`${baseUrl}city/${cityId}/destination/${destinationId}`).then((res) => { 
    console.log(res?.data?.touristDestination);    
    setDestination(res?.data?.touristDestination);  
   }).catch((err) => { 
    console.log(err);
    })
 }
  
  useEffect(() => {
    getSpecificAttraction()
    console.log(destination);
    
  }, [])
  
  return (
    <div className="min:h-[100vh] ">
           <div className="mx-auto max-w-7xl pl-1 sm:px-6 lg:px-8 py-6">
     <div className="navigation">
       <label className="md:text-4xl mx-2 text-xl text-main flex items-center mb-8">
         <Link to="/">
           <TiHome />
         </Link>
         <span className="text-xl font-bold">
           <IoIosArrowForward />
         </span>
         <Link to={`/museums/${destination?.cityId?._id}`}>{t("Museums")}</Link>
         <span className="text-xl font-bold">
           <IoIosArrowForward />
         </span>
         {destination?.name}
       </label>
     </div>

     <div className="grid grid-cols-1 lg:grid-cols-4 bg- shadow-2xl rounded-3xl overflow-hidden m-3 h-full md:h-[auto]">
       <div
         className={` w-full h-auto lg:h-auto md:h-[70vh] overflow-hidden`}
       >
         <img
           className="w-full rounded-3xl"
           src={destination?.image?.secure_url}
           alt=""
         />
       </div>
       <div className="lg:col-span-3 p-4 flex flex-col justify-between">
         <div className="name">
           <h2 className="text-3xl font-semibold mb-2">
             {destination?.name}
           </h2>
           <p className="text-lg">
            {destination?.description}
           </p>
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
           <div className="btn text-end">
             <button className="px-4 py-2 sm:w-auto w-full sm:m-0 mt-2  font-bold rounded-full bg-main border-main hover:text-main duration-700 border-2 text-white hover:bg-transparent">
             {t("Book Now")}
             </button>
             <button onClick={handleClick} className="px-4 py-2 sm:w-auto w-full sm:m-0 mt-2  font-bold rounded-full bg-main border-main hover:text-main duration-700 border-2 text-white hover:bg-transparent">
              {t("Speak")}
             </button>
           </div>
         </div>
       </div>
     </div>
   </div>
   <Highlights firstImagee={destination?.subImages[0]?.secure_url}  secImagee={destination?.subImages[1]?.secure_url} thirdImagee={destination?.subImages[2]?.secure_url} />
    </div>
  );
}
