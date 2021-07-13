import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

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
    color: "#42a5f5",
    textTransform: "uppercase",
  },
}));

export default function DashCardStats(props) {
  const classes = useStyles();
  return (
    <>
      <Box display="flex" flexDirection="column" className={classes.root}>
        <Box
          display="flex"
          alignItems="center"
          flexDirection="row"
          className={classes.statsdiv}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            className={classes.circle}
            style={{ backgroundColor: `${props.stat1bg}` }}
          >
            {props.stat1count}
          </Box>
          <span className={classes.legend}>{props.stat1name}</span>
        </Box>
        {props.stat2count > 0 ? (
          <Box
            display="flex"
            alignItems="center"
            flexDirection="row"
            className={classes.statsdiv}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              className={classes.circle}
              style={{ backgroundColor: `${props.stat2bg}` }}
            >
              {props.stat2count}
            </Box>
            <span className={classes.legend}>{props.stat2name}</span>
          </Box>
        ) : (
          ""
        )}
      </Box>
    </>
  );
}
