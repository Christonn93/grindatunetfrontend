import React, { useState } from "react";
import { LoginButton } from "./LoginButton";
import { LogoutButton } from "./LogOutButton";

export const AuthButtons = () => {
 const [isAuthenticated, setIsAuthenticated] = useState(false);

 const handleLogin = () => {
  // Simulate login action
  console.log("Logging in...");
  setIsAuthenticated(true);
 };

 const handleLogout = () => {
  // Simulate logout action
  console.log("Logging out...");
  setIsAuthenticated(false);
 };

 return <div>{isAuthenticated ? <LogoutButton onLogout={handleLogout} /> : <LoginButton onLogin={handleLogin} />}</div>;
};
