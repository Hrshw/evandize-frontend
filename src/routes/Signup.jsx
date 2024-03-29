import { Link } from "react-router-dom";
import { login_bg } from "../assets/images/images";
import EvMail from "../assets/icons/EvMail";
import EvLock from "../assets/icons/EvLock";
import { IoEyeOffOutline, IoEye } from "react-icons/io5";
import { useRef, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaRegUser } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  // Signup Hook
  const { signup, isLoading } = useSignup();

  // Input States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  // Password hidden states
  const [passHidden, setPassHidden] = useState(true);
  const [confPassHidden, setConfPassHidden] = useState(true);

  // References of DOM
  const pass_input = useRef();
  const confirm_pass_input = useRef();

  // Toggle Password Visibility
  const togglePass = (hidden, setHidden, input) => {
    setHidden(!hidden);
    if (hidden) input.current.type = "text";
    else input.current.type = "password";
  };

  // Submitting the form
  const handleSignup = async (e) => {
    e.preventDefault();
    await signup(name, email, password, confPassword);
  };

  return (
    <div className="w-screen min-h-screen ">
      <div className="absolute w-full h-full top-0 -z-40">
        <img
          src={login_bg}
          className="w-full min-h-screen -z-20 absolute top-0 left-0 opacity-40"
          alt="Login Background"
        />
        <div className="w-full h-full bg-gradient-to-r from-25% from-black absolute top-0 -z-10 left-0"></div>
        <div className="w-full h-full bg-gradient-to-t from-0% to-80% from-black absolute top-0 -z-10 left-0"></div>
      </div>
      <div className=" h-full flex items-center justify-between py-20 max-w-6xl w-11/12 mx-auto ">
        <div className="w-1/3 flex flex-col justify-center gap-8 mt-14">
          <div className="flex flex-col gap-3">
            <h2 className="font-medium text-3xl">Register your account</h2>
            <div>
              If you already have an account,{" "}
              <Link
                to="/auth/login"
                className="text-[#C10C99] font-medium tracking-wide relative after:content-[''] after:absolute after:-bottom-1 after:bg-[#C10C99] after:w-0 after:h-px after:left-0 hover:after:w-full after:transition-all after:duration-300"
              >
                sign in here!
              </Link>
            </div>
          </div>
          <form
            className="flex flex-col justify-center gap-10"
            onSubmit={handleSignup}
          >
            <div className="flex flex-col gap-2">
              <div className="relative w-full">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  // placeholder="Enter your name"
                  className="bg-transparent border-b py-2 pl-8 pr-2 font-light w-full outline-none focus:border-b-[#C10C99] transition-all [&:focus-visible+label]:left-0 [&:focus-visible+label]:-top-4 [&:focus-visible+label]:text-xs"
                />
                <label
                  htmlFor="name"
                  className={`absolute ${
                    name === ""
                      ? "left-8 top-[11px] text-sm "
                      : "left-0 -top-4 text-xs"
                  } text-gray-400 transition-all`}
                >
                  Name
                </label>
                <span className="absolute left-0 top-[12px]">
                  <FaRegUser width={20} />
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="relative w-full">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  // placeholder="Enter your email address"
                  className="bg-transparent border-b py-2 pl-8 pr-2 font-light w-full outline-none focus:border-b-[#C10C99] transition-all [&:focus-visible+label]:left-0 [&:focus-visible+label]:-top-4 [&:focus-visible+label]:text-xs"
                />
                <label
                  htmlFor="email"
                  className={`absolute ${
                    email === ""
                      ? "left-8 top-[11px] text-sm "
                      : "left-0 -top-4 text-xs"
                  } text-gray-400 transition-all`}
                >
                  Email
                </label>
                <span className="absolute left-0 top-[10px] ">
                  <EvMail width={20} />
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="relative w-full">
                <input
                  ref={pass_input}
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  // placeholder="Enter your password"
                  className="bg-transparent border-b py-2 pl-8 pr-2 font-light w-full outline-none focus:border-b-[#C10C99] transition-all [&:focus-visible+label]:left-0 [&:focus-visible+label]:-top-4 [&:focus-visible+label]:text-xs"
                />
                <label
                  htmlFor="password"
                  className={`absolute ${
                    password === ""
                      ? "left-8 top-[11px] text-sm "
                      : "left-0 -top-4 text-xs"
                  } text-gray-400 transition-all`}
                >
                  Password
                </label>
                <span className="absolute left-0 top-[10px]">
                  <EvLock width={18} />
                </span>
                <span
                  className="absolute right-0 top-[4px] cursor-pointer hover:bg-white hover:text-black rounded-full p-1 transition-all"
                  onClick={() =>
                    togglePass(passHidden, setPassHidden, pass_input)
                  }
                >
                  {passHidden ? (
                    <IoEyeOffOutline size={20} />
                  ) : (
                    <IoEye size={20} />
                  )}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="relative w-full">
                <input
                  ref={confirm_pass_input}
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  value={confPassword}
                  onChange={(e) => setConfPassword(e.target.value)}
                  // placeholder="Enter your password again"
                  className="bg-transparent border-b py-2 pl-8 pr-2 font-light w-full outline-none focus:border-b-[#C10C99] transition-all [&:focus-visible+label]:left-0 [&:focus-visible+label]:-top-4 [&:focus-visible+label]:text-xs"
                />
                <label
                  htmlFor="confirm-password"
                  className={`absolute ${
                    confPassword === ""
                      ? "left-8 top-[11px] text-sm "
                      : "left-0 -top-4 text-xs"
                  } text-gray-400 transition-all`}
                >
                  Confirm Password
                </label>
                <span className="absolute left-0 top-[10px]">
                  <EvLock width={18} />
                </span>
                <span
                  className="absolute right-0 top-[4px] cursor-pointer hover:bg-white hover:text-black rounded-full p-1 transition-all"
                  onClick={() =>
                    togglePass(
                      confPassHidden,
                      setConfPassHidden,
                      confirm_pass_input
                    )
                  }
                >
                  {confPassHidden ? (
                    <IoEyeOffOutline size={20} />
                  ) : (
                    <IoEye size={20} />
                  )}
                </span>
              </div>
            </div>
            <button
              disabled={isLoading}
              className="disabled:bg-[#C10C99]/50 rounded-full w-full py-3 mt-2 text-sm hover:bg-[#C10C99]/70 transition-all bg-[#C10C99]"
            >
              Register now
            </button>
          </form>
          <div className="flex flex-col gap-4">
            <div className=" flex items-center justify-center text-sm text-gray-400">
              or continue with
            </div>
            <div className="flex items-center justify-center gap-6">
              <span className="rounded-full  p-0 hover:bg-[#316FF6] outline outline-transparent hover:outline-[#316FF6] outline-offset-8 hover:text-white transition-all cursor-pointer h-fit w-fit text-[#316FF6] bg-white">
                <BsFacebook size={32} />
              </span>
              <span className="rounded-full  hover:bg-[#808080] outline outline-transparent hover:outline-[#808080] outline-offset-8 hover:text-white transition-all cursor-pointer h-max p-[6px] aspect-square text-[#808080] bg-white">
                <FaApple size={24} />
              </span>
              <span className="rounded-full p-0 bg-black hover:bg-white outline outline-transparent hover:outline-white outline-offset-8 transition-all cursor-pointer w-fit h-fit">
                <FcGoogle size={34} />
              </span>
            </div>
          </div>
        </div>
        <h1 className=" font-title text-8xl uppercase w-2/3 text-end">
          Some text goes here
        </h1>
      </div>
    </div>
  );
};

export default Signup;
