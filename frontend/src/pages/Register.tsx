import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import * as apiClient from "../api/api-client";

export type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RegisterFormData>();
  const navigate = useNavigate();
  const { showToast } = useAppContext();

  const mutation = useMutation(apiClient.register, {
    onSuccess: () => {
      console.log("successful registration:");
      showToast({ type: "Success", message: "Succesfull registration" });
      navigate("/");
    },
    onError: (error) => {
      console.log("Error in processing the request:", error);
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <form className="flex flex-col gap-5" onSubmit={onSubmit}>
      <h2 className="text-3xl font-bold"> Create an Account</h2>
      <label className="flex flex-col md:flex-row gap-5">
        First Name:
        <input
          type="text"
          placeholder="Insert first Name"
          {...register("firstName", {
            required: { value: true, message: "First name is required" },
          })}
        ></input>
        {errors.firstName && (
          <span className="text-red-400"> {errors.firstName.message} </span>
        )}
      </label>
      <label className="flex flex-col md:flex-row gap-5">
        Last Name:
        <input
          type="text"
          placeholder="Insert last Name"
          {...register("lastName", {
            required: { value: true, message: "Last name is required" },
          })}
        ></input>
        {errors.lastName && (
          <span className="text-red-400"> {errors.lastName.message} </span>
        )}
      </label>
      <label className="flex flex-col md:flex-row gap-5">
        Email:
        <input
          type="email"
          placeholder="Insert your email"
          {...register("email", {
            required: { value: true, message: "Email is required" },
          })}
        ></input>
        {errors.email && (
          <span className="text-red-400"> {errors.email.message} </span>
        )}
      </label>
      <label className="flex flex-col md:flex-row gap-5">
        Password:
        <input
          type="password"
          placeholder="Insert password"
          {...register("password", {
            required: { value: true, message: "Password is required" },
          })}
        ></input>
        {errors.password && (
          <span className="text-red-400"> {errors.password.message} </span>
        )}
      </label>
      <label className="flex flex-col md:flex-row gap-5">
        Confirm Password:
        <input
          type="password"
          placeholder="Insert password again"
          {...register("confirmPassword", {
            validate: (value) => {
              if (!value) {
                return "Confirm password is required";
              } else if (watch("password") !== value) {
                return "Passwords do not match";
              }
            },
          })}
        ></input>
        {errors.confirmPassword && (
          <span className="text-red-400">
            {" "}
            {errors.confirmPassword.message}{" "}
          </span>
        )}
      </label>
      <button
        type="submit"
        className="bg-blue-600 text-white p-2 font-bold hover:bg-blue-500 text-x1"
      >
        {" "}
        Register{" "}
      </button>
      {mutation.isLoading && <span> Loading... </span>}
    </form>
  );
};

export default Register;
