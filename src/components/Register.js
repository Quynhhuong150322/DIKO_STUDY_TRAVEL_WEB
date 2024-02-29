import React, { useState } from 'react';
import loginImg from '../assets/images/Login/loginImg.png';
import appleImg from '../assets/images/Login/appleImg.png';
import facebookImg from '../assets/images/Login/facebookImg.png';
import googleImg from '../assets/images/Login/googleImg.png';
import { FaRegEyeSlash } from 'react-icons/fa';
import { FaRegEye } from 'react-icons/fa';
import { PiWarningCircleLight } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { registerNewUser } from '../services/authServices';
const Register = () => {
    let history = useHistory();
    const defaultValue = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: '',
    };
    const defaultValidInput = {
        firstname: true,
        lastname: true,
        email: true,
        password: true,
        confirmPassword: true,
    };
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setConfirmShowPassword] = useState(false);
    const [registerInput, setRegisterInput] = useState(defaultValue);
    const [objCheckInput, setObjCheckInput] = useState(defaultValidInput);
    const [textValid, setTextValid] = useState('');

    const checkValidInputs = () => {
        setObjCheckInput(defaultValidInput);
        if (!registerInput.firstname) {
            setTextValid('First Name is required');
            setObjCheckInput({ ...defaultValidInput, firstname: false });
            return false;
        }
        if (!registerInput.lastname) {
            setTextValid('Last Name is required');
            setObjCheckInput({ ...defaultValidInput, lastname: false });
            return false;
        }
        if (!registerInput.email) {
            setTextValid('Email is required');
            setObjCheckInput({ ...defaultValidInput, email: false });
            return false;
        }
        if (!registerInput.email) {
            setTextValid('Email is required');
            setObjCheckInput({ ...defaultValidInput, email: false });
            return false;
        }
        // Check email validation
        let regxEmail = /^\S+@\S+\.\S+$/;
        if (!regxEmail.test(registerInput.email)) {
            setTextValid('Please enter a valid email address');
            setObjCheckInput({ ...defaultValidInput, email: false });
            return false;
        }

        if (!registerInput.password) {
            setTextValid('Password is required');
            setObjCheckInput({ ...defaultValidInput, password: false });
            return false;
        }
        // Check password validation
        let regxPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!regxPassword.test(registerInput.password)) {
            setTextValid('Minimum eight characters, at least one letter and one number');
            setObjCheckInput({ ...defaultValidInput, password: false });
            return false;
        }

        if (!registerInput.confirmPassword) {
            setTextValid('Confirm Password is required');
            setObjCheckInput({ ...defaultValidInput, confirmPassword: false });
            return false;
        }
        if (registerInput.confirmPassword !== registerInput.password) {
            setTextValid('The confirm password is not the same');
            setObjCheckInput({ ...defaultValidInput, confirmPassword: false });
            return false;
        }
        return true;
    };

    const handleRegister = async () => {
        const check = checkValidInputs();
        if (check) {
            console.log(registerInput);
            const res = await registerNewUser(registerInput);
            console.log(res);
            history.push('/login');
        }
    };

    return (
        <section className="w-[1060px] h-[713px] mx-auto border rounded-2xl  mt-16">
            <div className="p-5 md:p-10 flex flex-1 justify-center gap-10">
                <div className="w-[416px] h-[609px] hidden lg:flex flex-1 flex-shrink-0">
                    <img src={loginImg} alt="Login" />
                </div>
                <div className="flex-1  flex justify-center ">
                    <div className="flex flex-col flex-1 gap-4 max-w-[393px]">
                        <h1 className="text-xl font-bold">Register</h1>

                        <form className="flex flex-col flex-1 gap-3">
                            <div className="flex gap-10">
                                <div className="flex flex-col flex-1 gap-1">
                                    <label
                                        htmlFor="firstname"
                                        className={
                                            objCheckInput.firstname
                                                ? 'text-sm font-normal cursor-pointer'
                                                : 'text-sm font-normal cursor-pointer text-red-600'
                                        }
                                    >
                                        First Name
                                    </label>
                                    <div className="flex items-center">
                                        <input
                                            type="text"
                                            name="firstname"
                                            id="firstname"
                                            value={registerInput.firstname}
                                            onChange={(e) =>
                                                setRegisterInput({
                                                    ...registerInput,
                                                    firstname: e.target.value,
                                                })
                                            }
                                            placeholder="EasySet24"
                                            className={
                                                objCheckInput.firstname
                                                    ? ' w-[170px] h-[48px] p-3 border rounded text-xs font-normal'
                                                    : ' w-[170px] h-[48px] p-3 border rounded text-xs font-normal border-red-600'
                                            }
                                        />
                                        <div
                                            className={
                                                objCheckInput.firstname
                                                    ? 'cursor-pointer text-red-600 text-2xl hidden'
                                                    : 'cursor-pointer text-red-600 text-2xl '
                                            }
                                        >
                                            <PiWarningCircleLight className="ml-[-35px]" />
                                        </div>
                                    </div>
                                    <div className="">
                                        <span className="absolute text-[10px] font-semibold text-red-600 ">
                                            {objCheckInput.firstname ? '' : textValid}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex  flex-col flex-1 gap-1">
                                    <label
                                        htmlFor="lastname"
                                        className={
                                            objCheckInput.lastname
                                                ? 'text-sm font-normal cursor-pointer'
                                                : 'text-sm font-normal cursor-pointer text-red-600'
                                        }
                                    >
                                        Last Name
                                    </label>
                                    <div className="flex items-center">
                                        <input
                                            type="text"
                                            name="lastname"
                                            id="lastname"
                                            value={registerInput.lastname}
                                            onChange={(e) =>
                                                setRegisterInput({
                                                    ...registerInput,
                                                    lastname: e.target.value,
                                                })
                                            }
                                            placeholder="EasySet24"
                                            className={
                                                objCheckInput.lastname
                                                    ? 'w-[170px] h-[48px] p-3 border rounded text-xs font-normal'
                                                    : 'w-[170px] h-[48px] p-3 border rounded text-xs font-normal border-red-600'
                                            }
                                        />
                                        <div
                                            className={
                                                objCheckInput.lastname
                                                    ? 'cursor-pointer text-red-600 text-2xl hidden'
                                                    : 'cursor-pointer text-red-600 text-2xl '
                                            }
                                        >
                                            <PiWarningCircleLight className="ml-[-35px]" />
                                        </div>
                                    </div>
                                    <div className="">
                                        <span className="absolute text-[10px] font-semibold text-red-600 ">
                                            {objCheckInput.lastname ? '' : textValid}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col flex-1 gap-1">
                                <label
                                    htmlFor="email"
                                    className={
                                        objCheckInput.email
                                            ? 'text-sm font-normal cursor-pointer'
                                            : 'text-sm font-normal cursor-pointer text-red-600'
                                    }
                                >
                                    Email
                                </label>
                                <div className="flex items-center">
                                    <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        value={registerInput.email}
                                        onChange={(e) =>
                                            setRegisterInput({
                                                ...registerInput,
                                                email: e.target.value,
                                            })
                                        }
                                        placeholder="EasySet24@gmail.com"
                                        className={
                                            objCheckInput.email
                                                ? 'w-full h-[48px] p-3 border rounded text-xs font-normal'
                                                : 'w-full h-[48px] p-3 border rounded text-xs font-normal border-red-600'
                                        }
                                    />
                                    <div
                                        className={
                                            objCheckInput.email
                                                ? 'cursor-pointer text-red-600 text-2xl hidden'
                                                : 'cursor-pointer text-red-600 text-2xl '
                                        }
                                    >
                                        <PiWarningCircleLight className="ml-[-35px]" />
                                    </div>
                                </div>
                                <div className="">
                                    <span className="absolute text-[10px] font-semibold text-red-600 ">
                                        {objCheckInput.email ? '' : textValid}
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col flex-1 gap-1">
                                <label
                                    htmlFor="password"
                                    className={
                                        objCheckInput.password
                                            ? 'text-sm font-normal cursor-pointer'
                                            : 'text-sm font-normal cursor-pointer text-red-600'
                                    }
                                >
                                    Password
                                </label>
                                <div className="flex items-center">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        name="password"
                                        id="password"
                                        placeholder="***************"
                                        value={registerInput.password}
                                        onChange={(e) => {
                                            setRegisterInput({
                                                ...registerInput,
                                                password: e.target.value,
                                            });
                                        }}
                                        className={
                                            objCheckInput.password
                                                ? 'w-full h-[48px] p-3 border rounded text-xs font-normal'
                                                : 'w-full h-[48px] p-3 border rounded text-xs font-normal border-red-600'
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
                                        {objCheckInput.password ? '' : textValid}
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col flex-1 gap-1">
                                <label
                                    htmlFor="confirmPassword"
                                    className={
                                        objCheckInput.confirmPassword
                                            ? 'text-sm font-normal cursor-pointer'
                                            : 'text-sm font-normal cursor-pointer text-red-600'
                                    }
                                >
                                    Confirm Password
                                </label>
                                <div className="flex items-center">
                                    <input
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        name="password"
                                        id="password"
                                        placeholder="***************"
                                        value={registerInput.confirmPassword}
                                        onChange={(e) => {
                                            setRegisterInput({
                                                ...registerInput,
                                                confirmPassword: e.target.value,
                                            });
                                        }}
                                        className={
                                            objCheckInput.confirmPassword
                                                ? 'w-full h-[48px] p-3 border rounded text-xs font-normal'
                                                : 'w-full h-[48px] p-3 border rounded text-xs font-normal border-red-600'
                                        }
                                    />
                                    <div
                                        className="cursor-pointer text-[#A6A6A6] text-xl"
                                        onClick={() => setConfirmShowPassword(!showConfirmPassword)}
                                    >
                                        {objCheckInput.confirmPassword ? (
                                            <>
                                                {showConfirmPassword ? (
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
                                        {objCheckInput.confirmPassword ? '' : textValid}
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
                                        className="text-xs font-normal text-[#112211] cursor-pointer"
                                    >
                                        I agree to all the Terms and Privacy Policies
                                    </label>
                                </div>
                            </div>
                            <div
                                className="flex-1 max-h-[48px]  bg-[#07689F] text-center rounded border px-2 py-3 hover:bg-gray-500 cursor-pointer"
                                onClick={() => handleRegister()}
                            >
                                <input
                                    className="text-base font-medium text-white cursor-pointer  "
                                    type="button"
                                    value="Register"
                                />
                            </div>
                            <div className="flex justify-center items-center gap-2 flex-col md:flex-row">
                                <p className="text-xs font-normal">Already have an account?</p>
                                <span className="text-xs font-normal text-blue-400 cursor-pointer hover:underline hover:text-blue-500 ">
                                    <Link to="/login">Login !</Link>
                                </span>
                            </div>
                            <div className="text-center text-sm font-normal">Or</div>
                            <div className="flex justify-center gap-10">
                                <div
                                    className="p-3 border rounded bg-[#FFFFFF] cursor-pointer hover:scale-110 hover:bg-blue-300"
                                    onClick={() => alert('Tính năng chưa hỗ trợ')}
                                >
                                    <img src={facebookImg} alt="Facebook" className="" />
                                </div>
                                <div
                                    className="p-3 border rounded bg-[#FFFFFF] cursor-pointer hover:bg-blue-300"
                                    onClick={() => alert('Tính năng chưa hỗ trợ')}
                                >
                                    <img src={appleImg} alt="Apple" />
                                </div>
                                <div
                                    className="p-3 border rounded bg-[#FFFFFF] cursor-pointer hover:bg-blue-300"
                                    onClick={() => alert('Tính năng chưa hỗ trợ')}
                                >
                                    <img src={googleImg} alt="Google" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
