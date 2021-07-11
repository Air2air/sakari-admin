import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import PersonIcon from "@material-ui/icons/Person";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  toolbarRoot: {
    paddingRight: 24,
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  title: {
    flexGrow: 1,
  },
  Logo: {
    flexGrow: 1,
  },
});

const Header = (props) => {
  const { classes, handleToggleDrawer } = props;
  return (
    <AppBar position="fixed" elevation={0}>
      <Toolbar
        color="indigo"
        disableGutters={true}
        classes={{ root: classes.toolbarRoot }}
      >
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={handleToggleDrawer}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <img
          className={classes.Logo}
          src="./../../../images/sakari_logo_w.svg"
          height="36"
          alt="Sakari"
        />
        <IconButton color="inherit">
          <PersonIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Header);
