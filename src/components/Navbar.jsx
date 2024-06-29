import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
    const {player, logout} = useAuth();

  return (
    <nav id="navbar">
      {player ? (
        <>
          <NavLink to="/">Home</NavLink> <p onClick={logout}>Logout</p>
        </>
      ) : null}
    </nav>
  );
};

export default Navbar;
