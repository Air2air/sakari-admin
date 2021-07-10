import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import DashCard from "../../components/DashCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

export default function NestedGrid() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <Grid container spacing={4} >
        <Grid item xs={6}>
          <DashCard subtitle="MESSAGES" icon="GroupIcon" title="Send a message" explain="Message your contacts and groups" />
        </Grid>
        <Grid item xs={6}>
          <DashCard subtitle="CONTACTS" title="Manage contacts" explain="Manage and group recipients" />
        </Grid>
        <Grid item xs={6}>
          <DashCard subtitle="CAMPAIGNS" title="Manage campaigns" explain="Run campaigns" />
        </Grid>
        <Grid item xs={6}>
          <DashCard subtitle="TEMPLATES" title="Layout designs" explain="Design and format your messages" />
        </Grid>
        <Grid item xs={6}>
          <DashCard subtitle="INTEGRATIONS" title="App Integrations" explain="Connect your productivity apps" />
        </Grid>
        <Grid item xs={6}>
          <DashCard subtitle="SETTINGS" title="Card1" buttonText="start" />
        </Grid>
      </Grid>
    </div>
  );
}
