import "../../../styles/splittermond/box-meister.css";
import "../../../styles/splittermond/box-single.css";
import "../../../styles/splittermond/box-description.css";
import "../../../styles/splittermond/waffen.css";

import { attributFormatter } from "../../../utils/attribut-formatter";
import { waffenMerkmaleFormatter } from "../../../utils/waffen-merkmale-formatter";
import { useEffect, useState } from "react";

import DeleteButton from "../../../components/splittermond/DeleteButton";

import { GiBoneKnife } from "react-icons/gi";
import { GiFist } from "react-icons/gi";
import { GiSpearFeather } from "react-icons/gi";
import { GiKatana } from "react-icons/gi";
import { GiWoodClub } from "react-icons/gi";
import { GiHarpoonChain } from "react-icons/gi";

const WaffenNah = ({
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
      {waffen.length > 0 && waffen.some((item) => item.waffeTyp === "nah") ? (
        <>
          <h2>Nahkampfwaffen</h2>
          {waffen
            .filter((item) => item.waffeTyp === "nah")
            .map((item, index) => (
              <div className="box-meister" key={index}>
                <h3 className="active">
                  {item.waffeFertigkeit === "handgemenge" ? (
                    <GiFist />
                  ) : item.waffeFertigkeit === "stangenwaffen" ? (
                    <GiSpearFeather />
                  ) : item.waffeFertigkeit === "klingenwaffen" ? (
                    <GiKatana />
                  ) : item.waffeFertigkeit === "hiebwaffen" ? (
                    <GiWoodClub />
                  ) : item.waffeFertigkeit === "kettenwaffen" ? (
                    <GiHarpoonChain />
                  ) : (
                    <GiBoneKnife />
                  )}
                  {item.waffeName}
                </h3>
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
                </div>
                {edit ? (
                  <DeleteButton
                    characterId={characterId}
                    itemId={item._id}
                    group="waffen"
                    setCharacter={setCharacter}
                  />
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

export default WaffenNah;
