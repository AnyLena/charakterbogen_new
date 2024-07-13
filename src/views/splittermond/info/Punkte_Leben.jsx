import { bonusLebenspunkte } from "../../../utils/boniSplittermond";
import "../../../styles/splittermond/lebenspunkte.css";

import { FaAsterisk, FaXmark, FaSlash } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { handleSubmit } from "../../../api/splittermond";

const Lebenspunkte = ({
  charData,
  attribute,
  lebenspunkte
}) => {
  const [lebenspunkteLokal, setLebenspunkteLokal] = useState({
    atemholen: true,
    lebenErschoepft: 0,
    lebenKanalisiert: 0,
    lebenVerzehrt: 0,
    zustaende: "keine",
  });

  const [lebenspunkteGes, setLebenspunkteGes] = useState();
  const [saveMessage, setSaveMessage] = useState(null);

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
      setLebenspunkteLokal((prevState) => ({
        ...prevState,
        [name]: Number(value),
      }));
    }
  };

  const handleSave = () => {
    let updateChar = { ...charData, lebenspunkte: lebenspunkteLokal };
    handleSubmit(updateChar, setSaveMessage);
  };

  const handlePause = (pause) => {
    let lebenErschoepft = lebenspunkteLokal.lebenErschoepft;
    let lebenVerzehrt  = lebenspunkteLokal.lebenVerzehrt;
    let atemholen = lebenspunkteLokal.atemholen
    if (pause === "a") {
      lebenErschoepft = lebenErschoepft - 10 - attribute.konstitution.aktuell;
      lebenErschoepft < 0 ? (lebenErschoepft = 0) : lebenErschoepft;
      atemholen = true
    }
    if (pause === "v") {
      lebenErschoepft = 0
      atemholen = false
    }
    if (pause === "r") {  
      lebenVerzehrt = lebenVerzehrt - attribute.konstitution.aktuell * 2;
      lebenVerzehrt < 0 ? (lebenVerzehrt = 0) : lebenVerzehrt;
      lebenErschoepft = 0
      atemholen = false
    }
    setLebenspunkteLokal((prevState) => ({
      ...prevState,
      atemholen: atemholen,
      lebenErschoepft: lebenErschoepft,
      lebenVerzehrt: lebenVerzehrt,
    }));
  };

  useEffect(() => {
    if (lebenspunkte) {
      setLebenspunkteLokal(lebenspunkte);
    }
  }, []);

  useEffect(() => {
    let timer;
    if (saveMessage) {
      timer = setTimeout(() => {
        setSaveMessage(null);
      }, 1500);
    }
    return () => clearTimeout(timer);
  }, [saveMessage]);

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
        <button
          className={
            lebenspunkteLokal.atemholen
              ? "button-light button-disabled"
              : "button-light"
          }
          onClick={() => handlePause("a")}
          disabled={lebenspunkteLokal.atemholen}
        >
          Atemholen
        </button>
        <button className="button-light" onClick={() => handlePause("v")}>
          Verschnaufpause (30 Min)
        </button>
        <button className="button-light" onClick={() => handlePause("r")}>
          Ruhepause (6 Stunden)
        </button>
      </div>

      {/* <div className="zustaende">
        <h3>Zustände:</h3>
        <p>{lebenspunkteLokal.zustaende}</p>
      </div> */}

      <div className="button-div">
        <button onClick={handleSave}>Lebenspunkte speichern</button>
      </div>
      {saveMessage ? <div className="save-message">{saveMessage}</div> : null}
    </section>
  );
};

export default Lebenspunkte;
