export const stufenrechnerSlayers = (ep) => {
  if (ep < 100) {
    return { stufe: 1, lp: 0, tp: 0 };
  } else if (ep < 300) {
    return { stufe: 2, lp: 2, tp: 1 };
  } else if (ep < 600) {
    return { stufe: 3, lp: 4, tp: 2 };
  } else if (ep < 1000) {
    return { stufe: 4, lp: 6, tp: 3 };
  } else if (ep < 1500) {
    return { stufe: 5, lp: 8, tp: 4 };
  } else if (ep < 2100) {
    return { stufe: 6, lp: 10, tp: 5 };
  } else if (ep < 2800) {
    return { stufe: 7, lp: 12, tp: 6 };
  } else if (ep < 3600) {
    return { stufe: 8, lp: 14, tp: 7 };
  } else if (ep < 4500) {
    return { stufe: 9, lp: 16, tp: 8 };
  } else if (ep < 5500) {
    return { stufe: 10, lp: 18, tp: 9 };
  } else if (ep < 6600) {
    return { stufe: 11, lp: 20, tp: 10 };
  } else if (ep < 7800) {
    return { stufe: 12, lp: 22, tp: 11 };
  } else if (ep < 9100) {
    return { stufe: 13, lp: 24, tp: 12 };
  } else if (ep < 10500) {
    return { stufe: 14, lp: 26, tp: 13 };
  } else if (ep < 12000) {
    return { stufe: 15, lp: 28, tp: 14 };
  } else if (ep < 13700) {
    return { stufe: 16, lp: 30, tp: 15 };
  } else if (ep < 15600) {
    return { stufe: 17, lp: 32, tp: 16 };
  } else if (ep < 17700) {
    return { stufe: 18, lp: 34, tp: 17 };
  } else if (ep < 20000) {
    return { stufe: 19, lp: 36, tp: 18 };
  } else {
    return { stufe: 20, lp: 38, tp: 19 };
  }
};
