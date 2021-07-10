import { configureStore } from '@reduxjs/toolkit';

import counter from "../pages/Home/counterReducer"
import alerts from "../pages/Alerts/alertsReducer";
import settings from "../pages/Setting/settingsReducer";



export default configureStore({
  reducer: {
    alerts: alerts,
    settings: settings,
    counter: counter,
  },
});
