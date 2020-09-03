import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Snack from "@material-ui/core/SnackbarContent";
import IconButton from "@material-ui/core/IconButton";
// @material-ui/icons
import Close from "@material-ui/icons/Close";

const useStyles = makeStyles({
  root: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "300",
    flexWrap: "unset",
    position: "relative",
    padding: "20px 15px",
    lineHeight: "20px",
    marginBottom: "20px",
    fontSize: "14px",
    backgroundColor: "#FFF",
    color: "#555555",
    borderRadius: "3px",
    minWidth: "unset",
    maxWidth: "unset",
    boxShadow: `0 12px 20px -10px rgba(255, 255, 255, 0.28),
      0 4px 20px 0px rgba(0, 0, 0, 0.12),
      0 7px 8px -5px rgba(255, 255, 255, 0.2)`,
  },
  iconMessage: {
    paddingLeft: "50px",
    display: "block",
  },
  iconButton: {
    width: "24px",
    height: "24px",
    padding: "0px",
  },
  message: {
    padding: "0",
    display: "block",
    maxWidth: "89%",
  },
  close: {
    width: "11px",
    height: "11px",
  },
  icon: {
    display: "block",
    left: "15px",
    position: "absolute",
    top: "50%",
    marginTop: "-15px",
    width: "30px",
    height: "30px",
  },
  actionRTL: {
    marginLeft: "-8px",
    marginRight: "auto",
  },
});

export default function SnackbarContent(props) {
  const classes = useStyles();
  const { message, color, close, icon, rtlActive } = props;
  var action = [];
  const messageClasses = classNames({
    [classes.iconMessage]: icon !== undefined,
  });

  if (close !== undefined) {
    action = [
      <IconButton
        className={classes.iconButton}
        key="close"
        aria-label="Close"
        color="inherit"
      >
        <Close className={classes.close} />
      </IconButton>,
    ];
  }
  return (
    <Snack
      message={
        <div>
          {icon !== undefined ? <props.icon className={classes.icon} /> : null}
          <span className={messageClasses}>{message}</span>
        </div>
      }
      classes={{
        root: classes.root + " " + classes[color],
        message: classes.message,
        action: classNames({ [classes.actionRTL]: rtlActive }),
      }}
      action={action}
    />
  );
}

SnackbarContent.propTypes = {
  message: PropTypes.node.isRequired,
  color: PropTypes.oneOf(["info", "success", "warning", "danger", "primary"]),
  close: PropTypes.bool,
  icon: PropTypes.object,
  rtlActive: PropTypes.bool,
};
