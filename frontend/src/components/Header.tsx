import { NavLink, useNavigate, Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useAppContext } from "../contexts/AppContext";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api/api-client";

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
    <div className="flex px-10 flex-col bg-gray-800 text-white shadow-lg">
      <div className="flex items-center justify-between m-4">
        <div className="flex-1">
          <Link to="/">
            <img
              src="../public/OfirAdanyLogo.png"
              alt="Ofir Adany Logo"
              style={{ width: 200, height: 48 }}
              className="shadow-lg"
            />
          </Link>
        </div>

        {/* Insert here the name of the logged in user + logout option */}
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

        <div className="flex flex-col flex-1">
          <div className="flex gap-4 self-end">
            <NavLink to="/" className="hover:underline">
              Home
            </NavLink>
            <div className="justify-self-center">|</div>
            <NavLink to="/about" className="hover:underline">
              About Me
            </NavLink>
            <div className="justify-self-center">|</div>
            <NavLink to="/projects" className="hover:underline">
              Projects
            </NavLink>
            <div className="justify-self-center">|</div>
            <NavLink to="/blog" className="hover:underline">
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
