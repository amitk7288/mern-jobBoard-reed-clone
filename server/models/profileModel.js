import mongoose from "mongoose";

const profileSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    about: {
      role: String,
      tel: String,
    },
    cv: String,
    lookingFor: {
      desiredJobTitle: String,
      salary: String,
      location: String,
      jobType: { type: String, enum: ["Permanent", "Contract", "Full-time", "Part-time"] },
    },
    status: {
      employmentStatus: { type: String, enum: ["Employed Full-time", "Employed Part-time", "Unemployed"] },
      noticePeriod: String,
      workEligibility: Boolean,
    },
    experience: [
      {
        uuid: String,
        expRole: String,
        company: String,
        yearStart: String,
        yearEnd: String,
      },
    ],
    qualifications: [
      {
        uuid: String,
        name: String,
        school: String,
        yearStart: String,
        yearEnd: String,
        subject: String,
        grade: String,
      },
    ],
    savedJobs: [],
    appliedJobs: [],
  },
  { timestamps: true }
);

const Profile = mongoose.model("Profile", profileSchema);

export default Profile;