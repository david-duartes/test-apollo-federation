import fetch from "node-fetch";

const apiUrl = "https://jsonplaceholder.typicode.com";

const resolvers = {
  Post: {
    async user(post) {
      return { __typename: "User", id: post.userId };
    },
  },

  Query: {
    async posts() {
      return await fetch(`${apiUrl}/posts`)
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error));
    },
    async getPostId(_, { id }) {
      return await fetch(`${apiUrl}/posts/${id}`)
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error));
    },
  },
};

export default resolvers;
