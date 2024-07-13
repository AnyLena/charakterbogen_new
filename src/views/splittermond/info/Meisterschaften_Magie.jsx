import "../../../styles/splittermond/box-meister.css";
import "../../../styles/splittermond/box-single.css";
import "../../../styles/splittermond/meisterschaften.css";
import {
  deleteItem,
  getMeisterschaften,
  addItem,
} from "../../../api/splittermond";
import { GiCrossMark } from "react-icons/gi";
import {
  magiefertigkeitenListe,
  meisterschaftenListe,
} from "../../../utils/staerkenFertigkeiten";
import { useState } from "react";

const MeisterschaftenMagie = ({
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
    getMeisterschaften(e.target.value, "m", setSelection);
  };

  const handleSelectMeisterschaft = (e) => {
    setSelectedItem(e.target.value);
  };

  const saveItem = () => {
    addItem("magiemeisterschaften", character, setCharacter, setEditCharacter, {
      magiemeisterschaftName: selectedItem,
      magiemeisterschaftFertigkeit: fertigkeit,
      magiemeisterschaftWirkung: "–",
    });
    setNewItem(null);
    setFertigkeit(null);
  };

  return (
    <>
      {edit && meisterschaften.length === 0 ? (
        <h2>Magiemeisterschaften</h2>
      ) : null}
      {meisterschaften.length > 0 ? (
        <>
          <h2>Magiemeisterschaften</h2>
          {meisterschaften.map((item, index) => (
            <div className="box-meister" key={index}>
              {edit ? (
                <>
                  <h3>{item.magiemeisterschaftName}</h3>
                  <p className="subtext">
                    Fertigkeit: {item.magiemeisterschaftFertigkeit}
                  </p>
                  <textarea
                    className="description"
                    name="magiemeisterschaftWirkung"
                    data-section="magiemeisterschaften"
                    data-itemid={item._id}
                    onChange={(e) => handleChange(e)}
                    value={editCharacter[index].magiemeisterschaftWirkung}
                  />
                  <div className="button-div erase-btn">
                    <button
                      onClick={() =>
                        deleteItem(
                          character._id,
                          item._id,
                          "magiemeisterschaften",
                          setCharacter
                        )
                      }
                    >
                      <GiCrossMark />
                      löschen
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <h3>{item.magiemeisterschaftName}</h3>
                  <p className="subtext">
                    Fertigkeit: {item.magiemeisterschaftFertigkeit}
                  </p>
                  <p className="description">
                    {item.magiemeisterschaftWirkung}
                  </p>
                </>
              )}
            </div>
          ))}
        </>
      ) : null}

      {/*  ---------- MAGIEMEISTERSCHAFT HINZUFÜGEN ---------- */}
      {newItem === "magiemeisterschaften" ? (
        <div className="select-box">
          <div className="label">Magieschule wählen</div>
          <select onChange={handleSelectFertigkeit}>
            <option value="">Magieschule wählen</option>
            {magiefertigkeitenListe.map((item, index) => (
              <option
                key={index}
                value={
                  item.name.slice(0, 1).toLocaleUpperCase() + item.name.slice(1)
                }
              >
                {item.name.slice(0, 1).toLocaleUpperCase() + item.name.slice(1)}
              </option>
            ))}
          </select>
        </div>
      ) : null}
      {fertigkeit ? (
        <div className="select-box">
          <div className="label">Magiemeisterschaft</div>
          <select onChange={handleSelectMeisterschaft}>
            <option value="">Magiemeisterschaft wählen</option>
            {selection.map((item, index) => (
              <option key={index} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      ) : null}
      {edit && newItem !== "magiemeisterschaften" ? (
        <div className="button-div">
          <button onClick={() => setNewItem("magiemeisterschaften")}>
            Magiemeisterschaft hinzufügen
          </button>
        </div>
      ) : newItem === "magiemeisterschaften" ? (
        <div className="button-div">
          <button onClick={saveItem}>Magiemeisterschaft speichern</button>
        </div>
      ) : null}
    </>
  );
};

export default MeisterschaftenMagie;
