import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";

//App components
import Header from './Header';
import Home from './Home';
import About from './Background';
import Items from './BuildUp';
import People from './MainEvent'
import NotFound from './NotFound';


const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      
      <Switch>
        {/* Defines all of the routes */}
        <Route exact path = "/" component = {Home} />
        <Route path = "/background" component = {About} />
        <Route exact path = "/buildUp" component = {Items} />
        <Route exact path = "/mainEvent" component = {People} />
        <Route component = {NotFound} />
      </Switch>
    </div>    
  </BrowserRouter>
);

export default App;