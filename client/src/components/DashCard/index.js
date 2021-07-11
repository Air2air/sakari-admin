import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import SendIcon from "@material-ui/icons/Send";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import GroupIcon from "@material-ui/icons/Group";
import ForumIcon from "@material-ui/icons/Forum";
import DashCardStats from "./stats";
import { Link } from "react-router-dom";

const determineIcon = (...props) => {
  if (props.subtitle === "MESSAGES") {
    return <SendIcon />;
  } else if (props.subtitle === "CONTACTS") {
    return <GroupIcon />;
  } else if (props.subtitle === "CAMPAIGNS") {
    return <ForumIcon />;
  } else if (props.subtitle === "TEMPLATES") {
    return <DashboardIcon />;
  } else if (props.subtitle === "INTEGRATIONS") {
    return <AccountTreeIcon />;
  }
};

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
        <Card className={classes.root} m={2} elevation={0}>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            className={classes.card_content}
          >
            <CardContent className={classes.text_section}>
              <Typography className={classes.subtitle} gutterBottom>
                {determineIcon(props.subtitle)}
                {props.subtitle}
              </Typography>
              <Typography variant="h6">{props.title}</Typography>
              <Typography color="textSecondary">{props.explain}</Typography>
            </CardContent>
            <DashCardStats {...props} />
          </Box>
        </Card>
      </Link>
  );
}
