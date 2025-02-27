import PropTypes from "prop-types";

const ProductHighlights = ({ highlights }) => (
  <div className="mt-4">
    <h3 className="text-lg font-bold">Product Highlights:</h3>
    <ul className="list-disc pl-5 text-gray-700">
      {highlights.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

ProductHighlights.propTypes = {
  highlights: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProductHighlights;
