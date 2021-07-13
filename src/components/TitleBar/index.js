import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import SendIcon from "@material-ui/icons/Send";
import NotificationsIcon from "@material-ui/icons/Notifications";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import SettingsIcon from "@material-ui/icons/Settings";
import GroupIcon from "@material-ui/icons/Group";
import ForumIcon from "@material-ui/icons/Forum";
import StatsDot from "../../components/StatsDot";
import Typography from "@material-ui/core/Typography";
import { blueGrey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 20,
  },
  title_block: {
    marginRight: 30,
    color: blueGrey[600],
  },
  title_icon: {
    marginRight: 10,
    color: blueGrey[100],
  },
}));

export default function TitleBar(props) {
  const classes = useStyles();

  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="start"
        className={classes.root}
      >
        <Typography variant="h5" className={classes.title_block}>
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
            <NotificationsIcon
              fontSize="small"
              className={classes.title_icon}
            />
          )}
          {props.pageTitle}
        </Typography>
        {props.stat1count > 0 && (
          <StatsDot
            status={props.stat1status}
            statCount={props.stat1count}
            statName={props.stat1name}
          />
        )}
        {props.stat2count > 0 && (
          <StatsDot
            status={props.stat2status}
            statCount={props.stat2count}
            statName={props.stat2name}
          />
        )}
      </Box>
    </>
  );
}
