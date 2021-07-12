import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 30,
  },
}));

const TitleBarControls = (props) => {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      className={classes.root}
    >
      {props.pageIcon === "Home" && ("Home stuff")}
      {props.pageIcon === "Messages" &&  "Home stuff"}
      {props.pageIcon === "Contacts" && "Home stuff"}
      {props.pageIcon === "Campaigns" && "Home stuff"}
      {props.pageIcon === "Templates" && "Home stuff"}
      {props.pageIcon === "Integrations" && "Home stuff"}
      {props.pageIcon === "Settings" && "Home stuff"}
      {props.pageIcon === "Alerts" && "Home stuff"}
    </Box>
  );
};

export default TitleBarControls;
