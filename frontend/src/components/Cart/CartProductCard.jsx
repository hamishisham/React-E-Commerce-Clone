import PropTypes from "prop-types";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeFromCart, increaseQuantity, decreaseQuantity } from "../../redux/slices/cartSlice";

const CartProductCard = ({ item = {} }) => {
  const dispatch = useDispatch();

  return (
    <div className="border-t pt-4 pb-4">
      <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
        <img
          src={item?.image || "default-image.jpg"}
          alt={item?.name || "Product"}
          className="w-24 h-24 object-cover border rounded-md"
        />

        <div className="flex-1 text-center sm:text-left">
          <h3 className="text-sm font-semibold">{item?.name || "Unknown Product"}</h3>
          <p className="text-green-600 text-xs">{item?.stockStatus || "Unavailable"}</p>
          <p className="text-gray-500 text-xs">Eligible for FREE delivery</p>
          <p className="text-gray-700 text-xs">
            <span className="font-semibold">Colour:</span> {item?.color || "N/A"}
          </p>
          <p className="text-gray-700 text-xs">
            <span className="font-semibold">Size:</span> {item?.size || "N/A"}
          </p>
          <p className="text-gray-700 text-xs">
            <span className="font-semibold">Pattern Name:</span> {item?.pattern || "N/A"}
          </p>

          <div className="flex items-center justify-center sm:justify-start gap-2 mt-2">
            <button className="border px-2 py-1 rounded-md bg-gray-100 hover:bg-gray-200 text-xs"
             onClick={() => dispatch(decreaseQuantity(item.id))}>
              <FaMinus />
            </button>
            <span className="px-2 py-1 border rounded-md bg-white text-xs">
              {item?.quantity ?? 1}
            </span>
            <button className="border px-2 py-1 rounded-md bg-gray-100 hover:bg-gray-200 text-xs" 
            onClick={() => dispatch(increaseQuantity(item.id))}>
              <FaPlus />
            </button>

            <button className="text-red-500 hover:text-red-600 flex items-center gap-1 text-xs"
            onClick={() => dispatch(removeFromCart(item.id))}>
              <FaTrash />
              <span>Delete</span>
            </button>
          </div>
        </div>

        <div className="text-center sm:text-right w-full sm:w-auto">
          {item?.discount && (
            <span className="text-red-500 font-semibold text-xs bg-red-100 px-2 py-1 rounded">
              {item.discount}
            </span>
          )}
          <p className="text-sm font-bold text-gray-900">
            EGP {item?.price?.toLocaleString() || "0.00"}
          </p>
          {item?.oldPrice && (
            <p className="text-gray-500 line-through text-xs">
              EGP {item.oldPrice.toLocaleString()}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

// ✅ Define PropTypes
CartProductCard.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    stockStatus: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.string,
    pattern: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number,
    oldPrice: PropTypes.number,
    discount: PropTypes.string,
  }).isRequired,
};

export default CartProductCard;