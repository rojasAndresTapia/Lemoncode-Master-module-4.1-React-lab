import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { LoginPage } from './login';
import { ListPage } from './list';
import { RickMortyPage } from './rickMorty';
import { DetailPage } from './detail';
import { CharacterPage } from './characterPage';

export const App = () => {
  const history = createBrowserHistory();
  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/'>
          <LoginPage />
        </Route>
        <Route path='/list'>
          <ListPage />
        </Route>
        <Route path='/detail/:id'>
          <DetailPage />
        </Route>
        <Route path='/rickMorty'>
          <RickMortyPage />
        </Route>
        <Route path='/characterPage/:id'>
          <CharacterPage />
        </Route>
      </Switch>
    </Router>
  );
};
