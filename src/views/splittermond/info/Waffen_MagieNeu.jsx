import "../../../styles/splittermond/box-meister.css";
import "../../../styles/splittermond/box-single.css";
import "../../../styles/splittermond/box-description.css";
import "../../../styles/splittermond/waffen.css";

import { useEffect, useState } from "react";
import { addItem } from "../../../api/splittermond";

const WaffenMagieNeu = ({
  setCharacter,
  setEditCharacter,
  characterId,
  edit,
  newItem,
  setNewItem,
}) => {
  const [newMagic, setNewMagic] = useState({
    zauberName: "",
    zauberSchule: "–",
    zauberTypus: "–",
    zauberSchw: 0,
    zauberKosten: "–",
    zauberZD: 0,
    zauberRW: "–",
    zauberWD: "–",
    zauberWB: "–",
    zauberWirkung: "–",
    zauberErfolgsgrade: "–",
  });

  const [kosten, setKosten] = useState({
    kanalisiert: 0,
    verzehrt: 0,
    erschoepft: 0,
  });

  const [alert, setAlert] = useState(null);

  const character = { _id: characterId };

  const handleChangeKosten = (e) => {
    const { name, value } = e.target;
    setKosten((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChangeMagic = (e) => {
    const { name } = e.target;
    let { value } = e.target;
    if (Number(value) || value === "0") {
      value = Number(value);
    }
    setNewMagic((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const saveItem = () => {
    if (!newMagic.zauberName) {
      setAlert("Bitte Namen des Zaubers eintragen");
    } else {
      const kostenK = kosten.kanalisiert > 0 ? "K" + kosten.kanalisiert : "";
      const kostenE = kosten.erschoepft > 0 ? "E" + kosten.erschoepft : "";
      const kostenV = kosten.verzehrt > 0 ? "V" + kosten.verzehrt : "";
      const kostenString = kostenK + kostenE + kostenV;

      console.log(kostenString);
      const updatedMagic = {
        ...newMagic,
        zauberKosten: kostenString,
      };

      addItem(
        "zauber",
        character,
        setCharacter,
        setEditCharacter,
        updatedMagic
      );
      setNewItem(null);
      setNewMagic({
        zauberName: "",
        zauberSchule: "–",
        zauberTypus: "–",
        zauberSchw: 0,
        zauberKosten: "–",
        zauberZD: 0,
        zauberRW: "–",
        zauberWD: "–",
        zauberWB: "–",
        zauberWirkung: "–",
        zauberErfolgsgrade: "–",
      });
      setKosten({
        kanalisiert: 0,
        verzehrt: 0,
        erschoepft: 0,
      });
      setAlert("");
    }
  };

  useEffect(() => {
    console.log(kosten);
  }, [kosten]);

  return (
    <>
      {newItem === "zauber" ? (
        <div className="new-weapon-form">
          <h2>Neuen Zauber eintragen</h2>
          <form>
            <label htmlFor="zauberName">Name der Zaubers</label>
            <input
              id="zauberName"
              name="zauberName"
              className="span3"
              type="text"
              value={newMagic.zauberName}
              onChange={(e) => handleChangeMagic(e)}
            />

            <label htmlFor="zauberSchule">Magieschule</label>
            <input
              id="zauberSchule"
              name="zauberSchule"
              type="text"
              value={newMagic.zauberSchule}
              onChange={(e) => handleChangeMagic(e)}
            />

            <label htmlFor="zauberTypus">Typus</label>
            <input
              id="zauberTypus"
              name="zauberTypus"
              type="text"
              value={newMagic.zauberTypus}
              onChange={(e) => handleChangeMagic(e)}
            />

            <label htmlFor="zauberSchw">Schwierigkeit</label>
            <input
              id="zauberSchw"
              name="zauberSchw"
              type="number"
              value={newMagic.zauberSchw}
              min={0}
              onChange={(e) => handleChangeMagic(e)}
            />

            <label htmlFor="zauberKosten">Kosten</label>
            <div className="kosten">
              <p>K</p>
              <input
                type="number"
                name="kanalisiert"
                value={kosten.kanalisiert}
                min={0}
                onChange={(e) => handleChangeKosten(e)}
              />
              <p>E</p>
              <input
                type="number"
                name="erschoepft"
                value={kosten.erschoepft}
                min={0}
                onChange={(e) => handleChangeKosten(e)}
              />
              <p>V</p>
              <input
                type="number"
                name="verzehrt"
                value={kosten.verzehrt}
                min={0}
                onChange={(e) => handleChangeKosten(e)}
              />
            </div>

            <label htmlFor="zauberZD">Zauberdauer</label>
            <input
              id="zauberZD"
              name="zauberZD"
              type="number"
              value={newMagic.zauberZD}
              min={0}
              onChange={(e) => handleChangeMagic(e)}
            />

            <label htmlFor="zauberRW">Reichweite</label>
            <input
              id="zauberRW"
              name="zauberRW"
              type="text"
              value={newMagic.zauberRW}
              onChange={(e) => handleChangeMagic(e)}
            />

            <label htmlFor="zauberWD">Wirkungsdauer</label>
            <input
              id="zauberWD"
              name="zauberWD"
              type="text"
              value={newMagic.zauberWD}
              onChange={(e) => handleChangeMagic(e)}
            />

            <label htmlFor="zauberWB">Wirkungsbereich</label>
            <input
              id="zauberWB"
              name="zauberWB"
              type="text"
              value={newMagic.zauberWB}
              onChange={(e) => handleChangeMagic(e)}
            />

            <label htmlFor="zauberWirkung">Wirkung</label>
            <input
              id="zauberWirkung"
              name="zauberWirkung"
              type="text"
              value={newMagic.zauberWirkung}
              onChange={(e) => handleChangeMagic(e)}
            />

            <label htmlFor="zauberErfolgsgrade">Erfolgsgrade</label>
            <input
              id="zauberErfolgsgrade"
              name="zauberErfolgsgrade"
              type="text"
              value={newMagic.zauberErfolgsgrade}
              onChange={(e) => handleChangeMagic(e)}
            />
          </form>
        </div>
      ) : null}

      {alert ? (
        <div className="alert">
          <p>{alert}</p>
        </div>
      ) : null}
      {edit && newItem !== "zauber" ? (
        <div className="button-div">
          <button onClick={() => setNewItem("zauber")}>
            Zauber hinzufügen
          </button>
        </div>
      ) : newItem === "zauber" ? (
        <div className="button-div">
          <button onClick={saveItem}>Zauber speichern</button>
        </div>
      ) : null}
    </>
  );
};

export default WaffenMagieNeu;
