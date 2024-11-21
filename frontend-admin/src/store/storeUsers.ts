import { User } from "@/types/types";
import { create } from "zustand";

interface StoreUsersState {
  users: User[];
  loadUsers: (newUsers: User[]) => void;
}

export const storeUsers = create<StoreUsersState>((set) => ({
  users: [],
  loadUsers: (newUsers: User[]) => set(() => ({ users: [...newUsers] })),
}));
