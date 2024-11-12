import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function AuthButtons() {
  const location = useLocation();
  const isLogin = location.pathname === "/login";
  const isRegister = location.pathname === "/register";

  return (
    <div className="grid grid-cols-2 gap-5">
      <Link to={`/login`}>
        <button
          className={`border-b p-4 font-bold text-rdblack w-full ${isLogin && `border-b-4 border-b-rdpink`}`}
        >
          Sign in
        </button>
      </Link>
      <Link to={`/register`}>
        <button
          className={`border-b p-4 font-bold text-rdblack w-full ${isRegister && `border-b-4 border-b-rdpink`}`}
        >
          Register
        </button>
      </Link>
    </div>
  );
}