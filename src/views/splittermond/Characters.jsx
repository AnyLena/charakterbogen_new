import React, { useState, useEffect } from "react";
import "../../styles/splittermond/main.css";
import "../../styles/basisstyle.css";
import "../../styles/loader.css";
import { useAuth } from "../../context/AuthContext";
import { getCharacters, handleDelete } from "../../api/splittermond.js";
import { Link } from "react-router-dom";

import BeatLoader from "react-spinners/BeatLoader";
import Character_CreateNew from "./Character_CreateNew.jsx";
import CharacterDelete from "./Character_Delete.jsx";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#205da8",
};

const Characters = () => {
  const { player } = useAuth();
  const [allData, setAllData] = useState("");
  const [loading, setLoading] = useState(false);

  const [create, setCreate] = useState(false);
  const [deleteChar, setDeleteChar] = useState(false);

  const handleDelete = () => {
    setDeleteChar(true);
    setCreate(false)
  };

  const handleCreate = () => {
    setDeleteChar(false);
    setCreate(true)
  };

  useEffect(() => {
    if (player && player._id) {
      const authToken = localStorage.getItem("jwt");
      getCharacters(setLoading, setAllData, player._id, authToken);
    }
  }, [player]);

  // useEffect(() => {
  //   console.log("all", allData);
  // }, [allData]);

  return (
    <section className="splittermond full-height">
      <h1>Splittermond</h1>

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
      ) : (
        <h2>Charakter wählen:</h2>
      )}

      <div className="choose-character">
        {allData.length > 0
          ? allData.map((char, index) =>
              !char.begleiter ? (
                <div key={"char" + index}>
                  <Link to={`/splittermond/${char._id}`}>
                    <button key={char._id}>{char.allgemeines.name}</button>
                  </Link>
                </div>
              ) : null
            )
          : null}
      </div>

      <h2>Weitere Aktionen:</h2>

      <div className="choose-character">
        {!create ? (
          <button onClick={handleCreate}>
            Neuen Charakter erstellen
          </button>
        ) : null}

        {!deleteChar ? (
          <button onClick={handleDelete}>Charakter löschen</button>
        ) : null}
      </div>

      {create ? (
        <Character_CreateNew setCreate={setCreate} setAllData={setAllData} />
      ) : null}

      {deleteChar ? (
        <CharacterDelete
          setDeleteChar={setDeleteChar}
          allData={allData}
          setAllData={setAllData}
        />
      ) : null}
    </section>
  );
};

export default Characters;
