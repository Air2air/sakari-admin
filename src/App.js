import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

import Home from "./pages/Home";
import Messages from "./pages/Messages/";
import Contacts from "./pages/Contacts";
import Campaigns from "./pages/Campaigns";
import Templates from "./pages/Templates";
import Integrations from "./pages/Integrations";
import Settings from "./pages/Settings";

import MainLayout from "./layouts/MainLayout";
import EmptyLayout from "./layouts/EmptyLayout";

import { getTheme } from "./pages/Settings/settingsReducer";

const NotFound = () => {
  return <div>NotFound</div>;
};

const MainRoute = ({ component: Component, ...rest }) => {
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
            <MainRoute exact path="/" component={Home}/>
            <MainRoute path="/messages" component={Messages} />
            <MainRoute path="/contacts" component={Contacts} />
            <MainRoute path="/campaigns" component={Campaigns} />
            <MainRoute path="/templates" component={Templates} />
            <MainRoute path="/integrations" component={Integrations} />
            <MainRoute path="/settings" component={Settings} />
            <EmptyRoute component={NotFound} />
          </Switch>
        </Router>
      </div>
    </MuiThemeProvider>
  );
}
