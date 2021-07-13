import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IntegrationsCard from "../../components/IntegrationsCard";
import TitleBar from "../../components/TitleBar";

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

function createData(
  link,
  subtitle,
  thumb,
  stat1count,
  stat1name,
  stat1status,
  stat2count,
  stat2name,
  stat2status
) {
  return {
    link,
    subtitle,
    thumb,
    stat1count,
    stat1name,
    stat1status,
    stat2count,
    stat2name,
    stat2status,
  };
}

const runningRows = [
  createData(
    "/messages",
    "Gmail",
    "11.png",
    3,
    "requests",
    "primary",
    1,
    "send error",
    "danger"
  ),
  createData(
    "/contacts",
    "Hubspot",
    "16.png",
    4,
    "requests",
    "primary",
    3,
    "sends",
    "success"
  ),
  createData(
    "/campaigns",
    "Slack",
    "23.png",
    15,
    "requests",
    "primary",
    3,
    "sends",
    "success"
  ),
];

export default function Integrations() {
  const pageIcon = "Integrations";
  const pageTitle = "Integrations";
  const classes = useStyles();

  const stat1count = 1;
  const stat1status = "danger";
  const stat1name = "problem";

  const stat2count = 3;
  const stat2status = "default";
  const stat2name = "Running";

  const newButtonLink = "/new";
  const newButtonText = "New Integration";

  return (
    <>
      <div className={classes.root}>
        <TitleBar
          pageTitle={pageTitle}
          pageIcon={pageIcon}
          stat1count={stat1count}
          stat1status={stat1status}
          stat1name={stat1name}
          stat2count={stat2count}
          stat2status={stat2status}
          stat2name={stat2name}
          newButtonLink={newButtonLink}
          newButtonText={newButtonText}
        />
        <Grid container spacing={4}>
          {runningRows.map((runningRow) => (
            <Grid item xs={4} key={runningRow.link}>
              <IntegrationsCard
                link={runningRow.link}
                subtitle={runningRow.subtitle}
                thumb={runningRow.thumb}
                stat1count={runningRow.stat1count}
                stat1name={runningRow.stat1name}
                stat1status={runningRow.stat1status}
                stat2count={runningRow.stat2count}
                stat2name={runningRow.stat2name}
                stat2status={runningRow.stat2status}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}
