
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { LuCrown } from 'react-icons/lu'
import { Link } from 'react-router'


const SignUp = () => {

  

        const [showPassword, setShowPassword] = useState(false);
        
        return (
          <>
            <div className="flex justify-center items-center w-full h-dvh ">
              <div>
                <div className="w-80 md:w-100 rounded-2xl bg-primary ">
                  <div className="flex flex-col gap-3 p-8 ">
                    <h2 className="text-4xl md:text-5xl  text-center flex  gap-1 justify-center md:mr-6 md:mb-7 text-white font-headerFont">
                      <LuCrown className="rotate-320" />
                      Royal Chat
                    </h2>
                    <p className="text-center text-3xl md:text-4xl text-gray-300 mb-6 font-textFont underline">
                      sign up
                    </p>
                    <input
                      type="text"
                      className=" placeholder:text-[#ffffff9f] placeholder:underline text-xl text-white font-textFont bg-transparent w-full rounded-lg   px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#98A1BC] focus:ring-offset-1 focus:ring-offset-[#98A1BC]  shadow-[inset_2px_5px_10px_rgb(5,5,5)] "
                      placeholder="User Name"
                    />
                    <input
                      type="email"
                      className=" placeholder:text-[#ffffff9f] placeholder:underline text-xl text-white font-textFont bg-transparent w-full rounded-lg   px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#98A1BC] focus:ring-offset-1 focus:ring-offset-[#98A1BC]  shadow-[inset_2px_5px_10px_rgb(5,5,5)] "
                      placeholder="Email"
                    />

                    <div className="relative w-full">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Create Password"
                        className="placeholder:text-[#ffffff9f] placeholder:underline text-xl text-white font-textFont bg-transparent w-full rounded-lg px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-[#98A1BC] focus:ring-offset-1 focus:ring-offset-[#98A1BC]  shadow-[inset_2px_5px_10px_rgb(5,5,5)]"
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

                    <button className="inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95">
                      Sign UP
                    </button>

                    <Link to="/SignIn" className="text-stone-200 mt-2">
                      already have an account ?{" "}
                      <span className="text-xl underline transition-all hover:text-blue-500 ">
                        sign in
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
}

export default SignUp
