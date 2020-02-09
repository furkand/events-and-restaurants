import React from 'react';
import './styles/App.scss';
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
