import "../../../styles/splittermond/box-meister.css";
import "../../../styles/splittermond/box-single.css";
import { meisterschaftenListe } from "../../../utils/meisterschaften.js";
import { deleteItem } from "../../../api/splittermond";
import { addItem } from "../../../api/splittermond";
import { GiCrossMark } from "react-icons/gi";
import { useEffect, useState } from "react";
const Meisterschaften = ({
  character,
  setCharacter,
  meisterschaften,
  sprachen,
  handleChange,
  editCharacterS,
  editCharacterM,
  edit,
  newItem,
  setNewItem,
}) => {
  const [fertigkeit, setFertigkeit] = useState(null);
  const [selection, setSelection] = useState({});
  const [selectedItem, setSelectedItem] = useState({});

  const handleSelect = (e) => {
    setFertigkeit(e.target.value);
    const select = meisterschaftenListe[e.target.value];
    setSelection(select);
  };
  const handleSelect2 = (e) => {
    setSelectedItem(e.target.value);
  };

  const saveItem = () => {
    console.log(selectedItem);
  };

  const addItem =
    ("meisterschaften",
    character,
    setCharacter,
    {
      meisterschaftName: "–",
      meisterschaftFertigkeit: "–",
      meisterschaftWirkung: "–",
    });

  return (
    <>
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
        <>
          <div>Fertigkeit</div>
          <select onChange={handleSelect}>
            <option value="">Fertigkeit wählen</option>
            {Object.keys(meisterschaftenListe).map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </>
      ) : null}
      {fertigkeit ? (
        <>
          <div>Meisterschaft {fertigkeit}</div>
          <select onChange={handleSelect2}>
            {Object.keys(selection).map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </>
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
    </>
  );
};

export default Meisterschaften;
