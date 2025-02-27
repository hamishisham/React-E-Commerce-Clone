import { useState } from "react";
import { adsItem } from "../../services/adsInfo";

function DifferentAdsItem() {
  const [currentImg, setCurrentImg] = useState(adsItem[0]);
  function handleClickImage(e) {
    setCurrentImg(e.target.src);
  }
  return (
    <div className="py-5 px-3 flex flex-col  gap-2 lg:w-[21%] sm:w-4/5 md:w-[45%]  bg-slate-200">
      <h2 className="lg:text-2xl font-bold text-wrap w-4/5 sm:text-xl ">
        Best Sellers in Toys & Games
      </h2>
      <div className="flex justify-center w-full h-36 bg-white">
        <img src={currentImg} alt="" className="w-72 h-full " />
      </div>
      <div className="flex flex-col gap-5 px-2">
        <p className="text-[11.58px] font-normal w-full text-wrap">
          Storio Rechargeable Toys Talking Cactus Baby Toys for Kids Dancing
          Cactus Toys…
        </p>
        <p className="text-[20.02px]">
          <sup>₹</sup>319<sup>00</sup>
        </p>
        <div className="flex gap-3 justify-evenly ">
          {adsItem.map((item, index) => (
            <div
              className="w-14 rounded-md border-2 relative p-3 cursor-pointer "
              style={{
                border: currentImg === item ? "2px solid #1f8394" : undefined,
              }}
              onClick={(e) => handleClickImage(e)}
            >
              <img
                src={item}
                alt=""
                className="w-full h-full rounded-md  ring-2 ring-[#1f8394] "
                key={index}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DifferentAdsItem;
