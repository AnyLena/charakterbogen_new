import { useState } from "react";
import "../../../styles/splittermond/fertigkeiten.css";

const Fertigkeiten = ({
  data,
  attribute,
  heldengrad,
  handleChange,
  editCharacter,
  edit,
}) => {
  const [open, setOpen] = useState(null);
  const handleClick = (item) => {
    open === item ? setOpen(null) : setOpen(item);
  };

  const maxPunkteNachHeldengrad =
    Number(heldengrad) === 1
      ? 6
      : Number(heldengrad) === 2
      ? 9
      : Number(heldengrad) === 3
      ? 12
      : 15;

  return (
    <>
      <h2>Fertigkeiten</h2>
      <div className="fertigkeiten">
        <div>
          <h3 onClick={() => handleClick("akrobatik")}>Akrobatik</h3>
          {edit ? (
            <>
              <p>
                {[
                  attribute.beweglichkeit.aktuell +
                    attribute.staerke.aktuell +
                    Number(editCharacter.akrobatik),
                ]}
              </p>
              <input
                type="number"
                name="akrobatik"
                data-section="fertigkeiten"
                onChange={(e) => handleChange(e)}
                value={editCharacter.akrobatik}
                max={maxPunkteNachHeldengrad}
                min={0}
              />
            </>
          ) : (
            <>
              <p>
                {[
                  attribute.beweglichkeit.aktuell +
                    attribute.staerke.aktuell +
                    Number(data.akrobatik),
                ]}
              </p>
              <p className="basis">Basis: {data.akrobatik}</p>
            </>
          )}
          <div
            className={
              open === "akrobatik" ? "description" : "description display-none"
            }
          >
            <p>
              Während Athletik die Grundlagen der körperlichen
              Leistungsfähigkeit umfasst, kommt Akrobatik zum Einsatz, wenn ein
              Abenteurer Dinge tun will, die aus Sicht einer ungeübten Person
              unmöglich erscheinen. Akrobatik verleiht einem Abenteurer eine
              außerordentliche Körperbeherrschung, die es ihm ermöglicht,
              Überschläge, kunstvolle Sprünge oder außergewöhnliche
              Körperfiguren darzustellen. Akrobaten können geschickt über Seile
              balancieren, aus dem Stand Saltos springen, sich aus Fesseln
              herauswinden oder sich mit einer geschmeidigen Körperdrehung aus
              der Reichweite des zuschlagenden Orks bringen.
            </p>
            <p>
              Während Athletik außerdem üblicherweise aktiv eingesetzt wird,
              kommt Akrobatik auch zum Tragen, wenn passive Körperbeherrschung
              gefragt ist, etwa um auf einem glitschigen Untergrund die Balance
              zu halten oder sich nach einem Sturz abzurollen, um Schaden zu
              vermeiden.
            </p>
            <p>Akrobatik wird eingesetzt …</p>
            <ul>
              <li>
                wenn der Abenteurer kunstvolle und spektakuläre körperliche
                Aktionen wie Radschläge oder Saltos ausführen will.
              </li>
              <li>
                wenn der Abenteurer sich durch einen engen Spalt zwängen will.
              </li>
              <li>wenn der Abenteurer einen Sturz abfangen will.</li>
              <li>
                wenn die allgemeine Körperbeherrschung, das Balance- und
                Koordinationsvermögen gefragt ist.
              </li>
              <li>
                wenn die Verteidigung im Rahmen einer Aktiven Abwehr durch
                Ausweichen aktiv erhöht werden soll (siehe S. 138).
              </li>
              <li>
                wenn der Abenteurer sich aus Fesseln herauswinden möchte (siehe
                S. 115).
              </li>
              <li className="last">
                wenn der Abenteurer Hindernisse überwinden möchte (siehe S. 108;
                hier ist auch Athletik möglich, S. 106).
              </li>
            </ul>
            <p>Akrobatik wird nicht eingesetzt …</p>
            <ul>
              <li>
                wenn allgemeine sportliche Leistungsfähigkeit gefragt ist (hier
                kommt Athletik zum Einsatz, S. 106).
              </li>
              <li>
                wenn körperlicher Widerstand benötigt wird (dies fällt unter
                Zähigkeit, S. 136).
              </li>
              <li className="last">
                wenn artistische Vorführungen im Rahmen echter künstlerischer
                Aufführungen eingesetzt werden, etwa um damit Geld zu verdienen
                (hierfür ist Darbietung maßgeblich, S. 108)
              </li>
            </ul>
          </div>
          <h3 onClick={() => handleClick("alchemie")}>Alchemie</h3>
          {edit ? (
            <>
              <p>
                {[
                  attribute.mystik.aktuell +
                    attribute.verstand.aktuell +
                    Number(editCharacter.alchemie),
                ]}
              </p>
              <input
                type="number"
                name="alchemie"
                data-section="fertigkeiten"
                onChange={(e) => handleChange(e)}
                value={editCharacter.alchemie}
                max={maxPunkteNachHeldengrad}
                min={0}
              />
            </>
          ) : (
            <>
              <p>
                {[
                  attribute.mystik.aktuell +
                    attribute.verstand.aktuell +
                    Number(data.alchemie),
                ]}
              </p>
              <p className="basis">Basis: {data.alchemie}</p>
            </>
          )}
          <div
            className={
              open === "alchemie" ? "description" : "description display-none"
            }
          >
            <p>
              Kessel mit brodelnden Tränken, Schalen voller mysteriöser
              Paraphernalia, exotische Pflanzen und fremdartige Tierteile, die
              Suche nach Gold und dem Trank der Unsterblichkeit – um die
              Alchemie ranken sich viele Legenden. Zugleich Kunst und
              Wissenschaft, ergründet und nutzt die Alchemie seit Jahrhunderten
              die Zusammenhänge der stofflichen Welt. Traditionell beschäftigen
              sich Wissenschaftler und Zauberer mit Alchemie, während manche
              Heiler, Geisterrufer oder Stammesschamanen profunde Kenntnisse
              ihrer Geheimnisse besitzen.
            </p>
            <p>
              Alchemie wird eingesetzt, wenn ein Abenteurer aus verschiedenen
              Zutaten Tränke, Tinkturen und Salben verschiedener Wirkung
              herstellen oder bei ihnen die Wirkung einschätzen will.
            </p>
            <p>Alchemie wird eingesetzt …</p>
            <ul>
              <li>
                wenn der Abenteurer alchemische Produkte wie Pulver, Tränke oder
                Tabletten herstellen will.
              </li>

              <li className="last">
                wenn der Abenteurer besagte alchemische Produkte einschätzen,
                beurteilen und analysieren will.
              </li>
            </ul>
          </div>
          <h3 onClick={() => handleClick("anfuehren")}>Anführen</h3>
          {edit ? (
            <>
              <p>
                {[
                  attribute.ausstrahlung.aktuell +
                    attribute.willenskraft.aktuell +
                    Number(editCharacter.anfuehren),
                ]}
              </p>
              <input
                type="number"
                name="anfuehren"
                data-section="fertigkeiten"
                onChange={(e) => handleChange(e)}
                value={editCharacter.anfuehren}
                max={maxPunkteNachHeldengrad}
                min={0}
              />
            </>
          ) : (
            <>
              <p>
                {[
                  attribute.ausstrahlung.aktuell +
                    attribute.willenskraft.aktuell +
                    Number(data.anfuehren),
                ]}
              </p>
              <p className="basis">Basis: {data.anfuehren}</p>
            </>
          )}
          <div
            className={
              open === "anfuehren" ? "description" : "description display-none"
            }
          >
            <p>
              Ein Adliger, der Vertrauen und Loyalität seiner Vasallen weckt,
              ein Ritter, der brillante Schlachtpläne entwirft und ausführt,
              oder ein Baumeister, der die Arbeit seiner Untergebenen in ein
              Meisterwerk kanalisiert – dies alles sind Beispiele für Anführen.
              Anführen wird verwendet, um Verbündete zu koordinieren und sie in
              anstrengenden und komplexen Situationen zu führen, in denen
              Zusammenarbeit gefragt ist. Dazu entwickelt der Anführer Taktiken,
              um seine Verbündeten effektiv einzusetzen. Auf persönlicher Ebene
              wird die Fertigkeit Anführen zum Einschüchtern verwendet.
            </p>
            <p>Anführen wird eingesetzt …</p>
            <ul>
              <li>
                wenn der Abenteurer Taktik und Strategie kleiner und großer
                Gruppen im Kampf bestimmen will.
              </li>
              <li> wenn der Abenteurer einen Schlachtplan entwerfen will.</li>
              <li>
                wenn der Abenteurer jemanden einschüchtern will. wenn der
                Abenteurer die Moral einer Gruppe stärken will.
              </li>
              <li>
                wenn der Abenteurer Gefährten bei einer Tätigkeit koordinieren
                möchte (siehe S. 104).
              </li>
              <li className="last">
                wenn der Abenteurer eine Rede vor einer Gruppe halten will (es
                sind auch Darbietung und Diplomatie möglich, S. 108 und 109).
              </li>
            </ul>
            <p>Anführen wird nicht eingesetzt …</p>
            <ul>
              <li className="last">
                um eine Gruppe durch die Wildnis zu führen (dies fällt unter
                Überleben, S. 134).
              </li>
            </ul>
          </div>
          <h3 onClick={() => handleClick("arkanekunde")}>Arkane Kunde</h3>
          {edit ? (
            <>
              <p>
                {[
                  attribute.mystik.aktuell +
                    attribute.verstand.aktuell +
                    Number(editCharacter.arkanekunde),
                ]}
              </p>
              <input
                type="number"
                name="arkanekunde"
                data-section="fertigkeiten"
                onChange={(e) => handleChange(e)}
                value={editCharacter.arkanekunde}
                max={maxPunkteNachHeldengrad}
                min={0}
              />
            </>
          ) : (
            <>
              <p>
                {[
                  attribute.mystik.aktuell +
                    attribute.verstand.aktuell +
                    Number(data.arkanekunde),
                ]}
              </p>
              <p className="basis">Basis: {data.arkanekunde}</p>
            </>
          )}
          <div
            className={
              open === "arkanekunde"
                ? "description"
                : "description display-none"
            }
          >
            <p>
              Arkane Kunde umfasst die theoretische Kenntnis von Zaubersprüchen
              und magischen Ritualen. Der Abenteurer kann magische Zeichen
              entziffern und so etwa Rückschlüsse auf einen Ritualkreis ziehen.
              Er kann Zaubersprüche identifizieren, wenn er das Wirken des
              Zaubers oder dessen Effekt beobachten kann. Arkane Kunde umfasst
              auch das Wissen über magische Wesenheiten wie Drachen, Elementare,
              Dämonen, Untote und Konstrukte. Die meisten Magier und Priester
              sind in Arkane Kunde geschult. Gelehrte, Hexenjäger und
              Abenteurer, die sich öfter mit Magie und magischen Wesenheiten
              konfrontiert sehen, verfügen über Kenntnisse in dieser Fertigkeit.
            </p>
            <p>Arkane Kunde wird eingesetzt …</p>
            <ul>
              <li>wenn der Abenteurer magische Phänomene einschätzen will.</li>
              <li>
                wenn der Abenteurer einen wirkenden Zauber oder (mit Hilfe
                entsprechender Meisterschaften) ein Artefakt identifizieren
                will.
              </li>
              <li>
                wenn der Abenteurer einen gerade in Vorbereitung befindlichen
                Zauber identifizieren will (siehe Seite 149).
              </li>
              <li>
                wenn der Abenteurer magische Symbole und Glyphen identifizieren
                will.
              </li>
              <li>
                wenn der Abenteurer eine magische Kreatur erkennen und
                einschätzen will.
              </li>
              <li>
                wenn der Abenteurer zu all diesen Themen recherchieren will.
              </li>
              <li>
                wenn der Abenteurer sich anhand der magischen Ströme in einer
                Feenwelt orientieren will.
              </li>
              <li className="last">
                wenn der Abenteurer einen Strukturgeber (S. 254) auslösen
                möchte.
              </li>
            </ul>
            <p>Arkane Kunde wird nicht eingesetzt …</p>
            <ul>
              <li className="last">
                um zu zaubern (dies fällt unter die Magieschulen, ab S. 200).
              </li>
            </ul>
          </div>
          <h3 onClick={() => handleClick("athletik")}>Athletik</h3>
          {edit ? (
            <>
              <p>
                {[
                  attribute.beweglichkeit.aktuell +
                    attribute.staerke.aktuell +
                    Number(editCharacter.athletik),
                ]}
              </p>
              <input
                type="number"
                name="athletik"
                data-section="fertigkeiten"
                onChange={(e) => handleChange(e)}
                value={editCharacter.athletik}
                max={maxPunkteNachHeldengrad}
                min={0}
              />
            </>
          ) : (
            <>
              <p>
                {[
                  attribute.beweglichkeit.aktuell +
                    attribute.staerke.aktuell +
                    Number(data.athletik),
                ]}
              </p>
              <p className="basis">Basis: {data.athletik}</p>
            </>
          )}
          <div
            className={
              open === "athletik" ? "description" : "description display-none"
            }
          >
            <p>
              Athletik behandelt grundlegende sportliche und körperliche
              Aktivitäten wie etwa Laufen und Springen. Sie ermöglicht es, den
              eigenen Körper richtig einzuschätzen und einzusetzen, mit der
              Kraft hauszuhalten und die beste Leistung aus sich herauszuholen.
              Ein athletischer Abenteurer ist ein guter Läufer, Springer und
              Kletterer, aber Athletik geht darüber hinaus: Die Fertigkeit
              beschreibt zusammen mit den körperlichen Attributen die allgemeine
              körperliche Verfassung, die Fähigkeit, an Sportwettbewerben
              teilzunehmen, einen Kraftakt auszuführen oder einen Flüchtigen
              einzuholen.
            </p>
            <p>
              Daher ist Athletik eine wichtige und verbreitete Fertigkeit, sei
              es beim Fassadenkletterer, der geschmeidig Wände mertalischer
              Villen erklimmt, der Waldläufer, der im Dauerlauf seinem Ziel
              zustrebt, oder der Dschungelalb, der höchste Baumriesen erklimmt.
            </p>
            <p>Athletik wird eingesetzt …</p>
            <ul>
              <li>
                wenn allgemeine sportliche Leistungsfähigkeit gefragt ist, der
                Abenteurer also klettern (siehe S. 107), springen (siehe S.
                107), weit werfen oder laufen möchte.
              </li>
              <li className="last">
                wenn eine körperlich anspruchsvolle Handlung ausgeführt werden
                soll, zum Beispiel ein Gewicht zu stemmen (siehe S. 107).
              </li>
            </ul>
            <p>Athletik wird nicht eingesetzt …</p>
            <ul>
              <li>
                wenn Körperbeherrschung, Koordination und akrobatische
                Fähigkeiten gefragt sind (hier wird Akrobatik verwendet, S.
                100).
              </li>
              <li>
                wenn passiver körperlicher Widerstand oder reine Ausdauer
                benötigt wird (dies fällt unter Zähigkeit, S. 136).
              </li>
              <li>
                wenn sportliche Leistungen erforderlich sind, für die eigene
                Fertigkeiten existieren, speziell Schwimmen (Schwimmen, S. 128)
                und Reiten (Tierführung, S. 133).
              </li>
              <li className="last">
                wenn eine Wurfwaffe im Kampf gezielt geworfen werden soll (dafür
                ist Wurfwaffen nötig, S. 100)
              </li>
            </ul>
          </div>
          <h3 onClick={() => handleClick("darbietung")}>Darbietung</h3>
          {edit ? (
            <>
              <p>
                {[
                  attribute.ausstrahlung.aktuell +
                    attribute.verstand.aktuell +
                    Number(editCharacter.darbietung),
                ]}
              </p>
              <input
                type="number"
                name="darbietung"
                data-section="fertigkeiten"
                onChange={(e) => handleChange(e)}
                value={editCharacter.darbietung}
                max={maxPunkteNachHeldengrad}
                min={0}
              />
            </>
          ) : (
            <>
              <p>
                {[
                  attribute.ausstrahlung.aktuell +
                    attribute.verstand.aktuell +
                    Number(data.darbietung),
                ]}
              </p>
              <p className="basis">Basis: {data.darbietung}</p>
            </>
          )}
          <div
            className={
              open === "darbietung" ? "description" : "description display-none"
            }
          >
            <p>
              Künstlerische Darbietung wird in den meisten Kulturen geschätzt –
              egal, ob es sich um Gesang, Musik, Tanz oder Schauspiel handelt.
              Für Barden, Gaukler und Artisten ist die Fertigkeit Darbietung von
              Bedeutung und auch zur Erziehung von Adligen gehört die Kenntnis
              der schönen Künste.
            </p>
            <p>
              Darbietung kann benutzt werden, um Geld zu verdienen oder um vor
              der Anwendung sozialer Fertigkeiten das Publikum darauf
              vorzubereiten. Nur eine der beiden Möglichkeiten kann mit einer
              Probe verknüpft werden.
            </p>
            <p>
              Die Grundschwierigkeit für eine Darbietung-Probe beträgt 20, wird
              aber von der Einstellung des Publikums (siehe S. 145) modifiziert.
            </p>
            <p>
              Darbietung ist eine Gruppierte Fertigkeit. Ein Abenteurer muss
              daher spezielle Meisterschaften (jeweils für einen einzelnen
              Schwerpunkt) erwerben, um seine Erfolgsgrade voll zu nutzen (siehe
              S. 93).
            </p>
            <p>Darbietung wird eingesetzt …</p>
            <ul>
              <li>
                wenn der Abenteurer eine künstlerische Vorstellung abhält oder
                sich in darstellender Kunst übt.
              </li>
              <li>
                wenn der Abenteurer eine Rede vor Publikum halten will (es sind
                auch Anführen und Diplomatie möglich, S. 103 und 109).
              </li>
              <li>wenn der Abenteurer Aufmerksamkeit auf sich ziehen will.</li>
              <li className="last">
                wenn der Abenteurer verbale Kunststücke vorführen will, zum
                Beispiel Bauchreden oder Stimmenimitation.
              </li>
            </ul>

            <p>Darbietung wird nicht eingesetzt …</p>
            <ul>
              <li className="last">
                wenn der Abenteurer bildende Kunst, zum Beispiel Malerei oder
                Bildhauerei, schaffen möchte (dies fällt unter Edelhandwerk, S.
                111).
              </li>
            </ul>
          </div>
          <h3 onClick={() => handleClick("diplomatie")}>Diplomatie</h3>
          {edit ? (
            <>
              <p>
                {[
                  attribute.ausstrahlung.aktuell +
                    attribute.verstand.aktuell +
                    Number(editCharacter.diplomatie),
                ]}
              </p>
              <input
                type="number"
                name="diplomatie"
                data-section="fertigkeiten"
                onChange={(e) => handleChange(e)}
                value={editCharacter.diplomatie}
                max={maxPunkteNachHeldengrad}
                min={0}
              />
            </>
          ) : (
            <>
              <p>
                {[
                  attribute.ausstrahlung.aktuell +
                    attribute.verstand.aktuell +
                    Number(data.diplomatie),
                ]}
              </p>
              <p className="basis">Basis: {data.diplomatie}</p>
            </>
          )}
          <div
            className={
              open === "diplomatie" ? "description" : "description display-none"
            }
          >
            <p>
              Ein Abenteurer, der in Diplomatie geschult ist, versteht es, sich
              in gehobener Gesellschaft sicher zu bewegen. Er führt gepflegte
              Konversation und weiß, wie er sich in Gesellschaft zu verhalten
              hat, um sich nicht zu blamieren. Er kann die Reaktionen seines
              Umfeldes zu seinen Gunsten beeinflussen, kennt das politische
              Tagesgeschehen und die Feinheiten der Heraldik. Außerdem ist er
              bewandert in der Kunst der Minne.
            </p>
            <p>
              Ein Diplomat beherrscht es außerdem, jemanden mit Logik und
              rhetorischem Geschick zu überzeugen. Er kann seine Fähigkeiten
              einsetzen, um Verträge auszuhandeln oder um die Preise von Waren
              und Dienstleistungen zu feilschen. Diplomaten und Händler sind
              Meister dieser Fertigkeit, Priester benutzen sie, um die Lehren
              ihrer Gottheit zu verbreiten und Anhänger für ihren Glauben zu
              gewinnen.
            </p>
            <p>
              Diplomatie kann zur Recherche eingesetzt werden. Details dazu
              stehen auf den Seiten 149.
            </p>
            <p> Diplomatie wird eingesetzt …</p>
            <ul>
              <li>
                wenn der Abenteurer sich auf höfischem Parkett bewegt und etwas
                über Heraldik, Etikette, Anreden und Verhaltensweisen erfahren
                will.
              </li>
              <li>
                wenn der Abenteurer Verhandlungen führt, zum Beispiel mit einem
                Diplomaten.
              </li>
              <li>
                wenn der Abenteurer jemanden mit höfischer Minnekunst umgarnen
                und verführen will (hier ist auch Redegewandtheit möglich, S.
                126).
              </li>
              <li>
                wenn der Abenteurer politische Zusammenhänge verstehen will.
              </li>
              <li>
                wenn der Abenteurer jemanden zu seinem Glauben bekehren will.
              </li>
              <li>
                wenn der Abenteurer in gehobenem Umfeld nach Informationen sucht
                oder Gerüchte streuen will.
              </li>
              <li>
                wenn der Abenteurer ein Verkaufsgespräch mit einem Händler
                führen und um den Preis einer Ware feilschen will (S. 110; hier
                ist auch Redegewandtheit möglich, S. 126).
              </li>
              <li className="last">
                wenn der Abenteurer eine öffentliche Rede halten will (hier sind
                auch Anführen und Darbietung möglich, S. 103 und 108.)
              </li>
            </ul>
            <p>Diplomatie wird nicht eingesetzt …</p>
            <ul>
              <li>
                wenn der Abenteurer lügen oder schlicht jemanden überreden will
                (dies fällt unter Redegewandtheit, S. 126).
              </li>
              <li className="last">
                wenn der Abenteurer etwas über Verhaltensweisen und Bräuche
                exotischer Völker erfahren will (hierzu wird Länderkunde
                benötigt, S. 123).
              </li>
            </ul>
          </div>
          <h3 onClick={() => handleClick("edelhandwerk")}>Edelhandwerk</h3>
          {edit ? (
            <>
              <p>
                {[
                  attribute.intuition.aktuell +
                    attribute.verstand.aktuell +
                    Number(editCharacter.edelhandwerk),
                ]}
              </p>
              <input
                type="number"
                name="edelhandwerk"
                data-section="fertigkeiten"
                onChange={(e) => handleChange(e)}
                value={editCharacter.edelhandwerk}
                max={maxPunkteNachHeldengrad}
                min={0}
              />
            </>
          ) : (
            <>
              <p>
                {[
                  attribute.intuition.aktuell +
                    attribute.verstand.aktuell +
                    Number(data.edelhandwerk),
                ]}
              </p>
              <p className="basis">Basis: {data.edelhandwerk}</p>
            </>
          )}
          <div
            className={
              open === "edelhandwerk"
                ? "description"
                : "description display-none"
            }
          >
            <p>
              Die Errichtung gewaltiger Kathedralen und trutziger Burgen,
              feinster Edelsteinschnitt, das Malen bedeutender Kunstwerke oder
              die Schaffung gewaltiger Statuen: Edelhandwerk ist eine umfassende
              Fertigkeit, die viele Gebiete abdeckt.
            </p>
            <p>
              Edelhandwerker leben vor allem in den zivilisierten Gegenden von
              Lorakis, dort, wo Kunst und Wissenschaft hoch geachtet werden. Das
              ist aber keine Voraussetzung: Auch in Gegenden fernab der
              Zivilisation mag manch begabter Maler oder fähiger
              Edelsteinschnitzer sein Dasein fristen. Edelhandwerk wird
              verwendet, wann immer ein Abenteurer ein kostbares Diadem
              herstellen (oder einschätzen), ein Kunstwerk schaffen oder die
              Statik eines Gebäudes beurteilen will.
            </p>
            <p>
              Edelhandwerk ist eine Gruppierte Fertigkeit. Ein Abenteurer muss
              daher spezielle Meisterschaften (jeweils für einen einzelnen
              Schwerpunkt) erwerben, um seine Erfolgsgrade voll zu nutzen (siehe
              S. 93).
            </p>
            <p>Edelhandwerk wird eingesetzt …</p>
            <ul>
              <li>
                wenn der Abenteurer ein Kunstwerk der bildenden Künste schaffen
                will, zum Beispiel ein Gemälde oder eine kunstvolle Statue.
              </li>
              <li>
                wenn der Abenteurer ein exotisches Handwerk ausüben will, zum
                Beispiel Kalligraphie, Kartographie oder Architektur.
              </li>
              <li>
                wenn der Abenteurer Dokumente und Siegel fälschen will (siehe S.
                112).
              </li>
              <li className="last">
                wenn der Abenteurer Kunstwerke und entsprechende Produkte
                einschätzen und beurteilen will.
              </li>
            </ul>

            <p>Edelhandwerk wird nicht eingesetzt …</p>
            <ul>
              <li>
                wenn der Abenteurer gewöhnliche Gegenstände herstellen will
                (dies fällt unter Handwerk, S. 117).
              </li>
              <li className="last">
                wenn der Abenteurer alchemistische Produkte herstellen will
                (hier benötigt er Alchemie, S. 103).
              </li>
            </ul>
          </div>
          <h3 onClick={() => handleClick("empathie")}>Empathie</h3>
          {edit ? (
            <>
              <p>
                {[
                  attribute.intuition.aktuell +
                    attribute.verstand.aktuell +
                    Number(editCharacter.empathie),
                ]}
              </p>
              <input
                type="number"
                name="empathie"
                data-section="fertigkeiten"
                onChange={(e) => handleChange(e)}
                value={editCharacter.empathie}
                max={maxPunkteNachHeldengrad}
                min={0}
              />
            </>
          ) : (
            <>
              <p>
                {[
                  attribute.intuition.aktuell +
                    attribute.verstand.aktuell +
                    Number(data.empathie),
                ]}
              </p>
              <p className="basis">Basis: {data.empathie}</p>
            </>
          )}
          <div
            className={
              open === "empathie" ? "description" : "description display-none"
            }
          >
            <p>
              Abenteurer mit einem hohen Wert in Empathie verstehen sich darauf,
              andere Personen einzuschätzen. Durch Gespräche und Beobachtung des
              Verhaltens können sie Schlüsse auf die Persönlichkeit ihres
              Gesprächspartners ziehen. Außerdem hat jemand mit einem guten Wert
              in Empathie bessere Chancen, Lügen zu bemerken.
            </p>
            <p>
              Empathie ist eine nützliche Fertigkeit für viele Abenteurer. Ein
              Adliger, der in der politischen Arena überleben will, kommt ohne
              Kenntnis in Empathie nicht weit, ein Hochstapler findet damit
              leichter mögliche Opfer und ein Inquisitor hat bessere Chancen,
              die Aussagen des Angeklagten zu bewerten.
            </p>
            <p>
              Empathie wird meist als vergleichende Probe eingesetzt, häufig
              gegen die Entschlossenheit oder die Redegewandtheit des Ziels.
              Auch einfache Proben gegen den Geistigen Widerstand kommen oft
              vor. Der Zeitaufwand für eine Probe beträgt fünf Minuten, um den
              Charakter des Zieles einzuschätzen. Eine Lüge kann ebenfalls mit
              einer Probe aufgedeckt werden, nachdem sie ausgesprochen wurde.
              Der Abenteurer muss eine hierfür bestimmte Probe selbst
              einfordern.
            </p>
            <p> Empathie wird eingesetzt …</p>
            <ul>
              <li>
                wenn der Abenteurer jemanden einschätzen, seine Motivation
                erkennen oder eine Lüge durchschauen will.
              </li>
              <li>
                wenn der Abenteurer jemanden sanft beruhigen und trösten will.
              </li>
              <li className="last">
                wenn der Abenteurer jemanden beschwichtigen und zur Ruhe bringen
                möchte.
              </li>
            </ul>

            <p>Empathie wird nicht eingesetzt …</p>
            <ul>
              <li className="last">
                wenn der Abenteurer Überredungs- oder Verführungsversuchen
                widerstehen will (dies fällt unter Entschlossenheit, S. 113).
              </li>
            </ul>
          </div>
          <h3 onClick={() => handleClick("entschlossenheit")}>
            Entschlossenheit
          </h3>
          {edit ? (
            <>
              <p>
                {[
                  attribute.ausstrahlung.aktuell +
                    attribute.willenskraft.aktuell +
                    Number(editCharacter.entschlossenheit),
                ]}
              </p>
              <input
                type="number"
                name="entschlossenheit"
                data-section="fertigkeiten"
                onChange={(e) => handleChange(e)}
                value={editCharacter.entschlossenheit}
                max={maxPunkteNachHeldengrad}
                min={0}
              />
            </>
          ) : (
            <>
              <p>
                {[
                  attribute.ausstrahlung.aktuell +
                    attribute.willenskraft.aktuell +
                    Number(data.entschlossenheit),
                ]}
              </p>
              <p className="basis">Basis: {data.entschlossenheit}</p>
            </>
          )}
          <div
            className={
              open === "entschlossenheit"
                ? "description"
                : "description display-none"
            }
          >
            <p>
              Entschlossenheit hilft einem Abenteurer, geistige Anstrengungen zu
              überstehen. Wenn es darum geht, sich nicht einschüchtern zu
              lassen, das windige Angebot eines Scharlatans auszuschlagen oder
              sich gegen einen Beherrschungszauber zu wehren, ist
              Entschlossenheit hilfreich. Manchmal bedarf es auch eines eisernen
              Willens, um sich einer sehr furchteinflößenden Kreatur
              entgegenzustellen.
            </p>
            <p>
              Aus diesen Gründen ist Entschlossenheit weit verbreitet – sie ist
              etwas, was jeder Abenteurer besitzen sollte, der sich den Gefahren
              von Lorakis stellt.
            </p>
            <p>
              Die Fertigkeit kann in einer vergleichenden Probe gegen
              Redegewandtheit und verschiedene Zaubersprüche eingesetzt werden.
              Andere Herausforderungen haben feste Schwierigkeiten.
            </p>
            <p>
              Wird ein Abenteurer bei dem Versuch, einen Zauber vorzubereiten,
              gestört, kann er eine Probe auf Entschlossenheit ausführen, um
              sich ausreichend auf seine Magie zu konzentrieren und das Sammeln
              des Fokus für den Zauber nicht unterbrechen zu lassen.
            </p>
            <p>Entschlossenheit wird eingesetzt …</p>
            <ul>
              <li>
                wenn der Abenteurer im Angesicht großer Schrecken Ruhe bewahren
                und Mut beweisen will.
              </li>
              <li>
                wenn der Abenteurer sich geistbeeinflussenden Effekten aktiv
                widersetzen will.
              </li>
              <li>
                wenn der Abenteurer einem Versuch, ihn zu überreden,
                einzuschüchtern, zu verwirren oder zu verführen, widerstehen
                will.
              </li>
              <li>
                wenn der Abenteurer trotz widriger Umstände versucht, seinen
                moralischen Prinzipien treu zu bleiben oder Verpflichtungen
                einzuhalten.
              </li>
              <li>
                wenn der Abenteurer einer Unterbrechung während einer
                kontinuierlichen Aktion im Kampf widerstehen möchte.
              </li>
              <li className="last">
                wenn der Geistige Widerstand im Rahmen einer Aktiven Abwehr
                erhöht werden soll (siehe S. 138).
              </li>
            </ul>
            <p>Entschlossenheit wird nicht eingesetzt …</p>
            <ul>
              <li className="last">
                wenn körperlicher statt geistiger Widerstand benötigt wird (dies
                fällt unter Zähigkeit, S. 136).
              </li>
            </ul>
          </div>
          <h3 onClick={() => handleClick("fingerfertigkeit")}>
            Fingerfertigkeit
          </h3>
          {edit ? (
            <>
              <p>
                {[
                  attribute.ausstrahlung.aktuell +
                    attribute.beweglichkeit.aktuell +
                    Number(editCharacter.fingerfertigkeit),
                ]}
              </p>
              <input
                type="number"
                name="fingerfertigkeit"
                data-section="fertigkeiten"
                onChange={(e) => handleChange(e)}
                value={editCharacter.fingerfertigkeit}
                max={maxPunkteNachHeldengrad}
                min={0}
              />
            </>
          ) : (
            <>
              <p>
                {[
                  attribute.ausstrahlung.aktuell +
                    attribute.beweglichkeit.aktuell +
                    Number(data.fingerfertigkeit),
                ]}
              </p>
              <p className="basis">Basis: {data.fingerfertigkeit}</p>
            </>
          )}
          <div
            className={
              open === "fingerfertigkeit"
                ? "description"
                : "description display-none"
            }
          >
            <p>
              Fingerfertigkeit ist eine vielseitige Fertigkeit, die viele
              Anwendungsmöglichkeiten bietet. Ihnen allen ist gemein, dass es
              jeweils nützlich und notwendig ist, eine ruhige Hand und viel
              manuelles Geschick zu besitzen.
            </p>
            <p>
              Taschendiebstahl ist auf den vielen Märkten von Lorakis
              allgegenwärtig und man kann Fingerfertigkeit benutzen, um andere
              zu bestehlen. Ein fingerfertiger Abenteurer kann auch eine Waffe
              vor neugierigen Blicken verbergen, sich aus Fesseln befreien oder
              mit gefährlichen Substanzen umgehen.
            </p>
            <p>
              Fingerfertigkeit wird meist in vergleichenden Proben eingesetzt,
              oft gegen jemandes Wahrnehmung (zum Beispiel beim Verbergen eines
              Gegenstandes).
            </p>
            <p> Fingerfertigkeit wird eingesetzt …</p>
            <ul>
              <li>
                wenn der Abenteurer ein kleines Objekt unbemerkt an sich bringen
                will, egal ob von einer Person oder nicht (siehe S. 116).
              </li>
              <li>
                wenn der Abenteurer ein Objekt verstecken will, ohne dass es
                jemand sieht.
              </li>
              <li>
                wenn der Abenteurer jemanden Fesseln möchte (siehe unten; hier
                ist auch Seefahrt möglich, siehe Seite 130).
              </li>
              <li>
                wenn der Abenteurer sich durch manuelles Geschick aus Fesseln
                befreien will (siehe unten).
              </li>
              <li>
                wenn der Abenteurer kleine Taschenspielertricks vorführen will,
                zum Beispiel Hütchenspiel.
              </li>
              <li>
                wenn der Abenteurer ein Spiel manipulieren, zum Beispiel Würfel
                drehen oder Karten verstecken will.
              </li>
              <li className="last">
                wenn allgemein geschickte und flinke Finger gefordert sind.
              </li>
            </ul>
            <p>Fingerfertigkeit wird nicht eingesetzt …</p>
            <ul>
              <li>
                um Schlösser zu knacken oder Fallen zu entschärfen (dies fällt
                unter Schlösser und Fallen, S. 127).
              </li>
              <li className="last">
                um mit Gaukeleien echte Darbietungen durchzuführen, etwa um
                damit Geld zu verdienen (hierfür ist Darbietung nötig, S. 108)
              </li>
            </ul>
          </div>
          <h3 onClick={() => handleClick("geschichtemythen")}>
            Geschichte & Mythen
          </h3>
          {edit ? (
            <>
              <p>
                {[
                  attribute.mystik.aktuell +
                    attribute.verstand.aktuell +
                    Number(editCharacter.geschichtemythen),
                ]}
              </p>
              <input
                type="number"
                name="geschichtemythen"
                data-section="fertigkeiten"
                onChange={(e) => handleChange(e)}
                value={editCharacter.geschichtemythen}
                max={maxPunkteNachHeldengrad}
                min={0}
              />
            </>
          ) : (
            <>
              <p>
                {[
                  attribute.mystik.aktuell +
                    attribute.verstand.aktuell +
                    Number(data.geschichtemythen),
                ]}
              </p>
              <p className="basis">Basis: {data.geschichtemythen}</p>
            </>
          )}
          <div
            className={
              open === "geschichtemythen"
                ? "description"
                : "description display-none"
            }
          >
            <p>
              Der Abenteurer hat die Geschichte und die Legenden von Lorakis
              studiert. Er kennt die Aufzeichnungen des selenischen
              Kaiserreiches, Historien aus Takasadu oder die mündlichen
              Überlieferungen der Varge, die Versepen Zwingards und die Sagen
              aus Pash Anar. Dieses Wissen beinhaltet die Kenntnis legendärer
              Kreaturen wie Gorgonen oder Lamassu. Außerdem kennt sich ein
              solcher Gelehrter mit den Religionen und Kulten von Lorakis aus.
            </p>
            <p>
              Priester und Gelehrte beherrschen diese Fähigkeit oft,
              insbesondere die Orakelwächter aus Ioria, und viele Barden weisen
              erstaunliches Wissen auf.
            </p>
            <p>
              Geschichte und Mythen wird meist eingesetzt, um Wissen abzufragen
              oder Recherche zu betreiben. Zusätzlich können mit dieser
              Fertigkeit legendäre Kreaturen identifiziert werden (siehe S.
              149).
            </p>
            <p> Geschichte und Mythen wird eingesetzt …</p>
            <ul>
              <li>
                wenn der Abenteurer über die historischen Ereignisse einer
                Region informiert sein will.
              </li>
              <li>
                wenn der Abenteurer Sagen, Legenden, Mythen und Märchen erkennen
                und interpretieren will.
              </li>
              <li>
                wenn der Abenteurer Informationen über bestimmte Sagen- und
                Märchenkreaturen erfahren will.
              </li>
              <li>
                wenn der Abenteurer über Religionen, Kulte und Schöpfungsmythen
                informiert sein will.
              </li>
              <li className="last">
                wenn der Abenteurer zu all jenen Themen recherchieren will.
              </li>
            </ul>
            <p>Geschichte und Mythen wird nicht eingesetzt …</p>
            <ul>
              <li>
                um eine Geschichte zu erzählen (dies fällt unter Darbietung, S.
                108).
              </li>
              <li>
                um fremde Völker und Länder zu kennen (hierzu wird Länderkunde
                benötigt, S. 123).
              </li>
              <li className="last">
                um magische Phänomene zu beurteilen (dies fällt unter Arkane
                Kunde, S. 105).
              </li>
            </ul>
          </div>
          <h3 onClick={() => handleClick("handwerk")}>Handwerk</h3>
          {edit ? (
            <>
              <p>
                {[
                  attribute.konstitution.aktuell +
                    attribute.verstand.aktuell +
                    Number(editCharacter.handwerk),
                ]}
              </p>
              <input
                type="number"
                name="handwerk"
                data-section="fertigkeiten"
                onChange={(e) => handleChange(e)}
                value={editCharacter.handwerk}
                max={maxPunkteNachHeldengrad}
                min={0}
              />
            </>
          ) : (
            <>
              <p>
                {[
                  attribute.konstitution.aktuell +
                    attribute.verstand.aktuell +
                    Number(data.handwerk),
                ]}
              </p>
              <p className="basis">Basis: {data.handwerk}</p>
            </>
          )}
          <div
            className={
              open === "handwerk" ? "description" : "description display-none"
            }
          >
            <p>
              Ein selenischer Tischler, der kostbare Möbel für das Haus eines
              Patriziers fertigt, ein Schneider aus dem mertalischen Städtebund,
              der eine elegante Magierrobe anfertigt, ein Schmied der Furgand,
              der stundenlang am Amboss schuftet, um ein perfektes Axtblatt zu
              fertigen – die Handwerkskunst ist in Lorakis von großer Bedeutung
              und hoch angesehen. Handwerk wird üblicherweise verwendet, um
              Gegenstände herzustellen oder zu reparieren, und kann auch dazu
              dienen, um die Qualität von Materialien oder Produkten
              einzuschätzen. Alle Angaben zur Herstellung von Gegenständen
              finden Sie im Abschnitt zur Herstellung ab S. 143.
            </p>
            <p>
              Die Fertigkeit Handwerk ist eine Gruppierte Fertigkeit, die ein
              breites Feld der profanen Handwerkskunst abbildet. Ein Abenteurer
              muss daher bestimmte Meisterschaften (Geselle, Fachmann, Meister)
              in einem bestimmten Schwerpunkt wählen, um auf seine vollen
              Erfolgsgrade zurückzugreifen (siehe S. 93). Die üblichen
              Schwerpunkte sind im Buch beschrieben, weitere sind je nach
              Maßgabe des Spielleiters möglich.
            </p>
            <p>Handwerk wird eingesetzt …</p>
            <ul>
              <li>
                wenn der Abenteurer Gebrauchsgegenstände aus Metall, Holz,
                Stein, Stoff oder Leder herstellen oder reparieren will.
              </li>
              <li className="last">
                wenn der Abenteurer besagte Gegenstände einschätzen und bewerten
                will.
              </li>
            </ul>
            <p>Handwerk wird nicht eingesetzt …</p>
            <ul>
              <li className="last">
                um Kunstobjekte herzustellen oder exotisches Handwerk auszuüben
                (dies fällt unter Edelhandwerk, S. 111).
              </li>
            </ul>
          </div>
          <h3 onClick={() => handleClick("heilkunde")}>Heilkunde</h3>
          {edit ? (
            <>
              <p>
                {[
                  attribute.intuition.aktuell +
                    attribute.verstand.aktuell +
                    Number(editCharacter.heilkunde),
                ]}
              </p>
              <input
                type="number"
                name="heilkunde"
                data-section="fertigkeiten"
                onChange={(e) => handleChange(e)}
                value={editCharacter.heilkunde}
                max={maxPunkteNachHeldengrad}
                min={0}
              />
            </>
          ) : (
            <>
              <p>
                {[
                  attribute.intuition.aktuell +
                    attribute.verstand.aktuell +
                    Number(data.heilkunde),
                ]}
              </p>
              <p className="basis">Basis: {data.heilkunde}</p>
            </>
          )}
          <div
            className={
              open === "heilkunde" ? "description" : "description display-none"
            }
          >
            <p>
              Gefährliche Situationen sind Teil eines jeden Abenteurerlebens,
              seien es bewaffnete Auseinandersetzungen, gewagte Kletterpartien
              oder andere riskante Unterfangen. Verletzungen, Vergiftungen oder
              die Ansteckung mit tödlichen Krankheiten lassen sich daher auf
              Dauer kaum vermeiden. Um all dies zu überleben bedarf es oftmals
              der Hilfe fachkundiger Heiler.
            </p>
            <p>
              Details, wie Heilkunde eingesetzt wird, um Patienten zu versorgen
              oder Diagnosen zu stellen, finden Sie auf S. 139.
            </p>
            <p> Heilkunde wird eingesetzt …</p>
            <ul>
              <li>
                wenn der Abenteurer eine Krankheit oder ein Gift erkennen oder
                eine Wunde einschätzen will, auch bei verstorbenen Lebewesen.
              </li>
              <li>
                wenn der Abenteurer Krankheiten, Gifte oder Wunden behandeln
                will.
              </li>
              <li>
                wenn der Heiler bestimmte Zustände wie etwa Sterbend behandeln
                möchte.
              </li>
              <li className="last">
                wenn der Abenteurer Heilkräuter bestimmen will (hier ist auch
                Naturkunde möglich).
              </li>
            </ul>
          </div>
          <h3 onClick={() => handleClick("heimlichkeit")}>Heimlichkeit</h3>
          {edit ? (
            <>
              <p>
                {[
                  attribute.beweglichkeit.aktuell +
                    attribute.intuition.aktuell +
                    Number(editCharacter.heimlichkeit),
                ]}
              </p>
              <input
                type="number"
                name="heimlichkeit"
                data-section="fertigkeiten"
                onChange={(e) => handleChange(e)}
                value={editCharacter.heimlichkeit}
                max={maxPunkteNachHeldengrad}
                min={0}
              />
            </>
          ) : (
            <>
              <p>
                {[
                  attribute.beweglichkeit.aktuell +
                    attribute.intuition.aktuell +
                    Number(data.heimlichkeit),
                ]}
              </p>
              <p className="basis">Basis: {data.heimlichkeit}</p>
            </>
          )}
          <div
            className={
              open === "heimlichkeit"
                ? "description"
                : "description display-none"
            }
          >
            <p>
              Mit der Fertigkeit Heimlichkeit versucht ein Abenteurer unbemerkt
              zu bleiben, sei es, dass er sich lautlos bewegt, im Schatten
              verschwindet oder einfach in einer Menschenmenge untertaucht.
              Heimlichkeit ist eine Fertigkeit für viele Abenteurer, da sie für
              den Schurken in einer belebten Stadt ebenso nützlich ist wie für
              den Waldläufer, der sich an eine Beute anschleichen oder einen
              Hinterhalt legen will. Manchmal kann es für einen tapferen Kämpfer
              klüger sein, sich an einem schlafenden Drachen vorbei zu
              schleichen, anstatt mit einem Kampfschrei vorzustürmen.
            </p>
            <p>
              Heimlichkeit wird üblicherweise als vergleichende Probe gegen
              Wahrnehmung gewürfelt.
            </p>
            <p>Heimlichkeit wird eingesetzt …</p>
            <ul>
              <li>wenn der Abenteurer sich lautlos bewegen will.</li>
              <li>wenn der Abenteurer sich verstecken will.</li>
              <li>wenn der Abenteurer einen Hinterhalt vorbereiten will.</li>
              <li>
                wenn der Abenteurer ungesehen eine Person beschatten will (siehe
                S. 121).
              </li>
              <li className="last">
                wenn der Abenteurer seine Spuren verwischen möchte, um nicht so
                leicht verfolgt zu werden (hier ist auch Überleben möglich, S.
                134).
              </li>
            </ul>
            <p>Heimlichkeit wird nicht eingesetzt …</p>
            <ul>
              <li>
                um kleine Gegenstände schnell in der Hand zu verbergen (dies
                fällt unter Fingerfertigkeit, S. 114).
              </li>
              <li>
                um heimliche Personen zu bemerken (dies fällt unter Wahrnehmung,
                S. 135).
              </li>
              <li className="last">
                um sich zu verkleiden (hier ist Redegewandtheit notwendig, S.
                126).
              </li>
            </ul>
          </div>
          <h3 onClick={() => handleClick("jagtkunst")}>Jagdkunst</h3>
          {edit ? (
            <>
              <p>
                {[
                  attribute.konstitution.aktuell +
                    attribute.verstand.aktuell +
                    Number(editCharacter.jagdkunst),
                ]}
              </p>
              <input
                type="number"
                name="jagdkunst"
                data-section="fertigkeiten"
                onChange={(e) => handleChange(e)}
                value={editCharacter.jagdkunst}
                max={maxPunkteNachHeldengrad}
                min={0}
              />
            </>
          ) : (
            <>
              <p>
                {[
                  attribute.konstitution.aktuell +
                    attribute.verstand.aktuell +
                    Number(data.jagdkunst),
                ]}
              </p>
              <p className="basis">Basis: {data.jagdkunst}</p>
            </>
          )}
          <div
            className={
              open === "jagtkunst" ? "description" : "description display-none"
            }
          >
            <p>
              In vielen zivilisierten Regionen von Lorakis sind Feldwirtschaft
              und Tierhaltung die wichtigsten Quellen für Nahrung und Rohstoffe
              wie Pergament, Bogensehnen oder Kleidung. All jene aber, die
              fernab der Zivilisation wohnen, die weite Wildnis bereisen oder
              den Nervenkitzel suchen, gehen auf die Jagd. Die Fertigkeit
              Jagdkunst umfasst die Aufgaben, die ein Jäger beherrschen muss, um
              ein Tier zu erlegen. Das Finden und Verfolgen von Spuren, das
              Stellen von Fallen und grundlegende Kenntnis über die verwundbaren
              Stellen üblichen Jagdwildes werden alle von dieser Fertigkeit
              abgedeckt. Jagdkunst ist nicht alles, was ein Jäger prinzipiell
              benötigt, gerade für die Pirschjagd ist Heimlichkeit (S. 120)
              wichtig und die meisten Jäger wissen so viel über die Tierwelt,
              dass sie eine herausragende Naturkunde besitzen, aber wann immer
              es darum geht, Wild aufzuspüren oder die Spur eines flüchtigen
              Wilderers zu verfolgen, ist Jagdkunst gefragt. Jäger und
              Wildniskundige glänzen auf diesem Gebiet, mancher Adliger genießt
              die Jagd als Zeitvertreib und Kopfgeldjäger kennen sich meist im
              Spurenlesen aus. Jagdkunst kommt zum Einsatz, wenn eine Falle in
              der Natur errichtet werden soll. Komplexe, gut getarnte
              mechanische Fallen in Bauwerken werden von Schlösser und Fallen
              umfasst.
            </p>
            <p>
              Proben auf Jagdkunst sind meist einfache Proben (z.B. bei der
              Nahrungssuche) oder vergleichende Proben (z.B. gegen die
              Wahrnehmung eines Tieres beim Stellen einer Falle).
            </p>
            <p> Jagdkunst wird eingesetzt …</p>
            <ul>
              <li>
                wenn der Abenteurer gewöhnliche Beutetiere schießen, ihnen per
                Fallen nachstellen oder Fische fangen, also Nahrung erjagen will
                (siehe S. 122; bei Fischfang ist auch Seefahrt möglich, S. 130).
              </li>
              <li>
                wenn der Abenteurer Beute von gewöhnlichen Tieren oder Monstern,
                wie etwa Fell oder Leder, verarbeiten möchte.
              </li>
              <li>
                wenn der Abenteurer ein Tier (Typus Tier) erkennen will (es ist
                auch Naturkunde möglich, S. 124).
              </li>
              <li>
                wenn der Abenteurer eine Spur finden oder sie identifizieren
                will (siehe S. 149).
              </li>
              <li className="last">
                wenn der Abenteurer eine Spur verfolgen will.
              </li>
            </ul>

            <p>Jagdkunst wird nicht eingesetzt …</p>
            <ul>
              <li>
                um mechanische Fallen in Bauwerken zu errichten (dies fällt
                unter Schlösser und Fallen, S. 127).
              </li>
              <li className="last">
                um große, gefährliche Bestien zur Strecke zu bringen (dies
                erfordert üblicherweise einen Kampf).
              </li>
            </ul>
          </div>
          <h3 onClick={() => handleClick("laenderkunde")}>Länderkunde</h3>
          {edit ? (
            <>
              <p>
                {[
                  attribute.intuition.aktuell +
                    attribute.verstand.aktuell +
                    Number(editCharacter.laenderkunde),
                ]}
              </p>
              <input
                type="number"
                name="laenderkunde"
                data-section="fertigkeiten"
                onChange={(e) => handleChange(e)}
                value={editCharacter.laenderkunde}
                max={maxPunkteNachHeldengrad}
                min={0}
              />
            </>
          ) : (
            <>
              <p>
                {[
                  attribute.intuition.aktuell +
                    attribute.verstand.aktuell +
                    Number(data.laenderkunde),
                ]}
              </p>
              <p className="basis">Basis: {data.laenderkunde}</p>
            </>
          )}
          <div
            className={
              open === "laenderkunde"
                ? "description"
                : "description display-none"
            }
          >
            <p>
              Die Fertigkeit Länderkunde deckt verschiedene Wissensbereiche ab.
              Sie umfasst Kenntnis über Länder, Völker und Kulturen von Lorakis,
              über Philosophie und Recht. Länderkunde ist daher eine Fertigkeit,
              die eher in den zivilisierten Gebieten von Lorakis üblich ist.
              Gelehrte, Priester und Magier verfügen meist über diese
              Fertigkeit, doch auch manch ein Spielmann hat auf seinen Reisen
              Kenntnisse in dieser Fertigkeit gewonnen.
            </p>
            <p>
              Länderkunde wird meist eingesetzt, wenn es darum geht, Wissen
              abzufragen oder Recherche zu betreiben.
            </p>
            <p> Länderkunde wird eingesetzt …</p>
            <ul>
              <li>
                wenn der Abenteurer etwas zu Gebräuchen und Verhaltensweisen
                fremder Völker erfahren will.
              </li>
              <li>
                wenn der Abenteurer etwas über die Geographie und Topographie
                auf Lorakis wissen möchte.
              </li>
              <li>
                wenn der Abenteurer sich mit Recht und Gesetz einer Region
                beschäftigen will.
              </li>
              <li>
                wenn allgemeines Wissen über kulturelle, philosophische und
                soziale Belange gefordert ist.
              </li>
              <li className="last">
                wenn der Abenteurer zu all diesen Themen recherchieren will
                (siehe S. 149).
              </li>
            </ul>
            <p>Länderkunde wird nicht eingesetzt …</p>
            <ul>
              <li>
                um über historische Ereignisse informiert zu sein (dies fällt
                unter Geschichte und Mythen, S. 116).
              </li>
              <li className="last">
                um Feinheiten von Politik und Intrigen zu kennen (hierfür wird
                Diplomatie benötigt, S. 109).
              </li>
            </ul>
          </div>
          <h3 onClick={() => handleClick("naturkunde")}>Naturkunde</h3>
          {edit ? (
            <>
              <p>
                {[
                  attribute.intuition.aktuell +
                    attribute.verstand.aktuell +
                    Number(editCharacter.naturkunde),
                ]}
              </p>
              <input
                type="number"
                name="naturkunde"
                data-section="fertigkeiten"
                onChange={(e) => handleChange(e)}
                value={editCharacter.naturkunde}
                max={maxPunkteNachHeldengrad}
                min={0}
              />
            </>
          ) : (
            <>
              <p>
                {[
                  attribute.intuition.aktuell +
                    attribute.verstand.aktuell +
                    Number(data.naturkunde),
                ]}
              </p>
              <p className="basis">Basis: {data.naturkunde}</p>
            </>
          )}
          <div
            className={
              open === "naturkunde" ? "description" : "description display-none"
            }
          >
            <p>
              Welche Pflanze verwendet man, um eine Blutung zu stillen? Wenn das
              Alphatier tot ist, wird sich das Wolfsrudel dann zurückziehen?
              Halten Geisterwölfe Winterschlaf? All diese Fragen beantwortet die
              Naturkunde.
            </p>
            <p>
              Naturkunde ist das Wissen über die Natur, wer sie beherrscht,
              kennt Tierarten und Pflanzenwirkungen in der Theorie und kann das
              Wissen anwenden. Dementsprechend gibt es Naturkunde nicht nur bei
              den Wissenschaftlern in ihren Studierstuben, sondern auch bei
              Jägern, Kundschaftern und Heilern, für die das Wissen um Tiere und
              Pflanzen nützlich, interessant und in vielen Fällen auch
              überlebenswichtig ist.
            </p>
            <p>
              Naturkunde wird oft zum Identifizieren von Tieren und Pflanzen
              eingesetzt (siehe S. 149). Neben der theoretischen Anwendung kann
              sie beim Sammeln von Kräutern und Nahrung praktisch sein.
            </p>
            <p> Naturkunde wird eingesetzt …</p>
            <ul>
              <li>
                wenn der Abenteurer ein Tier (Typus Tier) oder eine Pflanze
                erkennen will (bei Heilpflanzen ist auch Heilkunde möglich,
                siehe S. 119).
              </li>
              <li>
                wenn der Abenteurer Nahrung, Kräuter oder alchemistische Zutaten
                sammeln will (siehe S. 125).
              </li>
              <li>
                wenn der Abenteurer ein Sternbild bestimmen oder sich mit
                anderen Himmelsphänomenen beschäftigen will.
              </li>
              <li>
                wenn der Abenteurer das Wetter vorhersagen will (hier ist auch
                Überleben möglich, S. 134).
              </li>
              <li className="last">
                wenn allgemeines Wissen über die Gestalt der Natur gefordert
                ist, also auch Wissen über Gesteine, Landschaftsformationen und
                ähnliches.
              </li>
            </ul>
            <p>Naturkunde wird nicht eingesetzt …</p>
            <ul>
              <li>um zu jagen (dies fällt unter Jagdkunst, S. 121).</li>
              <li className="last">
                um ein Tier zu beruhigen oder zu dressieren (hierzu ist
                Tierführung nötig, S. 133).
              </li>
            </ul>
          </div>
          <h3 onClick={() => handleClick("redegewandtheit")}>
            Redegewandtheit
          </h3>
          {edit ? (
            <>
              <p>
                {[
                  attribute.ausstrahlung.aktuell +
                    attribute.willenskraft.aktuell +
                    Number(editCharacter.redegewandtheit),
                ]}
              </p>
              <input
                type="number"
                name="redegewandtheit"
                data-section="fertigkeiten"
                onChange={(e) => handleChange(e)}
                value={editCharacter.redegewandtheit}
                max={maxPunkteNachHeldengrad}
                min={0}
              />
            </>
          ) : (
            <>
              <p>
                {[
                  attribute.ausstrahlung.aktuell +
                    attribute.willenskraft.aktuell +
                    Number(data.redegewandtheit),
                ]}
              </p>
              <p className="basis">Basis: {data.redegewandtheit}</p>
            </>
          )}
          <div
            className={
              open === "redegewandtheit"
                ? "description"
                : "description display-none"
            }
          >
            <p>
              Redegewandtheit ist die Fertigkeit der Hochstapler, Verführer und
              aller Personen, die mithilfe von Halbwahrheiten und Versprechungen
              ihr Ziel erreichen wollen. Redegewandtheit umfasst direkte Lüge
              und die Kunst, sein Opfer durch Halbwahrheiten und schnelles
              Zureden über den Tisch zu ziehen. Redegewandtheit umfasst auch die
              Fähigkeit, sich mit Schminke und Kostümen zu verkleiden.
            </p>
            <p>
              Redegewandtheit wird meist als einfache Probe (gegen den Geistigen
              Widerstand) oder als vergleichende Probe (gegen Empathie)
              eingesetzt.
            </p>
            <p> Redegewandtheit wird eingesetzt …</p>
            <ul>
              <li>wenn der Abenteurer jemanden belügen will.</li>
              <li>
                wenn der Abenteurer jemanden durch Argumente oder schnelles
                Zureden zu etwas überreden will.
              </li>
              <li>
                wenn der Abenteurer sich verkleiden oder eine andere Person
                imitieren will.
              </li>
              <li>
                wenn der Abenteurer jemanden umgarnen und verführen will (hier
                ist unter gewissen Umständen auch Diplomatie möglich, S. 109).
              </li>
              <li className="last">
                wenn der Abenteurer ein Verkaufsgespräch mit einem Händler
                führen und um den Preis einer Ware feilschen will (S. 110; hier
                ist auch Diplomatie möglich, S. 109).
              </li>
            </ul>
            <p>Redegewandtheit wird nicht eingesetzt …</p>
            <ul>
              <li>
                um eine Rede zu halten (dies fällt unter Anführen, S. 103,
                Darbietung, S. 108, oder Diplomatie, S. 109).
              </li>
              <li className="last">
                um jemanden dauerhaft umzustimmen oder zu bekehren (dazu ist
                Diplomatie nötig, S. 109).
              </li>
            </ul>
          </div>
          <h3 onClick={() => handleClick("schloesserfallen")}>
            Schlösser & Fallen
          </h3>
          {edit ? (
            <>
              <p>
                {[
                  attribute.intuition.aktuell +
                    attribute.beweglichkeit.aktuell +
                    Number(editCharacter.schloesserfallen),
                ]}
              </p>
              <input
                type="number"
                name="schloesserfallen"
                data-section="fertigkeiten"
                onChange={(e) => handleChange(e)}
                value={editCharacter.schloesserfallen}
                max={maxPunkteNachHeldengrad}
                min={0}
              />
            </>
          ) : (
            <>
              <p>
                {[
                  attribute.intuition.aktuell +
                    attribute.beweglichkeit.aktuell +
                    Number(data.schloesserfallen),
                ]}
              </p>
              <p className="basis">Basis: {data.schloesserfallen}</p>
            </>
          )}
          <div
            className={
              open === "schloesserfallen"
                ? "description"
                : "description display-none"
            }
          >
            <p>
              Um sicher Schlösser zu öffnen oder Fallen zu entschärfen, bedarf
              es geschickter Finger und des richtigen Gespürs. Mithilfe dieser
              Fertigkeit kann ein Abenteurer Schlösser aller Art öffnen, sei es
              das einfache Vorhängeschloss einer Truhe oder das zwergische
              Meisterwerk, das eine Schatzkammer versiegelt. Wichtig sind
              hierbei das richtige Werkzeug und die entsprechende Erfahrung,
              sonst kann so ein Versuch böse enden: Nicht nur kann der
              Abenteurer erwischt werden, einige Schlösser sind zudem mit
              hinterlistigen Fallen gesichert, die ein ungeschickter
              Möchtegern-Einbrecher versehentlich auslösen kann.
            </p>
            <p>
              Auch bei Fallen kommt diese Fertigkeit zum Einsatz. Mit ihr kann
              ein Abenteurer Fallen ausfindig machen und sie entschärfen. Dies
              gilt sowohl für kleine Fallen, die ein Schloss sichern, als auch
              für geschickte Konstruktionen, die einen ganzen Raum betreffen.
            </p>
            <p>Schlösser und Fallen wird eingesetzt …</p>
            <ul>
              <li>
                wenn der Abenteurer ein Schloss einschätzen und knacken will.
              </li>
              <li>
                wenn der Abenteurer eine Falle entdecken und unschädlich machen
                will (siehe S. 128).
              </li>
              <li>
                wenn der Abenteurer eine mechanische Falle innerhalb eines
                Bauwerks errichten will.
              </li>
              <li>
                wenn allgemeine (fein-)mechanische Kenntnisse gefragt sind.
              </li>
              <li className="last">
                wenn tiefgehende theoretische Kenntnisse der Mathematik (etwa im
                Bereich der Geometrie) benötigt werden.
              </li>
            </ul>
            <p>Schlösser und Fallen wird nicht eingesetzt …</p>
            <ul>
              <li className="last">
                um Fallen zur Jagd in der Natur aufzustellen (dies fällt unter
                Jagdkunst, S. 121).
              </li>
            </ul>
          </div>
          <h3 onClick={() => handleClick("schwimmen")}>Schwimmen</h3>
          {edit ? (
            <>
              <p>
                {[
                  attribute.staerke.aktuell +
                    attribute.konstitution.aktuell +
                    Number(editCharacter.schwimmen),
                ]}
              </p>
              <input
                type="number"
                name="schwimmen"
                data-section="fertigkeiten"
                onChange={(e) => handleChange(e)}
                value={editCharacter.schwimmen}
                max={maxPunkteNachHeldengrad}
                min={0}
              />
            </>
          ) : (
            <>
              <p>
                {[
                  attribute.staerke.aktuell +
                    attribute.konstitution.aktuell +
                    Number(data.schwimmen),
                ]}
              </p>
              <p className="basis">Basis: {data.schwimmen}</p>
            </>
          )}
          <div
            className={
              open === "schwimmen" ? "description" : "description display-none"
            }
          >
            <p>
              Meere, Seen und Flüsse bestimmen das Bild von Lorakis, sodass es
              nicht verwundert, dass in vielen Kulturräumen die Kunst zu
              schwimmen verbreitet ist. Selten wird es als reines Vergnügen
              angesehen, häufiger ist es Teil der Arbeit oder des alltäglichen
              Lebens: Perlentaucher von Mahaluu und fleckengnomische
              Speerfischer beherrschen es und natürlich lernen die Kinder des
              albischen Seebundes schon in jungen Jahren schwimmen.
            </p>
            <p>
              Schwimmen umfasst Schwimmen und Tauchen. Über diese Fertigkeit ist
              es auch möglich, Atemtechniken zu erlernen, die es ermöglichen,
              erstaunlich lange ohne Luft auszukommen – eine Fähigkeit, die auch
              außerhalb des Wassers von Bedeutung sein kann. Schwimmen kann als
              einfache Probe abgelegt werden und als vergleichende Probe (wenn
              es um ein Wettschwimmen geht) oder als eine erweiterte Probe (beim
              Tauchen).
            </p>
            <p>Schwimmen wird eingesetzt …</p>
            <ul>
              <li>
                wenn der Abenteurer Wasser treten, eine Strecke schwimmend
                zurücklegen oder tauchen will (siehe unten).
              </li>
              <li>
                wenn der Abenteurer im oder gar unter Wasser effektiv kämpfen
                möchte.
              </li>
              <li className="last">
                wenn der Abenteurer die Luft anhalten möchte (hier ist auch
                Zähigkeit möglich, S. 136).
              </li>
            </ul>
            <p>Schwimmen wird nicht eingesetzt …</p>
            <ul>
              <li className="last">
                um ein Boot zu steuern oder zu fischen (dies fällt unter
                Seefahrt, S. 130).
              </li>
            </ul>
          </div>
          <h3 onClick={() => handleClick("seefahrt")}>Seefahrt</h3>
          {edit ? (
            <>
              <p>
                {[
                  attribute.beweglichkeit.aktuell +
                    attribute.konstitution.aktuell +
                    Number(editCharacter.seefahrt),
                ]}
              </p>
              <input
                type="number"
                name="seefahrt"
                data-section="fertigkeiten"
                onChange={(e) => handleChange(e)}
                value={editCharacter.seefahrt}
                max={maxPunkteNachHeldengrad}
                min={0}
              />
            </>
          ) : (
            <>
              <p>
                {[
                  attribute.beweglichkeit.aktuell +
                    attribute.konstitution.aktuell +
                    Number(data.seefahrt),
                ]}
              </p>
              <p className="basis">Basis: {data.seefahrt}</p>
            </>
          )}
          <div
            className={
              open === "seefahrt" ? "description" : "description display-none"
            }
          >
            <p>
              Auf den Weltmeeren, großen Seen und Flüssen sieht man tagtäglich
              verschiedenste Boote und Schiffe. Fischerjollen, Kriegsgaleeren
              und albische Mehrrumpfsegler bieten für Lorakier aller Rassen eine
              Lebensgrundlage und eine Stadt mit florierendem Hafen schaut fast
              immer einer reichen Zukunft entgegen.
            </p>
            <p>
              Seefahrt stellt die Fähigkeit dar, Wasserfahrzeuge zu steuern und
              alle notwendigen Handgriffe an Bord zu tätigen, sei es das
              Ausloten der Tiefe oder das Vertäuen von Takelage und Ladung.
            </p>
            <p>
              Seefahrt findet man demnach bei denen, die auf oder am Wasser
              einen Großteil ihres Lebens verbringen: Piraten, Seehändler,
              Fischer oder schneidige Seesoldaten jener Reiche, die eine Flotte
              unterhalten. Seefahrt ist vor allem dann relevant, wenn es gilt,
              Hindernisse zu umschiffen und ein Schiff unter widrigen Umständen
              oder mit besonderer Leistung zu koordinieren.
            </p>
            <p> Seefahrt wird eingesetzt …</p>
            <ul>
              <li>
                wenn der Abenteurer ein Boot steuern oder fahren möchte (siehe
                S. 131).
              </li>
              <li>
                wenn der Abenteurer Arbeiten auf einem großen Segel- oder
                Ruderschiff ausführen will.
              </li>
              <li>
                wenn der Abenteurer eine Besatzung anleiten und koordinieren
                will (hier ist auch Anführen möglich, Seite 103).
              </li>
              <li>
                wenn der Abenteurer einen Kurs planen oder mit Hilfsmitteln und
                den Sternen navigieren will (hier ist auch Naturkunde möglich,
                S. 124).
              </li>
              <li>
                wenn der Abenteurer Fische oder andere Wassertiere fangen und so
                Nahrung erhalten möchte (siehe S. 131; hier ist auch Jagdkunst
                möglich, S. 121).
              </li>
              <li className="last">
                wenn der Abenteurer jemanden Fesseln möchte (hier ist auch
                Fingerfertigkeit möglich, S. 115).
              </li>
            </ul>
            <p>Seefahrt wird nicht eingesetzt …</p>
            <ul>
              <li>
                um sich an Land zu orientieren (dies fällt unter Überleben, S.
                134).
              </li>
              <li className="last">
                um sich aus Fesseln zu befreien (dies fällt unter
                Fingerfertigkeit oder Akrobatik, S. 115).
              </li>
            </ul>
          </div>
          <h3 onClick={() => handleClick("strassenkunde")}>Straßenkunde</h3>
          {edit ? (
            <>
              <p>
                {[
                  attribute.ausstrahlung.aktuell +
                    attribute.intuition.aktuell +
                    Number(editCharacter.strassenkunde),
                ]}
              </p>
              <input
                type="number"
                name="strassenkunde"
                data-section="fertigkeiten"
                onChange={(e) => handleChange(e)}
                value={editCharacter.strassenkunde}
                max={maxPunkteNachHeldengrad}
                min={0}
              />
            </>
          ) : (
            <>
              <p>
                {[
                  attribute.ausstrahlung.aktuell +
                    attribute.intuition.aktuell +
                    Number(data.strassenkunde),
                ]}
              </p>
              <p className="basis">Basis: {data.strassenkunde}</p>
            </>
          )}
          <div
            className={
              open === "strassenkunde"
                ? "description"
                : "description display-none"
            }
          >
            <p>
              Wo befindet sich die nächste günstige Herberge? Wann wechseln die
              Wachen am Nordtor die Schicht? Worüber unterhalten sich die Diebe
              der Stadt?
            </p>
            <p>
              Straßenkunde hilft dem Abenteurer, in einer Stadt zurechtzukommen
              und dort zu finden, was er sucht. Diese Fertigkeit kann genutzt
              werden, um den Weg durch eine wenig bekannte Stadt zu finden oder
              bestimmte Personen aufzuspüren.
            </p>
            <p>
              Ein Gauner kann Straßenkunde verwenden, um einen Käufer für
              Diebesgut zu finden oder um illegale Waren zu erwerben, während
              ein ehrwürdiger Priester seine Stadt vielleicht so gut kennt, dass
              er weiß, welche Gegend er nachts besser meiden sollte.
            </p>
            <p>
              Zudem kann die Fertigkeit benutzt werden, um Gerüchte und
              Informationen auf der Straße zu sammeln. Näheres hierzu finden Sie
              unter „Recherche und Untersuchungen“ auf S. 149.
            </p>
            <p>
              Ein Abenteurer wird mithilfe einer gelungenen Probe auf
              Straßenkunde keinen flüchtigen Dieb finden oder einen Mord
              aufklären. Er kann aber Hinweise erlangen, die ihn in einer
              bestimmten Gegend suchen lassen oder ihm einen Bonus für die
              Redegewandtheit-Probe gegen den verdächtigen Wirt einer üblen
              Schänke verleihen.
            </p>
            <p>Straßenkunde wird eingesetzt …</p>
            <ul>
              <li>
                wenn sich der Abenteurer in einer Stadt zurechtfinden will.
              </li>
              <li>
                wenn der Abenteurer auf der Straße und in zwielichtigen
                Umgebungen Gerüchte und Informationen aufschnappen will.
              </li>
              <li>
                wenn der Abenteurer auf der Straße ein Gerücht streuen will.
              </li>
              <li>
                wenn der Abenteurer einen Ort sucht, zum Beispiel eine geeignete
                Unterkunft oder den Tempel einer bestimmten Gottheit.
              </li>
              <li>
                wenn der Abenteurer einen Tatort untersuchen und ein Verbrechen
                identifizieren will.
              </li>
              <li className="last">
                wenn der Abenteurer illegale Geschäfte tätigen will, zum
                Beispiel auf dem Schwarzmarkt.
              </li>
            </ul>
            <p>Straßenkunde wird nicht eingesetzt …</p>
            <ul>
              <li className="last">
                um Informationen und Gerüchte in gehobener Gesellschaft zu
                erfahren (dies fällt unter Diplomatie, S. 109).
              </li>
            </ul>
          </div>
          <h3 onClick={() => handleClick("tierfuehrung")}>Tierführung</h3>
          {edit ? (
            <>
              <p>
                {[
                  attribute.ausstrahlung.aktuell +
                    attribute.beweglichkeit.aktuell +
                    Number(editCharacter.tierfuehrung),
                ]}
              </p>
              <input
                type="number"
                name="tierfuehrung"
                data-section="fertigkeiten"
                onChange={(e) => handleChange(e)}
                value={editCharacter.tierfuehrung}
                max={maxPunkteNachHeldengrad}
                min={0}
              />
            </>
          ) : (
            <>
              <p>
                {[
                  attribute.ausstrahlung.aktuell +
                    attribute.beweglichkeit.aktuell +
                    Number(data.tierfuehrung),
                ]}
              </p>
              <p className="basis">Basis: {data.tierfuehrung}</p>
            </>
          )}
          <div
            className={
              open === "tierfuehrung"
                ? "description"
                : "description display-none"
            }
          >
            <p>
              Tiere aller Arten und Größen sind ein wichtiger Teil des
              lorakischen Lebens. Vom Pferd eines Botenreiters über die
              Fischervögel der Stromlandinseln hin zum dressierten Affen eines
              reisenden Musikanten bereichern sie den Alltag in allerlei
              Situationen. Tierführung ist die Fertigkeit, die jeglichen Umgang
              mit nicht vernunftbegabten Tieren darstellt, unabhängig davon, ob
              es sich um den Zuchtbullen eines Bauern oder die Flederkatze eines
              Andaraifalkners handelt.
            </p>
            <p>
              Tierführung findet man bei all jenen, die sich mit Tieren
              beschäftigen, um ihren Lebensunterhalt zu verdienen. Dies kann ein
              fürstlicher Stallmeister, ein Dompteur eines Wanderzirkusses oder
              ein Jäger sein, der sich auf seinen treuen Jagdhund verlässt.
            </p>
            <p> Tierführung wird eingesetzt …</p>
            <ul>
              <li>wenn der Abenteurer ein Tier beruhigen will.</li>
              <li>
                wenn der Abenteurer ein Tier dressieren und ausbilden will
                (siehe S. 134).
              </li>
              <li>wenn der Abenteurer auf einem Tier reiten will.</li>
              <li>
                wenn der Abenteurer ein von Tieren gezogenes Fahrzeug lenken
                will.
              </li>
              <li className="last">
                wenn der Abenteurer ein Tier einschüchtern will.
              </li>
            </ul>
            <p>Tierführung wird nicht eingesetzt …</p>
            <ul>
              <li className="last">
                um Tiere zu erkennen (dies fällt unter Naturkunde, S. 124).
              </li>
            </ul>
          </div>
          <h3 onClick={() => handleClick("ueberleben")}>Überleben</h3>
          {edit ? (
            <>
              <p>
                {[
                  attribute.intuition.aktuell +
                    attribute.konstitution.aktuell +
                    Number(editCharacter.ueberleben),
                ]}
              </p>
              <input
                type="number"
                name="ueberleben"
                data-section="fertigkeiten"
                onChange={(e) => handleChange(e)}
                value={editCharacter.ueberleben}
                max={maxPunkteNachHeldengrad}
                min={0}
              />
            </>
          ) : (
            <>
              <p>
                {[
                  attribute.intuition.aktuell +
                    attribute.konstitution.aktuell +
                    Number(data.ueberleben),
                ]}
              </p>
              <p className="basis">Basis: {data.ueberleben}</p>
            </>
          )}
          <div
            className={
              open === "ueberleben" ? "description" : "description display-none"
            }
          >
            <p>
              Reisen durch die Wildnis stellen ganz eigene Herausforderungen
              dar. Wie zünde ich ein Lagerfeuer an, das die ganze Nacht brennt
              und nicht ausgeht? Wie errichte ich einen Lagerplatz, ohne bei
              Nacht von einem anschwellenden Bach überflutet zu werden? Welche
              Gefahren erwarten mich in der Wildnis und wie kann ich sie
              umgehen? Und wo bei allen Göttern ist Norden? Ein Abenteurer kann
              mit Überleben all diese Fragen beantworten.
            </p>
            <p>
              Überleben ist die Fertigkeit, die zum Einsatz kommt, wann immer es
              darum geht, einen längeren Aufenthalt fernab der Zivilisation zu
              bestehen. Sie wird eingesetzt, um geeignete Lagerplätze zu suchen,
              ein Feuer wetterfest zu machen, sich zu orientieren oder
              plötzliche Wetterwechsel zu erkennen. Es ist eine der wichtigsten
              Fertigkeiten für Wildniskundige aller Art.
            </p>
            <p>
              Da Überleben eng mit Überlandreisen verknüpft ist, finden Sie alle
              Angaben, wie man die Fertigkeit bei einer Reise nutzbringend
              einsetzt, im entsprechenden Kapitel (ab S. 151).
            </p>
            <p> Überleben wird eingesetzt …</p>
            <ul>
              <li>
                wenn der Abenteurer in der Natur ein Lager errichten will.
              </li>
              <li>
                wenn der Abenteurer ohne oder mit wenigen Hilfsmitteln Feuer
                entzünden will.
              </li>
              <li>
                wenn der Abenteurer sich in der freien Natur (auch ohne Blick an
                den Himmel) orientieren will.
              </li>
              <li>
                wenn der Abenteurer das Wetter einschätzen will (siehe S. 135;
                hierzu ist auch Naturkunde möglich, S. 124).
              </li>
              <li>
                wenn der Abenteurer Gefahren einer Reise einschätzen und die
                Reise planen will.
              </li>
              <li>
                wenn der Abenteurer seine Spur verwischen möchte, um nicht so
                leicht verfolgt werden zu können (hier ist auch Heimlichkeit
                möglich, S. 120).
              </li>
              <li className="last">
                wenn der Abenteurer sich in einer der freien Natur ähnlichen
                Feenwelt (etwa einem Feenwald) orientieren will.
              </li>
            </ul>
            <p>Überleben wird nicht eingesetzt …</p>
            <ul>
              <li>
                um Nahrung zu sammeln (dies fällt unter Naturkunde, S. 124, oder
                Jagdkunst, S. 121).
              </li>
              <li className="last">
                zur allgemeinen Orientierung in der Feenwelt (dies fällt unter
                Arkane Kunde, S. 105).
              </li>
            </ul>
          </div>
          <h3 onClick={() => handleClick("wahrnehmung")}>Wahrnehmung</h3>
          {edit ? (
            <>
              <p>
                {[
                  attribute.intuition.aktuell +
                    attribute.willenskraft.aktuell +
                    Number(editCharacter.wahrnehmung),
                ]}
              </p>
              <input
                type="number"
                name="wahrnehmung"
                data-section="fertigkeiten"
                onChange={(e) => handleChange(e)}
                value={editCharacter.wahrnehmung}
                max={maxPunkteNachHeldengrad}
                min={0}
              />
            </>
          ) : (
            <>
              <p>
                {[
                  attribute.intuition.aktuell +
                    attribute.willenskraft.aktuell +
                    Number(data.wahrnehmung),
                ]}
              </p>
              <p className="basis">Basis: {data.wahrnehmung}</p>
            </>
          )}
          <div
            className={
              open === "wahrnehmung"
                ? "description"
                : "description display-none"
            }
          >
            <p>
              Tragen die Reiter, die sich aus der Ferne nähern, das Wappen von
              Zwingard – oder ist es eine Gruppe brutaler Söldner? Schleicht
              sich jemand an das Lager an oder sind nur die allnächtlichen
              Geräusche zu hören? Ist das Kork im Wein oder ein heimtückisches
              Gift?
            </p>
            <p>
              Nur allzu oft gibt es Situationen, in denen scharfe Augen und
              Ohren über Leben und Tod entscheiden können und auch andere Sinne,
              Tasten, Riechen und Schmecken, können von größter Bedeutung sein.
            </p>
            <p>
              Wahrnehmung beinhaltet die Fähigkeit eines Abenteurers, kleine
              Details zu bemerken, Veränderungen in der Umgebung festzustellen
              und diese Informationen entsprechend zu deuten. Daher ist
              Wahrnehmung für fast jeden Abenteurer nützlich: Für Waldläufer ist
              sie genauso wichtig wie für Diebe, für Wachleute und für
              Feinschmecker. Wahrnehmung wird als einfache Probe eingesetzt,
              wenn es darum geht, ob ein Abenteurer ein bestimmtes Detail
              bemerkt oder nicht. Versucht jemand, dieses Detail absichtlich zu
              verschleiern, versteckt also jemand heimlich einen Ring in seiner
              Tasche oder möchte er sich anschleichen, wird stattdessen eine
              vergleichende Probe gewürfelt (häufig gegen Fingerfertigkeit oder
              Heimlichkeit).
            </p>
            <p> Wahrnehmung wird eingesetzt …</p>
            <ul>
              <li>
                wenn die Sinne des Abenteurers gefragt sind, er Details erkennen
                oder auf etwas aufmerksam werden will.
              </li>
              <li>
                wenn der Abenteurer einen Tatort oder einen Raum einfach
                durchsucht (mehr hierzu finden Sie bei den allgemeinen Hinweisen
                zur Untersuchung auf S. 149).
              </li>
              <li>wenn der Abenteurer einen Hinterhalt entdecken will.</li>
              <li className="last">
                wenn der Abenteurer Fallen entdecken will (dies ist über
                Schlösser und Fallen ebenfalls möglich, siehe S. 128).
              </li>
            </ul>
            <p>Wahrnehmung wird nicht eingesetzt …</p>
            <ul>
              <li className="last">
                um die erkannten Details zu interpretieren oder einzuschätzen
                (dies fällt unter die jeweiligen Fertigkeiten).
              </li>
            </ul>
          </div>
          <h3 onClick={() => handleClick("zaehigkeit")}>Zähigkeit</h3>
          {edit ? (
            <>
              <p>
                {[
                  attribute.konstitution.aktuell +
                    attribute.willenskraft.aktuell +
                    Number(editCharacter.zaehigkeit),
                ]}
              </p>
              <input
                type="number"
                name="zaehigkeit"
                data-section="fertigkeiten"
                onChange={(e) => handleChange(e)}
                value={editCharacter.zaehigkeit}
                max={maxPunkteNachHeldengrad}
                min={0}
              />
            </>
          ) : (
            <>
              <p>
                {[
                  attribute.konstitution.aktuell +
                    attribute.willenskraft.aktuell +
                    Number(data.zaehigkeit),
                ]}
              </p>
              <p className="basis">Basis: {data.zaehigkeit}</p>
            </>
          )}

          <div
            className={
              open === "zaehigkeit" ? "description" : "description display-none"
            }
          >
            <p>
              Zähigkeit beschreibt die Fähigkeit eines Abenteurers, Schmerz,
              Schaden und physischer Erschöpfung zu widerstehen. Diese
              Fertigkeit wird selten aktiv eingesetzt, sondern meist passiv als
              Schutz vor Gefahren und Belastungen. Sie schützt den Abenteurer
              vor äußeren Umständen. Muss er unbedingt wach bleiben, kann er
              einem Gift widerstehen oder einen Marsch durch die eisige Tundra
              überstehen, ohne zusammenzubrechen? In all diesen Fällen muss der
              Abenteurer seine Zähigkeit prüfen. Manchmal wird diese Fertigkeit
              in einer vergleichenden Probe angewendet, um einem Zauber zu
              widerstehen oder einfach nur ein Trinkgelage zu überstehen.
              Zähigkeit findet sich vor allem bei Kämpfern, die oft mit
              Schmerzen und Belastungen konfrontiert werden. Generell tut jeder
              Abenteurer, der vielen Strapazen ausgesetzt ist, gut daran, in
              diese Fertigkeit zu investieren.
            </p>
            <p>Zähigkeit wird eingesetzt …</p>
            <ul>
              <li>
                wenn passiver körperlicher Widerstand gefragt ist, zum Beispiel
                gegen Schmerzen oder Erschöpfung.
              </li>
              <li>
                wenn der Abenteurer einem Gift oder einer Krankheit widerstehen
                will.
              </li>
              <li>
                wenn der Abenteurer den Auswirkungen von Alkohol oder anderen
                konsumierten Rauschmitteln widerstehen will.
              </li>
              <li>
                wenn sich der Abenteurer körperlich beeinflussenden Zaubern
                widersetzen will.
              </li>
              <li>wenn der Abenteurer Folter widerstehen will.</li>
              <li>
                wenn der Abenteurer Müdigkeit abschütteln und eine Nacht
                durchwachen möchte (siehe unten).
              </li>
              <li>
                wenn der Abenteurer die Luft anhalten will (siehe S. 130).
              </li>
              <li className="last">
                wenn der Körperliche Widerstand im Rahmen einer Aktiven Abwehr
                aktiv erhöht werden soll (siehe S. 138).
              </li>
            </ul>
            <p>Zähigkeit wird nicht eingesetzt …</p>
            <ul>
              <li>
                um aktive körperliche Leistungsfähigkeit darzustellen (dies
                fällt unter Athletik, S. 106).
              </li>
              <li className="last">
                um geistige Widerstandskraft zu prüfen (hierfür wird
                Entschlossenheit benötigt, S. 113).
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fertigkeiten;
