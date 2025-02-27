import PropTypes from "prop-types";

const Ads = ({ img, title = "" }) => {
  return (
    <div className="flex gap-1 flex-col  sm:w-[40%]  h-40 justify-between ">
      <img src={img} alt="" className="w-full h-full " />
      <p className="text-xs font-normal w-full text-wrap">{title || ""}</p>
    </div>
  );
};
Ads.propTypes = {
  img: PropTypes.node.isRequired, // Ensures 'img' is a valid React node and required
  title: PropTypes.node.isRequired, // Ensures 'title' is a valid React node and required
};

export default Ads;
