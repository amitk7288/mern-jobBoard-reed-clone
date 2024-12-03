import google from "../../assets/google.webp";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import {app} from "../../firebase";
import {continueWithGoogle} from "../../features/authSlice";
import { useLoginWithGoogleMutation } from "../../features/usersApiSlice";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";

function OAuth() {
  const auth = getAuth(app);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.auth.userInfo);
  const [loginWithGoogle] = useLoginWithGoogleMutation();

  const handleGoogleClick = async (e) => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({prompt: 'select_account'});
    try {
      const resultsFromGoogle = await signInWithPopup(auth, provider);
      const updatedData = {
        ...userInfo,
        name: resultsFromGoogle.user.displayName,
        email: resultsFromGoogle.user.email,
        profilePic: resultsFromGoogle.user.photoURL,
      };
      const res = await loginWithGoogle(updatedData).unwrap();
      dispatch(continueWithGoogle({...res}));
      navigate(`/`);
      console.log(resultsFromGoogle.user);
      console.log('dispatched');
    } catch (error) {
      console.log(error);
      console.log("not dispatched");
    }
  }
  return (
    <div
      onClick={handleGoogleClick}
      className="cursor-pointer rounded-md border border-rdblack px-8 py-[15px]"
    >
      <div className="flex items-center justify-center gap-3">
        <img src={google} alt="Google" className="h-5 w-5" />
        <p className="font-bold">Continue with Google</p>
      </div>
    </div>
  );
}

export default OAuth;
