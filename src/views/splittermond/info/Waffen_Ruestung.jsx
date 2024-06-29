import "../../../styles/splittermond/box-meister.css";
import "../../../styles/splittermond/box-single.css";
import "../../../styles/splittermond/box-description.css";
import "../../../styles/splittermond/waffen.css";

// import { attributFormatter } from "../../../utils/attribut-formatter";
// import { waffenMerkmaleFormatter } from "../../../utils/waffen-merkmale-formatter";
// import { useEffect, useState } from "react";

const WaffenRuestung = ({ ruestungen, kampffertigkeiten, attribute }) => {
  // const [open, setOpen] = useState(false);
  // const [waffenMerkmale, setWaffenmerkmale] = useState([]);

  // const getWaffenmerkmale = (waffen) => {
  //   let merkmale = [];
  //   waffen.map((items) => {
  //     merkmale.push(...items.waffeMerkmale.split(","));
  //   });
  //   merkmale = merkmale.map((item) => item.replace(/\s|\d/g, "").toLowerCase());
  //   merkmale = merkmale.sort();
  //   merkmale = [...new Set(merkmale)];
  //   merkmale = merkmale.filter((item) => item !== "–");
  //   setWaffenmerkmale(merkmale);
  // };

  // const showAccordeon = () => {
  //   setOpen(!open);
  // };

  // useEffect(() => {
  //   getWaffenmerkmale(waffen);
  // }, []);

  return (
    <>
      {ruestungen.length > 0 ? (
        <>
          <h2>Rüstung</h2>
          {ruestungen.map((item, index) => (
            <div className="box-meister" key={index}>
              <h3>{item.ruestungName}</h3>
          
              <div className="description box-description">
                <p>Bonus VTD</p>
                <p className="descriptionValue">{item.ruestungVTD}</p>
                <p>Schadensreduktion</p>
                <p className="descriptionValue">{item.ruestungSR}</p>
                <p>Behinderung</p>
                <p className="descriptionValue">{item.ruestungBeh}</p>
                <p>Tick-Zuschlag</p>
                <p className="descriptionValue">{item.ruestungTick}</p>
              </div>
            </div>
          ))}
        </>
      ) : null}
    </>
  );
};

export default WaffenRuestung;
