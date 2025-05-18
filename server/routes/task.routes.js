import { Router } from "express";
import { protectedRoute } from "../middlewares/auth.middleware.js";
import { addTask, deleteTask, editTask, getTasks, markCompleteTask } from "../controllers/task.controller.js";
const router = Router();

router.route("/").get(protectedRoute, getTasks);
router.route("/add").post(protectedRoute, addTask);
router.route("/edit/:taskId").put(protectedRoute, editTask);
router.route("/markcomplete/:taskId").put(protectedRoute, markCompleteTask);
router.route("/delete/:taskId").delete(protectedRoute, deleteTask);

export default router;
