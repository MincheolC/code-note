import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import style from "../../assets/jss/components/cardStyle";

const useStyles = makeStyles(style);

export default function Card(props) {
  const classes = useStyles();
  const { className, children, plain, profile, chart, ...rest } = props;
  const cardClasses = classNames({
    [classes.card]: true,
    [classes.cardPlain]: plain,
    [classes.cardProfile]: profile,
    [classes.cardChart]: chart,
    [className]: className !== undefined,
  });
  return (
    <div className={cardClasses} {...rest}>
      {children}
    </div>
  );
}
