import { blue, red, green } from "@material-ui/core/colors";
import { createSlice } from "@reduxjs/toolkit";

const themeConfig = {
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: blue,
    secondary: red,
    success: green,
    error: red
  },
};

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
  },
});

export const { toggleThemeMode, swapThemeColors } = settings.actions;

export const isDarkMode = (state) => state.settings.darkMode;

export const getTheme = (state) => state.settings.theme;

export default settings.reducer;
