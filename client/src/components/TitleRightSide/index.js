import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
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

export default function TitleRightSide(props) {
  const classes = useStyles();

  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="baseline"
        className={classes.root}
      >
        <Typography variant="h5" gutterBottom className={classes.root}>
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
        <Box
          display="flex"
          flexDirection="row-reverse"
          justifyContent="start"
          className={classes.root}
        >
          <StatsDot
            status={props.stat1status}
            statCount={props.stat1count}
            statName={props.stat1name}
          />
          {props.stat2count > 0 && (
            <StatsDot
              status={props.stat2status}
              statCount={props.stat2count}
              statName={props.stat2name}
            />
          )}
          {props.newButtonLink && (
            <Button
              variant="contained"
              color="primary"
              size="small"
              className={classes.button}
              endIcon={<AddIcon />}
              value={props.newButtonLink}
            >
              {props.newButtonText}
            </Button>
          )}
        </Box>
      </Box>
    </>
  );
}
