import "../../../styles/splittermond/ressourcen.css";

const Ressourcen = ({ ressourcen, editCharacter, handleChange, edit }) => {
  return (
    <>
      <h2>Ressourcen</h2>
      <>
        <div className="ressourcen">
          {ressourcen.ansehen.wert === 0 && !edit ? null : (
            <div>
              <h3>Ansehen</h3>
              {edit ? (
                <>
                  <input
                    type="number"
                    name="ansehen"
                    data-section="ressourcen"
                    data-subsection="wert"
                    onChange={(e) => handleChange(e)}
                    value={editCharacter.ansehen.wert}
                  />
                  <input
                    disabled={!editCharacter.ansehen.wert}
                    name="ansehen"
                    data-section="ressourcen"
                    data-subsection="bedeutung"
                    onChange={(e) => handleChange(e)}
                    value={editCharacter.ansehen.bedeutung}
                  />
                </>
              ) : (
                <>
                  <p className="wert">{ressourcen.ansehen.wert}</p>
                  <p className="description">{ressourcen.ansehen.bedeutung}</p>
                </>
              )}
            </div>
          )}
          {ressourcen.gefolge.wert === 0 && !edit ? null : (
            <div>
              <h3>Gefolge</h3>
              {edit ? (
                <>
                  <input
                    type="number"
                    name="gefolge"
                    data-section="ressourcen"
                    data-subsection="wert"
                    onChange={(e) => handleChange(e)}
                    value={editCharacter.gefolge.wert}
                  />
                  <input
                    disabled={!editCharacter.gefolge.wert}
                    name="gefolge"
                    data-section="ressourcen"
                    data-subsection="bedeutung"
                    onChange={(e) => handleChange(e)}
                    value={editCharacter.gefolge.bedeutung}
                  />
                </>
              ) : (
                <>
                  <p className="wert">{ressourcen.gefolge.wert}</p>
                  <p className="description">{ressourcen.gefolge.bedeutung}</p>
                </>
              )}
            </div>
          )}
          {ressourcen.kontakte.wert === 0 && !edit ? null : (
            <div>
              <h3>Kontakte</h3>
              {edit ? (
                <>
                  <input
                    type="number"
                    name="kontakte"
                    data-section="ressourcen"
                    data-subsection="wert"
                    onChange={(e) => handleChange(e)}
                    value={editCharacter.kontakte.wert}
                  />
                  <input
                    disabled={!editCharacter.kontakte.wert}
                    name="kontakte"
                    data-section="ressourcen"
                    data-subsection="bedeutung"
                    onChange={(e) => handleChange(e)}
                    value={editCharacter.kontakte.bedeutung}
                  />
                </>
              ) : (
                <>
                  <p className="wert">{ressourcen.kontakte.wert}</p>
                  <p className="description">{ressourcen.kontakte.bedeutung}</p>
                </>
              )}
            </div>
          )}
          {ressourcen.kreatur.wert === 0 && !edit ? null : (
            <div>
              <h3>Kreatur</h3>
              {edit ? (
                <>
                  <input
                    type="number"
                    name="kreatur"
                    data-section="ressourcen"
                    data-subsection="wert"
                    onChange={(e) => handleChange(e)}
                    value={editCharacter.kreatur.wert}
                  />
                  <input
                    disabled={!editCharacter.kreatur.wert}
                    name="kreatur"
                    data-section="ressourcen"
                    data-subsection="bedeutung"
                    onChange={(e) => handleChange(e)}
                    value={editCharacter.kreatur.bedeutung}
                  />
                </>
              ) : (
                <>
                  <p className="wert">{ressourcen.kreatur.wert}</p>
                  <p className="description">{ressourcen.kreatur.bedeutung}</p>
                </>
              )}
            </div>
          )}
          {ressourcen.mentor.wert === 0 && !edit ? null : (
            <div>
              <h3>Mentor</h3>
              {edit ? (
                <>
                  <input
                    type="number"
                    name="mentor"
                    data-section="ressourcen"
                    data-subsection="wert"
                    onChange={(e) => handleChange(e)}
                    value={editCharacter.mentor.wert}
                  />
                  <input
                    disabled={!editCharacter.mentor.wert}
                    name="mentor"
                    data-section="ressourcen"
                    data-subsection="bedeutung"
                    onChange={(e) => handleChange(e)}
                    value={editCharacter.mentor.bedeutung}
                  />
                </>
              ) : (
                <>
                  <p className="wert">{ressourcen.mentor.wert}</p>
                  <p className="description">{ressourcen.mentor.bedeutung}</p>
                </>
              )}
            </div>
          )}
          {ressourcen.rang.wert === 0 && !edit ? null : (
            <div>
              <h3>Rang</h3>
              {edit ? (
                <>
                  <input
                    type="number"
                    name="rang"
                    data-section="ressourcen"
                    data-subsection="wert"
                    onChange={(e) => handleChange(e)}
                    value={editCharacter.rang.wert}
                  />
                  <input
                    disabled={!editCharacter.rang.wert}
                    name="rang"
                    data-section="ressourcen"
                    data-subsection="bedeutung"
                    onChange={(e) => handleChange(e)}
                    value={editCharacter.rang.bedeutung}
                  />
                </>
              ) : (
                <>
                  <p className="wert">{ressourcen.rang.wert}</p>
                  <p className="description">{ressourcen.rang.bedeutung}</p>
                </>
              )}
            </div>
          )}
          {ressourcen.relikt.wert === 0 && !edit ? null : (
            <div>
              <h3>Relikt</h3>
              {edit ? (
                <>
                  <input
                    type="number"
                    name="relikt"
                    data-section="ressourcen"
                    data-subsection="wert"
                    onChange={(e) => handleChange(e)}
                    value={editCharacter.relikt.wert}
                  />
                  <input
                    disabled={!editCharacter.relikt.wert}
                    name="relikt"
                    data-section="ressourcen"
                    data-subsection="bedeutung"
                    onChange={(e) => handleChange(e)}
                    value={editCharacter.relikt.bedeutung}
                  />
                </>
              ) : (
                <>
                  <p className="wert">{ressourcen.relikt.wert}</p>
                  <p className="description">{ressourcen.relikt.bedeutung}</p>
                </>
              )}
            </div>
          )}
          {ressourcen.stand.wert === 0 && !edit ? null : (
            <div>
              <h3>Stand</h3>
              {edit ? (
                <>
                  <input
                    type="number"
                    name="stand"
                    data-section="ressourcen"
                    data-subsection="wert"
                    onChange={(e) => handleChange(e)}
                    value={editCharacter.stand.wert}
                  />
                  <input
                    disabled={!editCharacter.stand.wert}
                    name="stand"
                    data-section="ressourcen"
                    data-subsection="bedeutung"
                    onChange={(e) => handleChange(e)}
                    value={editCharacter.stand.bedeutung}
                  />
                </>
              ) : (
                <>
                  <p className="wert">{ressourcen.stand.wert}</p>
                  <p className="description">{ressourcen.stand.bedeutung}</p>
                </>
              )}
            </div>
          )}
          {ressourcen.vermoegen.wert === 0 && !edit ? null : (
            <div>
              <h3>Vermögen</h3>
              {edit ? (
                <>
                  <input
                    type="number"
                    name="vermoegen"
                    data-section="ressourcen"
                    data-subsection="wert"
                    onChange={(e) => handleChange(e)}
                    value={editCharacter.vermoegen.wert}
                  />
                  <input
                    disabled={!editCharacter.vermoegen.wert}
                    name="vermoegen"
                    data-section="ressourcen"
                    data-subsection="bedeutung"
                    onChange={(e) => handleChange(e)}
                    value={editCharacter.vermoegen.bedeutung}
                  />
                </>
              ) : (
                <>
                  <p className="wert">{ressourcen.vermoegen.wert}</p>
                  <p className="description">
                    {ressourcen.vermoegen.bedeutung}
                  </p>
                </>
              )}
            </div>
          )}
          {ressourcen.zuflucht.wert === 0 && !edit ? null : (
            <div>
              <h3>Zuflucht</h3>
              {edit ? (
                <>
                  <input
                    type="number"
                    name="zuflucht"
                    data-section="ressourcen"
                    data-subsection="wert"
                    onChange={(e) => handleChange(e)}
                    value={editCharacter.zuflucht.wert}
                  />
                  <input
                    disabled={!editCharacter.zuflucht.wert}
                    name="zuflucht"
                    data-section="ressourcen"
                    data-subsection="bedeutung"
                    onChange={(e) => handleChange(e)}
                    value={editCharacter.zuflucht.bedeutung}
                  />
                </>
              ) : (
                <>
                  <p className="wert">{ressourcen.zuflucht.wert}</p>
                  <p className="description">{ressourcen.zuflucht.bedeutung}</p>
                </>
              )}
            </div>
          )}
        </div>
      </>
    </>
  );
};

export default Ressourcen;
