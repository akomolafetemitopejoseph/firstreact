import React, { useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
const LoginForm = () => {
  const [forName, setName] = useState("");
  const [isEmail, setEmail] = useState("");

  const [isPassword, setPassword] = useState("");
  const togglePassword = () => {
    setPassword(!isPassword);
  };

  const [confirmPassword, setConfirmPassword] = useState("");
  const togglecnfirm = () => {
    setConfirmPassword(!confirmPassword);
  };

  const [successfully, setsuccessfully] = useState(false);
  const [error, setError] = useState(false);

  const verify = (e) => {
    e.preventDefault();
    // alert("you have sign in " + forName, isEmail, isPassword, confirmPassword);
    if (forName && isEmail && isPassword && confirmPassword) {
      setsuccessfully(true);
    } else {
      setError(true);
    }
  };

  const [checkBox, setChecbox] = useState("");

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-500 to-blue-200 h-64 w-full ">
      <div className=" bg-amber-50 w-[400px] h-[550px] text-[1.2rem] font-medium capitalize text-black p-[20px]     rounded-lg">
        <p className="flex justify-center text-center font-extrabold mt-2 mb-2">
          login form
        </p>

        {/* for the form */}
        <div className="">
          <form onSubmit={verify} className="space-y-4">
            <div className="">
              <label className=" z-10" htmlFor="for-label p-[10px] ">
                full name:
              </label>
              <input
                className=" border-1 border-green-500 rounded-lg p-1 w-[100%]  focus:outline-none focus:ring focus:ring-green-400"
                type="text"
                value={forName}
                onChange={(e) => setName(e.target.value)}
                id="for-label"
                name="for-label"
                placeholder=" Enter Full Name"
              />

              <div className="mt-4">
                <label htmlFor="for-email">enter email:</label>
                <input
                  className="border-1 border-green-500 rounded-lg p-0 w-[100%] focus:outline-none focus:ring focus:ring-green-400"
                  type="email"
                  value={isEmail}
                  onChange={(e) => setEmail(e.target.value)}
                  name="for-email"
                  id="for-email"
                  placeholder=" Enter Email"
                />

                {/* For password */}

                <div className="mt-4 relative ">
                  <label htmlFor="for-password"> password:</label>
                  <input
                    className="border-1 border-green-500 rounded-lg p-0 w-[100%] focus:outline-none focus:ring focus:ring-green-400"
                    type={isPassword ? "text" : "password"}
                    value={isPassword}
                    onChange={(e) => setPassword(e.target.value)}
                    id="for-password"
                    name="for-password"
                    placeholder=" Enter Password"
                  />
                  <span
                    onClick={togglePassword}
                    className=" absolute inset-y-9 right-2 pl-3 text-green-500 cursor-pointer hover:text-blue-300 active:text-amber-100"
                  >
                    <IoEyeSharp />
                  </span>
                </div>
              </div>

              {/* For confirm passWord */}
              <div className="mt-4 relative ">
                <label htmlFor="confirm-password">confirm password:</label>
                <input
                  className="border-1 border-green-500 rounded-lg p-0 w-[100%] mt-0 focus:outline-none focus:ring focus:ring-green-500"
                  type={confirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  id="confirm-password"
                  name="confirm-password"
                  placeholder=" Confirm Password"
                />

                <span
                  onClick={togglecnfirm}
                  className="absolute inset-y-9 right-2 pl-3 text-green-500 cursor-pointer hover:text-blue-300 active:text-amber-100 "
                >
                  <IoEyeSharp />
                </span>
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="for-checkbox">terms and conditions </label>
              <input
                type="checkbox"
                checked={checkBox}
                onChange={(e) => setChecbox(e.target.value)}
              />
            </div>

            <div className="mt-4">
              {successfully && <p className="p-2">login successfully</p>}
              {error && <p className="p-2">oop! incomplete login😀</p>}

              {/* for the button */}
              <button className="border-1 border-green-500 rounded-lg w-[100%] p-1 bg-gradient-to-r from-green-500 to-blue-200 hover:shadow-lg hover:scale-105 transition duration-300 cursor-pointer hover:p-1 text-[1rem] ">
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
