import { create } from "zustand";

// Define the state structure
interface StoreState {
  userName: string | null;
  loading: boolean;
  setUserName: (currentUser: string | null) => void;
  clearUserName: () => void;
  setLoading: (loading: boolean) => void;
}

// Create the Zustand store with TypeScript types
export const useStore = create<StoreState>((set) => ({
  userName: null,
  loading: true,
  setUserName: (currentUser) => set({ userName: currentUser }),
  clearUserName: () => set({ userName: null }),
  setLoading: (loading) => set({ loading }),
}));
