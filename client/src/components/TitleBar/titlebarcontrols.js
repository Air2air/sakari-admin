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
Doodle
    </Box>
  );
};

export default TitleBarControls;
