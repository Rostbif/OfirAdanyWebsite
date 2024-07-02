import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col bg-slate-500 h-12 justify-center justify-items-center">
      <div className="flex justify-center">
        <Link to="/privacPolicy">Privacy Policy</Link>|
        <Link to="/privacPolicy">Terms of Service</Link>|
        <Link to="/privacPolicy">Contact</Link>
      </div>
    </div>
  );
};

export default Footer;
