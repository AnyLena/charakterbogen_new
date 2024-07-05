import "../../../styles/splittermond/box-meister.css";
import "../../../styles/splittermond/box-single.css";
import "../../../styles/splittermond/meisterschaften.css";
import { deleteItem, getMeisterschaften, addItem } from "../../../api/splittermond";
import { GiCrossMark } from "react-icons/gi";
import { meisterschaftenListe } from "../../../utils/staerkenFertigkeiten";
import { useState } from "react";
const Meisterschaften = ({
  character,
  setCharacter,
  meisterschaften,
  sprachen,
  handleChange,
  editCharacterS,
  editCharacterM,
  setEditCharacter,
  edit,
  newItem,
  setNewItem,
}) => {
  const [fertigkeit, setFertigkeit] = useState(null);
  const [selection, setSelection] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});

  const handleSelectFertigkeit = (e) => {
    setFertigkeit(e.target.value);
    getMeisterschaften(e.target.value, "f", setSelection);
  };

  const handleSelectMeisterschaft = (e) => {
    setSelectedItem(e.target.value);
  };

  const saveItem = () => {
    addItem("meisterschaften", character, setCharacter, setEditCharacter, {
      meisterschaftName: selectedItem,
      meisterschaftFertigkeit: fertigkeit,
      meisterschaftWirkung: "–",
    });
    setNewItem(null);
    setFertigkeit(null);
  };

  return (
    <section className="meisterschaften">
      <div className="box-single">
        <h2>Sprachen</h2>
        {edit ? (
          <input
            name="sprachen"
            onChange={(e) => handleChange(e)}
            value={editCharacterS}
          />
        ) : (
          <p>{sprachen}</p>
        )}
      </div>
      <h2>Meisterschaften</h2>
      {meisterschaften.map((item, index) => (
        <div className="box-meister" key={index}>
          {edit ? (
            <>
              <h3>{item.meisterschaftName}</h3>
              <p className="subtext">
                Fertigkeit: {item.meisterschaftFertigkeit}
              </p>
              <textarea
                className="description"
                name="meisterschaftWirkung"
                data-section="meisterschaften"
                data-itemid={item._id}
                onChange={(e) => handleChange(e)}
                value={editCharacterM[index].meisterschaftWirkung}
              />
              <div className="button-div erase-btn">
                <button
                  onClick={() =>
                    deleteItem(
                      character._id,
                      item._id,
                      "meisterschaften",
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
              <h3>{item.meisterschaftName}</h3>
              <p className="subtext">
                Fertigkeit: {item.meisterschaftFertigkeit}
              </p>

              <p className="description">{item.meisterschaftWirkung}</p>
            </>
          )}
        </div>
      ))}

      {/*  ---------- MEISTERSCHAFT HINZUFÜGEN ---------- */}
      {newItem === "meisterschaften" ? (
        <div className="select-box">
          <div className="label">Fertigkeit wählen</div>
          <select onChange={handleSelectFertigkeit}>
            <option value="">Fertigkeit wählen</option>
            {meisterschaftenListe.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      ) : null}
      {fertigkeit ? (
        <div className="select-box">
          <div className="label">Meisterschaft</div>
          <select onChange={handleSelectMeisterschaft}>
            <option value="">Meisterschaft wählen</option>
            {selection.map((item, index) => (
              <option key={index} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      ) : null}
      {edit && newItem !== "meisterschaften" ? (
        <div className="button-div">
          <button onClick={() => setNewItem("meisterschaften")}>
            Meisterschaft hinzufügen
          </button>
        </div>
      ) : newItem === "meisterschaften" ? (
        <div className="button-div">
          <button onClick={saveItem}>Meisterschaft speichern</button>
        </div>
      ) : null}
    </section>
  );
};

export default Meisterschaften;
