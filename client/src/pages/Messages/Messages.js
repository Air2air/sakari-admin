import React, { useState } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import Recipient from "./recipient";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
  },
}));

export default function Messages() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const [selectedTab, setSelectedTab] = useState(0);
  const tabCount = 5;

  return (
    <div className={classes.root}>
      <Typography variant="h5" m={3} style={{ marginTop: 30, marginBottom: 30 }}>
        Send a new message
      </Typography>

      <Paper className={classes.root} elevation={0} m={4}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          centered
          aria-label="full width tabs example"
          activeTab={selectedTab.toString()}
        >
          <Tab label="Recipients" {...a11yProps(0)} />
          <Tab label="Message" {...a11yProps(1)} />
          <Tab label="Template" {...a11yProps(2)} />
          <Tab label="Preview" {...a11yProps(3)} />
          <Tab label="Send" {...a11yProps(4)} />
        </Tabs>

        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <Recipient />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={4} dir={theme.direction}>
            Item Three
          </TabPanel>
        </SwipeableViews>

        <Button
          onClick={() =>
            setSelectedTab((selectedTab + tabCount - 1) % tabCount)
          }
        >
          Back
        </Button>
        <Button onClick={() => setSelectedTab((selectedTab + 1) % tabCount)}>
          Next
        </Button>

        {selectedTab}
      </Paper>
    </div>
  );
}
