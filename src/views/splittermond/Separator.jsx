import "../../styles/splittermond/separator.css";
import {
  GiAncientSword,
  GiWizardStaff,
  GiShinyPurse,
  GiAxeSword,
  GiMoon,
  GiBrain,
  GiDwarfFace,
  GiMightyForce
} from "react-icons/gi";

const Separator = ({ section, navId }) => {
  let icon = <GiAncientSword />;

  section === "charakter" ? (
    (icon = <GiDwarfFace />)
  ) : section === "attribute und abgeleitete werte" ? (
    (icon = <GiAncientSword />)
  ) : section === "fertigkeiten und meisterschaften" ? (
    (icon = <GiBrain />)
  ) : section === "ressourcen und stärken" ? (
    (icon = <GiMightyForce />)
  ) : section === "mondzeichen" ? (
    (icon = <GiMoon />)
  ) : section === "kampffertigkeiten und waffen" ? (
    (icon = <GiAxeSword />)
  ) : section === "magie und zauber" ? (
    (icon = <GiWizardStaff />)
  ) : section === "ausrüstung und vermögen" ? (
    (icon = <GiShinyPurse />)
  ) : (
    <GiAncientSword />
  );

  return (
    <div id={navId} className="separator">
      <div>{icon}</div>
      <h2>{section.toUpperCase()}</h2>
    </div>
  );
};

export default Separator;
