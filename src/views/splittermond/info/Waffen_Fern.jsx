import "../../../styles/splittermond/box-meister.css";
import "../../../styles/splittermond/box-single.css";
import "../../../styles/splittermond/box-description.css";
import "../../../styles/splittermond/waffen.css";

import { attributFormatter } from "../../../utils/attribut-formatter";
import { waffenMerkmaleFormatter } from "../../../utils/waffen-merkmale-formatter";
import { useEffect, useState } from "react";

import { deleteItem } from "../../../api/splittermond";
import { GiCrossMark } from "react-icons/gi";

const WaffenFern = ({
  waffen,
  kampffertigkeiten,
  attribute,
  characterId,
  setCharacter,
  edit,
}) => {
  const [open, setOpen] = useState(false);
  const [waffenMerkmale, setWaffenmerkmale] = useState([]);

  const getWaffenmerkmale = (waffen) => {
    let merkmale = [];
    waffen.map((items) => {
      merkmale.push(...items.waffeMerkmale.split(","));
    });
    merkmale = merkmale.map((item) => item.replace(/\s|\d/g, "").toLowerCase());
    merkmale = merkmale.sort();
    merkmale = [...new Set(merkmale)];
    merkmale = merkmale.filter((item) => item !== "–");
    setWaffenmerkmale(merkmale);
  };

  const showAccordeon = () => {
    setOpen(!open);
  };

  useEffect(() => {
    getWaffenmerkmale(waffen);
  }, []);

  return (
    <>
      {waffen.length > 0 && waffen.some((item) => item.waffeTyp === "fern") ? (
        <>
          <h2>Fernkampfwaffen</h2>
          {waffen
            .filter((item) => item.waffeTyp === "fern")
            .map((item, index) => (
              <div className="box-meister" key={index}>
                <h3>{item.waffeName}</h3>
                <p className="subtext">
                  Fertigkeit:{" "}
                  {item.waffeFertigkeit.slice(0, 1).toUpperCase() +
                    item.waffeFertigkeit.slice(1)}{" "}
                  ({kampffertigkeiten[item.waffeFertigkeit]})
                </p>
                <p className="description"> Merkmale: {item.waffeMerkmale}</p>
                <div className="description box-description">
                  <p>
                    {attributFormatter(item.waffeAttr1)} |{" "}
                    {attributFormatter(item.waffeAttr2)} | MOD
                  </p>
                  <p className="descriptionValue">
                    {" "}
                    {attribute[item.waffeAttr1].aktuell} |{" "}
                    {attribute[item.waffeAttr2].aktuell} | {item.waffeMod}{" "}
                  </p>
                  <p>Wert</p>
                  <p className="descriptionValue">
                    {" "}
                    {attribute[item.waffeAttr1].aktuell +
                      attribute[item.waffeAttr2].aktuell +
                      item.waffeMod +
                      kampffertigkeiten[item.waffeFertigkeit]}
                  </p>
                  <p>WGS</p>
                  <p className="descriptionValue">{item.waffeWGS}</p>
                  <p>Schaden</p>
                  <p className="descriptionValue">{item.waffeSchaden}</p>
                  <p>Munition</p>
                  <p className="descriptionValue">{item.waffeMun}</p>
                  <p>Reichweite</p>
                  <p className="descriptionValue">{item.waffeRW}</p>
                </div>
                {edit ? (
                  <div className="button-div erase-btn">
                    <button
                      onClick={() =>
                        deleteItem(
                          characterId,
                          item._id,
                          "waffen",
                          setCharacter
                        )
                      }
                    >
                      <GiCrossMark />
                      löschen
                    </button>
                  </div>
                ) : null}
              </div>
            ))}
          <div onClick={showAccordeon} className="accordeon">
            <h2>Waffenmerkmale anzeigen</h2>
            {waffenMerkmale.length > 0 && open
              ? waffenMerkmale.map((item, index) => (
                  <div className="box-erlaeuterungen" key={index}>
                    <h3>{item.slice(0, 1).toUpperCase() + item.slice(1)}</h3>
                    <p className="">{waffenMerkmaleFormatter(item)}</p>
                  </div>
                ))
              : null}
          </div>
        </>
      ) : null}
    </>
  );
};

export default WaffenFern;
