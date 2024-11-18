import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AuthButtons from "../components/ui-components/AuthButtons";
import {
  useLoginMutation,
  useGetProfileQuery,
} from "../features/usersApiSlice";
import { loginUser, getProfile } from "../features/authSlice";
import google from "../assets/google.webp";
import { GoEye, GoEyeClosed } from "react-icons/go";
import validator from 'validator';

export default function UserSignIn() {
  const signInForm = useRef(null);

  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passError, setPassError] = useState(false);
  const [formError, setFormError] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();
  const { profileData } = useGetProfileQuery();

  const emailOnChange = (e) => {
    setEmail(e.target.value);
  }
  const handleEmailCheck = () => {
    if (validator.isEmail(email)) {
      setEmailError(false);
    } else if (!validator.isEmail(email)) {
      setEmailError(true);
    }
  }

  const passOnChange = (e) => {
    setPassword(e.target.value);
  };
  const handlePassCheck = () => {
    if (password.trim() === "") {
      setPassError(true);
    } else if (password.trim() !== "") {
      setPassError(false);
    }
  };

  const handleLoginUser = async (e) => {
    e.preventDefault();

    handleEmailCheck();
    handlePassCheck();

    try {
      const res = await login({ email, password }).unwrap();
      dispatch(loginUser({ ...res }));

      // if (profileData) {
      //   dispatch(getProfile(profileData.profile));
      //   console.log('yes');
      // } else {
      //   console.log('no');
        
      // }

      navigate("/");
    } catch (err) {
      if (email.trim() !== "" || password.trim() !== "") {
        setFormError(true);
      }
      console.log("there was an error");
    }
  }

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
                className={`rounded-md border border-rdblack py-3 pl-5 pr-10 ${emailError && `border-red-600`}`}
                onChange={emailOnChange}
                onKeyDown={handleEmailCheck}
              />
              {emailError && (
                <span className="text-sm font-medium text-[#e32424]">
                  Please enter your email address
                </span>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <div
                className={`flex items-center justify-between rounded-md border border-rdblack py-3 pl-5 pr-5 ${passError && `border-red-600`}`}
              >
                <input
                  type={`${showPass ? `text` : `password`}`}
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="h-full w-full border-0 outline-none ring-0"
                  autoComplete="true"
                  onChange={passOnChange}
                  onKeyDown={handlePassCheck}
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
              {passError && (
                <span className="text-sm font-medium text-[#e32424]">
                  Please enter your password
                </span>
              )}
              <a
                href="#"
                className="mt-1 text-right text-sm font-medium text-rdlightBlue"
              >
                Forgotten password?
              </a>
              {formError && (
                <span className="text-sm font-medium text-[#e32424]">
                  Incorrect login credentials, please try again.
                </span>
              )}
            </div>
            <button
              type="submit"
              className={`cursor-pointer rounded-md bg-[#cf04a9] px-8 py-[15px] text-center font-medium text-white hover:bg-[#9f0885]`}
            >
              {isLoading ? "Loggin you in..." : "Continue"}
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
