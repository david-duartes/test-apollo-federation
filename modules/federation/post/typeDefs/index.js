const { gql } = require("apollo-server");
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  type Query {
    posts: [Post]
    getPostId(id: ID!): Post
  }

  # This "Book" type defines the queryable fields for every book in our data source.
  type Post @key(fields: "id") {
    id: ID!
    title: String
    body: String
    user: User
  }

  extend type User @key(fields: "id") {
    id: ID! @external
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
`;

export default typeDefs;
