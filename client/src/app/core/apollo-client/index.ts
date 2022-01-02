import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

const { REACT_APP_GRAPHQL_SERVER_URL } = process.env;

const httpLink = createHttpLink({
  uri: REACT_APP_GRAPHQL_SERVER_URL,
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default apolloClient;
