import { ApolloServer } from "apollo-server";
import { buildFederatedSchema } from "@apollo/federation";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";

const port = 4001;

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }]),
});

// The `listen` method launches a web server.
server.listen({ port }).then(({ url }) => {
  console.log(`🚀  Server user ready at ${url}`);
});
