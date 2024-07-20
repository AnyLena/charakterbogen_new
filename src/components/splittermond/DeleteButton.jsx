import { deleteItem } from "../../api/splittermond";
import { GiCrossMark } from "react-icons/gi";

const DeleteButton = ({characterId, itemId, group, setCharacter}) => {
  return (
    <div className="button-div erase-btn">
      <button
        onClick={() =>
          deleteItem(characterId, itemId, group, setCharacter)
        }
      >
        <GiCrossMark />
        löschen
      </button>
    </div>
  );
};

export default DeleteButton;
