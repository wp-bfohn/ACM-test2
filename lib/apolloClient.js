import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "acmdemofohn1.wpengine.com/graphql",
  cache: new InMemoryCache(),
});
