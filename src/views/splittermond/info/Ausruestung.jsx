import "../../../styles/splittermond/box-meister.css";
import "../../../styles/splittermond/box-single.css";
import "../../../styles/splittermond/box-triple.css";

const Ausruestung = ({
  ausruestung,
  editCharacterA,
  editCharacterV,
  handleChange,
  edit,
  geld,
}) => {
  return (
    <>
      <div className="box-single">
        <h2>Ausrüstung</h2>
        {edit ? (
          <textarea
            name="ausruestung"
            onChange={(e) => handleChange(e)}
            value={editCharacterA}
          />
        ) : (
          <p>{ausruestung}</p>
        )}
      </div>

      <div className="box-single">
        <h2>Vermögen</h2>
      </div>

      <div className="box-triple">
        <div>
          <h3>Solare</h3>
          {edit ? (
            <input
              type="number"
              name="solare"
              data-section="geld"
              onChange={(e) => handleChange(e)}
              value={editCharacterV.solare}
              style={{ textAlign: "center" }}
              min="0"
            />
          ) : (
            <p>{geld.solare}</p>
          )}
        </div>
        <div>
          <h3>Lunare</h3>
          {edit ? (
            <input
              type="number"
              name="lunare"
              data-section="geld"
              onChange={(e) => handleChange(e)}
              value={editCharacterV.lunare}
              style={{ textAlign: "center" }}
              min="0"
            />
          ) : (
            <p>{geld.lunare}</p>
          )}
        </div>
        <div>
          <h3>Telare</h3>
          {edit ? (
            <input
              type="number"
              name="telare"
              data-section="geld"
              onChange={(e) => handleChange(e)}
              value={editCharacterV.telare}
              style={{ textAlign: "center" }}
              min="0"
            />
          ) : (
            <p>{geld.telare}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Ausruestung;
