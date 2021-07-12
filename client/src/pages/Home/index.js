import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import DashCard from "../../components/DashCard";
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
  title,
  explain,
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
    title,
    explain,
    stat1count,
    stat1name,
    stat1status,
    stat2count,
    stat2name,
    stat2status,
  };
}

const rows = [
  createData(
    "/messages",
    "Message",
    "Send a Message",
    "Message contacts and groups",
    3,
    "sent",
    "#039be5",
    1,
    "Waiting",
    "primary"
  ),
  createData(
    "/contacts",
    "contacts",
    "Manage contacts",
    "Manage and group recipients",
    54,
    "contacts",
    "default",
    3,
    "groups",
    "success"
  ),
  createData(
    "/campaigns",
    "campaigns",
    "Run campaigns",
    "Manage campaigns",
    5,
    "running",
    "primary",
    11,
    "paused",
    "warning"
  ),
  createData(
    "/templates",
    "templates",
    "Design layouts",
    "design and format your messages",
    3,
    "used",
    "primary",
    2,
    "saved",
    "default"
  ),
  createData(
    "/integrations",
    "integrations",
    "App integrations",
    "Connect your productivity apps",
    5,
    "running",
    "primary",
    1,
    "issue",
    "danger"
  ),
];

export default function Home(props) {

  const pageIcon = "Home";
  const pageTitle = "Home";

  const stats1Count = 3;
  const stats1status ="danger";
  const stats1Name = " problems";

  const stats2Count = 0;
  const stats2status ="danger";
  const stats2Name = " problems";

  const classes = useStyles();

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
          status={stats1status}
          statCount={stats1Count}
          statName={stats1Name}
        />
        {stats2Count > 0 && <StatsDot
          status={stats2status}
          statCount={stats2Count}
          statName={stats2Name}
        />}
      </Box>
      <Grid container spacing={4}>
        {rows.map((row) => (
          <Grid item xs={6} key={row.link}>
            <DashCard
              link={row.link}
              subtitle={row.subtitle}
              title={row.title}
              explain={row.explain}
              stat1count={row.stat1count}
              stat1name={row.stat1name}
              stat1status={row.stat1status}
              stat2count={row.stat2count}
              stat2name={row.stat2name}
              stat2status={row.stat2status}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
