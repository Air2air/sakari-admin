import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import DashCard from "../../components/DashCard";
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
    "warning"
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
    "primary"
  ),
  createData(
    "/campaigns",
    "campaigns",
    "Run campaigns",
    "Manage campaigns",
    2,
    "running",
    "success",
    1,
    "paused",
    "warning"
  ),
  createData(
    "/templates",
    "templates",
    "Design layouts",
    "design and format your messages",
    3,
    "in use",
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
    3,
    "running",
    "primary",
    1,
    "problem",
    "danger"
  ),
];

export default function Home(props) {
  const pageIcon = "Home";
  const pageTitle = "Home";
  const classes = useStyles();

  const stat1count = 1;
  const stat1status = "danger";
  const stat1name = " problem";

  const stat2count = 0;
  const stat2status = "danger";
  const stat2name = " problems";

  const newButtonLink = "";
  const newButtonText = "New Campaign";

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
    </>
  );
}
