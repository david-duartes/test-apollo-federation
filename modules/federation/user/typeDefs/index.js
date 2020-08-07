const { gql } = require("apollo-server");
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  type Query {
    users: [User]
  }

  # This "Book" type defines the queryable fields for every book in our data source.
  type User @key(fields: "id") {
    id: ID!
    name: String!
    userName: String!
    email: String!
  }
`;

export default typeDefs;
