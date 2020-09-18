import cardsStyle from "./cardsStyle";
import { GRAY } from "../";

const countDownStyle = {
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    display: "flex",
    justifyContent: "flex-end",
  },
  count: {
    margin: "0 0.4rem",
    textAlign: "center",
    "& p": {
      color: GRAY[7],
      fontWeight: 600,
    },
    "& span": {
      color: GRAY[5],
      fontSize: "1rem",
    },
  },
  number: {
    color: `${GRAY[6]} !important`,
    fontSize: "2rem !important",
  },
  ...cardsStyle,
};
export default countDownStyle;
