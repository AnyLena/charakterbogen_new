import "../../../styles/splittermond/fertigkeiten.css";

const Kampffertigkeiten = ({ data, editCharacter, handleChange, edit }) => {
  return (
    <>
      <h2>Kampffertigkeiten</h2>
      <div className="attributes kampffertigkeiten">
        {Object.keys(data).map((key) => (
          <div key={key}>
            <h3>{key.slice(0, 1).toUpperCase() + key.slice(1)}</h3>
            <div>
              {edit ? (
                <input
                  type="number"
                  name={[key]}
                  data-section="kampffertigkeiten"
                  onChange={(e) => handleChange(e)}
                  value={editCharacter[key]}
                />
              ) : (
                <p>{data[key]}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Kampffertigkeiten;
