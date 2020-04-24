import React from "react";
import { Switch, NavLink, Route } from "react-router-dom";
import { Home } from "./Home";
import { Component } from "./Component";
import { Logo } from "@app/components/Logo";

export function Index() {

  return (
    <div className="tdesign-site-app-home">
      <header>
        <Logo />
        <span className="divider" />
        <NavLink
          className="nav-link"
          to="/spec"
          activeClassName="actived"
          id="header-spec"
        >
          设计规范
        </NavLink>
        <NavLink
          className="nav-link"
          to="/react"
          activeClassName="actived"
          id="header-component"
        >
          React 组件
        </NavLink>
      </header>
      <main>
        <Switch>
          <Route path="/spec">
            <div style={{ marginTop: 60, textAlign: 'center' }}>TODO：设计规范内容</div>
          </Route>
          <Route path="/react" component={Component} />
          <Route path="/" exact component={Home} />
        </Switch>
      </main>
    </div>
  );
}
