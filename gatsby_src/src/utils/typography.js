import Typography from "typography";

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: [
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif"
  ],
  bodyFontFamily: ["Georgia", "serif"]
  // headerColor: "#00DADD"
  // headerLineHeight: 1,
  // blockMarginBottom: 10
  // See below for the full list of options.
});

// baseFontSize?: string;
//     baseLineHeight?: number;
//     scaleRatio?: number;
//     googleFonts?: GoogleFont[];
//     headerFontFamily?: string[];
//     headerLineHeight?: number;
//     bodyFontFamily?: string[];
//     headerColor?: string;
//     bodyColor?: string;
//     headerWeight?: number | string;
//     bodyWeight?: number | string;
//     boldWeight?: number | string;
//     blockMarginBottom?: number;
//     includeNormalize?: boolean;

export default typography;
