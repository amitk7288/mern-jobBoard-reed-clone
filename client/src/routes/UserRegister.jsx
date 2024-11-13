import { useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AuthButtons from "../components/ui-components/AuthButtons";
import { useRegisterMutation } from "../features/usersApiSlice";
import { registerUser } from "../features/authSlice";
import google from "../assets/google.webp";
import { GoEye, GoEyeClosed } from "react-icons/go";
// import validator from "validator";

function UserRegister() {
  const registerForm = useRef(null);

  const [showPass, setShowPass] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, {isLoading}] = useRegisterMutation();

  const handleRegisterUser = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.log("Passwords do not match");
    } else {
      try {
        const res = await register({ name, email, password }).unwrap();
        dispatch(registerUser({ ...res }));
        navigate("/login");
      } catch (err) {
         console.log('there was an error');
      }
    }
  };

  return (
    <div className="flex flex-col items-center lg:bg-[#f8f8f8]">
      <div className="my-10 w-screen bg-white px-[20px] lg:w-[500px] lg:rounded-lg lg:border lg:py-[30px]">
        <AuthButtons />
        <div id="register">
          <div>
            <h1 className="my-5 text-3xl font-bold text-rdblack">Register</h1>
            <p className="my-4 font-bold text-rdblack">Register with email</p>
          </div>
          <form
            className="flex flex-col gap-3"
            ref={registerForm}
            onSubmit={handleRegisterUser}
          >
            <div className="flex flex-col gap-1">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
                className="rounded-md border border-rdblack py-3 pl-5 pr-10"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <span className="hidden text-sm font-medium text-[#e32424]">
                Please enter your name
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email address"
                className="rounded-md border border-rdblack py-3 pl-5 pr-10"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="true"
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
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between rounded-md border border-rdblack py-3 pl-5 pr-5">
                <input
                  type={`${showPass ? `text` : `password`}`}
                  name="regConfirmPassword"
                  id="regConfirmPassword"
                  placeholder="Confirm password"
                  className="h-full w-full border-0 outline-none ring-0"
                  autoComplete="true"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
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
              {isLoading ? 'Loading...' : 'Create account'}
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
                <p onClick={() => setShowReg(false)} className="cursor-pointer">
                  Already here?{" "}
                  <span className="font-medium text-rdlightBlue underline">
                    Sign in
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

export default UserRegister