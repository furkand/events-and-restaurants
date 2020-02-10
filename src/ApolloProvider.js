import React from "react" 
 import App from "./App"
 import ApolloClient from "apollo-client"
 import { InMemoryCache} from "apollo-cache-inmemory"
 import {createHttpLink} from "apollo-link-http"
 import {ApolloProvider} from "@apollo/react-hooks"
 import {setContext} from 'apollo-link-context'

 const httplink = createHttpLink({
     uri: "https://graphql.anilist.co" 
 })

 const authLink = setContext( ()=> {
   return {
       headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
       }
   }
})

 const client = new ApolloClient({
     link: authLink.concat(httplink),
     cache: new InMemoryCache()
 })


 export default (
     <ApolloProvider client= {client}>
         <App/>
     </ApolloProvider>
 );