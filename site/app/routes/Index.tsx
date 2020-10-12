import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '@app/components/Header';
import Home from './Home';
import Component from './Component';

export default function Index() {
  return (
    <div className="tdesign-wrapper tdesign-page-doc">
      <Header />
      <div className="tdesign-body">
        <div className="tdesign-container tdesign-container--fullpage tdesign-doc-container">
          <Switch>
            <Route path="/components" component={Component} />
            <Route path="/" exact component={Home} />
          </Switch>
        </div>
      </div>
    </div>
  );
}
