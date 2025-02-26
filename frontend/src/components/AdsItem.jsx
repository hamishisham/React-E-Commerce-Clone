import Ads from "./Ads";

import PropTypes from "prop-types";

// const adsImages = [
//   {
//     id: 4,
//     src: ads1,
//     title: "Cushion covers, bedsheets & more",
//   },
//   {
//     id: 2,
//     src: ads2,
//     title: "Figurines, vases & more",
//   },
//   {
//     id: 3,
//     src: ads3,
//     title: "Home storage",
//   },
//   {
//     id: 4,
//     src: ads4,
//     title: "Lighting solutions",
//   },
// ];
const AdsItem = ({ adsInfo }) => {
  // console.log(adsInfo);
  return (
    <div className="py-5 px-3 flex flex-col justify-between gap-3 w-[21%]  bg-slate-200">
      <h2 className="text-2xl font-bold text-wrap w-4/5 ">{adsInfo.header}</h2>
      <div className="flex flex-col gap-10">
        <div className="flex flex-wrap gap-3 w-full ">
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
