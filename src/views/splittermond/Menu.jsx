import "../../styles/navbar_char.css";
import {
  GiAncientSword,
  GiWizardStaff,
  GiShinyPurse,
  GiAxeSword,
  GiMoon,
  GiBrain,
  GiDwarfFace,
  GiMightyForce,
  GiMagicSwirl,
  GiCrossMark,
} from "react-icons/gi";
const Menu = ({ setEdit, edit, resetCharacter, saveCharacter, setNewItem }) => {
  window.addEventListener("scroll", function () {
    var navbar = document.querySelector("nav.charMenu");
    if (window.pageYOffset > 0) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  });

  const handleMenu = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDiscard = () => {
    setEdit(false);
    resetCharacter();
    setNewItem(null)
  };
  const handleSave = () => {
    saveCharacter()
  };

  return (
    <nav className="charMenu">
      <div onClick={() => handleMenu("navbar")}>
        <GiDwarfFace />
        <p>Charakter</p>
      </div>
      <div onClick={() => handleMenu("navattribute")}>
        <GiAncientSword />
        <p>Attribute und abgeleitete Werte</p>
      </div>
      <div onClick={() => handleMenu("navfertigkeiten")}>
        <GiBrain />
        <p>Fertig&shy;keiten und Meister&shy;schaften</p>
      </div>
      <div onClick={() => handleMenu("navstaerken")}>
        <GiMightyForce />
        <p>Ressourcen und Stärken</p>
      </div>
      <div onClick={() => handleMenu("navmondzeichen")}>
        <GiMoon />
        <p>Mondzeichen</p>
      </div>
      <div onClick={() => handleMenu("navkampf")}>
        <GiAxeSword />
        <p>Kampf&shy;fertigkeiten und Waffen</p>
      </div>
      <div onClick={() => handleMenu("navmagie")}>
        <GiWizardStaff />
        <p>Magie und Zauber</p>
      </div>
      <div onClick={() => handleMenu("navausruestung")}>
        <GiShinyPurse />
        <p>Ausrüstung und Vermögen</p>
      </div>
      {edit ? (
        <div className="edit" onClick={handleDiscard}>
          <GiCrossMark />
          <p>Änderungen verwerfen</p>
        </div>
      ) : null}
      {edit ? null : (
        <div className="edit" onClick={() => setEdit(!edit)}>
          <GiMagicSwirl />
          <p>Charakter bearbeiten</p>
        </div>
      )}
      {edit ? (
        <div className="edit" onClick={handleSave}>
          <GiMagicSwirl />
          <p>Charakter speichern</p>
        </div>
      ) : null}
    </nav>
  );
};

export default Menu;
