import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNav from './shared/components/Nav/MainNav';
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';


const App = () => {
  return (
    <Router>
      <MainNav/>
      <main>
        <Switch>
          <Route path="/" exact><Users/></Route>
          <Route path="/:userId/places" exact><UserPlaces/></Route>
          <Route path="/places/new" exact><NewPlace/></Route>
          <Route path="/places/:placeId" exact><UpdatePlace/></Route>
          <Redirect to="/"/>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
