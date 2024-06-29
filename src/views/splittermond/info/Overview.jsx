import "../../../styles/splittermond/overview.css";
import "../../../styles/splittermond/box-single.css";
import "../../../styles/splittermond/box-double.css";
const Overview = ({ data, handleChange, editCharacter, edit }) => {
  return (
    <>
      <div className="overview">
        <h2>Ausbildung</h2>
        {edit ? (
          <input
            name="ausbildung"
            data-section="allgemeines"
            onChange={(e) => handleChange(e)}
            value={editCharacter.ausbildung}
          />
        ) : (
          <p>{data.ausbildung}</p>
        )}
        <h2>Kultur</h2>
        {edit ? (
          <input
            name="kultur"
            data-section="allgemeines"
            onChange={(e) => handleChange(e)}
            value={editCharacter.kultur}
          />
        ) : (
          <p>{data.kultur}</p>
        )}
        <h2>Abstammung</h2>
        {edit ? (
          <input
            name="abstammung"
            data-section="allgemeines"
            onChange={(e) => handleChange(e)}
            value={editCharacter.abstammung}
          />
        ) : (
          <p>{data.abstammung}</p>
        )}
        <h2>Rasse</h2>
        {edit ? (
          <input
            name="rasse"
            data-section="allgemeines"
            onChange={(e) => handleChange(e)}
            value={editCharacter.rasse}
          />
        ) : (
          <p>{data.rasse}</p>
        )}
        <h2>Geburtsort</h2>
        {edit ? (
          <input
            name="geburtsort"
            data-section="allgemeines"
            onChange={(e) => handleChange(e)}
            value={editCharacter.geburtsort}
          />
        ) : (
          <p>{data.geburtsort}</p>
        )}
        <h2>Schwächen</h2>
        {edit ? (
          <input
            name="schwaechen"
            data-section="allgemeines"
            onChange={(e) => handleChange(e)}
            value={editCharacter.schwaechen}
          />
        ) : (
          <p>{data.schwaechen}</p>
        )}
        <h2>Erscheinung</h2>
        {edit ? (
          <input
            name="erscheinung"
            data-section="allgemeines"
            onChange={(e) => handleChange(e)}
            value={editCharacter.erscheinung}
          />
        ) : (
          <p>{data.erscheinung}</p>
        )}
      </div>

      <h2>Erfahrungspunkte</h2>

      <div className="box-double">
        <div>
          <h3>Aktuell</h3>
          {edit ? (
            <input
              data-section="allgemeines"
              data-subsection="aktuell"
              name="erfahrungspunkte"
              type="number"
              onChange={(e) => handleChange(e)}
              value={editCharacter.erfahrungspunkte.aktuell}
            />
          ) : (
            <p>{data.erfahrungspunkte.aktuell}</p>
          )}
        </div>
        <div>
          <h3>Gesamt</h3>
          {edit ? (
            <input
              data-section="allgemeines"
              data-subsection="basis"
              name="erfahrungspunkte"
              type="number"
              onChange={(e) => handleChange(e)}
              value={editCharacter.erfahrungspunkte.basis}
            />
          ) : (
            <p>{data.erfahrungspunkte.basis}</p>
          )}
        </div>
      </div>

      <div className="box-single">
        <h2>Heldengrad</h2>
        {edit ? (
          <input
            data-section="allgemeines"
            name="heldengrad"
            type="number"
            onChange={(e) => handleChange(e)}
            value={editCharacter.heldengrad}
            style={{ width: "100%", textAlign: "center" }}
          />
        ) : (
          <p className="text-center">{data.heldengrad}</p>
        )}
      </div>
    </>
  );
};

export default Overview;
