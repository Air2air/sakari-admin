import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    padding: 30,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function DashCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root} m={2} elevation={0}>
      <CardContent>

        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >        {props.icon}
          {props.subtitle}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        {props.explain}
        </Typography>

      </CardContent>
    </Card>
  );
}
