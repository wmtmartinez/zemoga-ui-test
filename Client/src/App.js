import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { VotesComponent } from './pages/votes/Votes';
import { PastTrials } from './pages/pastTrials';
import { HowItWorksComponent } from './pages/how-it-works';
import { LoginComponent } from './pages/login/login';
import { SignUpComponent } from './pages/signup/signup';
import { UserContext } from './data/UserContext';

function App() {

  const [user, setUser ] = useState({username:null, token:null});

  useEffect(()=>{
    const storageData = localStorage.getItem('user-data');
    
    if(storageData) {
      const userData = JSON.parse(storageData);

      setUser({
        username: userData.username,
        token: userData.accessToken
      });
    }
  },[]);

  return (
    <React.Fragment>
      <UserContext.Provider value={ {user, setUser} }>
        <BrowserRouter>
          <Switch>
              <Route exact path="/" component={ VotesComponent }></Route>
              <Route exact path="/pasttrials" component={ PastTrials }></Route>
              <Route exact path="/howitworks" component={ HowItWorksComponent }></Route>
              <Route exact path="/login" component={ LoginComponent }></Route>
              <Route exact path="/signup" component={ SignUpComponent }></Route>
          </Switch>
        </BrowserRouter>
      </UserContext.Provider>
    </React.Fragment>
  );
}

export default App;