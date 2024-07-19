import "../../../styles/splittermond/box-meister.css";
import "../../../styles/splittermond/box-single.css";
import "../../../styles/splittermond/box-description.css";
import "../../../styles/splittermond/waffen.css";

import { attributFormatter } from "../../../utils/attribut-formatter";
import { waffenMerkmaleFormatter } from "../../../utils/waffen-merkmale-formatter";
import { useEffect, useState } from "react";
import { addItem } from "../../../api/splittermond";

import {
  KampffertigkeitenListe,
  Attribute,
} from "../../../utils/staerkenFertigkeiten";

const WaffenNah = ({
  waffen,
  kampffertigkeiten,
  attribute,
  setCharacter,
  setEditCharacter,
  characterId,
  edit,
  newItem,
  setNewItem,
}) => {
  const [open, setOpen] = useState(false);
  const [waffenMerkmale, setWaffenmerkmale] = useState([]);
  const [dice, setDice] = useState({
    amount: 1,
    wuerfel: 6,
    plus: 0,
  });
  const [newWeapon, setNewWeapon] = useState({
    waffeAttr1: "",
    waffeAttr2: "",
    waffeFertigkeit: "",
    waffeMerkmale: "-",
    waffeMod: 0,
    waffeMun: 0,
    waffeName: "",
    waffeRW: 0,
    waffeSchaden: "",
    waffeTyp: "nah",
    waffeWGS: 0,
  });
  const [selectedWeaponType, setSelectedWeaponType] = useState("nah");
  const [alert, setAlert] = useState(null);

  const character = { _id: characterId };

  const getWaffenmerkmale = (waffen) => {
    let merkmale = [];
    waffen.map((items) => {
      merkmale.push(...items.waffeMerkmale.split(","));
    });
    merkmale = merkmale.map((item) => item.replace(/\s|\d/g, "").toLowerCase());
    merkmale = merkmale.sort();
    merkmale = [...new Set(merkmale)];
    merkmale = merkmale.filter((item) => item !== "–");
    setWaffenmerkmale(merkmale);
  };

  const handleChangeDice = (e) => {
    const { name, value } = e.target;
    setDice((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChangeWeapon = (e) => {
    const { name } = e.target;
    let { value } = e.target;
    if (Number(value) || value === "0") {
      value = Number(value);
    }
    if (name === "waffeTyp") {
      setSelectedWeaponType(value);
    }
    setNewWeapon((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const showAccordeon = () => {
    setOpen(!open);
  };

  const saveItem = () => {
    if (
      !newWeapon.waffeAttr1 ||
      !newWeapon.waffeAttr2 ||
      !newWeapon.waffeFertigkeit ||
      !newWeapon.waffeName
    ) {
      setAlert("Bitte Waffennamen, Attribute und Fertigkeit eintragen");
    } else {
      const diceString = dice.amount + "W" + dice.wuerfel + "+" + dice.plus;
      const updatedWeapon = {
        ...newWeapon,
        waffeSchaden: diceString,
      };
      addItem("waffen", character, setCharacter, setEditCharacter, updatedWeapon);
      setNewItem(null);
      setNewWeapon({
        waffeAttr1: "",
        waffeAttr2: "",
        waffeFertigkeit: "",
        waffeMerkmale: "-",
        waffeMod: 0,
        waffeMun: 0,
        waffeName: "",
        waffeRW: 0,
        waffeSchaden: "",
        waffeTyp: "nah",
        waffeWGS: 0,
      });
      setAlert("");
    }
  };

  useEffect(() => {
    getWaffenmerkmale(waffen);
  }, []);

  useEffect(() => {
    console.log(newWeapon);
  }, [newWeapon]);

  return (
    <>
      {waffen.length > 0 ? (
        <>
          <h2>Nahkampfwaffen</h2>
          {waffen
            .filter((item) => item.waffeTyp === "nah")
            .map((item, index) => (
              <div className="box-meister" key={index}>
                <h3>{item.waffeName}</h3>
                <p className="subtext">
                  Fertigkeit:{" "}
                  {item.waffeFertigkeit.slice(0, 1).toUpperCase() +
                    item.waffeFertigkeit.slice(1)}{" "}
                  ({kampffertigkeiten[item.waffeFertigkeit]})
                </p>
                <p className="description"> Merkmale: {item.waffeMerkmale}</p>
                <div className="description box-description">
                  <p>
                    {attributFormatter(item.waffeAttr1)} |{" "}
                    {attributFormatter(item.waffeAttr2)} | MOD
                  </p>
                  <p className="descriptionValue">
                    {" "}
                    {attribute[item.waffeAttr1].aktuell} |{" "}
                    {attribute[item.waffeAttr2].aktuell} | {item.waffeMod}{" "}
                  </p>
                  <p>Wert</p>
                  <p className="descriptionValue">
                    {" "}
                    {attribute[item.waffeAttr1].aktuell +
                      attribute[item.waffeAttr2].aktuell +
                      item.waffeMod +
                      kampffertigkeiten[item.waffeFertigkeit]}
                  </p>
                  <p>WGS</p>
                  <p className="descriptionValue">{item.waffeWGS}</p>
                  <p>Schaden</p>
                  <p className="descriptionValue">{item.waffeSchaden}</p>
                </div>
              </div>
            ))}
          <div onClick={showAccordeon} className="accordeon">
            <h2>Waffenmerkmale anzeigen</h2>
            {waffenMerkmale.length > 0 && open
              ? waffenMerkmale.map((item, index) => (
                  <div className="box-erlaeuterungen" key={index}>
                    <h3>{item.slice(0, 1).toUpperCase() + item.slice(1)}</h3>
                    <p className="">{waffenMerkmaleFormatter(item)}</p>
                  </div>
                ))
              : null}
          </div>
        </>
      ) : null}

      {/*  ---------- WAFFE HINZUFÜGEN ---------- */}

      {newItem === "waffen" ? (
        <div className="new-weapon-form">
          <h2>Neue Waffe eintragen</h2>
          <form>
            <label htmlFor="waffeName">Name der Waffe</label>
            <input
              id="waffeName"
              name="waffeName"
              className="span3"
              type="text"
              value={newWeapon.waffeName}
              onChange={(e) => handleChangeWeapon(e)}
            />

            <div className="radiobuttons span4">
              <input
                type="radio"
                name="waffeTyp"
                id="nah"
                checked={selectedWeaponType === "nah"}
                value="nah"
                onChange={(e) => handleChangeWeapon(e)}
              />
              <label htmlFor="nah">Nahkampf</label>
              <input
                type="radio"
                name="waffeTyp"
                checked={selectedWeaponType === "fern"}
                value="fern"
                onChange={(e) => handleChangeWeapon(e)}
              />
              <label htmlFor="fern">Fernkampf</label>
            </div>

            <label htmlFor="waffeFertigkeit">Kampffertigkeit</label>
            <select
              name="waffeFertigkeit"
              id="waffeWertigkeit"
              onChange={(e) => handleChangeWeapon(e)}
            >
              <option value="">Kampffertigkeit auswählen</option>
              {KampffertigkeitenListe.map((item, index) => (
                <option value={item.toLowerCase()} key={index}>
                  {item}
                </option>
              ))}
            </select>

            <label htmlFor="merkmale">Waffenmerkmale</label>
            <input
              id="merkmale"
              name="waffeMerkmale"
              type="text"
              onChange={(e) => handleChangeWeapon(e)}
            />

            <label htmlFor="waffeSchaden">Schaden</label>
            <div className="schaden">
              <input
                type="number"
                name="amount"
                value={dice.amount}
                onChange={(e) => handleChangeDice(e)}
              />
              <p>W</p>
              <select
                name="wuerfel"
                id=""
                onChange={(e) => handleChangeDice(e)}
                value={dice.wuerfel}
              >
                <option value="4">4</option>
                <option value="6">6</option>
                <option value="8">8</option>
                <option value="10">10</option>
                <option value="12">12</option>
                <option value="20">20</option>
              </select>
              <p>+</p>
              <input
                type="number"
                name="plus"
                value={dice.plus}
                onChange={(e) => handleChangeDice(e)}
              />
            </div>

            <label htmlFor="waffeWGS">Waffengeschwindigkeit</label>
            <input
              id="waffeWGS"
              name="waffeWGS"
              type="number"
              min={0}
              onChange={(e) => handleChangeWeapon(e)}
            />

            <label htmlFor="waffeMod">Modifikator</label>
            <input
              id="waffeMod"
              name="waffeMod"
              type="number"
              min={0}
              onChange={(e) => handleChangeWeapon(e)}
            />

            {selectedWeaponType === "fern" ? (
              <>
                <label htmlFor="waffeRW">Reichweite</label>
                <input
                  id="waffeRW"
                  name="waffeRW"
                  type="number"
                  min={0}
                  onChange={(e) => handleChangeWeapon(e)}
                />
                <label htmlFor="waffeMun">Munition</label>
                <input
                  id="waffeMun"
                  name="waffeMun"
                  type="number"
                  min={0}
                  onChange={(e) => handleChangeWeapon(e)}
                />
              </>
            ) : null}

            <label htmlFor="waffeAttr1">Attribut 1</label>
            <select
              name="waffeAttr1"
              id="attr2"
              onChange={(e) => handleChangeWeapon(e)}
            >
              <option value="">Attribut auswählen</option>
              {Attribute.map((item, index) => (
                <option
                  value={item.toLowerCase().replace("ä", "ae")}
                  key={index}
                >
                  {item}
                </option>
              ))}
            </select>

            <label htmlFor="waffeAttr2">Attribut 2</label>
            <select
              name="waffeAttr2"
              id="attr2"
              onChange={(e) => handleChangeWeapon(e)}
            >
              <option value="">Attribut auswählen</option>
              {Attribute.map((item, index) => (
                <option
                  value={item.toLowerCase().replace("ä", "ae")}
                  key={index}
                >
                  {item}
                </option>
              ))}
            </select>
          </form>
        </div>
      ) : null}

      {alert ? (
        <div className="alert">
          <p>{alert}</p>
        </div>
      ) : null}
      {edit && newItem !== "waffen" ? (
        <div className="button-div">
          <button onClick={() => setNewItem("waffen")}>Waffe hinzufügen</button>
        </div>
      ) : newItem === "waffen" ? (
        <div className="button-div">
          <button onClick={saveItem}>Waffe speichern</button>
        </div>
      ) : null}
    </>
  );
};

export default WaffenNah;
