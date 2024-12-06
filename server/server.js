import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
dotenv.config();
import cookieParser from "cookie-parser";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import uploadImg from "./config/multer.js";
const port = process.env.PORT || 5001;
import userRoutes from "./routes/userRoutes.js";

const base_url = process.env.REED_BASE_URL;
const api_key = process.env.REED_API;

const getAuthHeader = () => {
  const username = api_key;
  const password = "";
  const base64Credentials = Buffer.from(`${username}:${password}`).toString("base64");
  return {
    Authorization: `Basic ${base64Credentials}`,
    "Content-Type": "application/json",
  };
};

// connects to the db
connectDB();

const app = express();

// allows us to parse raw json
app.use(express.json());
// allows us to submit form data
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(cookieParser());

app.use("/api/users", userRoutes);

// REED API calls
app.get("/api/jobs/:jobId", async (req, res) => {
  try {
    console.log(`Fetching job ID: ${req.params.jobId}`);
    const response = await fetch(`${base_url}/jobs/${req.params.jobId}`, {
      method: "GET",
      headers: getAuthHeader(),
    });
    console.log("External API response status:", response.status);

    if (!response.ok) {
      return res.status(response.status).json({ message: "Failed to fetch job details" });
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching job details:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/api/search", async (req, res) => {
  try {
    const { keywords: what, location: where } = req.query;

    const response = await fetch(`${base_url}/search?keywords=${what}&location=${where}`, {
      method: "GET",
      headers: getAuthHeader(),
    });
    console.log("External API response status:", response.status);

    if (!response.ok) {
      return res.status(response.status).json({ message: "Failed to fetch job details" });
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching job details:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// CLOUDINARY Image Upload
app.post("/api/upload", uploadImg.single("image"), (req, res) => {

  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  console.log("Received file:", req.file);
  try {
    res.status(200).json({
      message: "Image uploaded successfully",
      file: req.file,
    });
  } catch (error) {
    console.error("Error uploading image:", error);
    res.status(500).json({ message: "Image upload failed" });
  }
});

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "client", "dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
  });
}

app.get("/", (req, res) => res.send("Server is ready"));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
