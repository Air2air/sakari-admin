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
  stat1bg,
  stat2count,
  stat2name,
  stat2bg
) {
  return {
    link,
    subtitle,
  thumb,
    stat1count,
    stat1name,
    stat1bg,
    stat2count,
    stat2name,
    stat2bg,
  };
}

const runningRows = [
  createData(
    "/messages",
    "Gmail",
    "11.png",
    3,
    "sent",
    "#039be5",
    1,
    "Waiting",
    "#ffab40"
  ),
  createData(
    "/contacts",
    "Hubspot",
    "16.png",
    4,
    "contact",
    "#039be5",
    3,
    "groups",
    "#4db6ac"
  ),
  createData(
    "/campaigns",
    "Slack",
    "23.png",
    5,
    "running",
    "#4db6ac",
    11,
    "paused",
    "#039be5"
  ),
];

export default function Integrations() {

  const pageIcon = "Integrations"
  const pageTitle = "Integrations"
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TitleBar pageTitle={pageTitle}pageIcon={pageIcon}/>
      <Grid container spacing={4}>
        {runningRows.map((runningRow) => (
          <Grid item xs={4} key={runningRow.link}>
            <IntegrationsCard
              link={runningRow.link}
              subtitle={runningRow.subtitle}
              thumb={runningRow.thumb}
              stat1count={runningRow.stat1count}
              stat1name={runningRow.stat1name}
              stat1bg={runningRow.stat1bg}
              stat2count={runningRow.stat2count}
              stat2name={runningRow.stat2name}
              stat2bg={runningRow.stat2bg}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
