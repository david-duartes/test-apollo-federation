import fetch from "node-fetch";

const apiUrl = "https://jsonplaceholder.typicode.com";

const resolvers = {
  User: {
    async __resolveReference(ref) {
      return await fetch(`${apiUrl}/users/${ref.id}`)
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error));
    },
  },
  Query: {
    async users() {
      var response = await fetch(`${apiUrl}/users`)
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error));

      return response.map(function (user) {
        return {
          id: user.id,
          name: user.name,
          userName: user.username,
          email: user.email,
        };
      });
    },
  },
};

export default resolvers;
