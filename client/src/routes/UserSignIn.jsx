import { useState, useRef } from "react";
import google from "../assets/google.webp";
import { GoEye, GoEyeClosed } from "react-icons/go";


export default function UserSignIn() {
  const [showPass, setShowPass] = useState(false);
  const [showReg, setShowReg] = useState(false);

  const signInForm = useRef(null);
  const registerForm = useRef(null);

  function handleShowSignIn() {
    setShowReg(false);

    if (registerForm.current) {
      registerForm.current.reset();
    }

    if (signInForm.current) {
      signInForm.current.reset();
    }

  }

  function handleShowRegister() {
    setShowReg(true);

    if (registerForm.current) {
      registerForm.current.reset();
    }

    if (signInForm.current) {
      signInForm.current.reset();
    }

  }

  function signInSubmit() {
    console.log('sign in submitted'); 
  }
  function registerSubmit() {
    console.log('register submitted'); 
  }

  return (
    <div className="flex flex-col items-center lg:bg-[#f8f8f8]">
      <div className="my-10 w-screen bg-white px-[20px] lg:w-[500px] lg:rounded-lg lg:border lg:py-[30px]">
        <div className="grid grid-cols-2 gap-5">
          <button
            className={`border-b p-4 font-bold text-rdblack ${!showReg && `border-b-4 border-b-rdpink`}`}
            onClick={handleShowSignIn}
          >
            Sign in
          </button>
          <button
            className={`border-b p-4 font-bold text-rdblack ${showReg && `border-b-4 border-b-rdpink`}`}
            onClick={handleShowRegister}
          >
            Register
          </button>
        </div>
        {!showReg ? (
          <div id="signIn">
            <div>
              <h1 className="my-5 text-3xl font-bold text-rdblack">Sign in</h1>
              <p className="my-4 font-bold text-rdblack">Continue with email</p>
            </div>
            <form
              className="flex flex-col gap-3"
              ref={signInForm}
              onSubmit={signInSubmit}
            >
              <div className="flex flex-col gap-1">
                <input
                  type="email"
                  name="email sign in"
                  id="email sign in"
                  placeholder="Email address"
                  className="rounded-md border border-rdblack py-3 pl-5 pr-10"
                />
                <span className="hidden text-sm font-medium text-[#e32424]">
                  Please enter a valid email
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between rounded-md border border-rdblack py-3 pl-5 pr-5">
                  <input
                    type={`${showPass ? `text` : `password`}`}
                    name="pass sign in"
                    id="pass sign in"
                    placeholder="Password"
                    className="h-full w-full border-0 outline-none ring-0"
                  />
                  {!showPass ? (
                    <GoEyeClosed
                      className="cursor-pointer text-xl text-rdlightBlue"
                      onClick={() => setShowPass((prevState) => !prevState)}
                    />
                  ) : (
                    <GoEye
                      className="cursor-pointer text-xl text-rdlightBlue"
                      onClick={() => setShowPass((prevState) => !prevState)}
                    />
                  )}
                </div>

                <span className="hidden text-sm font-medium text-[#e32424]">
                  Please enter a password
                </span>
                <a
                  href="#"
                  className="mt-1 text-sm font-medium text-rdlightBlue"
                >
                  Forgotten password?
                </a>
              </div>
              <button
                type="submit"
                className="rounded-md bg-[#cf04a9] px-8 py-[15px] text-center font-medium text-white hover:bg-[#9f0885]"
              >
                Continue
              </button>
            </form>
            <div id="other">
              <div className="my-[15px] text-center">
                <span className="h-1 w-full bg-black"></span>
                <p className="font-bold">or</p>
                <span></span>
              </div>
              <div>
                <div className="cursor-pointer rounded-md border border-rdblack px-8 py-[15px]">
                  <div className="flex items-center justify-center gap-3">
                    <img src={google} alt="Google" className="h-5 w-5" />
                    <p className="font-bold">Continue with Google</p>
                  </div>
                </div>
                <div className="my-4 text-center">
                  <p
                    onClick={() => setShowReg(true)}
                    className="cursor-pointer"
                  >
                    Don't have an account?{" "}
                    <span className="font-medium text-rdlightBlue underline">
                      Register
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div id="register">
            <div>
              <h1 className="my-5 text-3xl font-bold text-rdblack">Register</h1>
              <p className="my-4 font-bold text-rdblack">Register with email</p>
            </div>
            <form
              className="flex flex-col gap-3"
              ref={registerForm}
              onSubmit={registerSubmit}
            >
              <div className="flex flex-col gap-1">
                <input
                  type="email"
                  name="email register"
                  id="email register"
                  placeholder="Email address"
                  className="rounded-md border border-rdblack py-3 pl-5 pr-10"
                />
                <span className="hidden text-sm font-medium text-[#e32424]">
                  Please enter a valid email
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between rounded-md border border-rdblack py-3 pl-5 pr-5">
                  <input
                    type={`${!showPass ? `text` : `password`}`}
                    name="pass-register"
                    id="pass-register"
                    placeholder="Password"
                    className="h-full w-full border-0 outline-none ring-0"
                  />
                  {showPass ? (
                    <GoEyeClosed
                      className="cursor-pointer text-xl text-rdlightBlue"
                      onClick={() => setShowPass((prevState) => !prevState)}
                    />
                  ) : (
                    <GoEye
                      className="cursor-pointer text-xl text-rdlightBlue"
                      onClick={() => setShowPass((prevState) => !prevState)}
                    />
                  )}
                </div>
                <span className="hidden text-sm font-medium text-[#e32424]">
                  Please enter a password
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between rounded-md border border-rdblack py-3 pl-5 pr-5">
                  <input
                    type={`${!showPass ? `text` : `password`}`}
                    name="pass-confirm"
                    id="pass-confirm"
                    placeholder="Confirm password"
                    className="h-full w-full border-0 outline-none ring-0"
                  />
                </div>
                <span className="hidden text-sm font-medium text-[#e32424]">
                  Please enter a password
                </span>
              </div>
              <button
                type="submit"
                className="rounded-md bg-[#cf04a9] px-8 py-[15px] text-center font-medium text-white hover:bg-[#9f0885]"
              >
                Create account
              </button>
            </form>
            <div id="other">
              <div className="my-[15px] text-center">
                <span className="h-1 w-full bg-black"></span>
                <p className="font-bold">or</p>
                <span></span>
              </div>
              <div>
                <div className="cursor-pointer rounded-md border border-rdblack px-8 py-[15px]">
                  <div className="flex items-center justify-center gap-3">
                    <img src={google} alt="Google" className="h-5 w-5" />
                    <p className="font-bold">Continue with Google</p>
                  </div>
                </div>
                <div className="my-4 text-center">
                  <p
                    onClick={() => setShowReg(false)}
                    className="cursor-pointer"
                  >
                    Already here?{" "}
                    <span className="font-medium text-rdlightBlue underline">
                      Sign in
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}