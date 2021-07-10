import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

import Home from "./pages/Home/Home";
import Messages from "./pages/Messages/Messages";
import Alerts from "./pages/Alerts/Alerts";
import Setting from "./pages/Setting/Setting";

import MainLayout from "./layouts/MainLayout";
import EmptyLayout from "./layouts/EmptyLayout";

import { getTheme } from "./pages/Setting/settingsReducer";

const NotFound = () => {
  return <div>NotFound</div>;
};

const DashboardRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <MainLayout>
          <Component {...matchProps} />
        </MainLayout>
      )}
    />
  );
};

const EmptyRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <EmptyLayout>
          <Component {...matchProps} />
        </EmptyLayout>
      )}
    />
  );
};

export default function App() {
  const theTheme = useSelector(getTheme);

  return (
    <MuiThemeProvider theme={createMuiTheme(theTheme)}>
      <CssBaseline />
      <div style={{ height: "100vh" }}>
        <Router>
          <Switch>
            <DashboardRoute path="/dashboard" component={Home} />
            <DashboardRoute path="/alerts" component={Alerts} />
            <DashboardRoute path="/messages" component={Messages} />
            <DashboardRoute path="/setting" component={Setting} />
            <DashboardRoute exact path="/" component={Home} />
            <EmptyRoute component={NotFound} />
          </Switch>
        </Router>
      </div>
    </MuiThemeProvider>
  );
}
