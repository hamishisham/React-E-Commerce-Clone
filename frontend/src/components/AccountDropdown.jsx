import { useState, useRef } from "react";

const AccountDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current); // Cancel any pending close event
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 300); // Add a short delay before closing
  };

  return (
    <div 
      className="relative" 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      {/* Hoverable Button */}
      <button className="px-4 py-2 bg-gray-900 text-white rounded-md border border-transparent hover:border-white">
      <span>Hello, sign in</span>
      <div className="font-bold">Account&Lists</div>
</button>
      {/* Dropdown Content */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white border rounded-lg shadow-lg p-4 z-50">
          {/* Top Section - Sign In */}
          <div className="pb-3 border-b text-center">
            <button className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600">
              Sign In
            </button>
            <p className="text-sm text-gray-600 mt-1">
              New customer?{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Start here
              </a>
            </p>
          </div>

          {/* Main Section - Two Columns */}
          <div className="flex mt-3">
            {/* Left Section - Your Lists */}
            <div className="w-1/2 pr-3 border-r">
              <h3 className="font-bold text-gray-700">Your Lists</h3>
              <a href="#" className="text-blue-500 block mt-1 hover:underline">
                Create a List
              </a>
            </div>

            {/* Right Section - Your Account */}
            <div className="w-1/2 pl-3">
              <h3 className="font-bold text-gray-700">Your Account</h3>
              <ul className="text-sm text-gray-600 space-y-1 mt-1">
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Your Account
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Your Orders
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Your Addresses
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Your Lists
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Your Recommendations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Your Subscribe & Save Items
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Your Prime Membership
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Your Seller Account
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountDropdown;
