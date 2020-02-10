import React from 'react';
import './styles/App.scss';
import HomePage from "./pages/home-page"
import {Switch,BrowserRouter, Route} from "react-router-dom"
import gql from "graphql-tag"
import {useQuery} from "@apollo/react-hooks"


function App() {
  const query = useQuery(FETCH_EVENTS_QUERY)
  if(query.data){
    console.log(query.data)
  }else{
    console.log(query.error)
  }
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
const FETCH_EVENTS_QUERY = gql`
  {
  Media(isAdult:true){
    description
    coverImage {
      extraLarge
      large
      medium
      color
    }
  }
}

`
export default App;
