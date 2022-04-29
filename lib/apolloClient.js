import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://acmdemofohn1.wpengine.com/graphql",
  cache: new InMemoryCache(),
});
