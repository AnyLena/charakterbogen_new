import "../../../styles/splittermond/attributes.css";
import {
  bonusGeschwindigkeit,
  bonusFokuspunkte,
  bonusGWiderstand,
  bonusInitiative,
  bonusKWiderstand,
  bonusLebenspunkte,
  bonusVerteidigung,
} from "../../../utils/boniSplittermond";
const Attributes = ({ data, attribute, handleChange, editCharacter, edit }) => {
  return (
    <>
      <h2>Attribute</h2>
      <div className="attributes">
        <div>
          <h3>Ausstrahlung</h3>
          <div>
            {edit ? (
              <div className="attribute-input">
                <input
                  type="number"
                  name="ausstrahlung"
                  data-section="attribute"
                  data-subsection="aktuell"
                  onChange={(e) => handleChange(e)}
                  value={editCharacter.ausstrahlung.aktuell}
                />
                <p className="basis">Basis: {attribute.ausstrahlung.basis}</p>
              </div>
            ) : (
              <>
                <p>{attribute.ausstrahlung.aktuell}</p>
                <p className="basis">/ {attribute.ausstrahlung.basis}</p>
              </>
            )}
          </div>
        </div>
        <div>
          <h3>Beweglichkeit</h3>
          <div>
          {edit ? (
              <div className="attribute-input">
                <input
                  type="number"
                  name="beweglichkeit"
                  data-section="attribute"
                  data-subsection="aktuell"
                  onChange={(e) => handleChange(e)}
                  value={editCharacter.beweglichkeit.aktuell}
                />
                <p className="basis">Basis: {attribute.beweglichkeit.basis}</p>
              </div>
            ) : (
              <>
               <p>{attribute.beweglichkeit.aktuell}</p>
               <p className="basis">/ {attribute.beweglichkeit.basis}</p>
              </>
            )}
            
          </div>
        </div>
        <div>
          <h3>Intuition</h3>
          <div>
          {edit ? (
              <div className="attribute-input">
                <input
                  type="number"
                  name="intuition"
                  data-section="attribute"
                  data-subsection="aktuell"
                  onChange={(e) => handleChange(e)}
                  value={editCharacter.intuition.aktuell}
                />
                <p className="basis">Basis: {attribute.intuition.basis}</p>
              </div>
            ) : (
              <>
             <p>{attribute.intuition.aktuell}</p>
             <p className="basis">/ {attribute.intuition.basis}</p>
              </>
            )}
            
          </div>
        </div>
        <div>
          <h3>Konstitution</h3>
          <div>
          {edit ? (
              <div className="attribute-input">
                <input
                  type="number"
                  name="konstitution"
                  data-section="attribute"
                  data-subsection="aktuell"
                  onChange={(e) => handleChange(e)}
                  value={editCharacter.konstitution.aktuell}
                />
                <p className="basis">Basis: {attribute.konstitution.basis}</p>
              </div>
            ) : (
              <>
             <p>{attribute.konstitution.aktuell}</p>
             <p className="basis">/ {attribute.konstitution.basis}</p>
              </>
            )}
            
          </div>
        </div>
        <div>
          <h3>Mystik</h3>
          <div>
          {edit ? (
              <div className="attribute-input">
                <input
                  type="number"
                  name="mystik"
                  data-section="attribute"
                  data-subsection="aktuell"
                  onChange={(e) => handleChange(e)}
                  value={editCharacter.mystik.aktuell}
                />
                <p className="basis">Basis: {attribute.mystik.basis}</p>
              </div>
            ) : (
              <>
             <p>{attribute.mystik.aktuell}</p>
             <p className="basis">/ {attribute.mystik.basis}</p>
              </>
            )}
            
          </div>
        </div>
        <div>
          <h3>Stärke</h3>
          <div>
          {edit ? (
              <div className="attribute-input">
                <input
                  type="number"
                  name="staerke"
                  data-section="attribute"
                  data-subsection="aktuell"
                  onChange={(e) => handleChange(e)}
                  value={editCharacter.staerke.aktuell}
                />
                <p className="basis">Basis: {attribute.staerke.basis}</p>
              </div>
            ) : (
              <>
            <p>{attribute.staerke.aktuell}</p>
            <p className="basis">/ {attribute.staerke.basis}</p>
              </>
            )}
            
          </div>
        </div>
        <div>
          <h3>Verstand</h3>
          <div>
          {edit ? (
              <div className="attribute-input">
                <input
                  type="number"
                  name="verstand"
                  data-section="attribute"
                  data-subsection="aktuell"
                  onChange={(e) => handleChange(e)}
                  value={editCharacter.verstand.aktuell}
                />
                <p className="basis">Basis: {attribute.verstand.basis}</p>
              </div>
            ) : (
              <>
            <p>{attribute.verstand.aktuell}</p>
            <p className="basis">/ {attribute.verstand.basis}</p>
              </>
            )}
            
          </div>
        </div>
        <div>
          <h3>Willenskraft</h3>
          <div>
          {edit ? (
              <div className="attribute-input">
                <input
                  type="number"
                  name="willenskraft"
                  data-section="attribute"
                  data-subsection="aktuell"
                  onChange={(e) => handleChange(e)}
                  value={editCharacter.willenskraft.aktuell}
                />
                <p className="basis">Basis: {attribute.willenskraft.basis}</p>
              </div>
            ) : (
              <>
             <p>{attribute.willenskraft.aktuell}</p>
             <p className="basis">/ {attribute.willenskraft.basis}</p>
              </>
            )}
          
          </div>
        </div>
      </div>
      <h2>Abgeleitete Werte</h2>
      <div className="attributes">
        <div>
          <h3>Größenklasse</h3>
          <p>{attribute.groessenklasse}</p>
        </div>
        <div>
          <h3>Geschwindigkeit</h3>
          <p>
            {[
              attribute.groessenklasse +
                attribute.beweglichkeit.aktuell +
                bonusGeschwindigkeit(data),
            ]}
          </p>
        </div>
        <div>
          <h3>Initiative</h3>
          <p>
            {Number([10 - attribute.intuition.aktuell]) -
              bonusInitiative(data)}
          </p>
        </div>
        <div>
          <h3>Lebenspunkte</h3>
          <p>
            {[
              attribute.groessenklasse +
                attribute.konstitution.aktuell +
                bonusLebenspunkte(data),
            ]}
          </p>
        </div>
        <div>
          <h3>Fokus</h3>
          <p>
            {[
              2 *
                (attribute.mystik.aktuell +
                  attribute.willenskraft.aktuell) +
                bonusFokuspunkte(data),
            ]}
          </p>
        </div>
        <div>
          <h3>Verteidigung</h3>
          <p>
            {[
              12 +
                attribute.beweglichkeit.aktuell +
                attribute.staerke.aktuell +
                bonusVerteidigung(data),
            ]}
          </p>
        </div>
        <div>
          <h3>
            Geistiger
            <br />
            Widerstand
          </h3>
          <p>
            {[
              12 +
                attribute.verstand.aktuell +
                attribute.willenskraft.aktuell +
                bonusGWiderstand(data),
            ]}
          </p>
        </div>
        <div>
          <h3>
            Körperlicher
            <br />
            Widerstand
          </h3>
          <p>
            {[
              12 +
                attribute.konstitution.aktuell +
                attribute.willenskraft.aktuell +
                bonusKWiderstand(data),
            ]}
          </p>
        </div>
      </div>
    </>
  );
};

export default Attributes;
