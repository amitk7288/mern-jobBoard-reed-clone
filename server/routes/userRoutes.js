import express from 'express';
import { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile, continueWithGoogle } from "../controller/userController.js";
import {protect} from "../middleware/authMiddleware.js";

const router = express.Router();

router.post('/auth', authUser);
router.post('/register', registerUser);
router.post('/logout', logoutUser);
router.route('/').get(protect, getUserProfile).put(protect, updateUserProfile);
router.post('/login', continueWithGoogle);
router.post('/register', continueWithGoogle);

export default router;