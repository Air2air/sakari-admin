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
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import SettingsIcon from "@material-ui/icons/Settings";
import GroupIcon from "@material-ui/icons/Group";
import ForumIcon from "@material-ui/icons/Forum";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";

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
    width: theme.spacing(5),
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
        <br/>
        <Link to="/" style={{ textDecoration: "none" }}>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon style={{ color: blue[500] }}/>
            </ListItemIcon>
            <ListItemText style={{ color: "#555" }} primary="Dashboard" />
          </ListItem>
        </Link>

        <Link to="/messages" style={{ textDecoration: "none" }}>
          <ListItem button>
            <ListItemIcon>
              <SendIcon style={{ color: blue[500] }}/>
            </ListItemIcon>
            <ListItemText style={{ color: "#555" }} primary="Messages" />
          </ListItem>
        </Link>

        <Link to="/contacts" style={{ textDecoration: "none" }}>
          <ListItem button>
            <ListItemIcon>
              <GroupIcon style={{ color: blue[500] }}/>
            </ListItemIcon>
            <ListItemText style={{ color: "#555" }} primary="Contacts" />
          </ListItem>
        </Link>

        <Link to="/campaigns" style={{ textDecoration: "none" }}>
          <ListItem button>
            <ListItemIcon>
              <ForumIcon style={{ color: blue[500] }}/>
            </ListItemIcon>
            <ListItemText style={{ color: "#555" }} primary="Campaigns" />
          </ListItem>
        </Link>

        <Link to="/templates" style={{ textDecoration: "none" }}>
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon style={{ color: blue[500] }}/>
            </ListItemIcon>
            <ListItemText style={{ color: "#555" }} primary="Templates" />
          </ListItem>
        </Link>

        <Link to="/integrations" style={{ textDecoration: "none" }}>
          <ListItem button>
            <ListItemIcon>
              <AccountTreeIcon style={{ color: blue[500] }}/>
            </ListItemIcon>
            <ListItemText style={{ color: "#555" }} primary="Integrations" />
          </ListItem>
        </Link>

        <Link to="/alerts" style={{ textDecoration: "none" }}>
          <ListItem button>
            <ListItemIcon>
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon style={{ color: blue[500] }}/>
              </Badge>
            </ListItemIcon>
            <ListItemText style={{ color: "#555" }} primary="Alerts" />
          </ListItem>
        </Link>

        <Link to="/settings" style={{ textDecoration: "none" }}>
          <ListItem button>
            <ListItemIcon>
              <SettingsIcon style={{ color: blue[500] }}/>
            </ListItemIcon>
            <ListItemText style={{ color: "#555" }} primary="Settings" />
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
};

export default withStyles(styles)(Sidebar);
