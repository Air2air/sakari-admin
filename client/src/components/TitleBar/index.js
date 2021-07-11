import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import PersonIcon from "@material-ui/icons/Person";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 30,
  },
}));

const TitleBar = (props) => {
  const classes = useStyles();

  return (
    <Typography variant="h5" gutterBottom>
      {props.pageTitle}
    </Typography>
  );
};

export default TitleBar;
