import React, { useState, useEffect } from "react";
import "../../styles/splittermond/main.css";
import "../../styles/basisstyle.css";
import { useAuth } from "../../context/AuthContext";
import { handleDelete } from "../../api/splittermond.js";

const CharacterDelete = ({ setDeleteChar, allData, setAllData }) => {
  const [deleteId, setDeleteId] = useState(null);
  const [deleteCharName, setDeleteCharName] = useState("");

  const [open, setOpen] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const { player } = useAuth();

  const handleChooseForDeletion = (id) => {
    setDeleteId(id);
  };

  const handleGetCharName = (e) => {
    setDeleteCharName(e.target.value);
  };

  const handleDeleteChar = (e) => {
    e.preventDefault();
    if (player && player._id) {
      const authToken = localStorage.getItem("jwt");
      handleDelete(deleteId, authToken, setAllData);
    }
    setDeleteId(null);
    setDeleteChar(null);
  };

  const handleCancel = () => {
    setOpen(false);
    setDeleteId(null);
    setDeleteChar(null);
  };

  useEffect(() => {
    if (deleteCharName) {
      const charName = allData.filter((item) => item._id === deleteId)[0]
        .allgemeines.name;
      if (deleteCharName === charName) {
        setButtonDisabled(false);
      } else {
        setButtonDisabled(true);
      }
    }
  }, [deleteCharName]);

  return (
    <>
      <div className="newChar eraseChar">
        <h3>Charakterbogen löschen</h3>

        <>
          <div className="choose-character">
            {allData.length > 0
              ? allData.map((char, index) =>
                  !char.begleiter ? (
                    <div key={"char" + index}>
                      {!deleteId ? (
                        <button
                          key={char._id}
                          onClick={() => handleChooseForDeletion(char._id)}
                          className={
                            char._id === deleteId ? "buttonBorder" : null
                          }
                          disabled={char._id === deleteId ? true : false}
                        >
                          {char.allgemeines.name}
                        </button>
                      ) : null}
                      {char._id === deleteId ? (
                        <button
                          key={char._id}
                          onClick={() => handleChooseForDeletion(char._id)}
                          className="buttonBorder"
                          disabled={char._id === deleteId ? true : false}
                        >
                          {char.allgemeines.name}
                        </button>
                      ) : null}
                    </div>
                  ) : null
                )
              : null}
          </div>
          {deleteId ? (
            <form onSubmit={handleDeleteChar}>
              <label htmlFor="newName">
                Zum Bestätigen den Namen des Charakters eintragen:
              </label>
              <input
                value={deleteCharName}
                type="text"
                name="newName"
                onChange={(e) => handleGetCharName(e)}
              />

              <button
                className={buttonDisabled ? "disabled" : null}
                type="submit"
                disabled={buttonDisabled}
              >
                ENDGÜLTIG LÖSCHEN
              </button>
            </form>
          ) : null}

          <button
            style={{ backgroundColor: "var(--red-color-light)", marginTop: "15px" }}
            onClick={handleCancel}
          >
            Abbrechen
          </button>
        </>
      </div>
    </>
  );
};

export default CharacterDelete;
