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
  stat1bg,
  stat2count,
  stat2name,
  stat2bg
) {
  return {
    link,
    subtitle,
    title,
    explain,
    stat1count,
    stat1name,
    stat1bg,
    stat2count,
    stat2name,
    stat2bg
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
    "#ffab40"
  ),
  createData(
    "/contacts",
    "contacts",
    "Manage contacts",
    "Manage and group recipients",
    54,
    "contacts",
    "#039be5",
    3,
    "groups",
    "#4db6ac"
  ),
  createData(
    "/campaigns",
    "campaigns",
    "Run campaigns",
    "Manage campaigns",
    5,
    "running",
    "#4db6ac",
    11,
    "paused",
    "#039be5"
  ),
  createData(
    "/templates",
    "templates",
    "Design layouts",
    "design and format your messages",
    3,
    "used",
    "#4db6ac",
    2,
    "saved",
    "#039be5"
  ),
  createData(
    "/integrations",
    "integrations",
    "App integrations",
    "Connect your productivity apps",
    5,
    "running",
    "#4db6ac",
    1,
    "issue",
    "#e64a19"
  ),
];



export default function Home(props) {

  const pageIcon = "Home"
  const pageTitle = "Home"
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TitleBar pageTitle={pageTitle} pageIcon={pageIcon}/>
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
              stat1bg={row.stat1bg}
              stat2count={row.stat2count}
              stat2name={row.stat2name}
              stat2bg={row.stat2bg}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
