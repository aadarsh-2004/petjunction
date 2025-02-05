import React from "react";
import photo1 from "../assets/IMG_7689.jpg"
import photo9 from "../assets/IMG_8049.jpg"
import photo3 from "../assets/IMG_7785.jpg"
import photo4 from "../assets/IMG_7533.jpg"
// import photo9 from "../assets/IMG_7785.jpg"0
import photo8 from "../assets/imggg3.jpg"
import photo2 from "../assets/careimg.jpg"
import photo18 from "../assets/cutepet.jpg"
import photo21  from  "../assets/snowpet.jpg"
import photo22  from  "../assets/standdog.jpg"
import photo23  from  "../assets/ss.png" 
import photo24  from  "../assets/fswalk.jpg"
import photo29  from  "../assets/sit.jpg"
import photo28  from  "../assets/stand.jpg"

const Gallery = () => {
  
  return (
    <div>
      <div className="text-center mt-18 mb-12 relative">
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2"></div>
        <h1 className="text-4xl font-bold text-cyan-900 font-serif mb-3">
          🐾 Paw-some Moments
        </h1>
        <h2 className="text-xl text-gray-600 font-serif">
          A Gallery of Adorable Moments
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 mx-5">
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={photo1}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={photo21}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={photo22}
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={photo8}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={photo23}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={photo24}
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={photo3}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={photo18}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={photo21}
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={photo2}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={photo28}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={photo29}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
