import axios from "axios";
import { jwtDecode } from "jwt-decode";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { baseUrl } from "../Utls/BaseUrl";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { MdVerified } from "react-icons/md";
import { ImSpinner9 } from "react-icons/im";
import Webcam from "react-webcam";

interface TokenData {
  orderId: string;
  faceId: string;
  status: string;
}

export default function ValidateTicket() {
  const { token } = useParams();
  const tokenData: TokenData = jwtDecode(String(token));
  const [ticket, setTicket] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);
  const { headers } = useSelector((state: any) => state.authReducer);

  const getTicket = () => {
    axios
      .get(`${baseUrl}order/filter-by-id/${tokenData.orderId}`, headers)
      .then((res) => {

        if (res.data.orders.status !== "placed") {
          toast.error("User must pay first for entering");
        } else {
          setTicket(res.data.orders);
          console.log(res.data.orders);
          
        }

      })
      .catch(() => {
        toast.error("network error");
      });
  };

  const webcamRef:any = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [faceId, setFaceId] = useState("");

  const capturePhoto = () => {
    const image = webcamRef.current?.getScreenshot();
    if (image) {
      setImageSrc(image);
    } else {
      toast.error("Failed to capture screenshot from webcam");
    }
  };
  const captureAnother = () => {
    setImageSrc(null);
  };

  const sendPhoto = async () => {
    setIsLoading(true);
    if (imageSrc) {
      try {

        const formData = new FormData();
        formData.append("image_base64", imageSrc);
        formData.append("person_id", ticket?.faceId );
        const response = await axios.post(
          "https://face-matching.onrender.com/face-matchingBase64",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        if (response.status === 200) {

          setIsLoading(false);
          console.log(response);

        } else {

          toast.error("Failed to send photo");
          
        }
      } catch (error) {
        console.error("Error sending photo:", error);
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    getTicket();
  }, []);

  const videoConstraints = {
    width: 390,
    height: 390,
    facingMode: "user",
  };

  return (
    <>
            <div className="px-5">
          <p className="text-4xl flex justify-center items-center">
            Face Matching <MdVerified className="text-green-500" />
          </p>
          <div>
            {imageSrc ? (
              <>
                <div className="flex items-center justify-center">
                  {imageSrc && (
                    <img
                      className="rounded-full"
                      src={imageSrc}
                      alt="Captured"
                    />
                  )}
                </div>
                <div className="flex items-center justify-center">
                  <button
                    onClick={sendPhoto}
                    className={
                      "bg-main text-white px-5 py-2 mx-1  my-2 rounded-xl"
                    }
                  >
                    {isLoading == true ? (
                      <ImSpinner9 className="animate-spin" />
                    ) : (
                      <>Send Photo</>
                    )}
                  </button>
                </div>
                <div className="flex items-center justify-center">
                  <button
                    onClick={captureAnother}
                    className={
                      "bg-main text-white px-5 py-2 mx-1  my-2 rounded-xl"
                    }
                  >
                    Capture another one?
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="flex justify-center items-center">
                  <Webcam
                    className="rounded-full my-4"
                    audio={false}
                    ref={webcamRef}
                    imageSmoothing={true}
                    videoConstraints={videoConstraints}
                    screenshotFormat="image/jpeg"
                    width={320}
                    height={240}
                  />
                </div>
                <div className="flex items-center justify-center">
                  <p className="text-slate-500">
                    Click capture photo button then click on the send button
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <button
                    className="bg-main text-white px-5 py-2 mx-1  my-2 rounded-xl"
                    onClick={capturePhoto}
                  >
                    Capture Photo
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
    </>
  )
}
