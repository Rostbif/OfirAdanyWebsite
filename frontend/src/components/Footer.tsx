import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col items-center bg-gray-800 text-white py-4 shadow-lg">
      <div className="flex space-x-4 mb-2">
        <Link to="/privacyPolicy" className="hover:underline">
          Privacy Policy
        </Link>
        <span>|</span>
        <Link to="/termsOfService" className="hover:underline">
          Terms of Service
        </Link>
        <span>|</span>
        <Link to="/contact" className="hover:underline">
          Contact
        </Link>
      </div>
      <div className="text-sm">
        {new Date().getFullYear() + " Ofir Adany. All rights reserved."}
      </div>
    </div>
  );
};

export default Footer;
