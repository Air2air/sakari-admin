import React from "react";
import classNames from "classnames";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Badge from "@material-ui/core/Badge";
import HomeIcon from "@material-ui/icons/Home";
import SendIcon from "@material-ui/icons/Send";
import NotificationsIcon from "@material-ui/icons/Notifications";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AutorenewIcon from '@material-ui/icons/Autorenew';
import SettingsIcon from "@material-ui/icons/Settings";
import GroupIcon from "@material-ui/icons/Group";
import MessageIcon from "@material-ui/icons/Message";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const styles = (theme) => ({
  drawerPaper: {
    position: "fixed",
    top: theme.spacing(8),
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(8),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
});

const Sidebar = (props) => {
  const { open, classes } = props;
  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: classNames(
          classes.drawerPaper,
          !open && classes.drawerPaperClose
        ),
      }}
      open={open}
    >
      <List>
        <Link to="/">
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
        </Link>

        <Link to="/messages">
          <ListItem button>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary="Messages" />
          </ListItem>
        </Link>

        <Link to="/contacts">
          <ListItem button>
            <ListItemIcon>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText primary="Contacts" />
          </ListItem>
        </Link>

        <Link to="/campaigns">
          <ListItem button>
            <ListItemIcon>
              <MessageIcon />
            </ListItemIcon>
            <ListItemText primary="Campaigns" />
          </ListItem>
        </Link>

        <Link to="/templates">
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Templates" />
          </ListItem>
        </Link>

        <Link to="/integrations">
          <ListItem button>
            <ListItemIcon>
              <AutorenewIcon />
            </ListItemIcon>
            <ListItemText primary="Integrations" />
          </ListItem>
        </Link>

        <Link to="/alerts">
          <ListItem button>
            <ListItemIcon>
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </ListItemIcon>
            <ListItemText primary="Alerts" />
          </ListItem>
        </Link>

        <Link to="/setting">
          <ListItem button>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
};

export default withStyles(styles)(Sidebar);
