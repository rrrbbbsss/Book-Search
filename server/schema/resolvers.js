const { User } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );
        return userData;
      }
      throw new AuthenticationError("Not logged in");
    },
  },
  Mutation: {
    login: async (parent, { input: { email, password } }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
    addUser: async (parent, { input }) => {
      const user = await User.create(input);
      if (!user) {
        throw new GraphQLError("Something is wrong!", {
          extension: {
            code: "INTERNAL_SERVER_ERROR",
            http: { status: 500 },
          },
        });
      }
      const token = signToken(user);
      return { token, user };
    },
    saveBook: async (parent, { input }) => {},
  },
};

module.exports = resolvers;
