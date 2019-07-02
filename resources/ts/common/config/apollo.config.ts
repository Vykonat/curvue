import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { AUTH_TOKEN } from "./app.config";

let token: HTMLMetaElement | null = document.head.querySelector("meta[name='csrf-token']");

// HTTP connection to the API
const httpLink = createHttpLink({
    // You should use an absolute URL here
    uri: 'http://localhost:8000/graphql',
    headers: {
        'Authorization': `Bearer ${localStorage.getItem( AUTH_TOKEN )}`,
        'X-CSRF-TOKEN': (<HTMLMetaElement>token).content,
        'X-Requested-With': 'XMLHttpRequest',
        'Accept': 'application/json'
    }
})

// Cache implementation
const cache = new InMemoryCache()

export const onLogin = async (apolloClient: any, token: string) => {
    if( typeof localStorage !== 'undefined' && token ) {
        localStorage.setItem( AUTH_TOKEN, token );
    }

    try {
        await apolloClient.resetStore();
    } catch( e ) {
        console.log( e )
    }
}

export const onLogout = async(apolloClient: any) => {
    if( typeof localStorage !== 'undefined' ) {
        localStorage.removeItem( AUTH_TOKEN )
    }

    try {
        await apolloClient.resetStore()
    } catch( e ) {
        console.log( e )
    }
}

// Create the apollo client
export const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
})