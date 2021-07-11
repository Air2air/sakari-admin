import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Switch from "@material-ui/core/Switch";
import PaletteIcon from "@material-ui/icons/Palette";
import CompareArrowsIcon from "@material-ui/icons/CompareArrows";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import {
  toggleThemeMode,
  swapThemeColors,
  isDarkMode,
  isColorSwaped,
} from "./settingsReducer";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  title: {
    marginBottom: 30,
  },
});

export default function Settings() {
  const classes = useStyles();

  const darkMode = useSelector(isDarkMode);
  const colorSwaped = useSelector(isColorSwaped);

  const dispatch = useDispatch();

  return (
    <div>
      <Typography variant="h5" className={classes.title}>
        Settings
      </Typography>
      <Card>
        <CardContent>
          <List>
            <ListItem>
              <ListItemIcon>
                <PaletteIcon />
              </ListItemIcon>
              <ListItemText primary="Dark Mode" />
              <ListItemSecondaryAction>
                <Switch
                  onChange={(e, checked) => dispatch(toggleThemeMode(checked))}
                  checked={darkMode}
                />
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CompareArrowsIcon />
              </ListItemIcon>
              <ListItemText primary="Swap Colors" />
              <ListItemSecondaryAction>
                <Switch
                  onChange={(e, checked) => dispatch(swapThemeColors(checked))}
                  checked={colorSwaped}
                />
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </div>
  );
}
