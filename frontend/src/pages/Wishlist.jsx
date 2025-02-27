import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../redux/slices/wishlistSlice";
import { addToCart } from "../redux/slices/cartSlice";
import Layout from "../components/Layout/Layout";
import WishlistProductCard from "../components/Wishlist/WishlistProductCard";

const Wishlist = () => {
  const wishlistItems = useSelector((state) => state.wishlist?.items || []); // Ensure it is always an array
  const dispatch = useDispatch();

  const handleRemoveFromWishlist = (id) => {
    dispatch(removeFromWishlist(id));
  };

  const handleMoveToCart = (item) => {
    dispatch(addToCart({ ...item, quantity: 1 }));
    dispatch(removeFromWishlist(item.id));
  };

  return (
    <Layout>
      <div className="max-w-3xl mx-auto bg-white p-4 shadow-md rounded-md">
        <h2 className="text-xl font-semibold mb-4">Your Wishlist</h2>

        {wishlistItems.length > 0 ? (
          wishlistItems.map((item) => (
            <WishlistProductCard
              key={item.id}
              item={item}
              onRemove={handleRemoveFromWishlist}
              onMoveToCart={() => handleMoveToCart(item)}
            />
          ))
        ) : (
          <p className="text-center text-gray-500">Your wishlist is empty.</p>
        )}
      </div>
    </Layout>
  );
};

export default Wishlist;
