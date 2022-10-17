import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($input: loginInput!) {
    login(input: $input) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const ADD_USER = gql`
  mutation addUser($input: addUserInput!) {
    addUser(input: $input) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const SAVE_BOOK = gql`
  mutation saveBook($input: saveBookInput!) {
    saveBook(input: $input) {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
      }
    }
  }
`;
export const REMOVE_BOOK = gql`
  mutation removeBook($input: removeBookInput!) {
    removeBook(input: $input) {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
      }
    }
  }
`;
