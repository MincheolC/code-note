import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import style from "../../assets/jss/components/cardBodyStyle";

const useStyles = makeStyles(style);

export default function CardBody(props) {
  const classes = useStyles();
  const { className, children, plain, profile, ...rest } = props;
  const cardBodyClasses = classNames({
    [classes.cardBody]: true,
    [classes.cardBodyPlain]: plain,
    [classes.cardBodyProfile]: profile,
    [className]: className !== undefined,
  });
  return (
    <div className={cardBodyClasses} {...rest}>
      {children}
    </div>
  );
}
