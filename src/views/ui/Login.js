import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loading from "../../layouts/loader/Loader";
import "./Login.css";
import logo from "../../assets/images/logos/logo.png";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  let signInError;
  const emailRef = useRef("");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);
  if (error || gError) {
    signInError = (
      <p className="text-red-500">
        <small>{error?.message || gError?.message}</small>
      </p>
    );
  }
  if (loading || gLoading || sending) {
    return <Loading></Loading>;
  }
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };
  const resetPassword = async () => {
    const unknownEmail = emailRef.current.value;
    if (unknownEmail) {
      await sendPasswordResetEmail(unknownEmail);
      //   toast.success("Sent email successfully! Please check your inbox.");
    } else {
      //   toast.error("Please enter your email address first !");
    }
  };
  return (
    // <div className="flex justify-center items-center h-70 my-4">
    //   <div className="card w-96 bg-base-100 shadow-xl">
    //     <div className="card-body">
    //       <h2 className="text-center text-2xl font-bold">Login</h2>
    //       <form onSubmit={handleSubmit(onSubmit)}>
    //         <div className="form-control w-full max-w-xs">
    //           <label className="label">
    //             <span className="label-text">Email</span>
    //           </label>
    //           <input
    //             name="email"
    //             type="email"
    //             placeholder="Your Email"
    //             className="input input-bordered w-full max-w-xs"
    //             ref={emailRef}
    //             {...register("email", {
    //               required: {
    //                 value: true,
    //                 message: "Email is required",
    //               },
    //               pattern: {
    //                 value: /[A-Za-z]{3}/,
    //                 message: "Provide a valid email",
    //               },
    //             })}
    //           />
    //           <label className="label">
    //             {errors.email?.type === "required" && (
    //               <span className="label-text-alt text-red-600">
    //                 {errors.email.message}
    //               </span>
    //             )}
    //             {errors.email?.type === "pattern" && (
    //               <span className="label-text-alt text-red-600">
    //                 {errors.email.message}
    //               </span>
    //             )}
    //           </label>
    //         </div>
    //         <div className="form-control w-full max-w-xs">
    //           <label className="label">
    //             <span className="label-text">Password</span>
    //           </label>
    //           <input
    //             type="password"
    //             placeholder="Password"
    //             className="input input-bordered w-full max-w-xs"
    //             {...register("password", {
    //               required: {
    //                 value: true,
    //                 message: "Password is required",
    //               },
    //               minLength: {
    //                 value: 6,
    //                 message: "Must be 6 characters or longer",
    //               },
    //             })}
    //           />
    //           <label className="label">
    //             {errors.password?.type === "required" && (
    //               <span className="label-text-alt text-red-600">
    //                 {errors.password.message}
    //               </span>
    //             )}
    //             {errors.password?.type === "minLength" && (
    //               <span className="label-text-alt text-red-600">
    //                 {errors.password.message}
    //               </span>
    //             )}
    //           </label>
    //         </div>

    //         {signInError}

    //         <input
    //           type="submit"
    //           className="w-full max-w-xs btn btn-primary"
    //           value="Login"
    //         />
    //       </form>
    //       <span
    //         onClick={resetPassword}
    //         style={{ cursor: "pointer" }}
    //         className="text-sm text-right text-red-500"
    //       >
    //         Forgot Password?
    //       </span>
    //       <p className="mt-3 text-sm">
    //         New to Doctors Portal?{" "}
    //         <Link to="/signup" className="text-secondary">
    //           Create an account
    //         </Link>
    //       </p>
    //       <div className="divider">OR</div>
    //       <button
    //         onClick={() => signInWithGoogle()}
    //         className="btn btn-outline"
    //       >
    //         Continue with Google
    //       </button>
    //     </div>
    //   </div>
    // </div>

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
        </div>
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
          Login
        </button>
      </form>
      <div class="text-center fs-6">
        <a href="#">Forget password?</a> or{" "}
        <a as Link href="#/signup">
          Sign up
        </a>
      </div>
    </div>
  );
};

export default Login;
