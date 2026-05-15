import { createContext } from "react";

interface User {
  email: string;
  company?: string;
  ubication?: string;
  profileImage?: string | null;
}

interface UserContextProps {
  user: User | null;
  loading: boolean;
  login: (userData: User) => void;
  logout: () => void;
}

export const UserContext =
  createContext<UserContextProps | null>(
    null
  );