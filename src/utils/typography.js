import Typography from "typography";

// const typography = new Typography({
//   baseFontSize: "20px",
//   baseLineHeight: 1.666,
//   headerFontFamily: [
//     "Avenir Next",
//     "Helvetica Neue",
//     "Segoe UI",
//     "Helvetica",
//     "Arial",
//     "sans-serif"
//   ],
//   bodyFontFamily: ["Oxygen Mono"]
// });

// export default typography;
// typography.injectStyles();

import irvingTheme from "typography-theme-irving";
irvingTheme.baseFontSize = "24px"; // was 20px.

const typography = new Typography(irvingTheme);
export default typography;
