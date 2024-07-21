import React, { useState, useEffect } from "react";
import "../../styles/splittermond/main.css";
import "../../styles/basisstyle.css";
import "../../styles/loader.css";
import { useAuth } from "../../context/AuthContext";
import { getMondzeichenByName, handleCreate } from "../../api/splittermond.js";
import { Attribute } from "../../utils/staerkenFertigkeiten.js";

const Character_CreateNew = ({ setCreate, setAllData }) => {
  const { player } = useAuth();

  const [newChar, setNewChar] = useState({});
  const [mondzeichen, setMondzeichen] = useState(null);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewChar((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleMondzeichen = (e) => {
    const { value } = e.target;
    getMondzeichenByName(value, setMondzeichen);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    console.log(newChar);

    if (player && player._id) {
      const authToken = localStorage.getItem("jwt");
      handleCreate(player._id, false, setAllData, newChar, authToken);
    }
    setNewChar({});
    setCreate(false);
  };

  const handleCancel = () => {
    setNewChar({});
    setCreate(false);
  };

  useEffect(() => {
    mondzeichen &&
    newChar.ausstrahlung &&
    newChar.beweglichkeit &&
    newChar.groessenklasse &&
    newChar.intuition &&
    newChar.konstitution &&
    newChar.mystik &&
    newChar.newName &&
    newChar.staerke &&
    newChar.verstand &&
    newChar.willenskraft
      ? setButtonDisabled(false)
      : null;
  }, [newChar]);

  useEffect(() => {
    mondzeichen
      ? setNewChar((prev) => ({ ...prev, mondID: mondzeichen._id }))
      : null;
  }, [mondzeichen]);

  useEffect(() => {
    console.log(newChar);
  }, [newChar]);
  return (
    <>
      <div className="newChar">
        <h3>Neuen Charakterbogen erstellen</h3>
        <form onSubmit={(e) => handleAdd(e)}>
          <h4>Name des Charakters</h4>
          <input
            value={newChar.newName}
            type="text"
            name="newName"
            onChange={(e) => handleChange(e)}
          />

          <h4>Mondzeichen wählen</h4>
          <select
            name="mondzeichen"
            id=""
            onChange={(e) => handleMondzeichen(e)}
          >
            <option value="">Mondzeichen</option>
            <option value="Omen des schwarzen Mondes">
              Omen des schwarzen Mondes
            </option>
            <option value="Das zweite Gesicht">Das zweite Gesicht</option>
            <option value="Freundschaft der Trabanten">
              Freundschaft der Trabanten
            </option>
            <option value="Der Spieler">Der Spieler</option>
            <option value="Gunst des reichen Mannes">
              Gunst des reichen Mannes
            </option>
            <option value="Segen der Mondkraft">Segen der Mondkraft</option>
            <option value="Der Blitz">Der Blitz</option>
            <option value="Blutiges Antlitz des Mondes">
              Blutiges Antlitz des Mondes
            </option>
            <option value="Geist der Gedanken">Geist der Gedanken</option>
            <option value="Der Fels">Der Fels</option>
          </select>

          <h4>Basisattribute wählen</h4>
          <div className="newChar_attributes">
            {Attribute.map((item, index) => (
              <>
                <label key={index} htmlFor={item}>
                  {item}
                </label>
                <input
                  id={item}
                  type="number"
                  min={0}
                  name={item.toLocaleLowerCase().replace("stärke", "staerke")}
                  onChange={(e) => handleChange(e)}
                />
              </>
            ))}

            <label htmlFor="groessenklasse">Größenklasse</label>
            <input
              type="number"
              name="groessenklasse"
              id="groessenklasse"
              min={0}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <button
            className={buttonDisabled ? "disabled" : null}
            type="submit"
            disabled={buttonDisabled}
          >
            ERSTELLEN
          </button>
          <button style={{backgroundColor: "var(--red-color-light)"}} onClick={handleCancel}>Abbrechen</button>
        </form>
      </div>
    </>
  );
};

export default Character_CreateNew;
