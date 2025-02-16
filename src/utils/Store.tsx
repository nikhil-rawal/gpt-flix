import { create } from "zustand";

// Define the state structure
interface StoreState {
  userName: string | null;
  setUserName: (currentUser: string | null) => void;
  clearUserName: () => void;
}

// Create the Zustand store with TypeScript types
export const useStore = create<StoreState>((set) => ({
  userName: null, // Initial state
  setUserName: (currentUser) => set({ userName: currentUser }),
  clearUserName: () => set({ userName: null }), // Clear userName properly
}));
