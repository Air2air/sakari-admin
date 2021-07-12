import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import StatsDot from "../StatsDot";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

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
  company_thumb: {
    height: 60,
    width: 60,
    borderRadius: 5,
  },
});

export default function IntegrationsCard(props) {
  const classes = useStyles();
  return (
    <Link to={props.link} style={{ textDecoration: "none" }}>
      <Card className={classes.root} m={2} elevation={0}>
        <Box className={classes.card_content}>
          <Typography className={classes.subtitle} gutterBottom>
            {props.subtitle}
          </Typography>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <CardContent className={classes.text_section}>
              <img
                className={classes.company_thumb}
                src={ `./../../../images/company/${props.thumb}` }
                height="36"
                alt="Sakari"
              />
            </CardContent>
            <Box display="flex" flexDirection="column" className={classes.root}>
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
        </Box>
      </Card>
    </Link>
  );
}
