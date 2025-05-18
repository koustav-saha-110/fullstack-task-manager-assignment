import { create } from "zustand";
import api from "../lib/axios";
import toast from "react-hot-toast";

export const useAuthStore = create((set) => ({
    authUser: null,
    loading: false,
    isCheckingAuth: true,

    checkAuth: async () => {
        try {
            set({ isCheckingAuth: true });
            const { data } = await api.get("/auth/me");

            set({ authUser: data.user });
            toast.success("Authenticated successfully");
        } catch (error) {
            console.log(error.message);
        } finally {
            set({ isCheckingAuth: false });
        }
    },

    signup: async (credentials) => {
        try {
            set({ loading: true });
            const { data } = await api.post("/auth/signup", credentials);

            set({ authUser: data.user });
            toast.success("Account created successfully");
        } catch (error) {
            console.log(error.message);
        } finally {
            set({ loading: false });
        }
    },

    login: async (credentials) => {
        try {
            set({ loading: true });
            const { data } = await api.post("/auth/login", credentials);

            set({ authUser: data.user });
            toast.success("Login successful");
        } catch (error) {
            console.log(error.message);
        } finally {
            set({ loading: false });
        }
    },

    logout: async () => {
        try {
            await api.get("/auth/logout");
            set({ authUser: null });
        } catch (error) {
            console.log(error.message);
        }
    }
}));
