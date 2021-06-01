import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import locale from "antd/lib/locale/pt_BR";
import { ConfigProvider } from "antd";
import GlobalStyle from "./globalStyle";
import { Login, Register /*, Feed, Profile, Post*/ } from "./pages";
import { Base } from "./components";
import "./App.css";

function App() {
  return (
    <>
        <GlobalStyle />
        <ConfigProvider locale={locale}>
          <BrowserRouter>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/cadastro" component={Register} />
              <Base>
                {/*<Route exact path="/" component={ Feed } />
                <Route path="/perfil" component={ Profile } />
  <Route path="/post" component={ Post } />*/}
              </Base>
            </Switch>
          </BrowserRouter>
        </ConfigProvider>
    </>
  );
}

export default App;
