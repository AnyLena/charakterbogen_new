import "../../../styles/splittermond/box-meister.css";
import "../../../styles/splittermond/box-single.css";
import "../../../styles/splittermond/box-description.css";
import "../../../styles/splittermond/waffen.css";

import { useEffect, useState } from "react";
import { addItem } from "../../../api/splittermond";
import { activateItem } from "../../../api/splittermond";

import { GiChestArmor } from "react-icons/gi";

import DeleteButton from "../../../components/splittermond/DeleteButton";

const WaffenRuestung = ({
  ruestungen,
  setCharacter,
  setEditCharacter,
  characterId,
  edit,
  newItem,
  setNewItem,
}) => {
  const [newArmor, setNewArmor] = useState({
    ruestungName: "",
    ruestungVTD: 0,
    ruestungBeh: 0,
    ruestungSR: 0,
    ruestungTick: 0,
  });

  const [alert, setAlert] = useState(null);
  const character = { _id: characterId };

  const handleChangeArmor = (e) => {
    const { name } = e.target;
    let { value } = e.target;
    if (Number(value) || value === "0") {
      value = Number(value);
    }
    setNewArmor((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleArmor = (id, section, subsection, value) => {
    const newValue = !value 
    activateItem(
      characterId,
      id,
      section,
      subsection,
      newValue,
      setCharacter
    )
  };

  useEffect(() => {
    console.log(newArmor);
  }, [newArmor]);

  const saveItem = () => {
    if (!newArmor.ruestungName) {
      setAlert("Bitte Name der Rüstung eintragen");
    } else {
      addItem(
        "ruestungen",
        character,
        setCharacter,
        setEditCharacter,
        newArmor
      );
      setNewItem(null);
      setNewArmor({
        ruestungName: "",
        ruestungVTD: 0,
        ruestungBeh: 0,
        ruestungSR: 0,
        ruestungTick: 0,
      });
      setAlert("");
    }
  };

  return (
    <>
      {ruestungen.length > 0 ? (
        <>
          <h2>Rüstung</h2>
          {ruestungen.map((item, index) => (
            <div className="box-meister" key={index}>
              <h3 className={item.ruestungAktiv ? "armor active" : "armor"}>
                <GiChestArmor />{" "}
                {item.ruestungName} {item.ruestungAktiv ? "(aktiv)" : null}
              </h3>
              <div className="subtext armorButton">
                <button onClick={() => handleArmor(item._id, "ruestungen", "ruestungAktiv", item.ruestungAktiv)}>
                  {item.ruestungAktiv ? "ablegen" : "anlegen"}
                </button>
              </div>
              <div className="description box-description">
                <p>Bonus VTD</p>
                <p className="descriptionValue">{item.ruestungVTD}</p>
                <p>Schadensreduktion</p>
                <p className="descriptionValue">{item.ruestungSR}</p>
                <p>Behinderung</p>
                <p className="descriptionValue">{item.ruestungBeh}</p>
                <p>Tick-Zuschlag</p>
                <p className="descriptionValue">{item.ruestungTick}</p>
              </div>
              {edit ? (
                <DeleteButton
                  characterId={characterId}
                  itemId={item._id}
                  group="ruestungen"
                  setCharacter={setCharacter}
                />
              ) : null}
            </div>
          ))}
        </>
      ) : null}

      <>
        {newItem === "ruestung" ? (
          <div className="new-weapon-form">
            <h2>Neue Rüstung eintragen</h2>
            <form>
              <label htmlFor="ruestungName">Name der Rüstung</label>
              <input
                id="ruestungName"
                name="ruestungName"
                value={newArmor.ruestungName}
                className="span3"
                type="text"
                onChange={(e) => handleChangeArmor(e)}
              />

              <label htmlFor="ruestungVTD">Verteidigungsbonus</label>
              <input
                id="ruestungVTD"
                name="ruestungVTD"
                value={newArmor.ruestungVTD}
                type="number"
                min={0}
                onChange={(e) => handleChangeArmor(e)}
              />

              <label htmlFor="ruestungSR">Schadensreduktion</label>
              <input
                id="ruestungSR"
                name="ruestungSR"
                value={newArmor.ruestungSR}
                type="number"
                min={0}
                onChange={(e) => handleChangeArmor(e)}
              />

              <label htmlFor="ruestungBeh">Behinderung</label>
              <input
                id="ruestungBeh"
                name="ruestungBeh"
                value={newArmor.ruestungBeh}
                type="number"
                min={0}
                onChange={(e) => handleChangeArmor(e)}
              />

              <label htmlFor="ruestungTick">Tick-Zuschlag</label>
              <input
                id="ruestungTick"
                name="ruestungTick"
                value={newArmor.ruestungTick}
                type="number"
                min={0}
                onChange={(e) => handleChangeArmor(e)}
              />
            </form>
          </div>
        ) : null}

        {alert ? (
          <div className="alert">
            <p>{alert}</p>
          </div>
        ) : null}
        {edit && newItem !== "ruestung" ? (
          <div className="button-div">
            <button onClick={() => setNewItem("ruestung")}>
              Rüstung hinzufügen
            </button>
          </div>
        ) : newItem === "ruestung" ? (
          <div className="button-div">
            <button onClick={saveItem}>Rüstung speichern</button>
          </div>
        ) : null}
      </>
    </>
  );
};

export default WaffenRuestung;
