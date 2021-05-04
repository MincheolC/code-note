import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import styles from "../../assets/jss/components/textButtonStyle";

const useStyles = makeStyles(styles);

function TextButton(props) {
  const classes = useStyles();
  const { value, color, size } = props;
  const buttonClasses = classNames({
    [classes.default]: true,
    [classes[color]]: color,
  });
  return (
    <Button className={buttonClasses} size={size}>
      {value}
    </Button>
  );
}

export default TextButton;
