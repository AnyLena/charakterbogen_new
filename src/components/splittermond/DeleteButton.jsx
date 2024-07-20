import { deleteItem } from "../../api/splittermond";
import { GiCrossMark, GiHandOk } from "react-icons/gi";
import { useState } from "react";

const DeleteButton = ({ characterId, itemId, group, setCharacter }) => {
  const [openAlert, setOpenAlert] = useState(false);
  const handleAlert = (input) => {
    setOpenAlert(input);
  };
  return (
    <div className="button-div erase-btn">
      {!openAlert ? (
        <button onClick={() => handleAlert(true)}>
          <GiCrossMark />
          löschen
        </button>
      ) : null}
      {openAlert ? (
        <>
          <button
            onClick={() => deleteItem(characterId, itemId, group, setCharacter)}
          >
            <GiHandOk />
            Ja
          </button>
          <button onClick={() => handleAlert(false)}>
            <GiCrossMark />
            Nein
          </button>
        </>
      ) : null}
    </div>
  );
};

export default DeleteButton;
