import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IntegrationsCard from "../../components/IntegrationsCard";
import TitleBar from "../../components/TitleBar";
import StatsDot from "../../components/StatsDot";
import Box from "@material-ui/core/Box";

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
    "sent",
    "primary",
    1,
    "Error",
    "danger"
  ),
  createData(
    "/contacts",
    "Hubspot",
    "16.png",
    4,
    "requests",
    "success",
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
    "success",
    3,
    "sends",
    "success"
  ),
];

export default function Integrations() {
  const pageIcon = "Integrations";
  const pageTitle = "Integrations";
  const classes = useStyles();

  const stat1count = 3;
  const stat1status ="danger";
  const stat1name = " problems";

  const stat2count = 0;
  const stat2status ="danger";
  const stat2name = " problems";

  return (
    <div className={classes.root}>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="baseline"
        className={classes.root}
      >
        <TitleBar pageTitle={pageTitle} pageIcon={pageIcon} />
        <StatsDot
          status={stat1status}
          statCount={stat1count}
          statName={stat1name}
        />
        {stat2count > 0 && (
          <StatsDot
            status={stat2status}
            statCount={stat2count}
            statName={stat2name}
          />
        )}
      </Box>
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
  );
}
