import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import locale from "antd/lib/locale/pt_BR";
import { ConfigProvider } from "antd";
import GlobalStyle from "./globalStyle";
import { Login, Register } from "./pages";
import "./App.css";

function App() {
  return (
    <>
        <GlobalStyle />
        <ConfigProvider locale={locale}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/cadastro" component={Register} />
            </Switch>
          </BrowserRouter>
        </ConfigProvider>
    </>
  );
}

export default App;
