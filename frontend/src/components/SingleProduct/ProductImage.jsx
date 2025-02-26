import PropTypes from "prop-types";

const ProductImage = ({ imageUrl }) => (
  <div className="w-full">
    <img src={imageUrl} alt="Product" className="w-full h-auto rounded-lg" />
  </div>
);

ProductImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default ProductImage;
