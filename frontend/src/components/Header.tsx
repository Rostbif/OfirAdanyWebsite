import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import { useAppContext } from "../contexts/AppContext";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api/api-client";

const Header = () => {
  const { isLoggedIn, showToast } = useAppContext();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutation = useMutation(apiClient.logout, {
    onSuccess: () => {
      queryClient.invalidateQueries("validateToken");
      console.log("user signed out successfully");
      showToast({ message: "Successful logut!", type: "Success" });
      // validate token
      navigate("/");
    },
    onError: (error: Error) => {
      // show the error toast
      showToast({ message: "Unsuccessful logout!", type: "Error" });
      console.log("the error:", error);
    },
  });

  const handleClick = () => {
    mutation.mutate();
  };

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
          {isLoggedIn ? (
            <span>
              {" "}
              user{" "}
              <button className="underline text-blue-500" onClick={handleClick}>
                {" "}
                Logout{" "}
              </button>
            </span>
          ) : (
            " guest"
          )}
        </div>

        <div className="flex flex-col justify-end flex-grow">
          <div className="flex gap-2 self-end">
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
