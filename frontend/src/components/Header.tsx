import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { useAppContext } from "../contexts/AppContext";

const Header = () => {
  const { isLoggedIn } = useAppContext();

  return (
    <div className="flex px-10 flex-col">
      <div className="flex flex-row items-center m-4">
        <div className="flex-grow">
          <img
            src="../public/OfirAdanyLogo.png"
            alt="Ofir Adany Logo"
            style={{ width: 200, height: 48 }}
            className="shadow-lg shadow-black-500"
          />
        </div>

        {/* Insert here the name of the logged in user + logout option */}
        <div>
          <span> Welcome </span>
          {isLoggedIn ? " user + logout" : " guest"}
        </div>

        <div className="flex flex-col justify-end flex-grow">
          <div className="flex gap-2">
            <NavLink to="/" className="hover:font-bold drop-shadow-md">
              Home
            </NavLink>
            <div className="justify-self-center">|</div>
            <NavLink to="/about-me" className="hover:font-bold drop-shadow-md">
              About Me
            </NavLink>
            <div className="justify-self-center">|</div>
            <NavLink to="/about-me" className="hover:font-bold drop-shadow-md">
              Projects
            </NavLink>
            <div className="justify-self-center">|</div>
            <NavLink to="/blog" className="hover:font-bold drop-shadow-md">
              Blog
            </NavLink>
            {isLoggedIn && (
              <>
                <div className="justify-self-center">|</div>
                <NavLink
                  to="/admin-panel"
                  className="hover:font-bold drop-shadow-md"
                >
                  Admin Panel
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Header;
