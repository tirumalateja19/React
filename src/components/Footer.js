import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 h-[80px] flex flex-col justify-center items-center">
      <div className="container mx-auto px-6 flex justify-between items-center w-full">
        <div className="text-left">
          <h2 className="text-lg font-bold mt-1">GrabNow</h2>
          <p className="text-xs">A Food Delivary Application</p>
        </div>

        <div className="flex space-x-4">
          <a href="#" className="text-white text-lg hover:text-gray-300">
            <FaFacebook />
          </a>
          <a href="#" className="text-white text-lg hover:text-gray-300">
            <FaTwitter />
          </a>
          <a href="#" className="text-white text-lg hover:text-gray-300">
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className="w-full text-center text-xs text-gray-200 mt-2">
        © {new Date().getFullYear()} GrabNow. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
