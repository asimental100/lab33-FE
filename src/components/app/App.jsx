/* eslint-disable max-len */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from '../header/Header';
import { CandidatePage } from '../../pages/CandidatePage';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={CandidatePage} />
      </Switch>
    </Router>
  );
}
