import React from 'react';
import {Switch, Route} from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";
import ListBeers from "./Pages/ListBeers";
import SingleBeer from "./Pages/SingleBeer";
import RandomBeer from "./Pages/RandomBeer";
import NewBeer from "./Pages/NewBeer";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Beers" component={ListBeers}/>
        <Route exact path="/Beers/:toto" component={SingleBeer}/>
      </Switch>
    </div> 
  );
}

export default App;
