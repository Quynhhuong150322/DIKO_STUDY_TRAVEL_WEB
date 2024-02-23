import React, { useState } from "react";
import loginImg from "../assets/images/Login/loginImg.png";
import appleImg from "../assets/images/Login/appleImg.png";
import facebookImg from "../assets/images/Login/facebookImg.png";
import googleImg from "../assets/images/Login/googleImg.png";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { PiWarningCircleLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
const Login = () => {
  let history = useHistory();
  const defaultValue = {
    email: "",
    password: "",
  };
  const defaultValidInput = {
    email: true,
    password: true,
  };
  const [showPassword, setShowPassword] = useState(false);
  const [loginInput, setLoginInput] = useState(defaultValue);
  const [objCheckInput, setObjCheckInput] = useState(defaultValidInput);
  const [textValid, setTextValid] = useState("");

  const checkValidInputs = () => {
    setObjCheckInput(defaultValidInput);
    if (!loginInput.email) {
      setTextValid("Email is required");
      setObjCheckInput({ ...defaultValidInput, email: false });
      return false;
    }
    // Check email validation
    let regxEmail = /^\S+@\S+\.\S+$/;
    if (!regxEmail.test(loginInput.email)) {
      setTextValid("Please enter a valid email address");
      setObjCheckInput({ ...defaultValidInput, email: false });
      return false;
    }

    if (!loginInput.password) {
      setTextValid("Password is required");
      setObjCheckInput({ ...defaultValidInput, password: false });
      return false;
    }
    // Check password validation
    let regxPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!regxPassword.test(loginInput.password)) {
      setTextValid(
        "Minimum eight characters, at least one letter and one number"
      );
      setObjCheckInput({ ...defaultValidInput, password: false });
      return false;
    }
    return true;
  };

  const handleLogin = () => {
    const check = checkValidInputs();
    if (check) {
      console.log(loginInput);
      history.push("/");
    }
  };

  return (
    <section className="max-w-[1060px] h-[713px] mx-auto border rounded-2xl ">
      <div className=" p-5 md:p-10 flex flex-1 justify-center gap-10">
        <div className="w-[416px] h-[609px] hidden lg:flex flex-1 flex-shrink-0">
          <img src={loginImg} alt="Login" className="object-contain" />
        </div>
        <div className="flex-1 py-10 flex justify-center ">
          <div className="flex flex-col flex-1 gap-4 max-w-[393px]">
            <h1 className="text-xl font-bold">Login</h1>
            <p className="text-xs font-normal">
              Login to access EasySet 24 account
            </p>
            <form className="flex flex-col flex-1 gap-5">
              <div className="flex flex-col flex-1 gap-1">
                <label
                  htmlFor="email"
                  className={
                    objCheckInput.email
                      ? "text-sm font-normal cursor-pointer"
                      : "text-sm font-normal cursor-pointer text-red-600"
                  }
                >
                  Email
                </label>
                <div className="flex items-center">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    value={loginInput.email}
                    onChange={(e) =>
                      setLoginInput({ ...loginInput, email: e.target.value })
                    }
                    placeholder="EasySet24@gmail.com"
                    className={
                      objCheckInput.email
                        ? "w-full h-[48px] p-3 border rounded text-xs font-normal"
                        : "w-full h-[48px] p-3 border rounded text-xs font-normal border-red-600"
                    }
                  />
                  <div
                    className={
                      objCheckInput.email
                        ? "cursor-pointer text-red-600 text-2xl hidden"
                        : "cursor-pointer text-red-600 text-2xl "
                    }
                  >
                    <PiWarningCircleLight className="ml-[-35px]" />
                  </div>
                </div>
                <div className="">
                  <span className="absolute text-[10px] font-semibold text-red-600 ">
                    {objCheckInput.email ? "" : textValid}
                  </span>
                </div>
              </div>
              <div className="flex flex-col flex-1 gap-1">
                <label
                  htmlFor="password"
                  className={
                    objCheckInput.password
                      ? "text-sm font-normal cursor-pointer"
                      : "text-sm font-normal cursor-pointer text-red-600"
                  }
                >
                  Password
                </label>
                <div className="flex items-center">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="***************"
                    value={loginInput.password}
                    onChange={(e) => {
                      setLoginInput({
                        ...loginInput,
                        password: e.target.value,
                      });
                    }}
                    className={
                      objCheckInput.password
                        ? "w-full h-[48px] p-3 border rounded text-xs font-normal"
                        : "w-full h-[48px] p-3 border rounded text-xs font-normal border-red-600"
                    }
                  />
                  <div
                    className="cursor-pointer text-[#A6A6A6] text-xl"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {objCheckInput.password ? (
                      <>
                        {showPassword ? (
                          <FaRegEye className="ml-[-35px]" />
                        ) : (
                          <FaRegEyeSlash className="ml-[-35px]" />
                        )}
                      </>
                    ) : (
                      <div className="cursor-pointer text-red-600 text-2xl">
                        <PiWarningCircleLight className="ml-[-35px]" />
                      </div>
                    )}
                  </div>
                </div>
                <div className="relative">
                  <span className="absolute text-[10px] font-semibold text-red-600 ">
                    {objCheckInput.password ? "" : textValid}
                  </span>
                </div>
              </div>
              <div className="flex justify-between md:flex-row flex-col gap-2 md:gap-0">
                <div className="flex gap-3 items-center ">
                  <input
                    type="checkbox"
                    name="remember"
                    id="remember"
                    className="w-6 h-6 cursor-pointer"
                  />
                  <label
                    htmlFor="remember"
                    className="text-sm font-normal text-[#112211] cursor-pointer"
                  >
                    Remember Me
                  </label>
                </div>
                <div onClick={() => alert("Tính năng chưa hỗ trợ")}>
                  <span className="text-sm font-normal text-[#07689F] cursor-pointer hover:text-blue-500 hover:underline">
                    Forgot Password?
                  </span>
                </div>
              </div>
              <div
                className="flex-1 max-h-[48px]  bg-[#07689F] text-center rounded border px-2 py-3 hover:bg-gray-500 cursor-pointer"
                onClick={() => handleLogin()}
              >
                <input
                  className="text-base font-medium text-white cursor-pointer  "
                  type="button"
                  value="Login"
                />
              </div>
              <div className="text-center text-sm font-normal">Or</div>
              <div className="flex justify-center gap-10">
                <div
                  className="p-3 border rounded bg-[#FFFFFF] cursor-pointer hover:scale-110 hover:bg-blue-300"
                  onClick={() => alert("Tính năng chưa hỗ trợ")}
                >
                  <img src={facebookImg} alt="Facebook" className="" />
                </div>
                <div
                  className="p-3 border rounded bg-[#FFFFFF] cursor-pointer hover:bg-blue-300"
                  onClick={() => alert("Tính năng chưa hỗ trợ")}
                >
                  <img src={appleImg} alt="Apple" />
                </div>
                <div
                  className="p-3 border rounded bg-[#FFFFFF] cursor-pointer hover:bg-blue-300"
                  onClick={() => alert("Tính năng chưa hỗ trợ")}
                >
                  <img src={googleImg} alt="Google" />
                </div>
              </div>
              <div className="flex justify-center items-center gap-2 flex-col md:flex-row">
                <p className="text-xs font-normal">
                  Don't have an account in EasySet24 yet?
                </p>
                <span className="text-xs font-normal text-blue-400 cursor-pointer hover:underline hover:text-blue-500 ">
                  <Link to="/register">Register !</Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
