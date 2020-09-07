import {
  GRAY,
  indigoCardHeader,
  grayCardHeader,
  orangeCardHeader,
  redCardHeader,
  yellowCardHeader,
  greenCardHeader,
} from "../";

const cardIconStyle = {
  cardIcon: {
    "&$indigoCardHeader,&$orangeCardHeader,&$grayCardHeader,&$redCardHeader,&$yellowCardHeader,&$greenCardHeader": {
      borderRadius: "3px",
      backgroundColor: GRAY[0],
      padding: "15px",
      marginTop: "-20px",
      marginRight: "15px",
      float: "left",
    },
  },
  indigoCardHeader,
  grayCardHeader,
  orangeCardHeader,
  redCardHeader,
  yellowCardHeader,
  greenCardHeader,
};

export default cardIconStyle;
