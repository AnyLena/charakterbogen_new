export const attributFormatter = (attr) => {
  switch (attr) {
    case "ausstrahulung":
      return "AUS";
    case "beweglichkeit":
      return "BEW";
    case "intuition":
      return "INT";
    case "konstitution":
      return "KON";
    case "mystik":
      return "MYS";
    case "staerke":
      return "STÄ";
    case "verstand":
      return "VER";
    case "willsenkraft":
      return "WIL";
    default:
      break;
  }
};
