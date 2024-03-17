import { useState } from "react";

export default function Highlights() {
  const [firstImage, setFirstImage] = useState<string>("https://theportablewife.com/wp-content/uploads/2-days-in-amsterdam-itinerary-featured.jpg")
  const [secImage, setSecImage] = useState<string>("https://i.pinimg.com/564x/a6/c2/bf/a6c2bffd932d358ffa97a2c6b03bd47d.jpg")
  const [thirdImage, setThirdImage] = useState<string>("https://i.pinimg.com/564x/10/bf/14/10bf14bafcb2321e2e49fff027101b95.jpg")
  function swap(e: React.MouseEvent<HTMLImageElement>) {
    setThirdImage(String(e.currentTarget.src))
    setFirstImage(thirdImage)
  }
  function swap2(e: React.MouseEvent<HTMLImageElement>) {
    setThirdImage(String(e.currentTarget.src))
    setSecImage(thirdImage)
  }
  return (
    <div className="">
      <div className="mx-auto max-w-7xl pl-1 sm:px-6 lg:px-8 my-3">
        <div className="Highlights text-center border-[12px] rounded-xl">
          <h2 className="text-main text-6xl font-bold py-6 ">Highlights</h2>
          <div className="my-3">
            <div className="cardfan">
              <img
                src={firstImage}
                alt="Photograph of Florence, Italy"
                id="roma"
                onClick={swap}
              />
              <img
                src={secImage}
                alt="Photograph of an ancient aqueduct, Italy"
                id="aqueduct"
                onClick={swap2}
              />
              <img
                src={thirdImage}
                alt="Photograph of a bike on a Roman Street"
                id="bike"
              />
            </div>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
              <filter id="blur">
                <feGaussianBlur stdDeviation={3} />
              </filter>
            </svg>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
              <filter id="greyscale">
                <feColorMatrix
                  type="matrix"
                  values="0.3333 0.3333 0.3333 0 0
0.3333 0.3333 0.3333 0 0
0.3333 0.3333 0.3333 0 0
0 0 0 1 0"
                />
              </filter>
            </svg>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
              <filter id="sepia">
                <feColorMatrix
                  values="0.14 0.45 0.05 0 0
0.12 0.39 0.04 0 0
0.08 0.28 0.03 0 0
0 0 0 1 0"
                />
              </filter>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
