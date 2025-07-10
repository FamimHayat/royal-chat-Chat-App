import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { LuCrown } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import { signedUser } from "../../../reduxStorage/slices/authSlice"

const SignIn = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const myData = useSelector((state) => state.signedUserData.UserData);
  

  
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  
  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, userData.email, userData.password)
      .then((userCredential) => {
        
        
        if (!userCredential.user.emailVerified) {
          
          toast.error("verify your email before sign in");
          
        } else {
          dispatch(signedUser(userCredential.user))
          console.log(userCredential.user)
          toast.success("signed in successfully");
          navigate("/");
          
          
        }
        
    })
    .catch((error) => {
      if (error.code == "auth/missing-password") {
        toast.error("password is missing...!");
      } else if (error.code == "auth/weak-password") {
        toast.error("password is weak");
      } else if (error.code == "auth/email-already-in-use") {
        toast.error("");
      } else if (error.code == "auth/invalid-email") {
        toast.error(" enter an valid email");
      }
      if (error.code == "auth/invalid-email") {
        toast.error("password missing");
      } else if (error.code == "auth/missing-email") {
        toast.error("enter an email");
      } else if (error.code == "auth/invalid-credential") {
        toast.error("enter valid information..!");
      }
    });
  };
  if (myData) {
    return <Navigate to={"/"} />;
  }
  
  return (
    <>
      <div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
      <section className="flex justify-center items-center w-full h-dvh ">
        <div>
          <div className="w-80 md:w-100 rounded-2xl bg-primary ">
            <div className="flex flex-col gap-3 p-8 ">
              <h2 className="text-4xl md:text-5xl  text-center flex  gap-1 justify-center md:mr-6 md:mb-7 text-white font-headerFont">
                <LuCrown className="rotate-320" />
                Royal Chat
              </h2>
              <p className="text-center text-3xl md:text-4xl text-gray-300 mb-6 font-textFont underline">
                sign in
              </p>
              <input
                type="email"
                className=" placeholder:text-[#ffffff9f] placeholder:underline text-xl text-white font-textFont bg-transparent w-full rounded-lg   px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#98A1BC] focus:ring-offset-1 focus:ring-offset-[#98A1BC]  shadow-[inset_2px_5px_10px_rgb(5,5,5)] "
                placeholder="Email"
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, email: e.target.value }))
                }
              />

              <div className="relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="placeholder:text-[#ffffff9f] placeholder:underline text-xl text-white font-textFont bg-transparent w-full rounded-lg px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-[#98A1BC] focus:ring-offset-1 focus:ring-offset-[#98A1BC]  shadow-[inset_2px_5px_10px_rgb(5,5,5)]"
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute top-1/2 right-4 -translate-y-1/2 text-white text-lg"
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-2xl opacity-80 cursor-pointer" />
                  ) : (
                    <FaEye className="text-2xl opacity-80 cursor-pointer" />
                  )}
                </button>
              </div>

              <button
                onClick={handleSignIn}
                className="inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95"
              >
                Sign In
              </button>
              <p className="text-stone-200 mt-2 text-center">
                don't have an account ?{" "}
                <Link
                  to="/SignUp"
                  className="text-xl underline transition-all hover:text-blue-500 "
                >
                  sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;
