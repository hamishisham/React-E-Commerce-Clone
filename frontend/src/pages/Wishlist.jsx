import { useState } from "react";
import Layout from "../components/Layout/Layout";
import WishlistProductCard from "../components/Wishlist/WishlistProductCard";
import productImage from "../assets/image.png"; // Replace with actual image

const initialWishlistItems = [
  {
    id: 1,
    name: "Samsung Galaxy A55 5G, Android Smartphone, Dual SIM Mobile Phone, 8GB RAM, 128GB Storage, Awesome Navy",
    image: productImage,
    price: 19999,
  },
  {
    id: 2,
    name: "Apple iPhone 15 Pro Max, 256GB, Titanium Blue",
    image: productImage,
    price: 49999,
  },
];

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState(initialWishlistItems);

  const removeFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  return (
    <Layout>
      <div className="max-w-3xl mx-auto bg-white p-4 shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">Wishlist</h2>

        {wishlistItems.length > 0 ? (
          wishlistItems.map((item) => (
            <WishlistProductCard key={item.id} item={item} onRemove={removeFromWishlist} />
          ))
        ) : (
          <p className="text-center text-gray-500">Your wishlist is empty.</p>
        )}
      </div>
    </Layout>
  );
};

export default Wishlist;
