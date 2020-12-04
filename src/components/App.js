import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";

//App components
import Header from './Header';
import Home from './Home';
import About from './About';
import Items from './Items';
import People from './People'
import NotFound from './NotFound';


const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      
      <Switch>
        {/* Defines all of the routes */}
        <Route exact path = "/" component = {Home} />
        <Route path = "/about" component = {About} />
        <Route exact path = "/goods" component = {Items} />
        <Route exact path = "/people" component = {People} />
        <Route component = {NotFound} />
      </Switch>
    </div>    
  </BrowserRouter>
);

export default App;