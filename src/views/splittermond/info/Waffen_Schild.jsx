import "../../../styles/splittermond/box-meister.css";
import "../../../styles/splittermond/box-single.css";
import "../../../styles/splittermond/box-description.css";
import "../../../styles/splittermond/waffen.css";

import { useEffect, useState } from "react";
import { addItem } from "../../../api/splittermond";
import { activateItem } from "../../../api/splittermond";

import { GiEdgedShield } from "react-icons/gi";

import { KampffertigkeitenListe } from "../../../utils/staerkenFertigkeiten";
import DeleteButton from "../../../components/splittermond/DeleteButton";

const WaffenSchild = ({
  schilde,
  attribute,
  kampffertigkeiten,
  setCharacter,
  setEditCharacter,
  characterId,
  edit,
  newItem,
  setNewItem,
}) => {
  const [newShield, setNewShield] = useState({
    schildName: "–",
    schildVTD: 0,
    schildMod: 0,
    schildFertigkeit: "–",
    schildMerkmale: "–",
    schildBeh: 0,
    schildAktiv: false,
  });

  const [alert, setAlert] = useState(null);
  const character = { _id: characterId };

  const handleChangeShield = (e) => {
    const { name } = e.target;
    let { value } = e.target;
    if (Number(value) || value === "0") {
      value = Number(value);
    }
    setNewShield((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleShield = (id, section, subsection, value) => {
    const newValue = !value;
    activateItem(characterId, id, section, subsection, newValue, setCharacter);
  };

  // useEffect(() => {
  //   console.log(newShield);
  // }, [newShield]);

  const saveItem = () => {
    if (!newShield.schildName) {
      setAlert("Bitte Namen des Schildes eintragen");
    } else {
      addItem("schild", character, setCharacter, setEditCharacter, newShield);
      setNewItem(null);
      setNewShield({
        schildName: "–",
        schildVTD: 0,
        schildMod: 0,
        schildBeh: 0,
        schildFertigkeit: "–",
        schildMerkmale: "–",
        schildAktiv: false,
      });
      setAlert("");
    }
  };

  return (
    <>
      {schilde.length > 0 || edit ? <h2>Schilde</h2> : null}
      {schilde.length > 0 ? (
        <>
          {schilde.map((item, index) => (
            <div className="box-meister" key={index}>
              <h3 className={item.schildAktiv ? "armor active" : "armor"}>
                <GiEdgedShield /> {item.schildName}{" "}
                {item.schildAktiv ? "(aktiv)" : null}
              </h3>
              <div className="subtext armorButton">
                <button
                  onClick={() =>
                    handleShield(
                      item._id,
                      "schild",
                      "schildAktiv",
                      item.schildAktiv
                    )
                  }
                >
                  {item.schildAktiv ? "ablegen" : "anlegen"}
                </button>
              </div>
              <p className="description"> Merkmale: {item.schildMerkmale}</p>
              <div className="description box-description">
                <p>INT | STÄ | MOD</p>
                <p className="descriptionValue">
                  {" "}
                  {attribute.intuition.aktuell} | {attribute.staerke.aktuell} |{" "}
                  {item.schildMod}{" "}
                </p>
                <p>Wert</p>
                <p className="descriptionValue">
                  {" "}
                  {attribute.intuition.aktuell +
                    attribute.staerke.aktuell +
                    item.schildMod + kampffertigkeiten[item.schildFertigkeit]}
                   
                </p>
                <p>Bonus VTD</p>
                <p className="descriptionValue">{item.schildVTD}</p>
                <p>Behinderung</p>
                <p className="descriptionValue">{item.schildBeh}</p>
              </div>
              {edit ? (
                <DeleteButton
                  characterId={characterId}
                  itemId={item._id}
                  group="schild"
                  setCharacter={setCharacter}
                />
              ) : null}
            </div>
          ))}
        </>
      ) : null}

      <>
        {newItem === "schild" ? (
          <div className="new-weapon-form">
            <h2>Neues Schild eintragen</h2>
            <form>
              <label htmlFor="schildName">Name des Schildes</label>
              <input
                id="schildName"
                name="schildName"
                value={newShield.schildName}
                className="span3"
                type="text"
                onChange={(e) => handleChangeShield(e)}
              />

              <label htmlFor="schildFertigkeit">Kampffertigkeit</label>
              <select
                name="schildFertigkeit"
                id="schildFertigkeit"
                onChange={(e) => handleChangeShield(e)}
              >
                <option value="">Kampffertigkeit auswählen</option>
                {KampffertigkeitenListe.filter(
                  (item) => item !== "Schusswaffen" && item !== "Wurfwaffen"
                ).map((item, index) => (
                  <option value={item.toLowerCase()} key={index}>
                    {item}
                  </option>
                ))}
              </select>

              <label htmlFor="schildMerkmale">Merkmale</label>
              <input
                id="schildMerkmale"
                name="schildMerkmale"
                value={newShield.schildMerkmale}
                className="span3"
                type="text"
                onChange={(e) => handleChangeShield(e)}
              />

              <label htmlFor="schildVTD">Verteidigungsbonus</label>
              <input
                id="schildVTD"
                name="schildVTD"
                value={newShield.schildVTD}
                type="number"
                min={0}
                onChange={(e) => handleChangeShield(e)}
              />

              <label htmlFor="schildBeh">Behinderung</label>
              <input
                id="schildBeh"
                name="schildBeh"
                value={newShield.schildBeh}
                type="number"
                min={0}
                onChange={(e) => handleChangeShield(e)}
              />

              <label htmlFor="schildMod">Modifikator</label>
              <input
                id="schildMod"
                name="schildMod"
                value={newShield.schildMod}
                type="number"
                min={0}
                onChange={(e) => handleChangeShield(e)}
              />
            </form>
          </div>
        ) : null}

        {alert ? (
          <div className="alert">
            <p>{alert}</p>
          </div>
        ) : null}
        {edit && newItem !== "schild" ? (
          <div className="button-div">
            <button onClick={() => setNewItem("schild")}>
              Schild hinzufügen
            </button>
          </div>
        ) : newItem === "schild" ? (
          <div className="button-div">
            <button onClick={saveItem}>Schild speichern</button>
          </div>
        ) : null}
      </>
    </>
  );
};

export default WaffenSchild;
