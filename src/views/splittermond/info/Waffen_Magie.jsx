import "../../../styles/splittermond/box-meister.css";
import "../../../styles/splittermond/box-single.css";
import "../../../styles/splittermond/box-description.css";
import "../../../styles/splittermond/waffen.css";

import DeleteButton from "../../../components/splittermond/DeleteButton";

const WaffenMagie = ({ zauber, characterId, setCharacter, edit }) => {
  return (
    <>
      {zauber.length > 0 ? (
        <>
          <h2>Zauberliste</h2>
          {zauber.map((item, index) => (
            <div className="box-meister" key={index}>
              <h3>{item.zauberName}</h3>
              <p className="subtext">Schule: {item.zauberSchule}</p>
              <p className="description">{item.zauberWirkung}</p>
              <p className="description">{item.zauberErfolgsgrade}</p>
              <div className="description box-description">
                <p>Typus</p>
                <p className="descriptionValue span3">{item.zauberTypus}</p>
                <p>Schwierigkeit</p>
                <p className="descriptionValue">{item.zauberSchw}</p>
                <p>Kosten</p>
                <p className="descriptionValue">{item.zauberKosten}</p>
                <p>Zauberdauer</p>
                <p className="descriptionValue">{item.zauberZD}</p>
                <p>Reichweite</p>
                <p className="descriptionValue">{item.zauberRW}</p>
                <p>Wirkungsdauer</p>
                <p className="descriptionValue">{item.zauberWD}</p>
                <p>Wirkungsbereich</p>
                <p className="descriptionValue">{item.zauberWB}</p>
              </div>
              {edit ? (
                <DeleteButton
                  characterId={characterId}
                  itemId={item._id}
                  group="zauber"
                  setCharacter={setCharacter}
                />
              ) : null}
            </div>
          ))}
        </>
      ) : null}
    </>
  );
};

export default WaffenMagie;
