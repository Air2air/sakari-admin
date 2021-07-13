import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IntegrationsCard from "../../components/IntegrationsCard";
import Typography from "@material-ui/core/Typography";
import TitleBar from "../../components/TitleBar";
import Button from "@material-ui/core/Button";
import Collapse from "@material-ui/core/Collapse";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";

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


const rows = [
  { name: "Lorem Ipsum", messages: "63 somethings", created: "12/29/2020" },
  { name: "Ipsum Lorem", messages: "21 somethings", created: "6/19/2021" },
  { name: "Lorem Ipsum", messages: "2 somethings", created: "5/2/2020" },
  { name: "Ipsum Lorem", messages: "1 somethings", created: "7/16/2021" },
  { name: "Lorem Ipsum", messages: "53 somethings", created: "12/15/2020" },
  { name: "Ipsum Lorem", messages: "65 somethings", created: "6/14/2020" },
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

  const newButtonText = "New Integration";

  /* --- Collapse window ---*/
const [checked, setChecked] = React.useState(false);

const handleChange = () => {
  setChecked((prev) => !prev);
};

  return (
    <>
      <div className={classes.root}>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="baseline"
          className={classes.root}
        >
          <TitleBar
            pageTitle={pageTitle}
            pageIcon={pageIcon}
            stat1count={stat1count}
            stat1status={stat1status}
            stat1name={stat1name}
            stat2count={stat2count}
            stat2status={stat2status}
            stat2name={stat2name}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => handleChange()}
          >
            {newButtonText}
          </Button>
        </Box>
        <Collapse in={checked}><Paper>Doodle</Paper></Collapse>
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
      {rows.map((row) => (
          <Accordion key={`${row.created}_${row.messages}`}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id={row.created}
            >
              <Typography className={classes.heading}>{row.name}</Typography>
              <Typography className={classes.messages}>
                {row.messages}
              </Typography>
              <Typography className={classes.created}>{row.created}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Edit/delete section down here.</Typography>
            </AccordionDetails>
          </Accordion>
        ))}

    </>
  );
}

