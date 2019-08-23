import { Layout } from "antd";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./AntOverrides.scss";
import "./App.scss";
import PageNotFound from "./Common/PageNotFound/PageNotFound";
// components to be routed
import Home from "./Home/Home";
import ResumePage from "./Resume/ResumePage";

import { isBrowser } from "react-device-detect";
import HomePhone from "./Home/Home.phone";

const { Content } = Layout;

interface IAppProps {
  location: {
    pathname: string;
    hash: string;
  };
  history: History;
}

class App extends React.Component<IAppProps, {}> {
  constructor(props: IAppProps) {
    super(props);
  }
  public render(): JSX.Element {
    return (
      <Layout className="AppLayout">
        <Content className="AppLayout__Content">
          <Switch>
            <Route
              exact
              path="/"
              render={(): JSX.Element =>
                isBrowser ? (
                  <Home isMobile={false} />
                ) : (
                  <HomePhone isMobile={true} />
                )
              }
            />
            <Route
              path="/pagenotfound"
              render={(): JSX.Element => <PageNotFound />}
            />
            <Route path="/resume" render={(): JSX.Element => <ResumePage />} />
            <Redirect from="/**" to="/pagenotfound" />
          </Switch>
        </Content>
      </Layout>
    );
  }
}

export default App;
