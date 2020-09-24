import { DRAWER_WIDTH, GRAY } from "../";

const responsiveDrawerStyle = (theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: DRAWER_WIDTH,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${DRAWER_WIDTH}px)`,
      marginLeft: DRAWER_WIDTH,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: {
    ...theme.mixins.toolbar,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  brand: {
    marginLeft: theme.spacing(2),
    fontSize: "1.5rem",
    fontWeight: 600,
  },
  drawerPaper: {
    width: DRAWER_WIDTH,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    background: GRAY[1],
  },
});

export default responsiveDrawerStyle;
