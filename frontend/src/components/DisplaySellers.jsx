import { useEffect, useRef, useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
function DisplaySellers({ title, sellersImages, link = "" }) {
  // Refs to get the width of the <ul> and <div> elements
  const ulElem = useRef(null);
  const divElem = useRef(null);
  // States to manage the translate li elements and progress bar
  const [translateVal, setTranslateVal] = useState(0);
  const [translateProgress, setTranslateProgress] = useState(0);
  const [divWidth, setDivWidth] = useState(1 / 4);

  // set width of the progress bar
  useEffect(() => {
    if (ulElem.current) {
      console.log("sellersImages.length:", sellersImages.length); // Debug: Check length
      const ulWidth = ulElem.current.offsetWidth;
      const liWidth = 224; // Fixed width of each <li>
      setDivWidth(
        Math.floor(
          (ulWidth /
            Math.round((liWidth * sellersImages.length) / ulWidth) /
            ulWidth) *
            100
        )
      );
    }
  }, [sellersImages.length]);
  function nextSlide() {
    const imagesPerSlide = Math.floor(ulElem.current.offsetWidth / 224);
    console.log(translateVal);
    if (
      Math.abs(translateVal) <
      224 * (sellersImages.length - imagesPerSlide)
    ) {
      setTranslateProgress((prev) => {
        const newValue = prev + divElem?.current.offsetWidth - 5;
        return newValue;
      });

      setTranslateVal((prev) => {
        const newValue = Math.abs(prev) + ulElem?.current.offsetWidth;
        return -newValue;
      });
    }
  }
  function prevSlide() {
    console.log(Math.abs(translateVal));
    if (Math.abs(translateVal) > 0) {
      setTranslateProgress((prev) => {
        const newValue = prev - divElem?.current.offsetWidth;
        return newValue;
      });
      setTranslateVal((prev) => {
        const newValue = Math.abs(prev) - ulElem?.current.offsetWidth;
        return -newValue;
      });
    }
  }
  return (
    <div className="bg-white relative py-6 ps-8 font-bold text-2xl w-[89.3%]  m-auto flex flex-col justify-between gap-3">
      <div className="flex gap-4 ">
        <h2>{title}</h2>
        <a href="#" className="text-[#1f8394] no-underline font-normal">
          {link}
        </a>
      </div>
      <ul className="flex gap-4 relative overflow-hidden" ref={ulElem}>
        {sellersImages.map((item, index) => {
          return (
            <li
              className={`w-56 h-56 transition duration-1000`}
              style={{ transform: `translateX(${translateVal}px)` }}
              key={index}
            >
              <img
                src={item}
                alt="sellerImage"
                className="w-56 max-w-none h-full"
              />
            </li>
          );
        })}
        {/* Arrows */}
        <div className="absolute flex justify-between w-full top-1/3 left-0">
          <MdArrowBackIos
            className={`bg-white rounded py-8 px-1 cursor-pointer w-10 h-24 left-1 ${
              !translateVal && "opacity-50"
            } `}
            onClick={prevSlide}
          />
          <MdArrowForwardIos
            className={`bg-white py-8 px-1  rounded cursor-pointer w-10 h-24`}
            onClick={nextSlide}
          />
        </div>
      </ul>
      {/* Progress Bar */}
      <div
        className={`h-1 rounded-s-3xl  bg-[#8d8d8d] transition duration-1000`}
        ref={divElem}
        style={{
          transform: `translateX(${translateProgress}px)`,
          width: `${divWidth}%`,
        }}
      ></div>
    </div>
  );
}

export default DisplaySellers;
