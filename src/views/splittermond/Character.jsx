import React, { useState, useEffect } from "react";
import "../../styles/basisstyle.css";
import { useAuth } from "../../context/AuthContext";
import { getCharacter, handleSubmit } from "../../api/splittermond.js";
import { useParams } from "react-router-dom";
import Overview from "./info/Overview.jsx";
import Attribute from "./info/Attribute.jsx";
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
import Separator from "./Separator.jsx";
import WaffenFern from "./info/Waffen_Fern.jsx";
import WaffenNeu from "./info/Waffen_Neu.jsx";
import WaffenSchild from "./info/Waffen_Schild.jsx";
import WaffenMagieNeu from "./info/Waffen_MagieNeu.jsx";

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
  const [fertigkeit, setFertigkeit] = useState(null);
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
            setFertigkeit={setFertigkeit}
          />
          <Separator section="charakter" />
          <Overview
            data={character.allgemeines}
            handleChange={handleChange}
            editCharacter={newCharacter.allgemeines}
            edit={edit}
          />
          <Separator
            section="attribute und abgeleitete werte"
            navId="navattribute"
          />
          <Attribute
            data={character}
            heldengrad={character.allgemeines.heldengrad}
            attribute={character.attribute}
            handleChange={handleChange}
            editCharacter={newCharacter.attribute}
            edit={edit}
          />
          <Separator
            section="fertigkeiten und meisterschaften"
            navId="navfertigkeiten"
          />
          <Fertigkeiten
            data={character.fertigkeiten}
            heldengrad={character.allgemeines.heldengrad}
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
            fertigkeit={fertigkeit}
            setFertigkeit={setFertigkeit}
            setNewItem={setNewItem}
            setEditCharacter={setNewCharacter}
          />
          <Separator section="ressourcen und stärken" navId="navstaerken" />
          <Ressourcen
            ressourcen={character.ressourcen}
            editCharacter={newCharacter.ressourcen}
            handleChange={handleChange}
            edit={edit}
          />
          <Staerken
            setEditCharacter={setNewCharacter}
            editCharacter={newCharacter.staerken}
            staerken={character.staerken}
            setCharacter={setCharacter}
            character={character}
            edit={edit}
            newItem={newItem}
            setNewItem={setNewItem}
            handleChange={handleChange}
          />
          <Separator section="mondzeichen" navId="navmondzeichen" />
          <Mondzeichen
            mond={character.mondzeichen}
            level={character.allgemeines.heldengrad}
          />
          <Separator section="kampffertigkeiten und waffen" navId="navkampf" />
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
            characterId={character._id}
            setCharacter={setCharacter}
            edit={edit}
          />
          <WaffenFern
            waffen={character.waffen}
            kampffertigkeiten={character.kampffertigkeiten}
            attribute={character.attribute}
            characterId={character._id}
            setCharacter={setCharacter}
            edit={edit}
          />
          <WaffenNeu
            setCharacter={setCharacter}
            setEditCharacter={setNewCharacter}
            characterId={character._id}
            edit={edit}
            newItem={newItem}
            setNewItem={setNewItem}
          />
          <WaffenRuestung
            ruestungen={character.ruestungen}
            setCharacter={setCharacter}
            setEditCharacter={setNewCharacter}
            characterId={character._id}
            edit={edit}
            newItem={newItem}
            setNewItem={setNewItem}
          />
          <WaffenSchild
            schilde={character.schild}
            attribute={character.attribute}
            kampffertigkeiten={character.kampffertigkeiten}
            setCharacter={setCharacter}
            setEditCharacter={setNewCharacter}
            characterId={character._id}
            edit={edit}
            newItem={newItem}
            setNewItem={setNewItem}
          />
          <MeisterschaftenKampf
            meisterschaften={character.kampfmeisterschaften}
            setEditCharacter={setNewCharacter}
            editCharacter={newCharacter.kampfmeisterschaften}
            setCharacter={setCharacter}
            character={character}
            edit={edit}
            newItem={newItem}
            setNewItem={setNewItem}
            fertigkeit={fertigkeit}
            setFertigkeit={setFertigkeit}
            handleChange={handleChange}
          />
          <Lebenspunkte
            charData={character}
            attribute={character.attribute}
            lebenspunkte={character.lebenspunkte}
            handleChange={handleChange}
            setMessage={setMessage}
          />
          <Separator section="magie und zauber" navId="navmagie" />
          <Magieschulen
            fertigkeiten={character.magieschulen}
            attribute={character.attribute}
            edit={edit}
            editCharacter={newCharacter.magieschulen}
            handleChange={handleChange}
          />
          <MeisterschaftenMagie
            meisterschaften={character.magiemeisterschaften}
            setEditCharacter={setNewCharacter}
            editCharacter={newCharacter.magiemeisterschaften}
            setCharacter={setCharacter}
            character={character}
            edit={edit}
            newItem={newItem}
            setNewItem={setNewItem}
            handleChange={handleChange}
            fertigkeit={fertigkeit}
            setFertigkeit={setFertigkeit}
          />
          <Fokuspunkte
            charData={character}
            attribute={character.attribute}
            fokuspunkte={character.fokuspunkte}
          />
          <Artefakte
            artefakte={character.artefakte}
            editCharacter={newCharacter.artefakte}
            handleChange={handleChange}
            edit={edit}
          />
          <WaffenMagie
            zauber={character.zauber}
            kampffertigkeiten={character.kampffertigkeiten}
            attribute={character.attribute}
            characterId={character._id}
            setCharacter={setCharacter}
            edit={edit}
          />
          <WaffenMagieNeu
            setCharacter={setCharacter}
            setEditCharacter={setNewCharacter}
            characterId={character._id}
            edit={edit}
            newItem={newItem}
            setNewItem={setNewItem}
          />
          <Separator section="ausrüstung und vermögen" navId="navausruestung" />
          <div id="navausruestung"></div>
          <Ausruestung
            ausruestung={character.ausruestung}
            geld={character.geld}
            editCharacterA={newCharacter.ausruestung}
            editCharacterV={newCharacter.geld}
            handleChange={handleChange}
            edit={edit}
          />
        </section>
      ) : null}
    </>
  );
};

export default Character;
