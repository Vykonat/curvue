import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

let token: HTMLMetaElement | null = document.head.querySelector("meta[name='csrf-token']");

// HTTP connection to the API
const httpLink = createHttpLink({
    // You should use an absolute URL here
    uri: 'http://localhost:8000/graphql',
    headers: {
        'X-CSRF-TOKEN': (<HTMLMetaElement>token).content,
        'X-Requested-With': 'XMLHttpRequest',
        'Accept': 'application/json'
    }
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
export const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
})