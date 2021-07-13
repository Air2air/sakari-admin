import { blue, red, green } from "@material-ui/core/colors";
import { createSlice } from "@reduxjs/toolkit";

const primaryColor = blue;
const secondaryColor = green;
const successColor = green;

const themeConfig = {
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: blue,
    secondary: red,
    success: green,
    error: red,

    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
};

// All the following keys are optional.
// We try our best to provide a great default value.
const defaultTheme = themeConfig;

export const settings = createSlice({
  name: "settings",
  initialState: {
    theme: defaultTheme,
    darkMode: false,
    colorsSwapped: false,
  },
  reducers: {
    toggleThemeMode: (state, action) => {
      if (action.payload) {
        //darknode set
        state.darkMode = true;
        state.theme = {
          ...themeConfig,
          palette: {
            ...themeConfig.palette,
            primary: state.theme.palette.primary,
            secondary: state.theme.palette.secondary,
            success: state.theme.palette.success,
            type: "dark",
          },
        };
      } else {
        state.darkMode = false;
        state.theme = {
          ...themeConfig,
          palette: {
            ...themeConfig.palette,
            primary: state.theme.palette.primary,
            secondary: state.theme.palette.secondary,
            success: state.theme.palette.success,
          },
        };
      }

      state.value = action.payload;
    },
    swapThemeColors: (state, action) => {
      if (action.payload) {
        // colorsSwapped
        state.colorsSwapped = true;
        state.theme = {
          ...themeConfig,
          palette: {
            ...state.theme.palette,
            primary: secondaryColor,
            secondary: primaryColor,
            success: successColor,
          },
        };
      } else {
        state.colorsSwapped = false;
        state.theme = {
          ...themeConfig,
          palette: {
            ...state.theme.palette,
            primary: primaryColor,
            secondary: secondaryColor,
            success: successColor,
          },
        };
      }
    },
  },
});

export const { toggleThemeMode, swapThemeColors } = settings.actions;

export const isDarkMode = (state) => state.settings.darkMode;

export const isColorSwaped = (state) => state.settings.colorsSwapped;

export const getTheme = (state) => state.settings.theme;

export default settings.reducer;
