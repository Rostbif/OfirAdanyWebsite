import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="grid grid-cols-5 items-center bg-sky-500 h-12">
      <div className="col-start-3 drop-shadow-md flex justify-center">
        <Link to="/privacPolicy">Privacy Policy</Link>
        <span> | </span>
        <Link to="/termsOfService">Terms of Service</Link>
        <span> | </span>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="col-start-5 drop-shadow-md">
        {new Date().getFullYear() + " Ofir Adany. All rights reserved."}
      </div>
    </div>
  );
};

export default Footer;
