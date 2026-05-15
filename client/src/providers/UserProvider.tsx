import { useState, useEffect } from "react";

import { supabase } from "../lib/supabase";
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
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // onAuthStateChange fires immediately with the current session,
    // so we don't need a separate getSession() call.
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        // Merge Supabase identity with any saved profile data
        // (company, ubication, profileImage stored by Profile page).
        const saved = JSON.parse(
          localStorage.getItem("user") || "{}"
        );

        setUser({
          email: session.user.email!,
          company:
            saved.company ??
            session.user.user_metadata?.company,
          ubication:
            saved.ubication ??
            session.user.user_metadata?.ubication,
          profileImage: saved.profileImage ?? null,
        });
      } else {
        setUser(null);
      }

      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const login = (userData: User) => {
    // Persist non-sensitive profile data so Profile.tsx can read it.
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    supabase.auth.signOut();
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
