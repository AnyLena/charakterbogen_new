import "../../../styles/splittermond/box-meister.css";
import "../../../styles/splittermond/box-single.css";

const MeisterschaftenKampf = ({ meisterschaften }) => {
  return (
    <>
      {meisterschaften.length > 0 ? (
        <>
          <h2>Kampfeisterschaften</h2>
          {meisterschaften.map((item, index) => (
            <div className="box-meister" key={index}>
              <h3>{item.kampfmeisterschaftName}</h3>
              <p className="subtext">
                Fertigkeit: {item.kampfmeisterschaftFertigkeit}
              </p>
              <p className="description">{item.kampfmeisterschaftWirkung}</p>
            </div>
          ))}
        </>
      ) : null}
    </>
  );
};

export default MeisterschaftenKampf;
