import {
  INDIGO,
  GRAY,
  RED,
  ORANGE,
  YELLOW,
  GREEN,
  BRAND_GREEN,
  BRAND_YELLOW,
  BRAND_PINK,
  BRAND_ORANGE,
  hexToRgb,
} from "..";

const textButtonStyle = {
  default: {
    margin: 10,
  },
  indigo: {
    "&:hover": {
      backgroundColor: `rgba(${hexToRgb(INDIGO[3])}, 0.2)`,
    },
    color: INDIGO[8],
  },
  orange: {
    "&:hover": {
      backgroundColor: `rgba(${hexToRgb(ORANGE[3])}, 0.2)`,
    },
    color: ORANGE[8],
  },
  gray: {
    "&:hover": {
      backgroundColor: `rgba(${hexToRgb(GRAY[3])}, 0.2)`,
    },
    color: GRAY[8],
  },
  red: {
    "&:hover": {
      backgroundColor: `rgba(${hexToRgb(RED[3])}, 0.2)`,
    },
    color: RED[8],
  },
  yellow: {
    "&:hover": {
      backgroundColor: `rgba(${hexToRgb(YELLOW[3])}, 0.2)`,
    },
    color: YELLOW[8],
  },
  green: {
    "&:hover": {
      backgroundColor: `rgba(${hexToRgb(GREEN[3])}, 0.2)`,
    },
    color: GREEN[8],
  },
  bOrange: {
    "&:hover": {
      backgroundColor: `rgba(${hexToRgb(BRAND_ORANGE[1])}, 0.2)`,
    },
    color: BRAND_ORANGE[2],
  },
  bYellow: {
    "&:hover": {
      backgroundColor: `rgba(${hexToRgb(BRAND_YELLOW[1])}, 0.2)`,
    },
    color: BRAND_YELLOW[2],
  },
  bGreen: {
    "&:hover": {
      backgroundColor: `rgba(${hexToRgb(BRAND_GREEN[1])}, 0.2)`,
    },
    color: BRAND_GREEN[2],
  },
  bPink: {
    "&:hover": {
      backgroundColor: `rgba(${hexToRgb(BRAND_PINK[1])}, 0.2)`,
    },
    color: BRAND_PINK[2],
  },
};
export default textButtonStyle;
