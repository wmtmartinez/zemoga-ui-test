import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { VotesComponent } from './pages/votes/Votes';
import { PastTrials } from './pages/pastTrials';
import { HowItWorksComponent } from './pages/how-it-works';
import { LoginComponent } from './pages/login';

function App() {

  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ VotesComponent }></Route>
            <Route exact path="/pasttrials" component={ PastTrials }></Route>
            <Route exact path="/howitworks" component={ HowItWorksComponent }></Route>
            <Route exact path="/login" component={ LoginComponent }></Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;