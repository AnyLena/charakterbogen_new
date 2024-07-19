import "../../../styles/splittermond/overview.css";
import "../../../styles/splittermond/box-single.css";
import "../../../styles/splittermond/box-double.css";
import React from "react";
const Overview = ({ data, handleChange, editCharacter, edit }) => {
  const charakterOverview = [
    "ausbildung",
    "kultur",
    "abstammung",
    "rasse",
    "geburtsort",
    "schwaechen",
    "erscheinung",
  ];
  return (
    <>
      <div className="overview">
        {charakterOverview.map((item, index) => (
          <React.Fragment key={index}>
            <h2>
              {item.slice(0, 1).toUpperCase() +
                item.slice(1).replace("ae", "ä")}
            </h2>
            {edit ? (
              <input
                name={item}
                data-section="allgemeines"
                onChange={(e) => handleChange(e)}
                value={editCharacter[item]}
              />
            ) : (
              <p>{data[item]}</p>
            )}
          </React.Fragment>
        ))}
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
