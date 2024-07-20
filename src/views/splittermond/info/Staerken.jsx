import "../../../styles/splittermond/box-meister.css";
import "../../../styles/splittermond/meisterschaften.css";

import { staerkenListe } from "../../../utils/staerkenFertigkeiten";
import { useState } from "react";
import { addItem } from "../../../api/splittermond";

import DeleteButton from "../../../components/splittermond/DeleteButton";

const Staerken = ({
  staerken,
  character,
  setCharacter,
  setEditCharacter,
  editCharacter,
  edit,
  newItem,
  setNewItem,
  handleChange,
}) => {
  const [selectedItem, setSelectedItem] = useState({});

  const handleSelectFertigkeit = (e) => {
    setSelectedItem(e.target.value);
  };

  const saveItem = () => {
    addItem("staerken", character, setCharacter, setEditCharacter, {
      staerkeName: selectedItem,
      staerkeWirkung: "–",
    });
    setNewItem(null);
  };

  return (
    <>
      <h2>Stärken</h2>
      {staerken.map((item, index) => (
        <div className="box-meister" key={index}>
          {edit ? (
            <>
              <h3>{item.staerkeName}</h3>
              <p className="subtext"> </p>
              <textarea
                className="description"
                name="staerkeWirkung"
                data-section="staerken"
                data-itemid={item._id}
                onChange={(e) => handleChange(e)}
                value={editCharacter[index].staerkeWirkung}
              />
              <DeleteButton
                characterId={character._id}
                itemId={item._id}
                group="staerken"
                setCharacter={setCharacter}
              />
            </>
          ) : (
            <>
              <h3>{item.staerkeName}</h3>
              <p className="subtext"></p>
              <p className="description">{item.staerkeWirkung}</p>
            </>
          )}
        </div>
      ))}

      {/*  ---------- STÄRKE HINZUFÜGEN ---------- */}
      {newItem === "staerken" ? (
        <div className="select-box">
          <div className="label">Stärke wählen</div>
          <select onChange={handleSelectFertigkeit}>
            <option value="">Stärke wählen</option>
            {staerkenListe.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      ) : null}

      {edit && newItem !== "staerken" ? (
        <div className="button-div">
          <button onClick={() => setNewItem("staerken")}>
            Stärke hinzufügen
          </button>
        </div>
      ) : newItem === "staerken" ? (
        <div className="button-div">
          <button onClick={saveItem}>Stärke speichern</button>
        </div>
      ) : null}
    </>
  );
};

export default Staerken;
