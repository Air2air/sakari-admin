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

function createData(
  link,
  subtitle,
  title,
  explain,
  stat1count,
  stat1name,
  stat2count,
  stat2name
) {
  return {
    link,
    subtitle,
    title,
    explain,
    stat1count,
    stat1name,
    stat2count,
    stat2name,
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
    1,
    "Waiting"
  ),
  createData(
    "/contacts",
    "contacts",
    "Manage contacts",
    "Manage and group recipients",
    54,
    "contacts",
    3,
    "groups"
  ),
  createData(
    "/campaigns",
    "campaigns",
    "Run campaigns",
    "Manage campaigns",
    5,
    "running",
    11,
    "paused"
  ),
  createData(
    "/templates",
    "templates",
    "Design layouts",
    "design and format your messages",
    3,
    "used",
    2,
    "saved"
  ),
  createData(
    "/integrations",
    "integrations",
    "App integrations",
    "Connect your productivity apps",
    5,
    "running",
    1,
    "issue"
  ),
];

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h5" className={classes.title}>
        Dashboard
      </Typography>
      <Grid container spacing={4}>
        {rows.map((row) => (
          <Grid item xs={6}>
            <DashCard
              link={row.link}
              subtitle={row.subtitle}
              title={row.title}
              explain={row.explain}
              stat1count={row.stat1count}
              stat1name={row.stat1name}
              stat2count={row.stat2count}
              stat2name={row.stat2name}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
