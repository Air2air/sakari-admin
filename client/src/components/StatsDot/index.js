import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { red, blue, orange, grey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 110,
    padding: 0,
    flexDirection: "column",
  },
  statsdiv: {
    height: 32,
    padding: 0,
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 5,
  },
  circle: {
    height: 32,
    width: 32,
    borderRadius: 50,
    fontWeight: "bold",
    fontSize: 16,
    color: "#FFF",
    marginRight: 10,
  },
  legend: {
    textTransform: "uppercase",
  },
}));

export default function StatsDot(props) {
  let dotColor = "";
  const classes = useStyles();

  if (props.status === "default") {
    dotColor = grey[400];
  } else if (props.status === "success") {
    dotColor = grey[400];
  } else if (props.status === "warning") {
    dotColor = orange[400];
  } else if (props.status === "danger") {
    dotColor = red[400];
  } else {
    dotColor = blue[400];
  }

  return (
    <>
      <Box display="flex" alignItems="center" className={classes.statsdiv}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          className={classes.circle}
          style={{ backgroundColor: `${dotColor}` }}
        >
          {props.statCount}
        </Box>
        <span className={classes.legend} style={{ color: `${dotColor}` }}>{props.statName}</span>
      </Box>
    </>
  );
}
