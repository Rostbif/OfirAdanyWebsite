import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex flex-col px-10">
      <div className="flex flex-row justify-between m-4">
        <div>
          <img
            src="../public/OfirAdanyLogo.png"
            alt="Ofir Adany Logo"
            style={{ width: 200, height: 48 }}
            className="shadow-lg shadow-black-500"
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex gap-2">
            <NavLink to="/" className="hover:font-bold drop-shadow-md">
              Home
            </NavLink>
            <div className="justify-self-center">|</div>
            <NavLink to="/blog" className="hover:font-bold drop-shadow-md">
              Blog
            </NavLink>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Header;
