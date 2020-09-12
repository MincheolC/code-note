import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Notifications from "@material-ui/icons/Notifications";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Popper from "@material-ui/core/Popper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import { GRAY } from "../../assets/jss";

const useStyles = makeStyles((theme) => ({
  list: {
    minWidth: 360,
    maxWidth: 480,
  },
  icon: {
    color: GRAY[8],
    fontSize: 30,
  },
  paper: {
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
  content: {
    color: GRAY[7],
    fontSize: 14,
  },
  time: {
    display: "inline-block",
    color: GRAY[5],
    fontSize: 14,
  },
}));

function CListText() {
  const classes = useStyles();
  return (
    <Grid container direction="row" justify="space-between">
      <Typography className={classes.content}>Tank1 PH 0.1 초과</Typography>
      <Typography className={classes.time}>2020-09-12 12:32 PM</Typography>
    </Grid>
  );
}

function APopper(props) {
  const { notificationRecords } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(anchorEl ? null : e.currentTarget);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <IconButton onClick={handleClick}>
        <Notifications className={classes.icon} />
      </IconButton>
      <Popper open={open} anchorEl={anchorEl} placement={"bottom-end"}>
        <Paper>
          <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
            <List className={classes.list}>
              {notificationRecords
                .filter(
                  (notificationRecord) =>
                    notificationRecord.createdAt >= 1599836400
                )
                .map(({ code, content, createdAt }) => (
                  <ListItem alignItems="flex-start">
                    <ListItemText primary={<CListText />} />
                  </ListItem>
                ))}
            </List>
          </ClickAwayListener>
        </Paper>
      </Popper>
    </>
  );
}

export default APopper;
