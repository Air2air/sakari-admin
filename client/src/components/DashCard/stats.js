import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    padding: 30,
  },
  circle: {
    height: 70,
    width: 70,
    borderRadius: 100,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function DashCardStats(props) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.circle}>1</div>
    </>
  );
}
