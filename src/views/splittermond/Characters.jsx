import React, { useState, useEffect } from "react";
import "../../styles/splittermond/main.css";
import "../../styles/basisstyle.css";
import "../../styles/loader.css";
import { useAuth } from "../../context/AuthContext";
import { handleCreate, getCharacters, handleDelete } from "../../api/splittermond.js";
import { Link } from "react-router-dom";

import BeatLoader from "react-spinners/BeatLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#205da8",
};

const Characters = () => {
  const { player } = useAuth();
  const [allData, setAllData] = useState("");
  const [loading, setLoading] = useState(false);
  const [newCharName, setNewCharName] = useState("");
  const [deleteCharName, setDeleteCharName] = useState("");
  const [open, setOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    if (player && player._id) {
      const authToken = localStorage.getItem("jwt");
      getCharacters(setLoading, setAllData, player._id, authToken);
    }
  }, [player]);

  // useEffect(() => {
  //   console.log("all", allData);
  // }, [allData]);

  const handleChange = (e) => {
    setNewCharName(e.target.value);
  };
  const handleChangeD = (e) => {
    setDeleteCharName(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    handleCreate(player._id, false, setAllData, newCharName);
    setNewCharName("");
  };

  const handleChooseForDeletion = (id) => {
    setDeleteId(id);
  };

  const handleDeleteChar = (e) => {
    // e.preventDefault();
    console.log(deleteId);
    const charName = allData.filter((item) => item._id === deleteId)[0]
      .allgemeines.name;
    if (deleteCharName === charName) {
      handleDelete(deleteId);
    }
  };

  const handleCancel = () => {
    setOpen(false);
    setDeleteId(null);
  };

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
      <div className="newChar">
        <h3>Neuen Charakterbogen erstellen</h3>
        <form onSubmit={(e) => handleAdd(e)}>
          <label htmlFor="newName">Name des Charakters:</label>
          <input
            value={newCharName}
            type="text"
            name="newName"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">bestätigen</button>
        </form>
      </div>

      {/* <div className="newChar eraseChar">
        <h3>Charakterbogen löschen</h3>
        {!open ? (
          <button onClick={() => setOpen(true)}>
            Charaktere zum Löschen auswählen
          </button>
        ) : null}
        {open ? (
          <>
            <div className="choose-character">
              {allData.length > 0
                ? allData.map((char, index) =>
                    !char.begleiter ? (
                      <div key={"char" + index}>
                        <button
                          key={char._id}
                          onClick={() => handleChooseForDeletion(char._id)}
                        >
                          {char.allgemeines.name}
                        </button>
                      </div>
                    ) : null
                  )
                : null}
            </div>
            <form onSubmit={handleDeleteChar}>
              <label htmlFor="newName">
                Namen des Charakters zum Bestätigen eintragen:
              </label>
              <input
                value={deleteCharName}
                type="text"
                name="newName"
                onChange={(e) => handleChangeD(e)}
              />
              <button className="goButton" type="submit">
                bestätigen
              </button>
            </form>
            <button className="cancelButton" onClick={handleCancel}>
              abbrechen
            </button>
          </>
        ) : null}
      </div> */}
    </section>
  );
};

export default Characters;
