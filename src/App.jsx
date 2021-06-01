import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import locale from "antd/lib/locale/pt_BR";
import { ConfigProvider } from "antd";
import GlobalStyle from "./globalStyle";
import { Login, Register } from "./pages";
import { Base } from "./components";
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
              <Base>
                <Route exact path="/nada"  />
              </Base>
            </Switch>
          </BrowserRouter>
        </ConfigProvider>
    </>
  );
}

export default App;
