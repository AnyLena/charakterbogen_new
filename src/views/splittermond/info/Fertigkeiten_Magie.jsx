import { useState } from "react";
import "../../../styles/splittermond/fertigkeiten.css";
import { magiefertigkeitenListe } from "../../../utils/staerkenFertigkeiten";

const Magieschulen = ({ fertigkeiten, attribute, edit, editCharacter, handleChange }) => {
  return (
    <>
      <h2>Magieschulen</h2>
      <div className="fertigkeiten">
        <div>
          {magiefertigkeitenListe.map((item) => (
            <>
              {edit || fertigkeiten[item.name.replace("ä", "ae")] !== 0 ? (
                <>
                  {edit ? (
                    <>
                      <h3>
                        {item.name.slice(0, 1).toLocaleUpperCase() +
                          item.name.slice(1)}
                      </h3>
                      <p>
                        {attribute[item.attributes[0]].aktuell +
                          attribute[item.attributes[1]].aktuell +
                          editCharacter[item.name.replace("ä", "ae")]}
                      </p>
                      <input
                        type="number"
                        name={[item.name.replace("ä", "ae")]}
                        data-section="magieschulen"
                        onChange={(e) => handleChange(e)}
                        value={editCharacter[item.name.replace("ä", "ae")]}
                      />
                    </>
                  ) : (
                    <>
                      <h3>
                        {item.name.slice(0, 1).toLocaleUpperCase() +
                          item.name.slice(1)}
                      </h3>
                      <p>
                        {attribute[item.attributes[0]].aktuell +
                          attribute[item.attributes[1]].aktuell +
                          fertigkeiten[item.name.replace("ä", "ae")]}
                      </p>
                      <p className="basis">
                        Basis: {fertigkeiten[item.name.replace("ä", "ae")]}
                      </p>
                    </>
                  )}
                </>
              ) : null}
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Magieschulen;
