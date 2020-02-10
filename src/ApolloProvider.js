import React from "react" 
 import App from "./App"
 import ApolloClient from "apollo-client"
 import { InMemoryCache} from "apollo-cache-inmemory"
 import {createHttpLink} from "apollo-link-http"
 import {ApolloProvider} from "@apollo/react-hooks"
 import {setContext} from 'apollo-link-context'

 const httplink = createHttpLink({
     uri: "https://api.yelp.com/v3/graphql" 
 })

 const authLink = setContext( ()=> {
    const token = "ZIQXoaTQBCriLZ69oUbbM9EKJiFvInXgauFPdPoB8ssLcZnX0mQmg9fUM7zqHrHvW3QxCU6ztQAwJxXIHuMvbHjv2XgWuZ5PfKG2jNPA94mnG3KC8E4kvA8cOBxAXnYx"
   return {
       headers: {
           Authorization :`Bearer ${token}`
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