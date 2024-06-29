import axios from "axios";
import React, { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

//Initializes a new Context object for auth-related data.
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("jwt") || null);
  const [player, setPlayer] = useState(null);

  const login = async (formData, setLoading, setError) => {
    setLoading(true);
    const SERVER = import.meta.env.VITE_DB;
  
    try {
      const response = await axios.post(`${SERVER}/player/login`, formData, {
        headers: { "Content-Type": "application/json" },
      });
      console.log(response);
      const { token, player } = response.data;

      localStorage.setItem("jwt", token);
      setToken(token);
      setPlayer(player);

      // setTimeout(() => {
      //   navigate("/");
      // }, 3000);
    } catch (e) {
      setError(e.response.data);
      setTimeout(() => {
        setError(null);
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("jwt");
    setToken(null);
    setPlayer(null);
    navigate("/login");
  };

  useEffect(() => {
    const fetchPlayer = async () => {

      if (token) {
        const SERVER = import.meta.env.VITE_DB;
        try {
          const response = await axios.get(`${SERVER}/player`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });

          setPlayer(response.data);
        } catch (e) {
          console.log(e);
          logout();
        }
      }
    };

    fetchPlayer();
  }, [token]);

  return (
    <AuthContext.Provider value={{ player, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
