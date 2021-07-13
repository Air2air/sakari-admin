import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import TitleBar from "../../components/TitleBar";
import Typography from "@material-ui/core/Typography";
import { Box, Paper } from "@material-ui/core";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(6),
  },
  title: {
    marginBottom: 30,
  },
}));

function getSteps() {
  return ["Contacts", "Message", "Review and Send"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return "Select Contacts. Have not built this yet.";
    case 1:
      return "Compose message. Have not built this yet.";
    case 2:
      return "Preview message.";
    default:
      return "Unknown step";
  }
}

export default function Messages() {
  const pageIcon = "Messages";
  const pageTitle = "Messages";
  const classes = useStyles();

  const [activeStep, setActiveStep] = React.useState(0);

  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const stat1count = 3;
  const stat1status = "success";
  const stat1name = "saved";

  const stat2count = 32;
  const stat2status = "default";
  const stat2name = "sent";

  const newButtonLink = "";
  const newButtonText = "New Message";

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

        <Paper
          display="flex"
          flexDirection="column"
          alignItems="center"
          elevation={1}
        >
          <Stepper activeStep={activeStep} elevation={0}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>

          <Box
            display="flex"
            flexDirection="column"
            paddingTop={2}
            paddingRight={8}
            paddingBottom={4}
            paddingLeft={8}
            elevation={0}
          >
            {activeStep === steps.length ? (
              <>

                  <Typography className={classes.instructions}>
                    Confirmation before sending
                  </Typography>

                  {/* <TextField
                    fullWidth
                    id="outlined-multiline-static"
                    label="Multiline"
                    multiline
                    rows={4}
                    defaultValue="Default Value"
                    variant="outlined"
                  /> */}

                <Box display="flex" alignItems="center" justifyContent="end">
                  <Button
                    variant="contained"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    size="large"
                    className={classes.button}
                    startIcon={<NavigateBeforeIcon />}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleReset}
                    size="large"
                    className={classes.button}
                    endIcon={<NavigateNextIcon />}
                  >
                    Send Message
                  </Button>
                </Box>
              </>
            ) : (
              <>
                <Typography className={classes.instructions}>
                  {getStepContent(activeStep)}
                </Typography>

                <Box display="flex" alignItems="center" justifyContent="end">
                  <Button
                    variant="contained"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    size="large"
                    className={classes.button}
                    startIcon={<NavigateBeforeIcon />}
                  >
                    Back
                  </Button>

                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    size="large"
                    className={classes.button}
                    endIcon={<NavigateNextIcon />}
                  >
                    {activeStep === steps.length - 1 ? "Send" : "Next"}
                  </Button>
                </Box>
              </>
            )}
          </Box>
        </Paper>
      </div>
    </>
  );
}
