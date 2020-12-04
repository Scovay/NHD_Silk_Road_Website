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
import NotFound from './NotFound';


const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      
      <Switch>
        <Route exact path = "/" component = {Home} />
        <Route path = "/about" component = {About} />
        <Route exact path = "/goods" component = {Items} />
        <Route component = {NotFound} />
      </Switch>
    </div>    
  </BrowserRouter>
);

export default App;