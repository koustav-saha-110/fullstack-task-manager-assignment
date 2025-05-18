import { Router } from "express";
import { login, logout, signup } from "../controllers/user.controller.js";
import { protectedRoute } from "../middlewares/auth.middleware.js";
const router = Router();

router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/logout").post(protectedRoute, logout);
router.route("/me").get(protectedRoute, async (req, res) => {
    return res.status(200).json({
        success: true,
        user: req.user
    });
});

export default router;
