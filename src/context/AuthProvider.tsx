"use client"

import { createContext, ReactNode, useState } from "react";

type Credentials = {
  name?: string;
  password: string;
  email?: string;
};

interface AuthContextProps {
  user: string | null;
  login: ({ name, password, email }: Credentials) => number;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | null>(null);

export function AuthProvider({ children }: { children: ReactNode; }) {
  const [user, sertUser] = useState<string | null>(null);

  const login = ({ name, password, email }: Credentials) => {
    if (name) {
      if (name === "John Doe" && password === "123") {
        sertUser(name);
        return 1;
      } else {
        return 0;
      }
    } else if (email) {
      if (email === "john@doe.com" && password === "123") {
        // Busca no banco de dados
        sertUser("John Doe");
        return 1;
      } else {
        return 0;
      }
    }
    return 0;
  };

  const logout = () => {
    if (user) {
      sertUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;