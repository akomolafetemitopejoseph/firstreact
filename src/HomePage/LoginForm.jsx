import React, { useState } from "react";

const LoginForm = () => {
  const [isName, setisName] = useState("");
  const [isEmail, setisEmail] = useState("");
  const [isPassword, setisPassword] = useState("");
  const [logSuccessful, setlogSuccessful] = useState(false)
  const [logError, setError] = useState(false)

  const logName = () => {
    alert(" your email and password " + isName, isEmail, isPassword);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-500 to-blue-200 h-64 w-full">
      <div className=" bg-amber-50 w-[400px] h-[550px] text-[1.2rem] font-medium capitalize text-black p-[20px] rounded-lg">
        <p className="flex justify-center text-center font-extrabold mt-2 mb-2">
          login form
        </p>
        <div className="">
          <form className="space-y-4">
            <div className="">
              <label className=" z-10" htmlFor="for-label p-[10px] ">
                full name:
              </label>
              <input
                className=" border-1 border-green-500 rounded-lg p-1 w-[100%]  focus:outline-none focus:ring focus:ring-green-400"
                type="text"
                value={isName}
                onChange={(e) => setisName(e.target.value)}
                id="for-label"
                name="for-label"
                placeholder=" Enter Full Name"
              />
            </div>

            <div className="mt-4">
              <label htmlFor="for-email">enter email:</label>
              <input
                className="border-1 border-green-500 rounded-lg p-0 w-[100%] focus:outline-none focus:ring focus:ring-green-400"
                type="email"
                value={isEmail}
                onChange={(e) => setisEmail(e.target.value)}
                name="for-email"
                id="for-email"
                placeholder=" Enter Email"
              />
            </div>

            <div className="mt-4">
              <label htmlFor="for-password"> password:</label>
              <input
                className="border-1 border-green-500 rounded-lg p-0 w-[100%] focus:outline-none focus:ring focus:ring-green-400"
                type="password"
                value={isPassword}
                onChange={(e) => setisPassword(e.target.value)}
                id="for-password"
                name="for-password"
                placeholder=" Enter Password"
              />

              <label htmlFor="confirm-password">confirm password:</label>
              <input
                className="border-1 border-green-500 rounded-lg p-0 w-[100%] mt-4 focus:outline-none focus:ring focus:ring-green-400"
                type="password"
                id="confirm-password"
                name="confirm-password"
                placeholder=" Confirm Password"
              />
            </div>

            <div className="mt-4">
              <label htmlFor="for-checkbox">terms and conditions </label>
              <input type="checkbox" />
            </div>

            <div className="mt-4">
              <p className="p-2">login successfully</p>
              <button
                onClick={logName}
                className="border-1 border-green-500 rounded-lg w-[100%] p-1 bg-gradient-to-r from-green-500 to-blue-200 hover:shadow-lg hover:scale-105 transition duration-300 cursor-pointer hover:p-1 text-[1rem] "
              >
                Login In
              </button>

              <p className="flex justify-center m-1 text-[0.70rem] cursor-pointer">
                forget password? | create account
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
