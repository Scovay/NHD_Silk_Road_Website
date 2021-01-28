import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";

//App components
import Header from './Header';
import Home from './Home';
import Background from './Background';
import BuildUp from './BuildUp';
import mainEvents from './MainEvent';
import LongTermImpact from './LongTermImpacts';
import ShortTermImpact from './ShortTermImpacts'
import NotFound from './NotFound';
import Items from './Items.js';

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      
      <Switch>
        {/* Defines all of the routes */}
        <Route exact path = "/" component = {Home} />
        <Route exact path = "/background" component = {Background} />
        <Route exact path = "/buildUp" component = {BuildUp} />
        <Route exact path = "/mainEvent" component = {mainEvents} />
        <Route exact path = "/longTermImpact" component = {LongTermImpact} />
        <Route exact path = "/shortTermImpact" component = {ShortTermImpact} />
        <Route exact path = "/itemsTraded" component = {Items} /> 
        <Route component = {NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;