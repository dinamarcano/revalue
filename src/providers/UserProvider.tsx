import { useState } from "react";

import { UserContext } from "../context/UserContext";

interface User {
  email: string;
  company?: string;
  ubication?: string;
  profileImage?: string | null;
}

export function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(
    () => {
      const savedUser =
        localStorage.getItem("user");

      return savedUser
        ? JSON.parse(savedUser)
        : null;
    }
  );

  const login = (userData: User) => {
    localStorage.setItem(
      "user",
      JSON.stringify(userData)
    );

    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("user");

    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}