import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";
const { ApolloServer, gql } = require("apollo-server");

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
// const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
// server.listen().then(({ url }) => {
//   console.log(`🚀  Server ready at ${url}`);
//   console.log("hello");
// });

export function getApp() {
  return new ApolloServer({ typeDefs, resolvers });
}
