import { NavLink, useNavigate, Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useAppContext } from "../contexts/AppContext";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api/api-client";
import OfirAdanyLogo from "../../public/OfirAdanyLogo.png";

const Header = () => {
  const { isLoggedIn, showToast, userName } = useAppContext();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutation = useMutation(apiClient.logout, {
    onSuccess: () => {
      queryClient.invalidateQueries("validateToken");
      console.log("user signed out successfully");
      showToast({ message: "Successful logout!", type: "Success" });
      navigate("/");
    },
    onError: (error: Error) => {
      showToast({ message: "Unsuccessful logout!", type: "Error" });
      console.log("the error:", error);
    },
  });

  const handleClick = () => {
    mutation.mutate();
  };

  return (
    <div className="flex px-10 flex-col border-b-gradient">
      <div className="flex items-center justify-between m-4">
        {/* The logo feature */}
        <div className="flex-1">
          <Link to="/">
            <img
              src={OfirAdanyLogo}
              alt="Ofir Adany Logo"
              style={{ width: 200, height: 48 }}
              className="shadow-lg"
            />
          </Link>
        </div>

        {/* Insert here the name of the logged in user + logout option */}
        {/* The login feature */}
        <div className="flex-1 flex justify-center">
          <div>
            {isLoggedIn ? (
              <div>
                <span> Welcome </span>
                <span>
                  {" "}
                  {userName}
                  {", "}
                  <button className="underline" onClick={handleClick}>
                    {" "}
                    Logout{" "}
                  </button>
                </span>
              </div>
            ) : (
              <></>
              // <span>
              //   {" "}
              //   guest{", "}
              //   <Link className="underline" to="/login">
              //     {" "}
              //     Login{" "}
              //   </Link>{" "}
              // </span>
            )}
          </div>
        </div>

        {/* The menu feature */}
        <div className="flex flex-col flex-1 text-2xl font-semibold tracking-wide">
          <div className="flex gap-6 self-end">
            <NavLink to="/" className="">
              Home
            </NavLink>
            {/* <div className="justify-self-center">|</div> */}
            <NavLink to="/about" className="">
              About
            </NavLink>
            {/* <div className="justify-self-center">|</div> */}
            <NavLink to="/projects" className="">
              Projects
            </NavLink>
            {/* <div className="justify-self-center">|</div> */}
            <NavLink to="/blog" className="">
              Blog
            </NavLink>
            {isLoggedIn && (
              <>
                <div className="justify-self-center">|</div>
                <NavLink to="/admin-panel" className="hover:font-bold">
                  Admin Panel
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
