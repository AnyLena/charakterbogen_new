import "../../../styles/splittermond/box-meister.css";
import "../../../styles/splittermond/box-single.css";

const Artefakte = ({ artefakte }) => {
  return (
    <>
      <div className="box-single">
        <h2>Artefakte</h2> <p>{artefakte}</p>
      </div>
    </>
  );
};

export default Artefakte;
