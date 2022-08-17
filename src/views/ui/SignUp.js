import React, { useEffect, useRef } from "react";
import logo from "../../assets/images/logos/logo.png";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loading from "../../layouts/loader/Loader";
import "./Login.css";
import auth from "../../firebase.init";

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  let signInError;

  const emailRef = useRef("");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);
  if (error) {
    signInError = (
      <p className="text-red-500">
        <small>{error?.message}</small>
      </p>
    );
  }
  if (loading) {
    return <Loading></Loading>;
  }
  const onSubmit = async (data) => {
    console.log("update done");
    createUserWithEmailAndPassword(data.email, data.password);
  };

  return (
    <div class="login-wrapper">
      <div class="logo">
        <img src={logo} alt="" />
      </div>
      <div class="text-center mt-4 name">Nextech Limited</div>
      <form class="p-3 mt-3" onSubmit={handleSubmit(onSubmit)}>
        <div class="form-field d-flex align-items-center">
          <span class="far fa-user"></span>
          <input
            name="email"
            type="email"
            id="userName"
            placeholder="Your Email"
            className="input input-bordered w-full max-w-xs"
            ref={emailRef}
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /[A-Za-z]{3}/,
                message: "Provide a valid email",
              },
            })}
          />
          <label className="label">
            {errors.email?.type === "required" && (
              <span className="label-text-alt text-red-600">
                {errors.email.message}
              </span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="label-text-alt text-red-600">
                {errors.email.message}
              </span>
            )}
          </label>
        </div>
        <div class="form-field d-flex align-items-center">
          <span class="fas fa-key"></span>
          <input
            type="password"
            placeholder="Password"
            id="pwd"
            className="input input-bordered w-full max-w-xs"
            {...register("password", {
              required: {
                value: true,
                message: "Password is required",
              },
              minLength: {
                value: 6,
                message: "Must be 6 characters or longer",
              },
            })}
          />
        </div>
        <label className="label">
          {errors.password?.type === "required" && (
            <span className="label-text-alt text-red-600">
              {errors.password.message}
            </span>
          )}
          {errors.password?.type === "minLength" && (
            <span className="label-text-alt text-red-600">
              {errors.password.message}
            </span>
          )}
        </label>
        {signInError}
        <button class="btn mt-3" type="submit">
          Sign Up
        </button>
      </form>
      <div class="text-center fs-6">
        <a href="#">Already have an account?</a> or{" "}
        <a as Link href="#/login">
          Login
        </a>
      </div>
    </div>
  );
};

export default SignUp;
