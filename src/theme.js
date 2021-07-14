import MetalLord from "./fonts/metal_lord.ttf";
import { createTheme } from "@material-ui/core/styles";

const metalLord = {
  fontFamily: "MetalLord",
  src: `
   local(''),
   local('MetalLord'),
   url(${MetalLord}) format('trueType')
 `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const theme = createTheme({
  typography: {
    fontFamily: ["MetalLord"].join(","),
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [metalLord],
      },
    },
  },
});

export default theme;
