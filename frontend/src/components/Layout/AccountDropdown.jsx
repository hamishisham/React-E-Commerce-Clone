import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

const AccountDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Extract user from Redux store
  const { user } = useSelector((state) => state.auth);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  const handleLogout = async () => {
    await dispatch(logoutUser());
    navigate("/login");
  };

  const handleLogin = () => navigate("/login");
  const handleRegister = () => navigate("/register");
  const handleNavigation = (path) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="px-4 py-2 bg-gray-900 text-white rounded-md border border-transparent hover:border-white">
        <span>Hello, {user ? user.name.split(" ")[0] : "Sign in"}</span>
        <div className="font-bold">Account & Lists</div>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white border rounded-lg shadow-lg p-4 z-50">
          {!user ? (
            <div className="pb-3 border-b text-center">
              <button
                className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600"
                onClick={handleLogin}
              >
                Sign In
              </button>
              <p className="text-sm text-gray-600 mt-1">
                New customer?{" "}
                <button
                  onClick={handleRegister}
                  className="text-blue-500 hover:underline"
                >
                  Start here
                </button>
              </p>
            </div>
          ) : (
            <div className="flex mt-3">
              <div className="w-1/2 pr-3 border-r">
                <h3 className="font-bold text-gray-700">Your Lists</h3>
                <button
                  onClick={() => handleNavigation("/lists")}
                  className="text-blue-500 block mt-1 hover:underline"
                >
                  Create a List
                </button>
              </div>

              <div className="w-1/2 pl-3">
                <h3 className="font-bold text-gray-700">Your Account</h3>
                <ul className="text-sm text-gray-600 space-y-1 mt-1">
                  {[
                    { label: "Your Account", path: "/account" },
                    { label: "Your Orders", path: "/orders" },
                    { label: "Your Addresses", path: "/addresses" },
                    { label: "Your Lists", path: "/lists" },
                    { label: "Your Recommendations", path: "/recommendations" },
                    {
                      label: "Your Subscribe & Save Items",
                      path: "/subscribe",
                    },
                    { label: "Your Prime Membership", path: "/prime" },
                    { label: "Your Seller Account", path: "/seller" },
                  ].map(({ label, path }) => (
                    <li key={path}>
                      <button
                        onClick={() => handleNavigation(path)}
                        className="hover:text-blue-500 w-full text-left"
                      >
                        {label}
                      </button>
                    </li>
                  ))}
                  <li>
                    <button
                      className="text-red-500 hover:text-red-700 w-full text-left"
                      onClick={handleLogout}
                    >
                      Sign Out
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AccountDropdown;
