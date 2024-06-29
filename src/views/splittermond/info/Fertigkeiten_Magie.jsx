import { useState } from "react";
import "../../../styles/splittermond/fertigkeiten.css";

const Magieschulen = ({ fertigkeiten, attribute }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <h2>Magieschulen</h2>
      <div className="fertigkeiten">
        <div>
          {open || fertigkeiten.bannmagie !== 0 ? (
            <>
              <h3>Bannmagie</h3>
              <p>
                {[
                  attribute.mystik.aktuell +
                    attribute.willenskraft.aktuell +
                    fertigkeiten.bannmagie,
                ]}
              </p>
              <p className="basis">Basis: {fertigkeiten.bannmagie}</p>{" "}
            </>
          ) : null}
          {open || fertigkeiten.beherrschungsmagie !== 0 ? (
            <>
              <h3>Beherrschungsmagie</h3>
              <p>
                {[
                  attribute.mystik.aktuell +
                    attribute.willenskraft.aktuell +
                    fertigkeiten.beherrschungsmagie,
                ]}
              </p>
              <p className="basis">Basis: {fertigkeiten.beherrschungsmagie}</p>{" "}
            </>
          ) : null}
          {open || fertigkeiten.bewegungsmagie !== 0 ? (
            <>
              <h3>Bewegungsmagie</h3>
              <p>
                {[
                  attribute.mystik.aktuell +
                    attribute.beweglichkeit.aktuell +
                    fertigkeiten.bewegungsmagie,
                ]}
              </p>
              <p className="basis">Basis: {fertigkeiten.bewegungsmagie}</p>{" "}
            </>
          ) : null}
          {open || fertigkeiten.erkenntnismagie !== 0 ? (
            <>
              <h3>Erkenntnismagie</h3>
              <p>
                {[
                  attribute.mystik.aktuell +
                    attribute.verstand.aktuell +
                    fertigkeiten.erkenntnismagie,
                ]}
              </p>
              <p className="basis">Basis: {fertigkeiten.erkenntnismagie}</p>{" "}
            </>
          ) : null}
          {open || fertigkeiten.felsmagie !== 0 ? (
            <>
              <h3>Felsmagie</h3>
              <p>
                {[
                  attribute.mystik.aktuell +
                    attribute.konstitution.aktuell +
                    fertigkeiten.felsmagie,
                ]}
              </p>
              <p className="basis">Basis: {fertigkeiten.felsmagie}</p>{" "}
            </>
          ) : null}
          {open || fertigkeiten.feuermagie !== 0 ? (
            <>
              <h3>Feuermagie</h3>
              <p>
                {[
                  attribute.mystik.aktuell +
                    attribute.ausstrahlung.aktuell +
                    fertigkeiten.feuermagie,
                ]}
              </p>
              <p className="basis">Basis: {fertigkeiten.feuermagie}</p>{" "}
            </>
          ) : null}
          {open || fertigkeiten.heilungsmagie !== 0 ? (
            <>
              <h3>Heilungsmagie</h3>
              <p>
                {[
                  attribute.ausstrahlung.aktuell +
                    attribute.mystik.aktuell +
                    fertigkeiten.heilungsmagie,
                ]}
              </p>
              <p className="basis">Basis: {fertigkeiten.heilungsmagie}</p>{" "}
            </>
          ) : null}
          {open || fertigkeiten.illusionsmagie !== 0 ? (
            <>
              <h3>Illusionsmagie</h3>
              <p>
                {[
                  attribute.mystik.aktuell +
                    attribute.ausstrahlung.aktuell +
                    fertigkeiten.illusionsmagie,
                ]}
              </p>
              <p className="basis">Basis: {fertigkeiten.illusionsmagie}</p>{" "}
            </>
          ) : null}
          {open || fertigkeiten.kampfmagie !== 0 ? (
            <>
              <h3>Kampfmagie</h3>
              <p>
                {[
                  attribute.mystik.aktuell +
                    attribute.staerke.aktuell +
                    fertigkeiten.kampfmagie,
                ]}
              </p>
              <p className="basis">Basis: {fertigkeiten.kampfmagie}</p>{" "}
            </>
          ) : null}
          {open || fertigkeiten.lichtmagie !== 0 ? (
            <>
              <h3>Lichtmagie</h3>
              <p>
                {[
                  attribute.ausstrahlung.aktuell +
                    attribute.mystik.aktuell +
                    fertigkeiten.lichtmagie,
                ]}
              </p>
              <p className="basis">Basis: {fertigkeiten.lichtmagie}</p>{" "}
            </>
          ) : null}
          {open || fertigkeiten.naturmagie !== 0 ? (
            <>
              <h3>Naturmagie</h3>
              <p>
                {[
                  attribute.ausstrahlung.aktuell +
                    attribute.mystik.aktuell +
                    fertigkeiten.naturmagie,
                ]}
              </p>
              <p className="basis">Basis: {fertigkeiten.naturmagie}</p>{" "}
            </>
          ) : null}
          {open || fertigkeiten.schattenmagie !== 0 ? (
            <>
              <h3>Schattenmagie</h3>
              <p>
                {[
                  attribute.mystik.aktuell +
                    attribute.intuition.aktuell +
                    fertigkeiten.schattenmagie,
                ]}
              </p>
              <p className="basis">Basis: {fertigkeiten.schattenmagie}</p>{" "}
            </>
          ) : null}
          {open || fertigkeiten.schicksalsmagie !== 0 ? (
            <>
              <h3>Schicksalsmagie</h3>
              <p>
                {[
                  attribute.mystik.aktuell +
                    attribute.ausstrahlung.aktuell +
                    fertigkeiten.schicksalsmagie,
                ]}
              </p>
              <p className="basis">Basis: {fertigkeiten.schicksalsmagie}</p>{" "}
            </>
          ) : null}
          {open || fertigkeiten.schutzmagie !== 0 ? (
            <>
              <h3>Schutzmagie</h3>
              <p>
                {[
                  attribute.mystik.aktuell +
                    attribute.ausstrahlung.aktuell +
                    fertigkeiten.schutzmagie,
                ]}
              </p>
              <p className="basis">Basis: {fertigkeiten.schutzmagie}</p>{" "}
            </>
          ) : null}
          {open || fertigkeiten.staerkungsmagie !== 0 ? (
            <>
              <h3>Stärkungsmagie</h3>
              <p>
                {[
                  attribute.mystik.aktuell +
                    attribute.staerke.aktuell +
                    fertigkeiten.staerkungsmagie,
                ]}
              </p>
              <p className="basis">Basis: {fertigkeiten.staerkungsmagie}</p>{" "}
            </>
          ) : null}
          {open || fertigkeiten.todesmagie !== 0 ? (
            <>
              <h3>Todesmagie</h3>
              <p>
                {[
                  attribute.mystik.aktuell +
                    attribute.verstand.aktuell +
                    fertigkeiten.todesmagie,
                ]}
              </p>
              <p className="basis">Basis: {fertigkeiten.todesmagie}</p>{" "}
            </>
          ) : null}
          {open || fertigkeiten.verwandlungsmagie !== 0 ? (
            <>
              <h3>Verwandlungsmagie</h3>
              <p>
                {[
                  attribute.mystik.aktuell +
                    attribute.konstitution.aktuell +
                    fertigkeiten.verwandlungsmagie,
                ]}
              </p>
              <p className="basis">Basis: {fertigkeiten.verwandlungsmagie}</p>{" "}
            </>
          ) : null}
          {open || fertigkeiten.wassermagie !== 0 ? (
            <>
              <h3>Wassermagie</h3>
              <p>
                {[
                  attribute.intuition.aktuell +
                    attribute.mystik.aktuell +
                    fertigkeiten.wassermagie,
                ]}
              </p>
              <p className="basis">Basis: {fertigkeiten.wassermagie}</p>{" "}
            </>
          ) : null}
          {open || fertigkeiten.windmagie !== 0 ? (
            <>
              <h3>Windmagie</h3>
              <p>
                {[
                  attribute.mystik.aktuell +
                    attribute.verstand.aktuell +
                    fertigkeiten.windmagie,
                ]}
              </p>
              <p className="basis">Basis: {fertigkeiten.windmagie}</p>{" "}
            </>
          ) : null}
        </div>
      </div>
      <div className="button-div">
        <button onClick={handleClick}>{open ? "Ausblenden" : "Alle Magieschulen anzeigen"}</button>
      </div>
    </>
  );
};

export default Magieschulen;
