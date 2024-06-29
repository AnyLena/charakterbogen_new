import "../../../styles/splittermond/box-meister.css";
import "../../../styles/splittermond/box-single.css";
import "../../../styles/splittermond/box-triple.css";

const Ausruestung = ({ ausruestung, geld }) => {
  return (
    <>
      <div className="box-single">
        <h2>Ausrüstung</h2> <p>{ausruestung}</p>
      </div>

      <div className="box-single">
        <h2>Vermögen</h2> 
      </div>

      <div className="box-triple">
        <div>
          <h3>Solare</h3>
          <p>{geld.solare}</p>
        </div>
        <div>
          <h3>Lunare</h3>
          <p>{geld.lunare}</p>
        </div>
        <div>
          <h3>Telare</h3>
          <p>{geld.telare}</p>
        </div>
      </div>
    </>
  );
};

export default Ausruestung;
