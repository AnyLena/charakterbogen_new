import React, { useState, useEffect } from "react";
import "../../styles/basisstyle.css";
import { useAuth } from "../../context/AuthContext";
import { getCharacter, handleSubmit } from "../../api/splittermond.js";
import { useParams } from "react-router-dom";
import Overview from "./info/Overview.jsx";
import Attributes from "./info/Attributes.jsx";
import Fertigkeiten from "./info/Fertigkeiten.jsx";
import Meisterschaften from "./info/Meisterschaften.jsx";
import Ressourcen from "./info/Ressourcen.jsx";
import Staerken from "./info/Staerken.jsx";
import Mondzeichen from "./info/Mondzeichen.jsx";
import Kampffertigkeiten from "./info/Fertigkeiten_Kampf.jsx";
import MeisterschaftenKampf from "./info/Meisterschaften_Kampf.jsx";
import MeisterschaftenMagie from "./info/Meisterschaften_Magie.jsx";
import WaffenNah from "./info/Waffen_Nah.jsx";
import Lebenspunkte from "./info/Punkte_Leben.jsx";
import Fokuspunkte from "./info/Punkte_Fokus.jsx";
import Artefakte from "./info/Artefakte.jsx";
import Magieschulen from "./info/Fertigkeiten_Magie.jsx";
import WaffenMagie from "./info/Waffen_Magie.jsx";
import Ausruestung from "./info/Ausruestung.jsx";
import WaffenRuestung from "./info/Waffen_Ruestung.jsx";
import Menu from "./Menu.jsx";

import BeatLoader from "react-spinners/BeatLoader"; //Loader

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#205da8",
};

const Character = () => {
  const { player } = useAuth();
  const [character, setCharacter] = useState({});
  const [newCharacter, setNewCharacter] = useState({});
  const [edit, setEdit] = useState(false);
  const [newItem, setNewItem] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState();
  const { id } = useParams();

  const handleChange = (e) => {
    e.preventDefault();
    const { name, dataset } = e.target;
    let { value } = e.target;
    const { section, subsection, itemid: itemId, checkbox } = dataset;

    if (Number(value) || value === "0") {
      value = Number(value);
    }

    if (section === undefined) {
      setNewCharacter((prev) => ({
        ...prev,
        [name]: value,
      }));
      // } else if (checkbox === "true") {
      //   setCharData((prev) => ({
      //     ...prev,
      //     [section]: {
      //       ...prev[section],
      //       [name]: prev[section] ? !prev[section][name] : false,
      //     },
      //   }));
    } else if (subsection !== undefined) {
      setNewCharacter((prev) => ({
        ...prev,
        [section]: {
          ...prev[section],
          [name]: {
            ...prev[section][name],
            [subsection]: value,
          },
        },
      }));
    } else if (itemId !== undefined) {
      setNewCharacter((prev) => ({
        ...prev,
        [section]: prev[section].map((item) =>
          item._id === itemId ? { ...item, [name]: value } : item
        ),
      }));
    } else {
      setNewCharacter((prev) => ({
        ...prev,
        [section]: {
          ...prev[section],
          [name]: value,
        },
      }));
    }
  };

  const saveCharacter = () => {
    handleSubmit(newCharacter, setMessage);
    setCharacter(newCharacter);
    setEdit(false);
  };

  const resetCharacter = () => {
    setNewCharacter(character);
  };

  useEffect(() => {
    setNewCharacter(character);
  }, [character]);

  // useEffect(() => {
  //   console.log("new", newCharacter);
  // }, [newCharacter]);

  useEffect(() => {
    if (player && player._id) {
      const authToken = localStorage.getItem("jwt");
      getCharacter(id, setCharacter, authToken, setLoading);
    }
  }, [player]);

  useEffect(() => {
    console.log("char", character);
  }, [character]);

  return (
    <>
      {loading ? (
        <>
          <div className="sweet-loading">
            <BeatLoader
              color="#205da8"
              loading={loading}
              cssOverride={override}
              speedMultiplier={1}
              size={15}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        </>
      ) : null}

      {Object.keys(character).length > 0 ? (
        <section className="splittermond">
          <h1>{character.allgemeines.name}</h1>
          <Menu
            setEdit={setEdit}
            edit={edit}
            resetCharacter={resetCharacter}
            saveCharacter={saveCharacter}
            setNewItem={setNewItem}
          />
          <Overview
            data={character.allgemeines}
            handleChange={handleChange}
            editCharacter={newCharacter.allgemeines}
            edit={edit}
          />
          <div id="navattribute"></div>
          <Attributes
            data={character}
            attribute={character.attribute}
            handleChange={handleChange}
            editCharacter={newCharacter.attribute}
            edit={edit}
          />
          <div id="navfertigkeiten"></div>
          <Fertigkeiten
            data={character.fertigkeiten}
            attribute={character.attribute}
            handleChange={handleChange}
            editCharacter={newCharacter.fertigkeiten}
            edit={edit}
          />
          <Meisterschaften
            setCharacter={setCharacter}
            character={character}
            meisterschaften={character.meisterschaften}
            sprachen={character.sprachen}
            handleChange={handleChange}
            editCharacterS={newCharacter.sprachen}
            editCharacterM={newCharacter.meisterschaften}
            edit={edit}
            newItem={newItem}
            setNewItem={setNewItem}
            setEditCharacter={setNewCharacter}
          />
          <div id="navstaerken"></div>
          <Ressourcen
            ressourcen={character.ressourcen}
            editCharacter={newCharacter.ressourcen}
            handleChange={handleChange}
            edit={edit}
          />
          <Staerken staerken={character.staerken} />
          <div id="navmondzeichen"></div>
          <Mondzeichen
            mond={character.mondzeichen}
            level={character.allgemeines.heldengrad}
          />
          <div id="navkampf"></div>
          <Kampffertigkeiten
            data={character.kampffertigkeiten}
            editCharacter={newCharacter.kampffertigkeiten}
            handleChange={handleChange}
            edit={edit}
          />
          <WaffenNah
            waffen={character.waffen}
            kampffertigkeiten={character.kampffertigkeiten}
            attribute={character.attribute}
          />
          <MeisterschaftenKampf
            meisterschaften={character.kampfmeisterschaften}
          />
          <WaffenRuestung ruestungen={character.ruestungen} />
          <Lebenspunkte
            charData={character}
            attribute={character.attribute}
            lebenspunkte={character.lebenspunkte}
          />
          <div id="navmagie"></div>
          <Magieschulen
            fertigkeiten={character.magieschulen}
            attribute={character.attribute}
          />
          <MeisterschaftenMagie
            meisterschaften={character.magiemeisterschaften}
          />
          <Fokuspunkte
            charData={character}
            attribute={character.attribute}
            fokuspunkte={character.fokuspunkte}
          />
          <Artefakte artefakte={character.artefakte} />
          <WaffenMagie
            zauber={character.zauber}
            kampffertigkeiten={character.kampffertigkeiten}
            attribute={character.attribute}
          />
          <div id="navausruestung"></div>
          <Ausruestung
            ausruestung={character.ausruestung}
            geld={character.geld}
          />
        </section>
      ) : null}
    </>
  );
};

export default Character;
