import { useState, useEffect } from "react";
import "../../../styles/splittermond/box-single.css";
import "../../../styles/splittermond/box-double.css";
import "../../../styles/splittermond/box-meister.css";
import { getMondzeichen } from "../../../api/splittermond";

const Mondzeichen = ({ mond, level }) => {
  const [mondzeichen, setMondzeichen] = useState("");
  useEffect(() => {
    getMondzeichen(mond.mondID, setMondzeichen);
  }, []);

  // useEffect(() => {
  //   console.log(mondzeichen);
  // }, [mondzeichen]);

  return (
    <>
      {Object.keys(mondzeichen).length > 0 ? (
        <>
          <div className="box-single">
            <h2>Mondzeichen</h2>
            <h3>{mondzeichen.mondName}</h3>
          </div>
          <div className="box-double">
            <div>
              <p>Splitterpunkte:</p>
              <p>{mond.splitterpunkte}</p>
            </div>
            <div>
              <p>Aktuell:</p>
              <p>{mond.splitterpunkteAktuell}</p>
            </div>
          </div>

          <div className="box-meister">
            <h3>Pro Splitterpunkt</h3>
            <p className="subtext"></p>
            <p className="description">
              Eine Probe +3, Widerstandwert +3, Schaden einer Quelle -5,
              Mondzeichen einsetzen
            </p>
          </div>

          <div className="box-meister">
            <h3>Gabe</h3>
            <p className="subtext"></p>
            <p className="description">{mondzeichen.mondBeschreibung}</p>
          </div>

          {level > 1 ? (
            <div className="box-meister">
              <h3>Verstärkt</h3>
              <p className="subtext"></p>
              <p className="description">{mondzeichen.mondVerstaerkt}</p>
            </div>
          ) : null}
          {level > 1 ? (
            <div className="box-meister">
              <h3>Beeinflussung</h3>
              <p className="subtext"></p>
              <p className="description">
                Einsatz 2:1 für Gefährten ohne Splitterpunkte, Verstärken der
                Splitterpunktnutzung eines Gefährten (Fertigkeits- und
                Widerstandbonus von +3 auf +5, Schadensreduktion von -5 auf -8)
              </p>
            </div>
          ) : null}
          {level > 1 ? (
            <div className="box-meister">
              <h3>Geheim</h3>
              <p className="subtext"></p>
              <p className="description">{mondzeichen.mondGeheim}</p>
            </div>
          ) : null}
        </>
      ) : (
        <div>Lade Mondzeichen ...</div>
      )}
    </>
  );
};

export default Mondzeichen;
