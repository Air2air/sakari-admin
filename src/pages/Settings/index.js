import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Switch from "@material-ui/core/Switch";
import PaletteIcon from "@material-ui/icons/Palette";
import CompareArrowsIcon from "@material-ui/icons/CompareArrows";
import { useSelector, useDispatch } from "react-redux";
import TitleBar from "../../components/TitleBar";


import {
  toggleThemeMode,
  swapThemeColors,
  isDarkMode,
  isColorSwaped,
} from "./settingsReducer";


export default function Settings() {

  const pageIcon = "Settings"
  const pageTitle = "Settings"
  // const classes = useStyles();

  const darkMode = useSelector(isDarkMode);
  const colorSwaped = useSelector(isColorSwaped);

  const dispatch = useDispatch();

  return (
    <div>
      <TitleBar pageTitle={pageTitle}pageIcon={pageIcon}/>
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
