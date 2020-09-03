import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { getTitle, parseTimestamp } from "../libs/notificationUtils";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "300",
    flexWrap: "unset",
    position: "relative",
    marginBottom: "20px",
    boxShadow: `0 12px 20px -10px rgba(255, 255, 255, 0.28),
      0 4px 20px 0px rgba(0, 0, 0, 0.12),
      0 7px 8px -5px rgba(255, 255, 255, 0.2)`,
  },
  title: {
    color: "#4c6ef5",
    fontSize: 14,
    fontWeight: "bold",
  },
}));

function ACard({ record }) {
  const classes = useStyles();
  const { code, content, createdAt } = record;
  const { high, low, value } = content;
  const { year, month, date, hour, minute, second } = parseTimestamp(createdAt);
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          {getTitle(code)}
        </Typography>
        <Typography variant="h6" component="p">
          {`측정값: ${value} (${low} ~ ${high})`}
        </Typography>
        <Typography variant="body1" component="div">
          {`${month}/${date}/${year}`}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ACard;
