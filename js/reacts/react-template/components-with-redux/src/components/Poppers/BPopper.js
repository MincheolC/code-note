import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Notifications from "@material-ui/icons/Notifications";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Popper from "@material-ui/core/Popper";
import Badge from "@material-ui/core/Badge";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import { GRAY } from "../../assets/jss";

const useStyles = makeStyles((theme) => ({
  list: {
    minWidth: 300,
    maxWidth: 480,
  },
  icon: {
    color: GRAY[8],
    fontSize: 25,
  },
  paper: {
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    color: GRAY[8],
    fontSize: 16,
    padding: 10,
    borderRadius: 3,
  },
  content: {
    color: GRAY[7],
    fontSize: 14,
  },
  time: {
    display: "inline-block",
    color: GRAY[5],
    fontSize: 12,
  },
}));

function CListText() {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.content}>Tank1 PH 0.1 초과</Typography>
      <Typography className={classes.time}>2020-09-12 12:32 PM</Typography>
    </>
  );
}

function BPopper(props) {
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
        <Badge
          badgeContent={
            notificationRecords.filter(
              (notificationRecord) => notificationRecord.createdAt >= 1599836400
            ).length
          }
          color="error"
        >
          <Notifications className={classes.icon} />
        </Badge>
      </IconButton>
      <Popper open={open} anchorEl={anchorEl} placement={"bottom-end"}>
        <Paper elevation={3}>
          <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
            <div>
              <Typography className={classes.title}>알림</Typography>
              <Divider />
              <List dense className={classes.list}>
                {notificationRecords
                  .filter(
                    (notificationRecord) =>
                      notificationRecord.createdAt >= 1599836400
                  )
                  .map(({ code, content, createdAt }, index) => (
                    <ListItem key={index} alignItems="flex-start">
                      <ListItemText primary={<CListText />} />
                    </ListItem>
                  ))}
              </List>
            </div>
          </ClickAwayListener>
        </Paper>
      </Popper>
    </>
  );
}

export default BPopper;
