import {
  bonusFokuspunkte,
  bonusLebenspunkte,
} from "../../../utils/boniSplittermond";
import "../../../styles/splittermond/lebenspunkte.css";

import { FaAsterisk, FaXmark, FaSlash } from "react-icons/fa6";
import { useEffect, useState } from "react";

const Fokuspunkte = ({ charData, attribute, fokuspunkte }) => {
  const [fokuspunkteLokal, setFokuspunkteLokal] = useState({
    fokusErschoepft: 0,
    fokusKanalisiert: 0,
    fokusVerzehrt: 0,
  });

  const [fokuspunkteGes, setFokuspunkteGes] = useState();

  useEffect(() => {
    setFokuspunkteGes(
      (attribute.willenskraft.aktuell + attribute.mystik.aktuell) * 2 +
        bonusFokuspunkte(charData)
    );
  }, []);

  const felder = fokuspunkteGes;

  const freieFelder =
    felder -
    fokuspunkteLokal.fokusVerzehrt -
    fokuspunkteLokal.fokusErschoepft -
    fokuspunkteLokal.fokusKanalisiert;

  const handleInput = (e) => {
    const { name, value } = e.target;
    const currentValue = fokuspunkteLokal[name];

    if (value > currentValue && freieFelder === 0) {
      return;
    } else if (value < 0) {
      return;
    } else {
      setFokuspunkteLokal((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const handleSave = () => {
    localStorage.setItem("fokuspunkteLokal", JSON.stringify(fokuspunkteLokal));
  };

  useEffect(() => {
    const savedFokuspunkteLokal = localStorage.getItem("fokuspunkteLokal");
    if (savedFokuspunkteLokal) {
      setFokuspunkteLokal(JSON.parse(savedFokuspunkteLokal));
    }
  }, []);

  return (
    <section className="lebenspunkte">
      <h2>Fokuspunkte</h2>

      <div className="box-triple">
        <div>
          <h3>Verzehrter Fokus</h3>
          <input
            name="fokusVerzehrt"
            onChange={(e) => handleInput(e)}
            type="number"
            value={fokuspunkteLokal.fokusVerzehrt}
          ></input>
        </div>
        <div>
          <h3>Erschöpfter Fokus</h3>
          <input
            name="fokusKanalisiert"
            onChange={(e) => handleInput(e)}
            type="number"
            value={fokuspunkteLokal.fokusKanalisiert}
          ></input>
        </div>
        <div>
          <h3>Kanalisierter Fokus</h3>
          <input
            name="fokusErschoepft"
            onChange={(e) => handleInput(e)}
            type="number"
            value={fokuspunkteLokal.fokusErschoepft}
          ></input>
        </div>
      </div>

      <div className="flex-container ">
        <div className="leben-container">
          <div className={`leben-grid-container leben-grid-container_10`}>
            {Array.from({ length: fokuspunkteLokal.fokusVerzehrt }, (_, i) => (
              <div
                className="leben-grid-item asterisk-sm"
                key={i}
                style={{ height: "25px", width: "25px" }}
              >
                <FaAsterisk />
              </div>
            ))}
            {Array.from(
              { length: fokuspunkteLokal.fokusKanalisiert },
              (_, i) => (
                <div
                  className="leben-grid-item"
                  key={i}
                  style={{ height: "25px", width: "25px" }}
                >
                  <FaXmark />
                </div>
              )
            )}
            {Array.from(
              { length: fokuspunkteLokal.fokusErschoepft },
              (_, i) => (
                <div
                  className="leben-grid-item"
                  key={i}
                  style={{ height: "25px", width: "25px" }}
                >
                  <FaSlash />
                </div>
              )
            )}
            {Array.from({ length: freieFelder }, (_, i) => (
              <div
                className="leben-grid-item"
                key={i}
                style={{ height: "25px", width: "25px" }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="button-div">
        <button onClick={handleSave}>Fokuspunkte speichern</button>
      </div>
    </section>
  );
};

export default Fokuspunkte;
