import React from 'react';
import './App.scss';
import HomePage from "./pages/home-page"
import {Switch,BrowserRouter, Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={HomePage}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
