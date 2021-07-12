import React from "react";

import HomeIcon from "@material-ui/icons/Home";
import SendIcon from "@material-ui/icons/Send";
import NotificationsIcon from "@material-ui/icons/Notifications";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import SettingsIcon from "@material-ui/icons/Settings";
import GroupIcon from "@material-ui/icons/Group";
import ForumIcon from "@material-ui/icons/Forum";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 30,
  },
  title_icon: {
    marginRight: 10,
    color: blue[200],
  },
}));

const TitleBar = (props) => {
  const classes = useStyles();

  return (
    <Typography variant="h5" gutterBottom>
      {props.pageIcon === "Home" && (
        <HomeIcon fontSize="small" className={classes.title_icon} />
      )}
      {props.pageIcon === "Messages" && (
        <SendIcon fontSize="small" className={classes.title_icon} />
      )}
      {props.pageIcon === "Contacts" && (
        <GroupIcon fontSize="small" className={classes.title_icon} />
      )}
      {props.pageIcon === "Campaigns" && (
        <ForumIcon fontSize="small" className={classes.title_icon} />
      )}
      {props.pageIcon === "Templates" && (
        <DashboardIcon fontSize="small" className={classes.title_icon} />
      )}
      {props.pageIcon === "Integrations" && (
        <AccountTreeIcon fontSize="small" className={classes.title_icon} />
      )}
      {props.pageIcon === "Settings" && (
        <SettingsIcon fontSize="small" className={classes.title_icon} />
      )}
      {props.pageIcon === "Alerts" && (
        <NotificationsIcon fontSize="small" className={classes.title_icon} />
      )}
      {props.pageTitle}
    </Typography>
  );
};

export default TitleBar;
