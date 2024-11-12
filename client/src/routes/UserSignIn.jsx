import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import AuthButtons from "../components/ui-components/AuthButtons";
import google from "../assets/google.webp";
import { GoEye, GoEyeClosed } from "react-icons/go";

export default function UserSignIn() {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const signInForm = useRef(null);

  const handleChange = (e) => {
    setLoginInfo({ ...loginInfo, [e.target.id]: e.target.value });
  };

  const handleLoginUser = async (e) => {
    e.preventDefault();

    // attempt to login user
    try {
        const baseUrl = window.location.origin; // This gets the current origin (e.g., http://localhost:3000)
        const apiUrl = `${baseUrl}/api/users/auth`; // Full URL
        console.log(`Fetch URL: ${apiUrl}`);

        const res = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginInfo),
        });

      const data = await res.json();

      if (res.ok) {
        console.log("User logged in successfully:", data);
        signInForm.current.reset();
        navigate(`/`);
      } else {
        console.error("Error:", data.message || "Registration failed");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <div className="flex flex-col items-center lg:bg-[#f8f8f8]">
      <div className="my-10 w-screen bg-white px-[20px] lg:w-[500px] lg:rounded-lg lg:border lg:py-[30px]">
        <AuthButtons />
        <div id="signIn">
          <div>
            <h1 className="my-5 text-3xl font-bold text-rdblack">Sign in</h1>
            <p className="my-4 font-bold text-rdblack">Continue with email</p>
          </div>
          <form
            className="flex flex-col gap-3"
            ref={signInForm}
            onSubmit={handleLoginUser}
          >
            <div className="flex flex-col gap-1">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email address"
                className="rounded-md border border-rdblack py-3 pl-5 pr-10"
                onChange={handleChange}
              />
              <span className="hidden text-sm font-medium text-[#e32424]">
                Please enter a valid email
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between rounded-md border border-rdblack py-3 pl-5 pr-5">
                <input
                  type={`${showPass ? `text` : `password`}`}
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="h-full w-full border-0 outline-none ring-0"
                  autoComplete="true"
                  onChange={handleChange}
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
              <a href="#" className="mt-1 text-sm font-medium text-rdlightBlue">
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
                <p onClick={() => setShowReg(true)} className="cursor-pointer">
                  Don't have an account?{" "}
                  <span className="font-medium text-rdlightBlue underline">
                    Register
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
