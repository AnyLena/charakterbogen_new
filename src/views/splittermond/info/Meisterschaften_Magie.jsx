import "../../../styles/splittermond/box-meister.css";
import "../../../styles/splittermond/box-single.css";

const MeisterschaftenMagie = ({ meisterschaften }) => {
  return (
    <>
      {meisterschaften.length > 0 ? (
        <>
          <h2>Magiemeisterschaften</h2>
          {meisterschaften.map((item, index) => (
            <div className="box-meister" key={index}>
              <h3>{item.magiemeisterschaftName}</h3>
              <p className="subtext">
                Fertigkeit: {item.magiemeisterschaftFertigkeit}
              </p>
              <p className="description">{item.magiemeisterschaftWirkung}</p>
            </div>
          ))}
        </>
      ) : null}
    </>
  );
};

export default MeisterschaftenMagie;
