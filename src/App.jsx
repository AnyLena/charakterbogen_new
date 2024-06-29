import "./styles/App.css";
import "./styles/fonts.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routes/routes";
import { useAuth } from "./context/AuthContext";
import NotFound from "./views/NotFound";
import Navbar from "./components/Navbar";

function App() {
  const { token } = useAuth();

  return (
    <>
      <Navbar />
      <Routes>
        {publicRoutes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={!token ? element : <Navigate to="/" />}
          />
        ))}
        {privateRoutes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={token ? element : <Navigate to="/login" />}
          />
        ))}
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
    </>
  );
}

export default App;
