import { create } from "zustand";

interface AuthState {
  isAuthenticated: boolean;
  setIsAuthenticated: (status: boolean) => void;
  login: () => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false, // Initial state
  setIsAuthenticated: (status: boolean) => {
    console.log("Updating isAuthenticated to:", status); // Debug log
    set({ isAuthenticated: status });
  },
  login: () => set({ isAuthenticated: true }), // Action to log in
  logout: () => set({ isAuthenticated: false }), // Action to log out
}));

export default useAuthStore;
