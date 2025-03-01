import { FiGlobe } from "react-icons/fi";
import amazon from "../../assets/Amazon.png";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white  mt-10 text-sm">
      {/* Back to Top */}
      <div
        className="w-full bg-gray-700 text-center py-3 cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Back to Top
      </div>

      {/* Footer Links */}
      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 py-6 bg-gray-800 px-6">
        <div>
          <h3 className="font-bold mb-2">Get to Know Us</h3>
          <ul className="space-y-1">
            <li className="hover:underline cursor-pointer">About Us</li>
            <li className="hover:underline cursor-pointer">Careers</li>
            <li className="hover:underline cursor-pointer">Press Releases</li>
            <li className="hover:underline cursor-pointer">Amazon Science</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Connect with Us</h3>
          <ul className="space-y-1">
            <li className="hover:underline cursor-pointer">Facebook</li>
            <li className="hover:underline cursor-pointer">Twitter</li>
            <li className="hover:underline cursor-pointer">Instagram</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Make Money with Us</h3>
          <ul className="space-y-1">
            <li className="hover:underline cursor-pointer">Sell on Amazon</li>
            <li className="hover:underline cursor-pointer">Sell under Amazon Accelerator</li>
            <li className="hover:underline cursor-pointer">Protect and Build Your Brand</li>
            <li className="hover:underline cursor-pointer">Amazon Global Selling</li>
            <li className="hover:underline cursor-pointer">Supply to Amazon</li>
            <li className="hover:underline cursor-pointer">Become an Affiliate</li>
            <li className="hover:underline cursor-pointer">Fulfilment by Amazon</li>
            <li className="hover:underline cursor-pointer">Advertise Your Products</li>
            <li className="hover:underline cursor-pointer">Amazon Pay on Merchants</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Let Us Help You</h3>
          <ul className="space-y-1">
            <li className="hover:underline cursor-pointer">Your Account</li>
            <li className="hover:underline cursor-pointer">Returns Center</li>
            <li className="hover:underline cursor-pointer">Recalls and Products Safety Alerts</li>
            <li className="hover:underline cursor-pointer">100% Purchase Protection</li>
            <li className="hover:underline cursor-pointer">Amazon App Download</li>
            <li className="hover:underline cursor-pointer">Help</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full bg-gray-800 py-4 text-center flex flex-wrap justify-center gap-6 px-6">
        <img src={amazon} alt="Amazon Logo" className="w-16 h-auto" />

        <div className="border px-2 py-1 flex items-center gap-2 cursor-pointer">
          <FiGlobe /> English
        </div>
        <div className="border px-2 py-1 flex items-center gap-2 cursor-pointer">
          <img src="https://flagcdn.com/w40/in.png" alt="India Flag" className="h-4" />
          India
        </div>
      </div>

      {/* Additional Links */}
      <div className="w-full bg-gray-900 py-6 text-left text-s px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="hover:underline cursor-pointer">
            <h3 className="font-bold mb-2 text-gray-400">AbeBooks</h3>
            <p className="text-gray-500">Books, art & collectibles</p>
          </div>
          <div className="hover:underline cursor-pointer">
            <h3 className="font-bold mb-2 text-gray-400">Amazon Web Services</h3>
            <p className="text-gray-500">Scalable Cloud Computing Services</p>
          </div>
          <div className="hover:underline cursor-pointer">
            <h3 className="font-bold mb-2 text-gray-400">Audible</h3>
            <p className="text-gray-500">Download Audio Books</p>
          </div>
          <div className="hover:underline cursor-pointer">
            <h3 className="font-bold mb-2 text-gray-400">IMDb</h3>
            <p className="text-gray-500">Movies, TV & Celebrities</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-14">
          <div className="hover:underline cursor-pointer">
            <h3 className="font-bold mb-2 text-gray-400">Shop bop</h3>
            <p className="text-gray-500">Designer
            Fashion Brands</p>
          </div>
          <div className="hover:underline cursor-pointer">
            <h3 className="font-bold mb-2 text-gray-400">Amazon Business</h3>
            <p className="text-gray-500">Everything For
            Your Business</p>
          </div>
          <div className="hover:underline cursor-pointer">
            <h3 className="font-bold mb-2 text-gray-400">Prime Now</h3>
            <p className="text-gray-500">2-Hour Delivery
            on Everyday Items</p>
          </div>
          <div className="hover:underline cursor-pointer">
            <h3 className="font-bold mb-2 text-gray-400">Amazon Prime Music</h3>
            <p className="text-gray-500">100 million sings, ad-free
            Over 15 million podcast episodes</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="w-full text-center text-xs mt-4">
        <p className="text-gray-400 hover:underline cursor-pointer">
          Conditions of Use & Sale | Privacy Notice | Interest-Based Ads
        </p>
        <p className="text-gray-500">© 1996-2024, Amazon.com, Inc. or its affiliates</p>
      </div>
    </footer>
  );
};

export default Footer;
