import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import User from "../models/userModel.js";
import Profile from "../models/profileModel.js";

// @desc Auth/login user/set token
// route POST api/users/auth
// @access Public
const authUser = asyncHandler (async (req, res) => {
  const { email, password } = req.body;
  
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    const profile = await Profile.findOne({ userId: user._id });

    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      profile,
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }

})

// @desc Register a new user
// route POST api/users
// @access Public
const registerUser = asyncHandler (async (req, res) => {
  const { name, email, password } = req.body;
  
  const userExists = await User.findOne({email});
  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
    // return?
  }

  const user = await User.create({
    name,
    email,
    password
  });

  const profile = await Profile.create({
    userId: user._id,
    about: {
      role: "",
      tel: "",
    },
    cv: "",
    lookingFor: {
      desiredJobTitle: "",
      salary: "",
      location: "",
      jobType: "Full-time",
    },
    status: {
      employmentStatus: "Employed Full-time",
      noticePeriod: "",
      workEligibility: false,
    },
    experience: [],
    qualifications: [],
  });

  if (user && profile) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      profile,
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }

})

// @desc Logout user
// route POST api/users/logout
// @access Public
const logoutUser = asyncHandler (async (req, res) => {
  // kill the jwt
  res.cookie('jwt', '', {
    httpOnly: true, 
    expires: new Date(0)
  })
  res.status(200).json({mssg: 'Logged out'});
})

// @desc Get user profile
// route GET api/users/profile
// @access Private
const getUserProfile = asyncHandler (async (req, res) => {
  const profile = await Profile.findOne({ userId: req.user._id }).populate("userId", "name email");
  
  if (profile) {
    res.status(201).json({
      profile,
    });
  } else {
    console.log('get profile failed');
    res.status(404);
    throw new Error("Profile not found");    
  }  
})

// @desc Update user profile
// route PUT api/users/profile
// @access Private
const updateUserProfile = asyncHandler (async (req, res) => {
  const user = await User.findById(req.user._id);
  const profile = await Profile.findOne({ userId: req.user._id });

  if (user && profile) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    const { role, tel, cv, desiredJobTitle, salary, location, jobType, employmentStatus, noticePeriod, workEligibility, experience, qualifications } = req.body;

    profile.about.role = role ?? profile.about.role;
    profile.about.tel = tel ?? profile.about.tel;
    
    profile.cv = cv ?? profile.cv;

    profile.lookingFor.desiredJobTitle = desiredJobTitle ?? profile.lookingFor.desiredJobTitle;
    profile.lookingFor.salary = salary ?? profile.lookingFor.salary;
    profile.lookingFor.location = location ?? profile.lookingFor.location;
    profile.lookingFor.jobType = jobType ?? profile.lookingFor.jobType;

    profile.status.employmentStatus = employmentStatus ?? profile.status.employmentStatus;
    profile.status.noticePeriod = noticePeriod ?? profile.status.noticePeriod;
    profile.status.workEligibility = workEligibility ?? profile.status.workEligibility;

    if (experience) {
      profile.experience = experience;
    }

    if (qualifications) {
      profile.qualifications = qualifications;
    }

    const updatedUser = await user.save();
    const updatedProfile = await profile.save();

    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      profile: updatedProfile,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }

  res.status(200).json({mssg: 'Update user profile'});
})


export {authUser, registerUser, logoutUser, getUserProfile, updateUserProfile};