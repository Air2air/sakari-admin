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

const rows = [
  { name: "Lorem Ipsum", messages: "63 messages", created: "12/29/2020" },
  { name: "Ipsum Lorem", messages: "21 messages", created: "6/19/2021" },
  { name: "Lorem Ipsum", messages: "2 messages", created: "5/2/2020" },
  { name: "Ipsum Lorem", messages: "1 messages", created: "7/16/2021" },
  { name: "Lorem Ipsum", messages: "53 messages", created: "12/15/2020" },
  { name: "Ipsum Lorem", messages: "65 messages", created: "6/14/2020" },
];

rows.push("mango");

export default function Campaigns() {
  const pageIcon = "Campaigns";
  const pageTitle = "Campaigns";
  const classes = useStyles();

  const stat1count = 2;
  const stat1status = "default";
  const stat1name = "active";

  const stat2count = 0;
  const stat2status = "danger";
  const stat2name = "problems";

  const newButtonLink = "/new";
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
