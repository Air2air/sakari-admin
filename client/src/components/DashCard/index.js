import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import StatsDot from "../StatsDot";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    padding: 30,
  },
  text_section: {
    padding: 0,
    marginRight: 12,
  },
  card_content: {
    padding: 0,
  },
  subtitle: {
    fontSize: 12,
    textTransform: "uppercase",
    color: "#42a5f5",
  },
  title: {
    fontSize: 14,
  },
});

export default function DashCard(props) {
  const classes = useStyles();
  return (
    <Link to={props.link} style={{ textDecoration: "none" }}>
      <Card className={classes.root} elevation={1}>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          className={classes.card_content}
        >
          <CardContent className={classes.text_section}>
            <Typography className={classes.subtitle} gutterBottom>
              {props.subtitle}
            </Typography>
            <Typography variant="h6">{props.title}</Typography>
            <Typography color="textSecondary">{props.explain}</Typography>
          </CardContent>

          <Box display="flex" flexDirection="column" >
            <StatsDot
              status={props.stat1status}
              statCount={props.stat1count}
              statName={props.stat1name}
            />
            <StatsDot
              status={props.stat2status}
              statCount={props.stat2count}
              statName={props.stat2name}
            />
          </Box>
        </Box>
      </Card>
    </Link>
  );
}
