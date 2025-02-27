import PropTypes from "prop-types";

const PricingSection = ({ price, discount, emi }) => (
  <div className="mt-4">
    <p className="text-xl font-semibold">{price}</p>
    <p className="text-green-500">{discount}</p>
    <p className="text-gray-600">EMI Options: {emi}</p>
  </div>
);

PricingSection.propTypes = {
  price: PropTypes.string.isRequired,
  discount: PropTypes.string.isRequired,
  emi: PropTypes.string.isRequired,
};

export default PricingSection;
