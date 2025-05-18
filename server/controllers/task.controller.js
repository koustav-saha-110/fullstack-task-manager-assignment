import Task from "../models/task.model.js";

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ author: req.user._id }).sort({ createdAt: -1 });
        res.status(200).json({
            success: true,
            tasks
        });
    } catch (error) {
        console.error("Error in getTasks", error.message);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

export const addTask = async (req, res) => {
    try {
        const { title, description } = req.body;
        if (!title) {
            return res.status(400).json({
                success: false,
                message: "Title is required"
            });
        }

        const newTask = await Task.create({
            title: title,
            description: description,
            author: req.user._id
        });

        res.status(201).json({
            success: true,
            task: newTask,
            message: "Task created successfully"
        });
    } catch (error) {
        console.error("Error in addTask", error.message);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

export const editTask = async (req, res) => {
    try {
        const { title, description } = req.body;
        if (!title) {
            return res.status(400).json({
                success: false,
                message: "Title is required"
            });
        }

        const task = await Task.findById(req.params.taskId);
        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found"
            });
        }

        task.title = title;
        task.description = description;
        await task.save();

        res.status(200).json({
            success: true,
            task,
            message: "Task updated successfully"
        });
    } catch (error) {
        console.error("Error in editTask", error.message);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

export const markCompleteTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.taskId);
        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found"
            });
        }

        task.isCompleted = !task.isCompleted;
        await task.save();

        res.status(200).json({
            success: true,
            task,
            message: `Task marked as ${task.isCompleted ? "completed" : "incomplete"} successfully`
        });
    } catch (error) {
        console.error("Error in markCompletedTask", error.message);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

export const deleteTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.taskId);
        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found"
            });
        }

        await Task.deleteOne({ _id: task._id });

        res.status(200).json({
            success: true,
            message: "Task deleted successfully"
        });
    } catch (error) {
        console.error("Error in deleteTask", error.message);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}
