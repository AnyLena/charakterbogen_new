import { bonusLebenspunkte } from "../../../utils/boniSplittermond";
import "../../../styles/splittermond/lebenspunkte.css";

import { FaAsterisk, FaXmark, FaSlash } from "react-icons/fa6";
import { useEffect, useState } from "react";

const Lebenspunkte = ({ charData, attribute, lebenspunkte }) => {
  const [lebenspunkteLokal, setLebenspunkteLokal] = useState({
    atemholen: true,
    lebenErschoepft: 0,
    lebenKanalisiert: 0,
    lebenVerzehrt: 0,
    zustaende: "keine",
  });

  const [lebenspunkteGes, setLebenspunkteGes] = useState();

  useEffect(() => {
    setLebenspunkteGes(
      attribute.groessenklasse +
        attribute.konstitution.aktuell +
        bonusLebenspunkte(charData)
    );
  }, []);

  const felder = lebenspunkteGes * 5;

  const freieFelder =
    felder -
    lebenspunkteLokal.lebenVerzehrt -
    lebenspunkteLokal.lebenErschoepft -
    lebenspunkteLokal.lebenKanalisiert;

  const handleInput = (e) => {
    const { name, value } = e.target;
    const currentValue = lebenspunkteLokal[name];
  
    if (value > currentValue && freieFelder === 0) {
      return;
    } else if (value < 0) {
      return;
    } else {
      setLebenspunkteLokal((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const handleSave = () => {
    localStorage.setItem(
      "lebenspunkteLokal",
      JSON.stringify(lebenspunkteLokal)
    );
  };

  const handleCheck = () => {
    setLebenspunkteLokal((prevState) => ({
      ...prevState,
      atemholen: !lebenspunkteLokal.atemholen,
    }));
  };

  useEffect(() => {
    const savedLebenspunkteLokal = localStorage.getItem("lebenspunkteLokal");
    if (savedLebenspunkteLokal) {
      setLebenspunkteLokal(JSON.parse(savedLebenspunkteLokal));
    }
  }, []);

  return (
    <section className="lebenspunkte">
      <h2>Lebenspunkte</h2>

      <div className="box-triple">
        <div>
          <h3>Echter Schaden</h3>
          <input
            name="lebenVerzehrt"
            onChange={(e) => handleInput(e)}
            type="number"
            value={lebenspunkteLokal.lebenVerzehrt}
          ></input>
        </div>
        <div>
          <h3>Kanalisierter Schaden</h3>
          <input
            name="lebenKanalisiert"
            onChange={(e) => handleInput(e)}
            type="number"
            value={lebenspunkteLokal.lebenKanalisiert}
          ></input>
        </div>
        <div>
          <h3>Betäubungs&shy;schaden</h3>
          <input
            name="lebenErschoepft"
            onChange={(e) => handleInput(e)}
            type="number"
            value={lebenspunkteLokal.lebenErschoepft}
          ></input>
        </div>
      </div>

      <div className="flex-container ">
        <div className="box-single">
          <p className="text-center">
            {freieFelder >= Number(lebenspunkteGes) * 4
              ? "Unverletzt (0)"
              : null}
            {freieFelder < Number(lebenspunkteGes) * 4 &&
            freieFelder >= Number(lebenspunkteGes) * 3
              ? "Angeschlagen (-1)"
              : null}
            {freieFelder < Number(lebenspunkteGes) * 3 &&
            freieFelder >= Number(lebenspunkteGes) * 2
              ? "Verletzt (-2)"
              : null}
            {freieFelder < Number(lebenspunkteGes) * 2 &&
            freieFelder >= Number(lebenspunkteGes) * 1
              ? "Schwer Verletzt (-4)"
              : null}
            {freieFelder < Number(lebenspunkteGes) * 1 &&
            freieFelder >= Number(lebenspunkteGes) * 0
              ? "Todgeweiht (-8)"
              : null}
          </p>
        </div>
        <div className="leben-container">
          <div
            className={`leben-grid-container leben-grid-container_${lebenspunkteGes}`}
          >
            {Array.from({ length: lebenspunkteLokal.lebenVerzehrt }, (_, i) => (
              <div
                className="leben-grid-item asterisk-sm"
                key={i}
                style={
                  lebenspunkteGes < 11
                    ? { height: "25px", width: "25px" }
                    : lebenspunkteGes < 15
                    ? { height: "20px", width: "20px" }
                    : { height: "18px", width: "18px" }
                }
              >
                <FaAsterisk />
              </div>
            ))}
            {Array.from(
              { length: lebenspunkteLokal.lebenKanalisiert },
              (_, i) => (
                <div
                  className="leben-grid-item"
                  key={i}
                  style={
                    lebenspunkteGes < 11
                      ? { height: "25px", width: "25px" }
                      : lebenspunkteGes < 15
                      ? { height: "20px", width: "20px" }
                      : { height: "18px", width: "18px" }
                  }
                >
                  <FaXmark />
                </div>
              )
            )}
            {Array.from(
              { length: lebenspunkteLokal.lebenErschoepft },
              (_, i) => (
                <div
                  className="leben-grid-item"
                  key={i}
                  style={
                    lebenspunkteGes < 11
                      ? { height: "25px", width: "25px" }
                      : lebenspunkteGes < 15
                      ? { height: "20px", width: "20px" }
                      : { height: "18px", width: "18px" }
                  }
                >
                  <FaSlash />
                </div>
              )
            )}
            {Array.from({ length: freieFelder }, (_, i) => (
              <div
                className="leben-grid-item"
                key={i}
                style={
                  lebenspunkteGes < 11
                    ? { height: "25px", width: "25px" }
                    : lebenspunkteGes < 15
                    ? { height: "20px", width: "20px" }
                    : { height: "18px", width: "18px" }
                }
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="button-div">
        <button onClick={handleSave}>Lebenspunkte speichern</button>
      </div>

      <div className="atemholen">
        <h3>Atemholen eingesetzt</h3>
        <p>(heilt {10 + attribute.konstitution.aktuell} Betäubungsschaden)</p>
        <input
          onChange={handleCheck}
          type="checkbox"
          checked={lebenspunkteLokal.atemholen}
        />
      </div>

      <div className="zustaende">
        <h3>Zustände:</h3>
        <p>{lebenspunkteLokal.zustaende}</p>
      </div>

    </section>
  );
};

export default Lebenspunkte;