export const waffenMerkmaleFormatter = (merkmal) => {
  switch (merkmal) {
    case "deckung":
      return "Ein Schild mit diesem Merkmal zählt, sofern er geführt wird, als Leichte Deckung im Fernkampf.";

    case "defensiv":
      return "Bei einer erfolgreichen Aktiven Abwehr mit einer solchen Waffe oder einem solchen Schild erhält der Abenteurer einen zusätzlichen EG pro Stufe des Merkmals (gilt nicht für herausragendes Ergebnis). Bei Waffen ohne das Merkmal Zweihändig und bei Schilden kann dies auch genutzt werden, wenn man sie zusätzlich zu einer Hauptwaffe führt – in diesem Fall gelten die entsprechenden Regeln zum Einsatz von Schilden und Parierwaffen (S. 164). Sollten zwei Gegenstände mit dem Merkmal Defensiv geführt werden, gilt stets nur der höhere Bonus (und natürlich nur der Bonus von Gegenständen, für die auch eine passende Fertigkeit für die Aktive Abwehr genutzt wurde).";

    case "doppelwaffe":
      return "Mit dieser Waffe können die Meisterschaften zum Kampf mit zwei Händen (S. 171) genutzt werden.";

    case "durchdringung":
      return "Für jede Stufe dieses Merkmals kann 1 Punkt der gegnerischen Schadensreduktion ignoriert werden, egal aus welcher Quelle diese stammt.";

    case "improvisiert":
      return "Diese Gegenstände des Alltags sind eigentlich nicht für den Kampf geeignet. Allerdings verbessern sich ihr Schaden und ihre Waffengeschwindigkeit um je 2 Punkte, wenn der Kämpfer über die Meisterschaft Improvisation in der entsprechenden Kampffertigkeit verfügt.";

    case "entwaffnend":
      return "Für jede Stufe dieses Merkmals zählt die Last dieser Waffe um 1 Punkt erhöht, wenn es um die erlaubte Nutzung des Manövers Entwaffnen geht.";

    case "langewaffe":
      return "Die Waffe ermöglicht es, aus einer größeren Distanz anzugreifen. Ein gegnerisches Lösen aus dem Kampf erhält einen Malus in Höhe von 3 Punkten, ein eigenes einen Bonus in Höhe von 3 Punkten.";

    case "nahkampftauglich":
      return "Die Fernkampfwaffe kann auch als Nahkampfwaffe mit eigenen Werten verwendet werden.";

    case "parierwaffe":
      return "Die Waffe kann auch als Parierwaffe genutzt werden, wenn man sie zusätzlich zu einer anderen Waffe in der Nebenhand führt. In diesem Fall werden sie ähnlich wie ein Schild genutzt, die Aktive Abwehr erfolgt aber immer über die zugehörige Kampffertigkeit der Parierwaffe mit ihren Attributen. Bei einer solchen Nutzung fällt eine Behinderung (S. 187) an, die dem Wert hinter dem Merkmal entspricht. Sollte mit der Waffe bei Führung als Parierwaffe auch angegriffen  werden, gelten die Regeln für den Kampf mit zwei Händen (S. 171). Parierwaffen finden Sie der Einfachheit halber sowohl in der Waffenliste als auch in der Liste der Schilde und Parierwaffen. Die bei der Liste der Parierwaffen genannte Behinderung entspricht der Behinderung durch dieses Merkmal, muss also nicht doppelt angerechnet werden.";

    case "primitiv":
      return "Die Waffe oder die Rüstung ist einfach gearbeitet und daher von nicht sehr guter Qualität. Verursacht eine Waffe mit diesem Merkmal bei einem Gegner, der eine Rüstung ohne das Merkmal Primitiv trägt, Schaden, wird dieser Schaden um 2 Punkte reduziert.";

    case "reiterwaffe":
      return "Eine Waffe mit diesem Merkmal ist unabhängig von sonstigen Einschränkungen im Reiterkampf einsetzbar. Setzt der Abenteurer sie vom Rücken eines Reittiers ein und verfügt über die Meisterschaft Reiterkampf, verursacht er für jede Stufe des Merkmals einen zusätzlichen Schadenspunkt.";

    case "scharf":
      return "Alle Schadenswürfel einer Waffe mit diesem Merkmal werden immer als mindestens der Wert der Stufe des Merkmals gewertet, egal was eigentlich gewürfelt wurde. Eine Waffe mit 1W6+2 Schaden und dem Merkmal Scharf 2 richtet also selbst dann 4 Punkte Schaden an, wenn der Schadenswürfel eine 1 zeigt. Dies gilt nicht für zusätzliche Schadenswürfel aus Manövern, Zaubern oder sonstigen Quellen.";

    case "standfestigkeit":
      return "Eine Rüstung mit diesem Merkmal verleiht gegen Angriffe, die die Position des Trägers verändern (ihn also z. B. Niederwerfen), einen Bonus in Höhe von 3 Punkten auf den Körperlichen Widerstand.";

    case "stumpf":
      return "Der von der Waffe verursachte Schaden zählt vollständig als Betäubungsschaden. Dies gilt auch für zusätzlichen Schaden aus Manövern, nicht aber aus Quellen wie etwa Zaubern.";

    case "teilbar":
      return "Mittels einer Aktion Gegenstand verwenden kann die Waffe in zwei entsprechende einhändige Waffen zerlegt werden.";

    case "teilbar(*)":
      return "Mittels einer Aktion Gegenstand verwenden kann aus zweier dieser Waffen eine entsprechende zweihändige Waffe hergestellt werden.";

    case "umklammern":
      return "Mit dieser Waffe ist das Manöver Umklammern einsetzbar.";

    case "unhandlich":
      return "Die Verteidigung des Trägers erhält bei Führung dieser Waffe einen Malus in Höhe von 2 Punkten.";

    case "vielseitig":
      return "Bei solchen Waffen kann zwischen einhändiger und zweihändiger Führung gewechselt werden (Reaktion, 3 Ticks Dauer). In zweihändiger Führung erhöht sich ihr Schaden um 3 Punkte.";

    case "wattiert":
      return "Eine Rüstung mit diesem Merkmal halbiert den Bonusschaden durch das freie Manöver Wuchtangriff.";

    case "wuchtig":
      return "Bei Waffen mit diesem Merkmal verursacht das freie Manöver Wuchtangriff 2 statt 1 zusätzlichen Punkt Schaden pro eingesetzten Erfolgsgrad.";

    case "wurffähig":
      return "Die Nahkampfwaffe kann auch als Wurfwaffe mit eigenen Werten verwendet werden.";

    case "zweihändig":
      return "Die Waffe muss mit zwei Händen geführt werden. Sie kann nicht im berittenen Kampf eingesetzt werden, sofern sie nicht auch das Merkmal Reiterwaffe besitzt.";

    default:
      return;
  }
};
