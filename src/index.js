import React from 'react';
import { Switch, NativeRouter, Route } from 'react-router-native';

import Game from './Game';
import Score from './Score';

export default () => (
  <NativeRouter>
    <Switch>
      <Route exact path="/" component={Game} />
      <Route exact path="/Score" component={Score} />
    </Switch>
  </NativeRouter>
);
