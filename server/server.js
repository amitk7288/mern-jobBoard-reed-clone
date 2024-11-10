import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
const port = process.env.PORT || 5001;
import userRoutes from "./routes/userRoutes.js";

// connects to the db
connectDB();

const app = express();

// allows us to parse raw json
app.use(express.json());
// allows us to submit form data
app.use(express.urlencoded({extended: true}));

app.use(cookieParser());

app.use("/api/users", userRoutes);

app.get('/', (req, res) => res.send('Server is ready'));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));

/**
 * MERN Step by Step
 * 1. Create two folders in root for client/frontend and server/backend
 * 2. The client/frontend folder will contain the react stuff
 * 3. Either create npm init -y in backend or root, where you do this determines how the project is deployed
 * 4. server.js entry point
 * 4. MVC - Models, Views, Controllers
 * 5. 
 */