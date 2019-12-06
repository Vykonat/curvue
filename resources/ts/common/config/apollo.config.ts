import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { ApolloLink } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { AUTH_TOKEN, GQL_URL } from './app.config';

const token: HTMLMetaElement | null = document.head.querySelector(
  "meta[name='csrf-token']"
);

const httpLink = createHttpLink({
  uri: 'https://communityrails.ca/graphql',
  headers: {
    'X-CSRF-TOKEN': (<HTMLMetaElement>token).content,
    'X-Requested-With': 'XMLHttpRequest',
    Accept: 'application/json'
  }
});

const addAuthHeader = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem(AUTH_TOKEN);
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : null
    }
  });
  return (<any>forward)(operation);
});

// Create the apollo client
export const apolloClient = new ApolloClient({
  link: addAuthHeader.concat(httpLink),
  cache: new InMemoryCache(),
  connectToDevTools: true
});
