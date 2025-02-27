import PropTypes from "prop-types";

const ProductInfo = ({ brand, title, rating, reviewsCount }) => (
  <div>
    <h2 className="text-xl font-bold">{brand}</h2>
    <p className="text-gray-700">{title}</p>
    <p className="text-yellow-500">⭐ {rating} ({reviewsCount} reviews)</p>
  </div>
);

ProductInfo.propTypes = {
  brand: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  reviewsCount: PropTypes.number.isRequired,
};

export default ProductInfo;
