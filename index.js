import { ApolloServer } from "apollo-server";
import { ApolloGateway } from "@apollo/gateway";

const port = 4000;

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const gateway = new ApolloGateway({
  serviceList: [{ name: "user", url: "http://localhost:4001" }],
});

const server = new ApolloServer({ gateway, subscriptions: false });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
