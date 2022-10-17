const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Auth {
    token: ID!
    user: User
  }
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }
  type Book {
    bookId: ID
    authors: [String]
    description: String
    image: String
    link: String
    title: String
  }
  input loginInput {
    email: String!
    password: String!
  }
  input addUserInput {
    username: String!
    email: String!
    password: String!
  }
  input saveBookInput {
    bookId: ID!
    authors: [String]!
    description: String!
    image: String!
    link: String!
    title: String!
  }
  input removeBookInput {
    bookId: ID!
  }
  type Query {
    me: User
  }
  type Mutation {
    login(input: loginInput!): Auth
    addUser(input: addUserInput!): Auth
    saveBook(input: saveBookInput!): User
    removeBook(input: removeBookInput!): User
  }
`;

module.exports = typeDefs;
