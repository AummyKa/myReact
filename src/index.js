import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./js/components/Layout";

import Archives from "./js/pages/Archives";
import Featured from "./js/pages/Featured";
import Settings from "./js/pages/Settings";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history = {hashHistory}>
    <Route path= "/" component = {Layout}>
      <IndexRoute component = {Featured}></IndexRoute>
        <Route path="archives" component={Archives}></Route>
        <Route path="settings" component={Settings}></Route>
      </Route>
  </Router>
  ,app);
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
