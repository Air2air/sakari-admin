import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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
import AddIcon from '@material-ui/icons/Add';
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

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
  paper: {
    padding: 24,
    marginBottom: 30,
  },
  new_button: {
    width: "190px",
  },
  button_box: {
    justifyContent: "flex-end",
  },
});


const rows = [
  { name: "Lorem Ipsum", messages: "63 somethings", created: "12/29/2020" },
  { name: "Ipsum Lorem", messages: "21 somethings", created: "6/19/2021" },
  { name: "Lorem Ipsum", messages: "2 somethings", created: "5/2/2020" },
  { name: "Ipsum Lorem", messages: "1 somethings", created: "7/16/2021" },
  { name: "Lorem Ipsum", messages: "53 somethings", created: "12/15/2020" },
  { name: "Ipsum Lorem", messages: "65 somethings", created: "6/14/2020" },
];

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


  const newButtonText = "New Campaign";

  /* --- Collapse window ---*/
  const [opened, setOpened] = React.useState(false);

  const handleChange = () => {
    setOpened((prev) => !prev);
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
          {!opened ? (
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleChange()}
              endIcon={<AddIcon />}
              className={classes.new_button}
            >
              {newButtonText}
            </Button>
          ) : (
            <Button
              variant="contained"
              color="default"
              onClick={() => handleChange()}
              endIcon={<ExpandLessIcon />}
              className={classes.new_button}
            >
              Cancel
            </Button>
          )}
        </Box>
        <Collapse in={opened}>
                    <Paper className={classes.paper}>
            Forms go in here
            <Box
              display="flex"
              alignItems="center"
              className={classes.button_box}
            >
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleChange()}
              >
                Submit
              </Button>
            </Box>
          </Paper>
        </Collapse>

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
