import "../../../styles/splittermond/box-meister.css";
import "../../../styles/splittermond/box-single.css";

const Artefakte = ({ artefakte, editCharacter, handleChange, edit }) => {
  return (
    <>
      <div className="box-single">
        <h2>Artefakte</h2>
        
        {edit ? (
          <textarea
            name="artefakte"
            onChange={(e) => handleChange(e)}
            value={editCharacter}
          />
        ) : (
          <p>{artefakte}</p>
        )}

      </div>
    </>
  );
};

export default Artefakte;
