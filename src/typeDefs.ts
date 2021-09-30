// Construct a schema, using GraphQL schema language
import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    getBook(id: Int!): Book
    books: [Book]
  }
  type Mutation {
    addBook(
      title: String!
      author: String!
      imageurl: String
      isbn: String
      read: Boolean
    ): Boolean!
    updateBook(
      id: Int!
      title: String
      author: String
      imageurl: String
      isbn: String
      read: Boolean
    ): Boolean!
    deleteBook(id: Int!): Boolean!
  }

  type Book {
    id: Int!
    title: String!
    author: String!
    imageurl: String
    isbn: String
    read: Boolean!
  }
  type Author {
    id: Int!
    first_name: String!
    last_name: String
  }
  type Service {
    id: Int!
    name: String!
    mainurl: String
    baseurl: String
  }
`;
