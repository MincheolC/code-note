import React from 'react';
import { Router, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import TuneIcon from '@material-ui/icons/Tune';
import AlarmIcon from '@material-ui/icons/Alarm';
import PersonIcon from '@material-ui/icons/Person';
import AdbIcon from '@material-ui/icons/Adb';
import Dashboard from '../pages/Dashboard';
import Tables from '../pages/Tables';
import Alarm from '../pages/Alarm';
import ModalWithChild from '../pages/ModalWithChild';

import Test from '../pages/Management';

const drawerWidth = 200;
const history = createBrowserHistory();

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Brewguru
          </Typography>
        </Toolbar>
      </AppBar>
      <Router history={history}>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button component={Link} to="/dashboard" key={'Dashboard'}>
            <ListItemIcon><DashboardIcon/></ListItemIcon>
            <ListItemText primary={'Dashboard'} />
          </ListItem>
          <ListItem button component={Link} to="/tables" key={'Tables'}>
            <ListItemIcon><TuneIcon/></ListItemIcon>
            <ListItemText primary={'Tables'} />
          </ListItem>
          <ListItem button component={Link} to="/alarm" key={'Alarm'}>
            <ListItemIcon><AlarmIcon/></ListItemIcon>
            <ListItemText primary={'Alarm'} />
          </ListItem>
          <ListItem button component={Link} to="/modalWithChild" key={'ModalWithChild'}>
            <ListItemIcon><AdbIcon/></ListItemIcon>
            <ListItemText primary={'Modal'} />
          </ListItem>
          <ListItem button component={Link} to="/test" key={'Test'}>
            <ListItemIcon><AdbIcon/></ListItemIcon>
            <ListItemText primary={'Test'} />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button key={'Users'}>
            <ListItemIcon><PersonIcon /></ListItemIcon>
            <ListItemText primary={'Users'} />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/tables" component={Tables} />
        <Route exact path="/alarm" component={Alarm} />
        <Route exact path="/modalWithChild" component={ModalWithChild} />
        <Route exact path="/test" component={Test} />
      </main>
      </Router>
    </div>
  );
}
