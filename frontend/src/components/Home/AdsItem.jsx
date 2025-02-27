import Ads from "./Ads";

import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const AdsItem = ({ adsInfo }) => {
  const navigate = useNavigate();
  // console.log(adsInfo);
  return (
    <div
      className="py-5 px-3 flex flex-col justify-between gap-3 lg:w-[21%] sm:w-4/5 md:w-[45%] cursor-pointer bg-white"
      onClick={() => navigate("/products")}
    >
      <h2 className="lg:text-2xl sm:text-xl  font-bold text-wrap w-4/5 ">
        {adsInfo.header}
      </h2>
      <div className="flex flex-col gap-10">
        <div className="flex flex-wrap gap-3  w-full ">
          {adsInfo.images.map((item) => (
            <Ads img={item.src} title={item.title} key={item.title} />
          ))}
        </div>
        <a href="#" className="no-underline font-bold  text-[#1f8394] ">
          {adsInfo.link}
        </a>
      </div>
    </div>
  );
};

AdsItem.propTypes = {
  header: PropTypes.node.isRequired, // Ensures 'header' is a valid React node and required
  link: PropTypes.node.isRequired, // Ensures 'link' is a valid React node and required
};

export default AdsItem;
