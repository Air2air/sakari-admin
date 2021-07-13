

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TitleBar from "../../components/TitleBar";

const useStyles = makeStyles({
  root: {
    width: "100%",
    fontSize: "14px",
  },
  heading: {
    fontSize: "15px",
    fontWeight: 600,
    width: 180,
  },
  messages: {
    fontSize: "14px",
    fontWeight: 400,
    width: 120,
  },
  created: {
    fontSize: "14px",
    fontWeight: 400,
    width: 180,
  },
});

function createData(name, messages, created) {
  return { name, messages, created };
}

const rows = [
  createData("Lorem Ipsum", "63 messages", "12/29/2020"),
  createData("Ipsum Lorem", "21 messages", "6/19/2021"),
  createData("Lorem Ipsum", "2 messages", "5/2/2020"),
  createData("Ipsum Lorem", "1 messages", "7/16/2021"),
  createData("Lorem Ipsum", "53 messages", "12/15/2020"),
  createData("Ipsum Lorem", "65 messages", "6/14/2020"),
];

export default function Contacts() {
  const pageIcon = "Templates";
  const pageTitle = "Templates";
  const classes = useStyles();

  const stat1count = 1;
  const stat1status = "success";
  const stat1name = "running";

  const stat2count = 3;
  const stat2status = "default";
  const stat2name = "saved";

  const newButtonLink = "/new";
  const newButtonText = "New Template";

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
      </div>
    </>
  );
}
