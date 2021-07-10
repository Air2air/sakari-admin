import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 300,
    width: "100%",
  },
  button: {
    position: "relative",
    height: 200,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 100,
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $buttonBackdrop": {
        opacity: 0.15,
      },
      "& $buttonMarked": {
        opacity: 0,
      },
      "& $buttonTitle": {
        border: "4px solid currentColor",
      },
    },
  },
  focusVisible: {},
  buttonButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  },
  buttonSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  },
  buttonBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  },
  buttonTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
      theme.spacing(1) + 6
    }px`,
  },
  buttonMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
}));

export default function ButtonBases(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonBase
        focusRipple
        key={props.title}
        className={classes.button}
        focusVisibleClassName={classes.focusVisible}
      >
        <span className={classes.buttonBackdrop} />
        <span className={classes.buttonButton}>
          <Typography
            component="span"
            variant="subtitle1"
            color="inherit"
            className={classes.buttonTitle}
          >
            {props.title}
            <span className={classes.buttonMarked} />
          </Typography>
        </span>
      </ButtonBase>
    </div>
  );
}
