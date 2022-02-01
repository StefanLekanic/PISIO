import React from "react";
import "./App.css";
import Konferencija from "./pages/Konferencija";
import ApplicationHeader from "./components/ApplicationHeader";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Page } from "./components/BasicStyledComponents";
import styled from "styled-components";
import KonferencijaSesije from "./pages/KonferencijaSesije";

const AppContent = styled.div`
  display: flex;
  height: 100%;
`;

const App = () => {
  return (
    <BrowserRouter>
      <Page>
        <ApplicationHeader />
        <AppContent>
          <Switch>
            <Route exact path={"/konferencije"}>
              <Konferencija />
            </Route>
            <Route
              exact
              path="konferencije/:id/sesije"
              component={KonferencijaSesije}
            />
          </Switch>
        </AppContent>
      </Page>
    </BrowserRouter>
  );
};

export default App;
