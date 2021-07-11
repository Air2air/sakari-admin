import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import SendIcon from "@material-ui/icons/Send";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import GroupIcon from "@material-ui/icons/Group";
import MessageIcon from "@material-ui/icons/Message";
import DashCardStats from "./stats";

const determineIcon = (props) => {
  if (props.subtitle === "MESSAGES") {
    return <SendIcon />;
  } else if (props.subtitle === "CONTACTS") {
    return <GroupIcon />;
  } else if (props.subtitle === "CAMPAIGNS") {
    return <MessageIcon />;
  } else if (props.subtitle === "TEMPLATES") {
    return <DashboardIcon />;
  } else if (props.subtitle === "INTEGRATIONS") {
    return <AutorenewIcon />;
  }
};

const useStyles = makeStyles({
  root: {
    padding: 30,
    hover: {
      backgroundColor: "red",
    },
  },
  text_section: {
    padding: 0,
    marginRight: 12,
  },
  card_content: {
    padding: 0,
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
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        className={classes.card_content}
      >
        <CardContent className={classes.text_section}>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {determineIcon(props.subtitle)}
            {props.subtitle}
          </Typography>
          <Typography variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {props.explain}
          </Typography>
        </CardContent>
        <DashCardStats {...props} />
      </Box>
    </Card>
  );
}
