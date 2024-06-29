import "../styles/home.css";
import { privateRoutes } from "../../routes/routes.jsx";
import { Link } from "react-router-dom";

//import images and create Map
import Splittermond from "../assets/splimo.png";
const imageMap = {
  Splittermond: Splittermond
}

const Home = () => {
  return (
    <section className="home">
      <h1>CharakterbogenSafe</h1>
      <div className="button-container">
        {privateRoutes
          ? privateRoutes.map((route, index) =>
              !route.home ? null : (
                <Link to={route.path} key={"home"+index}>
                  <div className="home-buttons">
                    <img className="rpgLogo" src={imageMap[route.name]} alt="" />
                    <div className="rpgName">{route.name}</div>
                  </div>
                </Link>
              )
            )
          : null}
      </div>
    </section>
  );
};

export default Home;
