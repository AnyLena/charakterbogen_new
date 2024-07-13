import "../../../styles/splittermond/fertigkeiten.css";

const Kampffertigkeiten = ({ data, editCharacter, handleChange, edit }) => {
  return (
    <>
      <h2>Kampffertigkeiten</h2>
      <div className="attributes kampffertigkeiten">
        {!edit
          ? Object.keys(data).map((key) =>
              data[key] === 0 ? null : (
                <div key={key}>
                  <h3>{key.slice(0, 1).toUpperCase() + key.slice(1)}</h3>
                  <div>
                    <p>{data[key]}</p>
                  </div>
                </div>
              )
            )
          : null}
        {edit
          ? Object.keys(data).map((key) => (
              <div key={key}>
                <h3>{key.slice(0, 1).toUpperCase() + key.slice(1)}</h3>
                <div>
                  <input
                    type="number"
                    name={[key]}
                    data-section="kampffertigkeiten"
                    onChange={(e) => handleChange(e)}
                    value={editCharacter[key]}
                  />
                </div>
              </div>
            ))
          : null}
      </div>
    </>
  );
};

export default Kampffertigkeiten;
