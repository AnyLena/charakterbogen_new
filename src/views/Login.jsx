import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import "../styles/login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { login, player } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(formData, setLoading, setError);
  };

  return (
    <>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <section className="login">
            <h1>CharakterbogenSafe</h1>
            <h2>Please Log In </h2>
            <form onSubmit={handleSubmit}>
              <input
                className="login"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="email"
                required
              />
              <input
                className="login"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="password"
                required
              />
              <button disabled={loading} type="submit">
                Login
              </button>
            </form>
          </section>
        </>
      )}
    </>
  );
};

export default Login;
