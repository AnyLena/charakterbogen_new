import "../../../styles/splittermond/box-meister.css";
import "../../../styles/splittermond/box-single.css";
import "../../../styles/splittermond/meisterschaften.css";
import {
  addItem,
  deleteItem,
  getMeisterschaften,
} from "../../../api/splittermond";
import { useState } from "react";
import DeleteButton from "../../../components/splittermond/DeleteButton";
import { KampffertigkeitenListe } from "../../../utils/staerkenFertigkeiten";

const MeisterschaftenKampf = ({
  character,
  setCharacter,
  meisterschaften,
  handleChange,
  editCharacter,
  setEditCharacter,
  edit,
  newItem,
  fertigkeit,
  setFertigkeit,
  setNewItem,
}) => {
  const [selection, setSelection] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});

  const handleSelectFertigkeit = (e) => {
    setFertigkeit(e.target.value);
    getMeisterschaften(e.target.value, "k", setSelection);
  };

  const handleSelectMeisterschaft = (e) => {
    setSelectedItem(e.target.value);
  };

  const saveItem = () => {
    addItem("kampfmeisterschaften", character, setCharacter, setEditCharacter, {
      kampfmeisterschaftName: selectedItem,
      kampfmeisterschaftFertigkeit: fertigkeit,
      kampfmeisterschaftWirkung: "–",
    });
    setNewItem(null);
    setFertigkeit(null);
  };

  return (
    <>
      {edit && meisterschaften.length === 0 ? (
        <h2>Kampfmeisterschaften</h2>
      ) : null}
      {meisterschaften.length > 0 ? (
        <>
          <h2>Kampfmeisterschaften</h2>
          {meisterschaften.map((item, index) => (
            <div className="box-meister" key={index}>
              {edit ? (
                <>
                  <h3>{item.kampfmeisterschaftName}</h3>
                  <p className="subtext">
                    Fertigkeit: {item.kampfmeisterschaftFertigkeit}
                  </p>
                  <textarea
                    className="description"
                    name="kampfmeisterschaftWirkung"
                    data-section="kampfmeisterschaften"
                    data-itemid={item._id}
                    onChange={(e) => handleChange(e)}
                    value={editCharacter[index].kampfmeisterschaftWirkung}
                  />
                  <DeleteButton
                    characterId={character._id}
                    itemId={item._id}
                    group="kampfmeisterschaften"
                    setCharacter={setCharacter}
                  />
                </>
              ) : (
                <>
                  <h3>{item.kampfmeisterschaftName}</h3>
                  <p className="subtext">
                    Fertigkeit: {item.kampfmeisterschaftFertigkeit}
                  </p>
                  <p className="description">
                    {item.kampfmeisterschaftWirkung}
                  </p>
                </>
              )}
            </div>
          ))}
        </>
      ) : null}

      {/*  ---------- KAMPFMEISTERSCHAFT HINZUFÜGEN ---------- */}
      {newItem === "kampfmeisterschaften" ? (
        <div className="select-box">
          <div className="label">Kampffertigkeit</div>
          <select onChange={handleSelectFertigkeit}>
            <option value="">Kampffertigkeit wählen</option>
            {KampffertigkeitenListe.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      ) : null}
      {fertigkeit ? (
        <div className="select-box">
          <div className="label">Kampfmeisterschaft</div>
          <select onChange={handleSelectMeisterschaft}>
            <option value="">Kampfmeisterschaft wählen</option>
            {selection.map((item, index) => (
              <option key={index} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      ) : null}
      {edit && newItem !== "kampfmeisterschaften" ? (
        <div className="button-div">
          <button onClick={() => setNewItem("kampfmeisterschaften")}>
            Kampfmeisterschaft hinzufügen
          </button>
        </div>
      ) : newItem === "kampfmeisterschaften" ? (
        <div className="button-div">
          <button onClick={saveItem}>Kampfmeisterschaft speichern</button>
        </div>
      ) : null}
    </>
  );
};

export default MeisterschaftenKampf;
