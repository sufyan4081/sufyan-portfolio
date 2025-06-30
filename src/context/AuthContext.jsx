import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const login = (data) => {
    setUserData(data.payload);
    localStorage.setItem("token", data.token);
  };

  const logout = () => {
    setUserData(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ userData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
