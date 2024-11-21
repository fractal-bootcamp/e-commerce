import { getAllUsers } from "@/api/apiUsers";
import { storeUsers } from "@/store/storeUsers";
import { User } from "@/types/types";
import { useEffect } from "react";
import { useAuth } from "./useAuth";

const useUsers = () => {
  const { users, loadUsers } = storeUsers();
  const { idToken, firebaseUser } = useAuth();

  useEffect(() => {
    fetchUsers();
  }, [idToken, firebaseUser]);

  const fetchUsers = async () => {
    const users: User[] = await getAllUsers();
    if (idToken && firebaseUser) {
      loadUsers(users);
    }
  };

  return { users };
};

export default useUsers;
