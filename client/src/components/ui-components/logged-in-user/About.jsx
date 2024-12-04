import { useSelector, useDispatch } from "react-redux";
import { useState, useRef, useEffect } from "react";
import InfoPod from "../InfoPod";
import AboutModal from "./profile/widgets/modal-content/AboutModal";
import { uploadImgCloudinary } from "../../../features/authSlice";
import { useUpdateProfileMutation } from "../../../features/usersApiSlice";
import { LuPenSquare } from "react-icons/lu";
import { HiOutlinePhone, HiOutlineEnvelope } from "react-icons/hi2";

export default function About() {
  const dispatch = useDispatch();
  const [updateProfileImg] = useUpdateProfileMutation();
  const { userInfo } = useSelector((state) => state.auth);
  const { profileInfo } = useSelector((state) => state.auth);
  const { role, tel } = profileInfo?.profile?.about || {};
  const defaultProfilePic =
    "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg";

  const imgPicker = useRef(null);
  const [file, setFile] = useState(
    userInfo.profilePic ? userInfo.profilePic : defaultProfilePic,
  );
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (file && typeof file === "string") {
      setPreview(file);
    } else if (file && file instanceof File) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }, [file]);

  const handleUpdateImgClick = (e) => {
    e.preventDefault();
    imgPicker.current.click();
  };

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      try {
        dispatch(uploadImgCloudinary(selectedFile)).then((data) => {
          const uploadedImageUrl = data?.payload;
          console.log(uploadedImageUrl);

          if (uploadedImageUrl) {
            setFile(uploadedImageUrl);
            updateProfileImg({ profilePic: uploadedImageUrl }).unwrap(); 
          }

        }); 
      } catch (error) {
        console.log("Error uploading image:", error);
      }
    }
  };

  return (
    <InfoPod
      title={`About you`}
      headerLink={`Edit`}
      modalContent={
        <AboutModal
          name={userInfo.name}
          role={role}
          tel={tel}
          email={userInfo.email}
          profilePic={userInfo.profilePic}
        />
      }
      headerIcon={<LuPenSquare />}
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <p className="text-[20px] font-bold text-rdblack">{userInfo.name}</p>
          <input
            type="file"
            accept="image/*"
            ref={imgPicker}
            onChange={handleFileChange}
            hidden
          />
          <img
            onClick={handleUpdateImgClick}
            className="h-10 w-10 cursor-pointer rounded-full object-cover"
            src={preview || defaultProfilePic}
            alt="profile pic"
          />
        </div>
        <p className="text-base font-bold text-rdblack">{role}</p>
        <div className="flex items-center gap-2">
          <HiOutlinePhone className="text-lg" />
          <p>{tel}</p>
        </div>
        <div className="flex items-center gap-2">
          <HiOutlineEnvelope className="text-lg" />
          <p>{userInfo.email}</p>
        </div>
      </div>
    </InfoPod>
  );
}
