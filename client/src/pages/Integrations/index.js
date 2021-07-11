import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import DashCard from "../../components/DashCard";
import Typography from "@material-ui/core/Typography";

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
    marginBottom: 30,
  },
}));

export default function Integrations() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h5" className={classes.title}>
        Integrations
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={6}>
          <DashCard
            subtitle="MESSAGES"
            title="Send a message"
            explain="Message contacts and groups"
            stat1count={3}
            stat1name="Sent"
            stat2count={1}
            stat2name="Waiting"
          />
        </Grid>
        <Grid item xs={6}>
          <DashCard
            subtitle="CONTACTS"
            title="Manage contacts"
            explain="Manage and group recipients"
            stat1count={102}
            stat1name="Contacts"
            stat2count={0}
            stat2name="Waiting"
          />
        </Grid>
        <Grid item xs={6}>
          <DashCard
            subtitle="CAMPAIGNS"
            title="Manage campaigns"
            explain="Run campaigns"
            stat1count={5}
            stat1name="Running"
            stat2count={11}
            stat2name="Paused"
          />
        </Grid>
        <Grid item xs={6}>
          <DashCard
            subtitle="TEMPLATES"
            title="Layout designs"
            explain="Design and format your messages"
            stat1count={3}
            stat1name="Used"
            stat2count={2}
            stat2name="Saved"
          />
        </Grid>
        <Grid item xs={6}>
          <DashCard
            subtitle="INTEGRATIONS"
            title="App Integrations"
            explain="Connect your productivity apps"
            stat1count={5}
            stat1name="Running"
            stat2count={0}
            stat2name="Saved"
          />
        </Grid>
        <Grid item xs={6}>
          <DashCard subtitle="SETTINGS" title="Card1" buttonText="start" />
        </Grid>
      </Grid>
    </div>
  );
}
