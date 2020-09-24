import {
  indigoCardHeader,
  orangeCardHeader,
  grayCardHeader,
  redCardHeader,
  yellowCardHeader,
  greenCardHeader,
  bOrangeCardHeader,
  bYellowCardHeader,
  bGreenCardHeader,
  bPinkCardHeader,
  WHITE,
} from "..";

const outlinedButtonStyle = {
  default: {
    margin: 10,
  },
  indigo: {
    ...indigoCardHeader,
    color: WHITE,
  },
  orange: {
    ...orangeCardHeader,
    color: WHITE,
  },
  gray: {
    ...grayCardHeader,
    color: WHITE,
  },
  red: {
    ...redCardHeader,
    color: WHITE,
  },
  yellow: {
    ...yellowCardHeader,
    color: WHITE,
  },
  green: {
    ...greenCardHeader,
    color: WHITE,
  },
  bOrange: {
    ...bOrangeCardHeader,
    color: WHITE,
  },
  bYellow: {
    ...bYellowCardHeader,
    color: WHITE,
  },
  bGreen: {
    ...bGreenCardHeader,
    color: WHITE,
  },
  bPink: {
    ...bPinkCardHeader,
    color: WHITE,
  },
};
export default outlinedButtonStyle;
