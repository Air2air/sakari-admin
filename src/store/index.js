import { configureStore } from '@reduxjs/toolkit';

import counter from "../pages/Home/counterReducer"
import settings from "../pages/Settings/settingsReducer";


export default configureStore({
  reducer: {
    settings: settings,
    counter: counter,
  },
});
