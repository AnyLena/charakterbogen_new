export const bonusLebenspunkte = (charData) => {
  return charData.staerken.some(
    (item) => item.staerkeName.toLowerCase() === "robust 1"
  )
    ? 1
    : charData.staerken.some(
        (item) => item.staerkeName.toLowerCase() === "robust 2"
      )
    ? 2
    : charData.staerken.some(
        (item) => item.staerkeName.toLowerCase() === "robust 3"
      )
    ? 3
    : 0;
};

export const bonusFokuspunkte = (charData) => {
  return 0
}

export const bonusVerteidigung = (charData) => {
  const ruestung = charData.ruestungen.reduce((prevValue, currentValue) => {
    if (currentValue.ruestungAktiv) {
      return prevValue + currentValue.ruestungVTD;
    } else {
      return prevValue + 0;
    }
  }, 0);
  const schild = charData.schild.reduce((prevValue, currentValue) => {
    return prevValue + currentValue.schildVTD;
  }, 0);
  return ruestung + schild
};

export const bonusGeschwindigkeit = (charData) => {
  return charData.staerken.some(
    (item) => item.staerkeName.toLowerCase() === "flink"
  )
    ? 1
    : 0;
};

export const bonusInitiative = (charData) => {
  return charData.staerken.some(
    (item) => item.staerkeName.toLowerCase() === "verbesserte initiative"
  )
    ? 3
    : 0;
};

export const bonusGWiderstand = (charData) => {
  return charData.staerken.some(
    (item) => item.staerkeName.toLowerCase() === "hoher geistiger widerstand 1"
  )
    ? 2
    : charData.staerken.some(
        (item) =>
          item.staerkeName.toLowerCase() === "hoher geistiger widerstand 2"
      )
    ? 4
    : charData.staerken.some(
        (item) =>
          item.staerkeName.toLowerCase() === "hoher geistiger widerstand 3"
      )
    ? 6
    : charData.staerken.some(
        (item) =>
          item.staerkeName.toLowerCase() === "hoher geistiger widerstand 4"
      )
    ? 8
    : 0;
};

export const bonusKWiderstand = (charData) => {
  return charData.staerken.some(
    (item) =>
      item.staerkeName.toLowerCase() === "hoher körperlicher widerstand 1"
  )
    ? 2
    : charData.staerken.some(
        (item) =>
          item.staerkeName.toLowerCase() === "hoher körperlicher widerstand 2"
      )
    ? 4
    : charData.staerken.some(
        (item) =>
          item.staerkeName.toLowerCase() === "hoher körperlicher widerstand 3"
      )
    ? 6
    : charData.staerken.some(
        (item) =>
          item.staerkeName.toLowerCase() === "hoher körperlicher widerstand 4"
      )
    ? 8
    : 0;
};

export const bonusSplitterpunkte = (charData) => {
  return charData.staerken.some(
    (item) => item.staerkeName.toLowerCase() === "zusätzliche splitterpunkte"
  )
    ? 2
    : 0;
};
