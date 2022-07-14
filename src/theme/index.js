import { colors } from "./colors";
import { fontWeights, fontSizes, lineHeights } from "./fonts";
import { breakpoints, spacing } from "./spacing";

export const theme = {
  spacing,
  breakpoints,
  colors,
  fontWeights,
  fontSizes,
  lineHeights,
  zIndex: {
    top: 9999,
    navigation: 999,
    swipe: 300,
    content: 200,
    section: 100,
    background: 99,
    bottom: 10,
  },
  navHeight: {
    mobile: "170px",
    tablet: "140px",
    desktop: "80px",
  },
};

export default theme;
