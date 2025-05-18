import { create } from "zustand";
import api from "../lib/axios";
import toast from "react-hot-toast";

export const useTaskStore = create((set) => ({
    tasks: [],
    loading: false,
    addTaskLoading: false,
    editTaskLoading: false,

    getTasks: async () => {
        try {
            set({ loading: true });
            const { data } = await api.get("/tasks");

            set({ tasks: data.tasks });
        } catch (error) {
            console.log(error.message);
        } finally {
            set({ loading: false });
        }
    },

    addTask: async (credentials) => {
        try {
            set({ addTaskLoading: true });
            const { data } = await api.post("/tasks/add", credentials);

            set((state) => ({
                tasks: [...state.tasks, data.task]
            }));
            toast.success("Task Added");
        } catch (error) {
            console.log(error.message);
        } finally {
            set({ addTaskLoading: false });
        }
    },

    editTask: async (taskId, credentials) => {
        try {
            set({ editTaskLoading: true });
            const { data } = await api.put(`/tasks/edit/${taskId}`, credentials);

            set((state) => ({
                tasks: state.tasks.map((task) =>
                    task._id === data.task._id ? data.task : task
                )
            }));
        } catch (error) {
            console.log(error.message);
        } finally {
            set({ editTaskLoading: false });
        }
    },

    markCompleteTask: async (taskId) => {
        try {
            const { data } = await api.put(`/tasks/markcomplete/${taskId}`, {});

            set((state) => ({
                tasks: state.tasks.map((task) =>
                    task._id === data.task._id ? data.task : task
                )
            }));
        } catch (error) {
            console.log(error.message);
        }
    },

    deleteTask: async (taskId) => {
        try {
            await api.delete(`/tasks/delete/${taskId}`);
            set((state) => ({
                tasks: state.tasks.filter((task) => {
                    if (task._id != taskId) return true;
                })
            }));
            toast.success("Task Deleted");
        } catch (error) {
            console.log(error.message);
        }
    }
}));
