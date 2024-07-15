import { useForm } from "react-hook-form";
import styles from "./Login.module.css";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api/api-client";
import { useAppContext } from "../contexts/AppContext";
import { Link, useNavigate } from "react-router-dom";

export type LoginFormData = {
  email: string;
  password: string;
};

export const Login = () => {
  const queryClient = useQueryClient();
  const { showToast } = useAppContext();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginFormData>();

  const mutation = useMutation(apiClient.signIn, {
    onSuccess: async () => {
      console.log("user signed in successfully");
      // show toast
      showToast({ message: "Successful login!", type: "Success" });
      // validate token
      // navigate to admin panel
      navigate("/");
    },
    onError: (error: Error) => {
      // show the error toast
      showToast({ message: "Unsuccessful login!", type: "Error" });
      console.log("the error:", error);
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <form className={styles.loginContainer} onSubmit={onSubmit}>
      <label className="flex flex-col">
        <span className="font-bold"> Email: </span>
        <input
          type="text"
          placeholder="Enter Email"
          {...register("email", { required: "Email is required" })}
        ></input>
        {errors.email && (
          <span className="text-red-500"> {errors.email.message} </span>
        )}
      </label>
      <label className="flex flex-col">
        <span className="font-bold"> Password: </span>
        <input
          type="password"
          placeholder="Enter password"
          {...register("password", { required: "password is required" })}
        ></input>
        {errors.password && (
          <span className="text-red-500"> {errors.password.message} </span>
        )}
      </label>
      <button
        type="submit"
        className="bg-blue-300 text-white p-2 font-bold hover:bg-blue-100 text-xl"
      >
        Login
      </button>
      <span className="text-sm">
        {" "}
        Not registered?{" "}
        <Link to="/register" className="underline">
          {" "}
          Create an Account{" "}
        </Link>
      </span>
    </form>
  );
};

export default Login;
